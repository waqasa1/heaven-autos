import { getSession } from "@/lib/auth/session";
import { jsonSuccess } from "@/lib/api-response";
import { findUserById, publicUser } from "@/lib/store";

export async function GET() {
  const session = await getSession();
  if (!session) return jsonSuccess({ user: null });
  const user = findUserById(session.userId);
  return jsonSuccess({ user: user ? publicUser(user) : null });
}
