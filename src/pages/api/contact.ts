import type { APIRoute } from "astro";

// ============================================================
// SECURITY CONSTANTS
// ============================================================

/** Input length limits to prevent payload abuse */
const MAX_LENGTHS = {
  name: 100,
  email: 254,
  message: 5000,
} as const;

/** RFC 5322-compliant email regex */
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/** Security headers */
const SECURITY_HEADERS = {
  "Content-Type": "application/json",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
} as const;

/** Rate limiting: 5 requests per IP per 15 minutes */
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

/** Allowed origins for CORS */
const ALLOWED_ORIGINS = [
  "http://localhost:4321",
  "http://localhost:3000",
  "https://shameel.barchy.online",
  "https://barchy.online",
] as const;

const TURNSTILE_ACTION = "contact";
const TURNSTILE_HOSTNAMES = new Set(
  (import.meta.env.TURNSTILE_HOSTNAMES ?? "")
    .split(",")
    .map((h) => h.trim())
    .filter(Boolean),
);

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientIP(request: Request): string {
  const cfIP = request.headers.get("cf-connecting-ip");
  if (cfIP) return cfIP.trim();
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIP = request.headers.get("x-real-ip");
  if (realIP) return realIP.trim();
  return "127.0.0.1";
}

function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetAt: Date;
} {
  const now = Date.now();
  for (const [storedIp, entry] of rateLimitStore.entries()) {
    if (now > entry.resetAt) rateLimitStore.delete(storedIp);
  }
  const record = rateLimitStore.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetAt: new Date(now + RATE_LIMIT_WINDOW_MS),
    };
  }
  record.count += 1;
  rateLimitStore.set(ip, record);
  return {
    allowed: record.count <= RATE_LIMIT_MAX_REQUESTS,
    remaining: Math.max(0, RATE_LIMIT_MAX_REQUESTS - record.count),
    resetAt: new Date(record.resetAt),
  };
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[\x00-\x1F\x7F]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

function createSecureResponse(
  body: string,
  status: number,
  request?: Request,
): Response {
  const headers = new Headers(SECURITY_HEADERS);
  if (request) {
    const origin = request.headers.get("origin");
    if (
      origin &&
      ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed))
    ) {
      headers.set("Access-Control-Allow-Origin", origin);
      headers.set("Access-Control-Allow-Credentials", "true");
    }
  }
  return new Response(body, { status, headers });
}

function createErrorResponse(
  message: string,
  status: number,
  request?: Request,
): Response {
  return createSecureResponse(
    JSON.stringify({ error: message }),
    status,
    request,
  );
}

function getResendConfig() {
  const env = import.meta.env as Record<string, string | undefined>;
  const apiKey = env.RESEND_API_KEY;
  const from = env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>";
  const to = env.RESEND_TO ?? "muhammadshameelks@gmail.com";
  return { apiKey, from, to };
}

// ============================================================
// HANDLERS
// ============================================================

