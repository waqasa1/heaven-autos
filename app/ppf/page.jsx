"use client";

import { StoreShell } from "@/components/layout/StoreShell";
import { PPFStudioSection } from "@/components/PPFStudioSection";
import { PPFBookingModal } from "@/components/PPFBookingModal";
import { useState } from "react";

export default function PpfPage() {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <StoreShell>
      <PPFStudioSection
        onOpenBookingModal={(packageTitle) => {
          setTitle(packageTitle || "");
          setOpen(true);
        }}
      />
      <PPFBookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        defaultPackageTitle={title}
      />
    </StoreShell>
  );
}
