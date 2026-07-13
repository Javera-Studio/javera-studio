"use client";

import { useEffect, useRef, useState } from "react";
import { InView } from "../InView";

export function MicroDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "ctaButton":
      return (
        <button type="button" className="dl-cta-button px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm">
          Termin anfragen
        </button>
      );
    case "icon":
      return (
        <a href="#" onClick={(e) => e.preventDefault()} className="dl-icon-link inline-flex items-center gap-1.5 text-sm text-ink">
          Mehr erfahren
          <span className="dl-icon-arrow" aria-hidden>→</span>
        </a>
      );
    case "counter":
      return <CounterPreview target={128} suffix="+" label="Projekte" />;
    default:
      return null;
  }
}

function CounterPreview({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const [value, setValue] = useState(0);

  return (
    <InView threshold={0.5} once>
      {(inView) => <CounterRunner active={inView} target={target} value={value} setValue={setValue} suffix={suffix} label={label} />}
    </InView>
  );
}

function CounterRunner({
  active, target, value, setValue, suffix, label,
}: { active: boolean; target: number; value: number; setValue: (n: number) => void; suffix: string; label: string }) {
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    const duration = 1200;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, setValue]);

  return (
    <div className="text-center">
      <p className="font-serif text-4xl text-ink">{value}{suffix}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
