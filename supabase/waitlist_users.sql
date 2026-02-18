create table if not exists public.waitlist_users (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  status text not null default 'pending',
  created_at timestamp with time zone not null default now(),
  confirmed_at timestamp with time zone null
);

create unique index if not exists waitlist_users_email_unique_idx
  on public.waitlist_users (email);
