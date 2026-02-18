create table if not exists public.waitlist_users (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  status text not null default 'pending',
  created_at timestamp with time zone not null default now(),
  confirmed_at timestamp with time zone null
);

create unique index if not exists waitlist_users_email_unique_idx
  on public.waitlist_users (email);
-- Disable RLS to allow public access
alter table public.waitlist_users disable row level security;

-- Alternative: if you want RLS enabled, create a policy for anonymous inserts
-- alter table public.waitlist_users enable row level security;
-- create policy "Allow anonymous insert" on public.waitlist_users
--   for insert with check (true);
-- create policy "Allow anonymous select" on public.waitlist_users
--   for select using (true);