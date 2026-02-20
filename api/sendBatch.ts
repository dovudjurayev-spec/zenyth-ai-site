import { createClient } from "@supabase/supabase-js";

type ApiRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

const parseBody = (body: unknown) => {
  if (!body) return {};
  if (typeof body === "string") return JSON.parse(body);
  return body as Record<string, unknown>;
};

const getServerSupabase = () => {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase environment variables (SUPABASE_URL / SERVICE_ROLE_KEY or ANON_KEY).");
  }

  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
};

const RESEND_API = "https://api.resend.com/emails";

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ status: "method_not_allowed" });
  }

  const { batchSize = 50, status = "pending", subject = "Hello from Resend", html, dryRun = false } = parseBody(request.body);

  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM;

  if (!resendKey || !fromEmail) {
    console.error("[sendBatch] Missing RESEND_API_KEY or RESEND_FROM env vars.");
    return response.status(500).json({ status: "missing_resend_config" });
  }

  let supabase;
  try {
    supabase = getServerSupabase();
  } catch (err) {
    console.error("[sendBatch] Supabase config error:", err);
    return response.status(500).json({ status: "missing_supabase_config" });
  }

  try {
    const limit = Number(batchSize) || 50;
    const { data, error } = await supabase.from("waitlist_users").select("id,email").eq("status", status).limit(limit);

    if (error) {
      console.error("[sendBatch] Supabase select error:", error);
      return response.status(500).json({ status: "db_error" });
    }

    if (!data || data.length === 0) {
      return response.status(200).json({ status: "no_recipients" });
    }

    const results: Array<{ id: string | number; email: string; ok: boolean; error?: string }> = [];

    for (const row of data as Array<{ id: string | number; email: string }>) {
      const to = row.email;

      if (dryRun) {
        results.push({ id: row.id, email: to, ok: true });
        continue;
      }

      try {
        const body = {
          from: fromEmail,
          to: to,
          subject: String(subject),
          html: String(html || `<p>Hi — this is a bulk message.</p>`)
        };

        const res = await fetch(RESEND_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`
          },
          body: JSON.stringify(body)
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("[sendBatch] Resend error for", to, res.status, text);
          results.push({ id: row.id, email: to, ok: false, error: `resend_${res.status}` });
          continue;
        }

        // mark emailed
        const { error: updateError } = await supabase.from("waitlist_users").update({ status: "emailed" }).eq("id", row.id);
        if (updateError) {
          console.error("[sendBatch] Failed to update status for", row.id, updateError);
        }

        results.push({ id: row.id, email: to, ok: true });
      } catch (err: any) {
        console.error("[sendBatch] Send error for", to, err?.message || err);
        results.push({ id: row.id, email: to, ok: false, error: String(err?.message || err) });
      }
    }

    return response.status(200).json({ status: "complete", results });
  } catch (err) {
    console.error("[sendBatch] Unhandled error:", err);
    return response.status(500).json({ status: "server_error" });
  }
}
