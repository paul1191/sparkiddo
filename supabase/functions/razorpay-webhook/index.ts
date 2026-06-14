// supabase/functions/razorpay-webhook/index.ts
// ─────────────────────────────────────────────────────────────────────────────
// Handles Razorpay webhook events to keep sparkiddo Plus subscriptions in sync.
//
// Deploy:
//   supabase functions deploy razorpay-webhook
//
// Secrets required:
//   RAZORPAY_WEBHOOK_SECRET   your webhook secret (set in Razorpay Dashboard)
//   SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY
//
// Razorpay Webhook URL (set in Dashboard → Settings → Webhooks):
//   https://cxpnedeqmtwufwmefpxc.supabase.co/functions/v1/razorpay-webhook
//
// Events to subscribe in Razorpay Dashboard:
//   subscription.activated
//   subscription.charged
//   subscription.cancelled
//   subscription.paused
//   subscription.halted     (payment failed repeatedly)
//   subscription.resumed
// ─────────────────────────────────────────────────────────────────────────────

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { createHmac }   from 'https://deno.land/std@0.177.0/node/crypto.ts';

const WEBHOOK_SECRET = Deno.env.get('RAZORPAY_WEBHOOK_SECRET') ?? '';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

Deno.serve(async (req) => {
  // ── Signature Verification ─────────────────────────────────────────────
  const body      = await req.text();
  const signature = req.headers.get('x-razorpay-signature') ?? '';

  const expectedSig = createHmac('sha256', WEBHOOK_SECRET)
    .update(body)
    .digest('hex');

  if (expectedSig !== signature) {
    console.error('[razorpay-webhook] Signature mismatch');
    return new Response('Invalid signature', { status: 400 });
  }

  let event: Record<string, unknown>;
  try {
    event = JSON.parse(body);
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const eventType = event.event as string;
  console.log('[razorpay-webhook] Event:', eventType);

  try {
    // All subscription events have the subscription in event.payload.subscription.entity
    const sub = (event.payload as Record<string, unknown>)
      ?.subscription as Record<string, unknown>
      ?? null;

    if (!sub) {
      console.log('[razorpay-webhook] No subscription payload, skipping');
      return new Response('OK');
    }

    const subId  = sub.id   as string;
    const notes  = sub.notes as Record<string, string> ?? {};
    const userId = notes.supabase_user_id ?? await getUserIdFromSubscription(subId);

    if (!userId) {
      console.error('[razorpay-webhook] Could not find userId for subscription', subId);
      return new Response('OK'); // Return 200 to prevent retries
    }

    switch (eventType) {

      // ✅ Subscription activated (first payment succeeded)
      case 'subscription.activated':
      case 'subscription.charged':      // Renewal payment succeeded
      case 'subscription.resumed': {    // Resumed after pause
        const endAt = sub.current_end as number | null;
        await setUserPlan(userId, 'plus', subId, endAt);
        console.log('[razorpay-webhook] ✅ Plan set to plus for:', userId);
        break;
      }

      // ❌ Subscription cancelled by user
      case 'subscription.cancelled': {
        // Keep plus until end of current period
        // On next charge attempt it will fail → halted → downgrade
        // OR downgrade immediately if preferred:
        await setUserPlan(userId, 'free', null, null);
        console.log('[razorpay-webhook] ❌ Subscription cancelled for:', userId);
        break;
      }

      // ⏸️ Subscription paused
      case 'subscription.paused': {
        // Keep Plus during pause — Razorpay pauses mean the merchant paused it
        // (this won't happen from user side normally)
        console.log('[razorpay-webhook] ⏸️ Subscription paused for:', userId);
        break;
      }

      // ❌ Subscription halted (payment failed after all retries)
      case 'subscription.halted': {
        await setUserPlan(userId, 'free', null, null);
        console.log('[razorpay-webhook] ❌ Subscription halted (payment failed), downgraded:', userId);
        break;
      }

      default:
        console.log('[razorpay-webhook] Unhandled event:', eventType);
    }

  } catch (err) {
    console.error('[razorpay-webhook] Handler error:', err);
    // Still return 200 to prevent Razorpay from retrying
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function getUserIdFromSubscription(subscriptionId: string): Promise<string | null> {
  const { data } = await supabase
    .from('profiles')
    .select('id')
    .eq('razorpay_subscription_id', subscriptionId)
    .single();
  return data?.id ?? null;
}

async function setUserPlan(
  userId:         string,
  plan:           'plus' | 'free',
  subscriptionId: string | null,
  periodEnd:      number | null,
) {
  const update: Record<string, unknown> = {
    plan,
    razorpay_subscription_id: subscriptionId,
    updated_at: new Date().toISOString(),
  };

  if (periodEnd !== null) {
    update.plan_expires_at = periodEnd
      ? new Date(periodEnd * 1000).toISOString()
      : null;
  }

  const { error } = await supabase
    .from('profiles')
    .update(update)
    .eq('id', userId);

  if (error) {
    console.error('[razorpay-webhook] setUserPlan error:', error.message);
    throw error;
  }
}
