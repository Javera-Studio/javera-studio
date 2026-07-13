"use client";

import { useEffect, useRef } from "react";

export function CardsDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "hoverLift":
      return (
        <div className="dl-card-lift rounded-xl border border-border/60 bg-background px-6 py-5 text-center text-sm text-ink">
          Hover mich
        </div>
      );
    case "rotate":
      return (
        <div className="dl-card-rotate rounded-xl border border-border/60 bg-background px-6 py-5 text-center text-sm text-ink">
          Hover mich
        </div>
      );
    case "glass":
      return (
        <div
          className="relative w-full h-40 rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "linear-gradient(135deg, var(--rose-light), var(--mauve))" }}
        >
          <div className="dl-card-glass rounded-xl px-5 py-3 text-sm text-white">Glassmorphism Card</div>
        </div>
      );
    case "borderGlow":
      return (
        <div className="dl-card-glow rounded-xl border border-border/60 bg-background px-6 py-5 text-center text-sm text-ink">
          Hover mich
        </div>
      );
    case "magnetic":
      return <MagneticButtonPreview />;
    default:
      return null;
  }
}

function MagneticButtonPreview() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm transition-transform duration-200 ease-out"
    >
      Bewege die Maus
    </button>
  );
}
