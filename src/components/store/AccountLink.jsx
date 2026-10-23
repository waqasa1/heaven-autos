"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function AccountLink() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((response) => response.json())
      .then((data) => setUser(data.user))
      .catch(() => setUser(null));
  }, []);

  const href = !user ? "/login" : user.role === "admin" ? "/admin" : "/account";
  const label = !user ? "Login" : user.role === "admin" ? "Dashboard" : "Account";

  return (
    <Link
      href={href}
      className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 hover:bg-slate-100"
    >
      <span className="material-symbols-outlined text-[18px] text-sky-600">
        {user ? "account_circle" : "login"}
      </span>
      {user === undefined ? "Account" : label}
    </Link>
  );
}
