import PocketBase from 'pocketbase';

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  message: 5e3
};
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const SECURITY_HEADERS = {
  "Content-Type": "application/json",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
};
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1e3;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ALLOWED_ORIGINS = [
  "http://localhost:4321",
  "http://localhost:3000",
  "https://shameel.barchy.online"
];
const rateLimitStore = /* @__PURE__ */ new Map();
function getClientIP(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP.trim();
  }
  return "127.0.0.1";
}
function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS
    });
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetAt: new Date(now + RATE_LIMIT_WINDOW_MS)
    };
  }
  record.count += 1;
  rateLimitStore.set(ip, record);
  return {
    allowed: record.count <= RATE_LIMIT_MAX_REQUESTS,
    remaining: Math.max(0, RATE_LIMIT_MAX_REQUESTS - record.count),
    resetAt: new Date(record.resetAt)
  };
}
function sanitizeInput(input) {
  return input.replace(/[\x00-\x1F\x7F]/g, "").replace(/\s+/g, " ").trim();
}
function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}
function createSecureResponse(body, status, request) {
  const headers = new Headers(SECURITY_HEADERS);
  if (request) {
    const origin = request.headers.get("origin");
    if (origin && ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed))) {
      headers.set("Access-Control-Allow-Origin", origin);
      headers.set("Access-Control-Allow-Credentials", "true");
    }
  }
  return new Response(body, { status, headers });
}
function createErrorResponse(message, status, request) {
  return createSecureResponse(JSON.stringify({ error: message }), status, request);
}
function validatePocketBaseURL() {
  const pbUrl = "https://pb.barchy.online";
  if (!pbUrl.startsWith("https://")) {
    throw new Error("POCKETBASE_URL must use HTTPS");
  }
  return pbUrl;
}
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetAt) {
      rateLimitStore.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW_MS);
const OPTIONS = ({ request }) => {
  const origin = request.headers.get("origin");
  const headers = new Headers(SECURITY_HEADERS);
  if (origin && ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed))) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
  }
  return new Response(null, { status: 204, headers });
};
const POST = async ({ request }) => {
  try {
    const pbUrl = validatePocketBaseURL();
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      const retryAfter = Math.ceil(
        (rateLimit.resetAt.getTime() - Date.now()) / 1e3
      );
      const headers2 = new Headers(SECURITY_HEADERS);
      headers2.set("Retry-After", String(retryAfter));
      headers2.set(
        "X-RateLimit-Limit",
        String(RATE_LIMIT_MAX_REQUESTS)
      );
      headers2.set("X-RateLimit-Remaining", "0");
      headers2.set("X-RateLimit-Reset", rateLimit.resetAt.toISOString());
      return new Response(
        JSON.stringify({
          error: "Too many requests. Please try again later.",
          retryAfter
        }),
        { status: 429, headers: headers2 }
      );
    }
    let data;
    try {
      data = await request.json();
    } catch {
      return createErrorResponse("Invalid JSON body", 400, request);
    }
    if (!data.name || !data.email || !data.message) {
      return createErrorResponse("Missing required fields", 400, request);
    }
    const sanitizedData = {
      name: sanitizeInput(String(data.name)),
      email: sanitizeInput(String(data.email)).toLowerCase(),
      message: sanitizeInput(String(data.message))
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
    if (!isValidEmail(sanitizedData.email)) {
      return createErrorResponse("Invalid email format", 400, request);
    }
    const pb = new PocketBase(pbUrl);
    await pb.collection("messages").create(sanitizedData);
    const headers = new Headers(SECURITY_HEADERS);
    headers.set("X-RateLimit-Remaining", String(rateLimit.remaining));
    headers.set("X-RateLimit-Reset", rateLimit.resetAt.toISOString());
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Contact form error:", {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      errorType: error instanceof Error ? error.constructor.name : "Unknown",
      message: errorMessage
    });
    return createErrorResponse(
      "Failed to submit message",
      500,
      request
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
