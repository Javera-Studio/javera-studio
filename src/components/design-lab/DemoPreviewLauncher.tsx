"use client";

import { useState } from "react";
import { DemoModal } from "./DemoModal";

export function DemoPreviewLauncher({ name, children }: { name: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full h-full min-h-[220px] rounded-xl bg-cream border border-border/60 flex flex-col items-center justify-center gap-3 transition hover:border-ink/30"
      >
        <span className="w-12 h-12 rounded-full bg-background border border-border/60 flex items-center justify-center text-ink transition group-hover:scale-105">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 translate-x-0.5">
            <path d="M8 5v14l11-7L8 5z" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-sm text-ink font-medium">Vorschau ansehen</span>
      </button>

      <DemoModal name={name} open={open} onClose={() => setOpen(false)}>
        {children}
      </DemoModal>
    </>
  );
}
