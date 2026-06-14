-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.profiles (
  id uuid NOT NULL,
  display_name text,
  email text,
  plan text DEFAULT 'free'::text,
  pin text,
  created_at timestamp with time zone DEFAULT now(),
  razorpay_customer_id text,
  razorpay_subscription_id text,
  plan_expires_at timestamp with time zone,
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);
CREATE TABLE public.child_profiles (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  parent_id uuid,
  name text NOT NULL,
  avatar text DEFAULT '🦁'::text,
  xp integer DEFAULT 0,
  belt text DEFAULT 'White'::text,
  streak integer DEFAULT 0,
  last_played date,
  created_at timestamp with time zone DEFAULT now(),
  age_group text DEFAULT '6-8'::text,
  CONSTRAINT child_profiles_pkey PRIMARY KEY (id),
  CONSTRAINT child_profiles_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.profiles(id)
);
CREATE TABLE public.game_sessions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  child_id uuid,
  game_slug text NOT NULL,
  game_category text,
  xp_earned integer DEFAULT 0,
  score integer,
  played_at timestamp with time zone DEFAULT now(),
  scenario_id text,
  choice_outcome text,
  time_to_decide numeric,
  CONSTRAINT game_sessions_pkey PRIMARY KEY (id),
  CONSTRAINT game_sessions_child_id_fkey FOREIGN KEY (child_id) REFERENCES public.child_profiles(id)
);
CREATE TABLE public.daily_usage (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  child_id uuid,
  game_slug text NOT NULL,
  usage_date date NOT NULL DEFAULT CURRENT_DATE,
  count integer DEFAULT 1,
  CONSTRAINT daily_usage_pkey PRIMARY KEY (id),
  CONSTRAINT daily_usage_child_id_fkey FOREIGN KEY (child_id) REFERENCES public.child_profiles(id)
);