"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      }),
    });
    const data = await response.json();
    setLoading(false);
    if (!data.success) {
      setError(data.message || "Could not create the account");
      return;
    }
    router.refresh();
    router.push("/account");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <Link href="/" className="font-headline font-black text-lg">
          HEAVEN <span className="text-sky-600">AUTOS</span>
        </Link>
        <h1 className="mt-4 font-headline text-2xl font-extrabold">Create account</h1>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input name="name" required placeholder="Full name" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          <input name="password" type="password" required minLength={8} placeholder="Password (8+ characters)" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          {error && <p className="text-sm font-medium text-rose-600">{error}</p>}
          <button type="submit" disabled={loading} className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl">
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-500">
          Already registered?{" "}
          <Link href="/login" className="font-bold text-sky-700">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
