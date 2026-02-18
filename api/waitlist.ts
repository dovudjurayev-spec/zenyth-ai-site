import { createClient } from "@supabase/supabase-js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const RATE_LIMIT_WINDOW_MS = 5000;
const rateLimitByIp = new Map<string, number>();

type ApiRequest = {
  method?: string;
  headers?: Record<string, string | string[] | undefined>;
  body?: unknown;
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

const getClientIp = (request: ApiRequest) => {
  const xForwardedFor = request.headers?.["x-forwarded-for"];
  const forwarded = Array.isArray(xForwardedFor) ? xForwardedFor[0] : xForwardedFor;

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const xRealIp = request.headers?.["x-real-ip"];
  return Array.isArray(xRealIp) ? xRealIp[0] : xRealIp || "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const lastRequestAt = rateLimitByIp.get(ip);

  if (lastRequestAt && now - lastRequestAt < RATE_LIMIT_WINDOW_MS) {
    return true;
  }

  rateLimitByIp.set(ip, now);

  if (rateLimitByIp.size > 5000) {
    for (const [key, value] of rateLimitByIp.entries()) {
      if (now - value > RATE_LIMIT_WINDOW_MS * 2) {
        rateLimitByIp.delete(key);
      }
    }
  }

  return false;
};

const parseBody = (body: unknown): Record<string, unknown> => {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    return JSON.parse(body) as Record<string, unknown>;
  }

  return body as Record<string, unknown>;
};

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ status: "method_not_allowed" });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return response.status(429).json({ status: "rate_limited" });
  }

  let payload: Record<string, unknown>;
  try {
    payload = parseBody(request.body);
  } catch {
    return response.status(400).json({ status: "invalid_email" });
  }

  const rawEmail = typeof payload.email === "string" ? payload.email : "";
  const email = rawEmail.trim().toLowerCase();

  if (!EMAIL_REGEX.test(email)) {
    return response.status(400).json({ status: "invalid_email" });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("[waitlist] Missing Supabase environment variables.");
    return response.status(500).json({ status: "server_error" });
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  try {
    const { data: existingUser, error: lookupError } = await supabase
      .from("waitlist_users")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (lookupError) {
      console.error("[waitlist] Supabase lookup error:", lookupError);
      return response.status(500).json({ status: "server_error" });
    }

    if (existingUser) {
      return response.status(409).json({ status: "already_registered" });
    }

    const { error: insertError } = await supabase
      .from("waitlist_users")
      .insert([{ email, status: "pending" }]);

    if (insertError) {
      console.error("[waitlist] Supabase insert error:", insertError);

      if (insertError.code === "23505") {
        return response.status(409).json({ status: "already_registered" });
      }

      return response.status(500).json({ status: "server_error" });
    }

    return response.status(200).json({ status: "success" });
  } catch (error) {
    console.error("[waitlist] Unhandled server error:", error);
    return response.status(500).json({ status: "server_error" });
  }
}
