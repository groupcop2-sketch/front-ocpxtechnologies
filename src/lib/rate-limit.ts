type RateLimitResult = {
  success: boolean;
  remaining: number;
};

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

function prune(now: number) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) {
      buckets.delete(key);
    }
  }
}

/**
 * Rate limit en memoria. Suficiente para un único instancia.
 * En Vercel serverless el estado no se comparte entre isolates;
 * TODO: mover a Redis/Upstash cuando el volumen lo requiera.
 */
export function rateLimit(key: string): RateLimitResult {
  const now = Date.now();
  prune(now);

  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { success: true, remaining: MAX_REQUESTS - 1 };
  }

  if (current.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  current.count += 1;
  return { success: true, remaining: MAX_REQUESTS - current.count };
}

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const [first] = forwarded.split(",");
    if (first) {
      return first.trim();
    }
  }

  return headers.get("x-real-ip") ?? "unknown";
}
