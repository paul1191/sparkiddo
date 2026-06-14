// supabase/functions/create-razorpay-order/index.ts
// ─────────────────────────────────────────────────────────────────────────────
// Creates a Razorpay Subscription for sparkiddo Plus.
//
// Deploy:
//   supabase functions deploy create-razorpay-order
//
// Secrets required:
//   RAZORPAY_KEY_ID       rzp_live_...
//   RAZORPAY_KEY_SECRET   your secret key
//   SUPABASE_URL          https://cxpnedeqmtwufwmefpxc.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY
//
// Razorpay Docs: https://razorpay.com/docs/payments/subscriptions/
// ─────────────────────────────────────────────────────────────────────────────

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RAZORPAY_KEY_ID     = Deno.env.get('RAZORPAY_KEY_ID') ?? '';
const RAZORPAY_KEY_SECRET = Deno.env.get('RAZORPAY_KEY_SECRET') ?? '';
const RZP_BASE            = 'https://api.razorpay.com/v1';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

const corsHeaders = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Basic auth header for Razorpay API
function rzpAuth() {
  return 'Basic ' + btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // ── Auth ───────────────────────────────────────────────────────────────
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const { data: { user }, error: authError } =
      await supabase.auth.getUser(authHeader.replace('Bearer ', ''));
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // ── Parse body ─────────────────────────────────────────────────────────
    const { planId } = await req.json();
    // planId: 'monthly' | 'yearly'
    // These are Razorpay Plan IDs you create in the Razorpay Dashboard

    if (!planId) {
      return new Response(JSON.stringify({ error: 'planId is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // ── Check already Plus ─────────────────────────────────────────────────
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan, razorpay_customer_id')
      .eq('id', user.id)
      .single();

    if (profile?.plan === 'plus') {
      return new Response(JSON.stringify({ error: 'already_plus' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // ── Get or create Razorpay customer ────────────────────────────────────
    let customerId = profile?.razorpay_customer_id;

    if (!customerId) {
      const custRes = await fetch(`${RZP_BASE}/customers`, {
        method: 'POST',
        headers: {
          'Authorization': rzpAuth(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          notes: { supabase_user_id: user.id },
        }),
      });
      const cust = await custRes.json();
      customerId = cust.id;

      await supabase.from('profiles')
        .update({ razorpay_customer_id: customerId })
        .eq('id', user.id);
    }

    // ── Create Razorpay Subscription ───────────────────────────────────────
    const subRes = await fetch(`${RZP_BASE}/subscriptions`, {
      method: 'POST',
      headers: {
        'Authorization': rzpAuth(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan_id:       planId,           // Razorpay Plan ID from dashboard
        customer_id:   customerId,
        total_count:   120,              // Max billing cycles (10 years)
        quantity:      1,
        notes: {
          supabase_user_id: user.id,
          product:          'sparkiddo_plus',
        },
      }),
    });

    const sub = await subRes.json();

    if (sub.error) {
      throw new Error(sub.error.description || 'Razorpay subscription creation failed');
    }

    // Return subscription ID + Razorpay key (key_id is safe to expose)
    return new Response(
      JSON.stringify({
        subscriptionId: sub.id,
        razorpayKeyId:  RAZORPAY_KEY_ID,
        customerEmail:  user.email,
        userId:         user.id,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('[create-razorpay-order] Error:', err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
