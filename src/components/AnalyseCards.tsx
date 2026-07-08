"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export type AnalyseItem = {
  title: string;
  desc: string;
  icon: ReactNode;
  details: string[];
};

export function AnalyseCards({ items }: { items: AnalyseItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? items[openIndex] : null;

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-haspopup="dialog"
            className={`reveal-card reveal-stagger-${(i % 6) + 1} h-full bg-background border border-border/60 rounded-2xl p-6 text-center flex flex-col items-center gap-2.5 hover:shadow-md hover:border-mauve/40 transition cursor-pointer`}
          >
            <span className="shrink-0 w-11 h-11 rounded-full bg-peach-soft flex items-center justify-center" style={{ color: "#0F6E56" }}>
              {item.icon}
            </span>
            <p className="text-sm font-semibold text-ink">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
            <span className="mt-auto pt-2 text-[11px] text-mauve font-medium">Details ansehen →</span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 backdrop-blur-sm px-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative max-w-md w-full bg-background rounded-3xl border border-border/60 p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Schließen"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-ink hover:bg-cream transition"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="w-4 h-4" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <span className="inline-flex w-12 h-12 rounded-full bg-peach-soft items-center justify-center mb-5" style={{ color: "#0F6E56" }}>
              {active.icon}
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-ink">{active.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Darauf achte ich in diesem Bereich:</p>
            <ul className="mt-4 space-y-2.5">
              {active.details.map((d) => (
                <li key={d} className="flex gap-2.5 text-sm text-ink">
                  <span className="shrink-0" style={{ color: "#0F6E56" }}>✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
