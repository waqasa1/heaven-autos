import { hashPassword, normalizeEmail } from "@/lib/auth/password";
import { handleApiError, jsonError, jsonSuccessWithSession } from "@/lib/api-response";
import { createUser, publicUser } from "@/lib/store";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");

    if (name.length < 2) return jsonError("Enter your full name", 400);
    if (!email.includes("@")) return jsonError("Enter a valid email", 400);
    if (password.length < 8) return jsonError("Password must be at least 8 characters", 400);

    const user = createUser({
      name,
      email,
      passwordHash: await hashPassword(password),
    });
    return jsonSuccessWithSession(user, { user: publicUser(user) }, 201);
  } catch (error) {
    if (error.message.includes("already exists")) return jsonError(error.message, 409);
    return handleApiError(error);
  }
}
