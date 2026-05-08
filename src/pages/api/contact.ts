import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';

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

/** Security headers to prevent common web vulnerabilities */
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

/** Allowed origins for CORS (portfolio domain only) */
const ALLOWED_ORIGINS = [
  "http://localhost:4321",
  "http://localhost:3000",
  "https://shameel.barchy.online",
] as const;

// ============================================================
// SECURITY UTILITIES
// ============================================================

/**
 * In-memory rate limiter using IP-based tracking.
 * Note: In production, use Redis or a service like Unkey for distributed rate limiting.
 */
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

/**
 * Get client IP from request headers.
 * Handles proxied requests (Vercel, Cloudflare, etc.)
 */
function getClientIP(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP.trim();
  }
  // Fallback for local development
  return "127.0.0.1";
}

/**
 * Check if request is rate-limited for the given IP.
 * Returns { allowed: boolean, remaining: number, resetAt: Date }
 */
function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetAt: Date;
} {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // No existing record or window expired - create new record
  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetAt: new Date(now + RATE_LIMIT_WINDOW_MS),
    };
  }

  // Increment count within window
  record.count += 1;
  rateLimitStore.set(ip, record);

  return {
    allowed: record.count <= RATE_LIMIT_MAX_REQUESTS,
    remaining: Math.max(0, RATE_LIMIT_MAX_REQUESTS - record.count),
    resetAt: new Date(record.resetAt),
  };
}

/**
 * Sanitize input by removing control characters and normalizing whitespace.
 * Prevents injection attacks and ensures consistent data storage.
 */
function sanitizeInput(input: string): string {
  return input
    .replace(/[\x00-\x1F\x7F]/g, "") // Remove control characters
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();
}

/**
 * Validate email format using RFC 5322 compliant regex.
 */
function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

/**
 * Create a response with security headers and optional CORS.
 */
function createSecureResponse(
  body: string,
  status: number,
  request?: Request
): Response {
  const headers = new Headers(SECURITY_HEADERS);

  // Add CORS headers if origin is allowed
  if (request) {
    const origin = request.headers.get("origin");
    if (origin && ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed))) {
      headers.set("Access-Control-Allow-Origin", origin);
      headers.set("Access-Control-Allow-Credentials", "true");
    }
  }

  return new Response(body, { status, headers });
}

/**
 * Create a JSON error response with security headers.
 */
function createErrorResponse(
  message: string,
  status: number,
  request?: Request
): Response {
  return createSecureResponse(JSON.stringify({ error: message }), status, request);
}

/**
 * Validate PocketBase URL uses HTTPS (required for secure communication).
 */
function validatePocketBaseURL(): void {
  const pbUrl = import.meta.env.POCKETBASE_URL;
  if (!pbUrl?.startsWith("https://")) {
    throw new Error("POCKETBASE_URL must use HTTPS");
  }
}

// ============================================================
// CLEANUP: Remove expired rate limit entries periodically
// ============================================================
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetAt) {
      rateLimitStore.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW_MS);

// ============================================================
// API HANDLERS
// ============================================================

/** Handle OPTIONS preflight requests for CORS */
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

/** Handle POST contact form submissions */
export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Verify PocketBase uses secure connection
    validatePocketBaseURL();

    // 2. Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // 3. Check rate limit
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      const retryAfter = Math.ceil(
        (rateLimit.resetAt.getTime() - Date.now()) / 1000
      );
      const headers = new Headers(SECURITY_HEADERS);
      headers.set("Retry-After", String(retryAfter));
      headers.set(
        "X-RateLimit-Limit",
        String(RATE_LIMIT_MAX_REQUESTS)
      );
      headers.set("X-RateLimit-Remaining", "0");
      headers.set("X-RateLimit-Reset", rateLimit.resetAt.toISOString());

      return new Response(
        JSON.stringify({
          error: "Too many requests. Please try again later.",
          retryAfter,
        }),
        { status: 429, headers }
      );
    }

    // 4. Parse request body
    let data: Record<string, unknown>;
    try {
      data = await request.json();
    } catch {
      return createErrorResponse("Invalid JSON body", 400, request);
    }

    // 5. Validate required fields exist
    if (!data.name || !data.email || !data.message) {
      return createErrorResponse("Missing required fields", 400, request);
    }

    // 6. Sanitize and validate input lengths
    const sanitizedData = {
      name: sanitizeInput(String(data.name)),
      email: sanitizeInput(String(data.email)).toLowerCase(),
      message: sanitizeInput(String(data.message)),
    };

    if (sanitizedData.name.length > MAX_LENGTHS.name) {
      return createErrorResponse(
        `Name must be ${MAX_LENGTHS.name} characters or less`,
        400,
        request
      );
    }
    if (sanitizedData.email.length > MAX_LENGTHS.email) {
      return createErrorResponse(
        `Email must be ${MAX_LENGTHS.email} characters or less`,
        400,
        request
      );
    }
    if (sanitizedData.message.length > MAX_LENGTHS.message) {
      return createErrorResponse(
        `Message must be ${MAX_LENGTHS.message} characters or less`,
        400,
        request
      );
    }

    // 7. Validate email format
    if (!isValidEmail(sanitizedData.email)) {
      return createErrorResponse("Invalid email format", 400, request);
    }

    // 8. Submit to PocketBase
    const pb = new PocketBase(import.meta.env.POCKETBASE_URL);
    await pb.collection("messages").create(sanitizedData);

    // 9. Return success with rate limit info
    const headers = new Headers(SECURITY_HEADERS);
    headers.set("X-RateLimit-Remaining", String(rateLimit.remaining));
    headers.set("X-RateLimit-Reset", rateLimit.resetAt.toISOString());

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers,
    });
  } catch (error) {
    // 10. Safe error logging without exposing internal details
    console.error("Error submitting form:", {
      timestamp: new Date().toISOString(),
      errorType: error instanceof Error ? error.constructor.name : "Unknown",
      message:
        error instanceof Error && !error.message.includes("POCKETBASE_URL")
          ? error.message
          : undefined,
    });

    // Return generic error to client
    return createErrorResponse(
      "Failed to submit message",
      500,
      request
    );
  }
};
