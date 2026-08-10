/**
 * Best-effort in-memory rate limit (per warm serverless instance).
 * Not a substitute for an edge-level limiter (e.g. Upstash Ratelimit)
 * but stops naive scripted bursts against a single warm function.
 */
function createRateLimiter(windowMs: number, maxRequests: number) {
  const hits = new Map<string, number[]>();

  return function isLimited(key: string): boolean {
    const now = Date.now();
    const timestamps = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    timestamps.push(now);
    hits.set(key, timestamps);

    if (hits.size > 5000) {
      for (const [k, v] of hits) {
        if (v.every((t) => now - t >= windowMs)) hits.delete(k);
      }
    }

    return timestamps.length > maxRequests;
  };
}

// Formulare (Kontakt, Studio-Check-Lead, ...): eng begrenzt.
export const isRateLimited = createRateLimiter(60_000, 5);

// Anonyme Funnel-Tracking-Events: ein vollständiger Studio-Check-Durchlauf
// feuert bereits 5 Events, daher großzügigerer, separater Bucket.
export const isEventRateLimited = createRateLimiter(60_000, 30);

// Chat-Widget: großzügiger als Formulare (echter Dialog mit mehreren
// Nachrichten pro Minute ist normal), aber eng genug, um Spam/Skript-Bursts
// und unnötige Anthropic-API-Kosten einzudämmen.
export const isChatRateLimited = createRateLimiter(60_000, 15);

export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email) && email.length <= 255;
}
