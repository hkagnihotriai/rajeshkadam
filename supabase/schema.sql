-- Rajesh Kadam website — Supabase schema
-- Paste this into the Supabase SQL Editor (Dashboard > SQL Editor > New query) and run it.
--
-- All tables have Row Level Security enabled with no public policies, since
-- the app only ever talks to Supabase server-side using the service role key
-- (see src/lib/supabase.ts). There is no anon key in use, so RLS here is a
-- safety net, not a substitute for policies.

create extension if not exists pgcrypto;

create table if not exists workshop_enquiries (
  id uuid primary key default gen_random_uuid(),
  workshop_title text not null,
  name text not null,
  phone text not null,
  note text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists session_bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  note text,
  type text not null check (type in ('session', 'workshop_invite')),
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content_markdown text not null,
  excerpt text,
  cover_image_url text,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists blog_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references blog_posts(id) on delete cascade,
  author_name text,
  content text not null,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

alter table workshop_enquiries enable row level security;
alter table session_bookings enable row level security;
alter table blog_posts enable row level security;
alter table blog_comments enable row level security;
