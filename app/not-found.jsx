import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-3 px-4">
      <h1 className="font-headline text-3xl font-extrabold">Page not found</h1>
      <Link href="/" className="text-sm font-bold text-sky-700">
        Back to Heaven Autos
      </Link>
    </main>
  );
}
