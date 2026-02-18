# Supabase Setup Instructions

## Fix RLS (Row Level Security) Issue

If you're getting a `42501` error ("new row violates row-level security policy"), follow these steps:

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project: **zenyth-ai-site**
3. Go to **SQL Editor** in the left sidebar
4. Create a new SQL query and paste this:

```sql
-- Disable RLS for waitlist_users table to allow public inserts
ALTER TABLE public.waitlist_users DISABLE ROW LEVEL SECURITY;

-- Or if you want to keep RLS enabled, create policies:
-- ALTER TABLE public.waitlist_users ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow anonymous insert" ON public.waitlist_users
--   FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Allow anonymous select" ON public.waitlist_users
--   FOR SELECT USING (true);
```

5. Click **Run** button
6. The error should be fixed now!

## Verify the Setup

Run this curl command to test:

```bash
curl -X POST http://localhost:3001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

Should return: `{"status":"success"}`
