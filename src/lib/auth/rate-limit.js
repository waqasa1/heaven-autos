const buckets = new Map();

export function rateLimit(key, { maxAttempts = 10, windowMs = 15 * 60 * 1000 } = {}) {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || now - current.startedAt > windowMs) {
    buckets.set(key, { startedAt: now, count: 1 });
    return { allowed: true };
  }
  current.count += 1;
  return { allowed: current.count <= maxAttempts };
}

export function getClientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "local"
  );
}
