"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "sticky":
      return <StickyPreview />;
    case "progress":
      return <ScrollProgressPreview />;
    case "horizontal":
      return (
        <div className="dl-horizontal-scroll w-full max-w-xs">
          {["1", "2", "3", "4"].map((n) => (
            <div key={n} className="w-24 h-28 rounded-lg bg-cream border border-border/60 flex items-center justify-center text-ink font-serif text-lg">
              {n}
            </div>
          ))}
        </div>
      );
    case "snap":
      return (
        <div className="dl-snap-container border border-border/60 w-full max-w-xs">
          {["Section A", "Section B", "Section C"].map((s) => (
            <div key={s} className="dl-snap-section bg-cream border-b border-border/40 font-serif text-ink">
              {s}
            </div>
          ))}
        </div>
      );
    case "parallax":
      return <ScrollParallaxPreview />;
    default:
      return null;
  }
}

function StickyPreview() {
  return (
    <div className="w-full max-w-xs h-40 overflow-y-auto rounded-xl border border-border/60 flex gap-3 p-2">
      <div className="sticky top-2 self-start w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center text-xs text-ink shrink-0">
        Bild
      </div>
      <div className="text-xs text-muted-foreground space-y-3 leading-relaxed">
        <p>Absatz 1 – scrollt normal.</p>
        <p>Absatz 2 – Bild links bleibt fixiert.</p>
        <p>Absatz 3 – bis der Container endet.</p>
      </div>
    </div>
  );
}

function ScrollProgressPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full max-w-xs">
      <div className="dl-progress-track mb-2">
        <div className="dl-progress-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <div ref={containerRef} className="h-32 overflow-y-auto rounded-lg border border-border/60 p-3 text-xs text-muted-foreground leading-relaxed">
        <p>Scrolle in diesem Kasten, um den Fortschrittsbalken oben zu sehen. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Weiter scrollen für mehr Text und mehr Fortschritt im Balken.</p>
      </div>
    </div>
  );
}

function ScrollParallaxPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => setOffset(el.scrollTop * 0.3);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xs h-40 overflow-y-auto rounded-xl">
      <div className="relative h-[360px]">
        <div
          className="absolute inset-x-0 top-0 h-[260px] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url(/design-lab-hero.jpg)", transform: `translateY(${offset}px)` }}
        />
      </div>
    </div>
  );
}
