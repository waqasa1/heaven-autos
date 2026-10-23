"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LINKS = [
  { href: "/admin", label: "Dashboard", exact: true },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/products", label: "Products" },
];

export function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 md:flex">
      <aside className="bg-slate-950 text-white md:w-60 md:min-h-screen p-4">
        <Link href="/" className="block font-headline text-lg font-black tracking-tight">
          HEAVEN <span className="text-sky-400">AUTOS</span>
        </Link>
        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
          Admin
        </p>
        <nav className="mt-6 flex md:flex-col gap-1">
          {LINKS.map((link) => {
            const active = link.exact
              ? pathname === link.href
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                  active ? "bg-sky-600 text-white" : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={logout}
          className="mt-6 text-xs font-bold text-slate-400 hover:text-white"
        >
          Sign out
        </button>
      </aside>
      <div className="flex-1 p-4 sm:p-8">{children}</div>
    </div>
  );
}
