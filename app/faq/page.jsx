"use client";

import { useRouter } from "next/navigation";
import { StoreShell } from "@/components/layout/StoreShell";
import { FaqSection } from "@/components/FaqSection";

export default function FaqPage() {
  const router = useRouter();
  return (
    <StoreShell>
      <FaqSection onTagClick={(tag) => router.push(`/shop?q=${encodeURIComponent(tag)}`)} />
    </StoreShell>
  );
}
