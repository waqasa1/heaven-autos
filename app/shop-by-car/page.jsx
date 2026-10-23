"use client";

import { useRouter } from "next/navigation";
import { StoreShell } from "@/components/layout/StoreShell";
import { CarMakesGrid } from "@/components/CarMakesGrid";

export default function ShopByCarPage() {
  const router = useRouter();
  return (
    <StoreShell>
      <CarMakesGrid
        selectedMake=""
        onSelectMake={(makeId) => router.push(makeId ? `/shop?make=${makeId}` : "/shop")}
      />
    </StoreShell>
  );
}
