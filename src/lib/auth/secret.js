export const SESSION_COOKIE = "heaven_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

export function getAuthSecretKey() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("AUTH_SECRET must be at least 32 characters in production");
    }
    return new TextEncoder().encode("dev-only-heaven-secret-min-32-chars");
  }
  return new TextEncoder().encode(secret);
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  };
}