export const OPTIONS: APIRoute = ({ request }) => {
  const origin = request.headers.get("origin");
  const headers = new Headers(SECURITY_HEADERS);
  if (origin && ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed))) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
  }
  return new Response(null, { status: 204, headers });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      const retryAfter = Math.ceil(
        (rateLimit.resetAt.getTime() - Date.now()) / 1000,
      );
      const headers = new Headers(SECURITY_HEADERS);
      headers.set("Retry-After", String(retryAfter));
      headers.set("X-RateLimit-Limit", String(RATE_LIMIT_MAX_REQUESTS));
      headers.set("X-RateLimit-Remaining", "0");
      headers.set("X-RateLimit-Reset", rateLimit.resetAt.toISOString());
      return new Response(
        JSON.stringify({
          error: "Too many requests. Please try again later.",
          retryAfter,
        }),
        { status: 429, headers },
      );
    }

    let data: Record<string, unknown>;
    try {
      data = await request.json();
    } catch {
      return createErrorResponse("Invalid JSON body", 400, request);
    }

    // Honeypot — if filled, silently succeed (don't tip spam bots)
    const honeypot = String(
      (data as Record<string, unknown>)._honeypot ?? data.website ?? "",
    ).trim();
    if (honeypot.length > 0) {
      const headers = new Headers(SECURITY_HEADERS);
      headers.set("X-RateLimit-Remaining", String(rateLimit.remaining));
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers,
      });
    }

    if (!data.name || !data.email || !data.message) {
      return createErrorResponse("Missing required fields", 400, request);
    }

    // Turnstile siteverify
    const turnstileToken = String(
      (data as Record<string, unknown>)["cf-turnstile-response"] ?? "",
    ).trim();
    if (
      typeof turnstileToken !== "string" ||
      turnstileToken.length === 0 ||
      turnstileToken.length > 2048 ||
      TURNSTILE_HOSTNAMES.size === 0
    ) {
      console.error("Turnstile reject [pre-siteverify]", {
        tokenLen: turnstileToken.length,
        hostnames: [...TURNSTILE_HOSTNAMES],
      });
      return createErrorResponse("forbidden", 403, request);
    }

    let turnstileResult;
    try {
      const r = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          signal: AbortSignal.timeout(10_000),
          body: new URLSearchParams({
            secret: import.meta.env.TURNSTILE_SECRET ?? "",
            response: turnstileToken,
            remoteip: clientIP,
          }),
        },
      );
      if (!r.ok) throw new Error(`siteverify ${r.status}`);
      turnstileResult = await r.json();
    } catch (err) {
      console.error("Turnstile reject [siteverify fetch]", {
        msg: err instanceof Error ? err.message : String(err),
      });
      return createErrorResponse("forbidden", 403, request);
    }
    if (
      !turnstileResult.success ||
      turnstileResult.action !== TURNSTILE_ACTION ||
      !TURNSTILE_HOSTNAMES.has(turnstileResult.hostname)
    ) {
      console.error("Turnstile reject [siteverify result]", {
        success: turnstileResult.success,
        action: turnstileResult.action,
        hostname: turnstileResult.hostname,
        errorCodes: turnstileResult["error-codes"],
      });
      return createErrorResponse("forbidden", 403, request);
    }

    const sanitizedData = {
      name: sanitizeInput(String(data.name)),
      email: sanitizeInput(String(data.email)).toLowerCase(),
      message: sanitizeInput(String(data.message)),
    };

    if (
      sanitizedData.name.length === 0 ||
      sanitizedData.name.length > MAX_LENGTHS.name
    ) {
      return createErrorResponse(
        `Name must be 1-${MAX_LENGTHS.name} characters`,
        400,
        request,
      );
    }
    if (sanitizedData.email.length > MAX_LENGTHS.email) {
      return createErrorResponse(
        `Email must be ${MAX_LENGTHS.email} characters or less`,
        400,
        request,
      );
    }
    if (
      sanitizedData.message.length === 0 ||
      sanitizedData.message.length > MAX_LENGTHS.message
    ) {
      return createErrorResponse(
        `Message must be 1-${MAX_LENGTHS.message} characters`,
        400,
        request,
      );
    }
    if (!isValidEmail(sanitizedData.email)) {
      return createErrorResponse("Invalid email format", 400, request);
    }

    const { apiKey, from, to } = getResendConfig();
    if (!apiKey) {
      console.error(
        "Contact form: RESEND_API_KEY not set — falling back to error with mailto hint",
      );
      return createErrorResponse(
        "Email service not configured. Please email directly via the address on the contact card.",
        503,
        request,
      );
    }

    // Escape HTML in user content for email body
    const esc = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    const html = `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="color: #E8613C; margin-bottom: 8px;">New hire inquiry from portfolio</h2>
        <p style="color: #737373; font-size: 14px; margin-top: 0;">via shameel.barchy.online — reply directly to the sender.</p>
        <hr style="border: none; border-top: 1px solid #ECEAE6; margin: 20px 0;" />
        <table style="width: 100%; font-size: 14px; line-height: 1.6;">
          <tr><td style="color:#737373; width: 80px;">Name</td><td><strong>${esc(sanitizedData.name)}</strong></td></tr>
          <tr><td style="color:#737373;">Email</td><td><a href="mailto:${esc(sanitizedData.email)}">${esc(sanitizedData.email)}</a></td></tr>
          <tr><td style="color:#737373;">IP</td><td style="color:#b5b5b5; font-size: 12px;">${esc(clientIP)} (rate ${rateLimit.remaining} left)</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #FDFCFA; border: 1px solid #ECEAE6; border-radius: 12px; white-space: pre-wrap; font-size: 14px; line-height: 1.7;">${esc(sanitizedData.message)}</div>
        <p style="color: #b5b5b5; font-size: 12px; margin-top: 20px;">Sent at ${new Date().toISOString()} — reply within 12 hours.</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: sanitizedData.email,
        subject: `Hire inquiry: ${sanitizedData.name} via portfolio`,
        html,
        text: `New hire inquiry\nName: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nIP: ${clientIP}\n\n${sanitizedData.message}\n\n— shameel.barchy.online`,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("Resend error:", res.status, body.slice(0, 500));
      return createErrorResponse(
        "Failed to send message. Please email directly.",
        502,
        request,
      );
    }

    const headers = new Headers(SECURITY_HEADERS);
    headers.set("X-RateLimit-Remaining", String(rateLimit.remaining));
    headers.set("X-RateLimit-Reset", rateLimit.resetAt.toISOString());
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Contact form error:", {
      ts: new Date().toISOString(),
      msg: msg.slice(0, 500),
    });
    return createErrorResponse("Failed to submit message", 500, request);
  }
};
