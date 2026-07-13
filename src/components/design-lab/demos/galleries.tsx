"use client";

import { useRef, useState } from "react";

export function GalleriesDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "horizontal":
      return (
        <div className="dl-horizontal-scroll w-full max-w-xs">
          {["A", "B", "C", "D"].map((n) => (
            <div key={n} className="w-24 h-28 rounded-lg bg-cream border border-border/60 flex items-center justify-center text-ink font-serif text-lg">
              {n}
            </div>
          ))}
        </div>
      );
    case "beforeAfter":
      return <BeforeAfterPreview />;
    default:
      return null;
  }
}

function BeforeAfterPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);

  const update = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const value = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(100, Math.max(0, value)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[240px] aspect-[4/3] rounded-xl overflow-hidden select-none touch-none"
      onMouseMove={(e) => e.buttons === 1 && update(e.clientX)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--border), var(--muted))" }}>
        <span className="absolute bottom-2 left-2 text-[11px] text-ink/70">Vorher</span>
      </div>
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--mauve), var(--rose-light))" }}>
          <span className="absolute bottom-2 left-2 text-[11px] text-white/90">Nachher</span>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-background" style={{ left: `${pct}%` }} />
      <div
        className="absolute top-1/2 w-7 h-7 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background border border-border shadow flex items-center justify-center text-[10px]"
        style={{ left: `${pct}%` }}
      >
        ↔
      </div>
    </div>
  );
}
