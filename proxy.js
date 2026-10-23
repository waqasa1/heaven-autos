import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { SESSION_COOKIE, getAuthSecretKey } from "@/lib/auth/secret";

const adminPaths = ["/admin"];
const authPaths = ["/login", "/signup"];

async function verifySession(token) {
  try {
    const { payload } = await jwtVerify(token, getAuthSecretKey());
    return payload;
  } catch {
    return null;
  }
}

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const session = token ? await verifySession(token) : null;

  const isAdminRoute = adminPaths.some((path) => pathname.startsWith(path));
  const isAuthRoute = authPaths.some((path) => pathname.startsWith(path));
  const isAccount = pathname.startsWith("/account");

  if (isAdminRoute) {
    if (!session) {
      return NextResponse.redirect(new URL("/login?redirect=/admin", request.url));
    }
    if (session.role !== "admin") {
      return NextResponse.redirect(new URL("/account?error=forbidden", request.url));
    }
  }

  if (isAccount && !session) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url),
    );
  }

  if (isAuthRoute && session) {
    const dest = session.role === "admin" ? "/admin" : "/account";
    return NextResponse.redirect(new URL(dest, request.url));
  }

  const response = NextResponse.next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Frame-Options", "DENY");
  return response;
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/account", "/account/:path*", "/login", "/signup"],
};
