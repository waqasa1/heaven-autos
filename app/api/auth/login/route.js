import { normalizeEmail, verifyPassword } from "@/lib/auth/password";
import { getClientIp, rateLimit } from "@/lib/auth/rate-limit";
import { handleApiError, jsonError, jsonSuccessWithSession } from "@/lib/api-response";
import { findUserByEmail, publicUser } from "@/lib/store";

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    const limit = rateLimit(`login:${ip}`);
    if (!limit.allowed) {
      return jsonError("Too many login attempts. Please try again later.", 429);
    }

    const body = await request.json();
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");
    if (!email || !password) return jsonError("Invalid email or password", 400);

    const user = findUserByEmail(email);
    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      return jsonError("Invalid email or password", 401);
    }

    return jsonSuccessWithSession(user, { user: publicUser(user) });
  } catch (error) {
    return handleApiError(error);
  }
}
