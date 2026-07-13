"use client";

import { useEffect, useState } from "react";
import { PreviewModeContext } from "./preview-mode-context";

interface DemoModalProps {
  name: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function DemoModal({ name, open, onClose, children }: DemoModalProps) {
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-background border border-border/60 shadow-xl p-6 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={name}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <p className="font-serif text-lg text-ink">{name}</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setReplayKey((k) => k + 1)}
              className="text-xs px-3 py-1.5 rounded-full border border-border/60 text-muted-foreground hover:text-ink hover:border-ink/30 transition"
            >
              ↻ Erneut abspielen
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Schließen"
              className="w-8 h-8 inline-flex items-center justify-center rounded-full border border-border/60 text-ink hover:bg-cream transition"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="rounded-xl bg-cream border border-border/60 min-h-[240px] flex items-center justify-center overflow-hidden p-6">
          <PreviewModeContext.Provider value="mount">
            <div key={replayKey}>{children}</div>
          </PreviewModeContext.Provider>
        </div>
      </div>
    </div>
  );
}
