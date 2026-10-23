import { clearSessionCookieOnResponse } from "@/lib/auth/session";
import { jsonSuccess } from "@/lib/api-response";

export async function POST() {
  const response = jsonSuccess({ message: "Signed out" });
  return clearSessionCookieOnResponse(response);
}
