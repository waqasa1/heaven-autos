"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
const DEMO_EMAIL = "admin@heavenautos.pk";
const DEMO_PASSWORD = "HeavenAdmin#2026";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/account";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
    });
    const data = await response.json();
    setLoading(false);
    if (!data.success) {
      setError(data.message || "Login failed");
      return;
    }
    const next =
      data.user.role === "admin" && redirect === "/account" ? "/admin" : redirect;
    router.refresh();
    router.push(next);
  };

  return (
    <form onSubmit={submit} className="mt-6 space-y-4">
      <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
      <input name="password" type="password" required placeholder="Password" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
      {error && <p className="text-sm font-medium text-rose-600">{error}</p>}
      <button type="submit" disabled={loading} className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl">
        {loading ? "Signing in..." : "Sign in"}
      </button>
      <p className="text-sm text-slate-500">
        New here?{" "}
        <Link href="/signup" className="font-bold text-sky-700">
          Create an account
        </Link>
      </p>
      <p className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-600">
        Demo admin: {DEMO_EMAIL} / {DEMO_PASSWORD}
      </p>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <Link href="/" className="font-headline font-black text-lg">
          HEAVEN <span className="text-sky-600">AUTOS</span>
        </Link>
        <h1 className="mt-4 font-headline text-2xl font-extrabold">Sign in</h1>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
