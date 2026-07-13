"use client";

import Image from "next/image";
import { InView } from "../InView";

export function LuxuryDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "softGlow":
      return (
        <div className="dl-soft-glow px-6 py-3 rounded-full bg-background border border-border/60 text-sm text-ink">
          Kostenlose Erstberatung
        </div>
      );
    case "goldLine":
      return (
        <InView>
          {(inView) => (
            <div className="text-center">
              <p className="font-serif text-lg text-ink mb-3">Überschrift</p>
              <span className={`dl-gold-line ${inView ? "dl-in-view" : ""}`} />
            </div>
          )}
        </InView>
      );
    case "mirrorReflection":
      return (
        <div className="w-full max-w-[220px]">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image src="/design-lab-hero.jpg" alt="Spiegel-Reflexion Vorschau" fill className="object-cover" sizes="220px" />
          </div>
          <div className="dl-mirror-reflection">
            <div className="dl-mirror-reflection-copy relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/design-lab-hero.jpg" alt="" fill className="object-cover" sizes="220px" aria-hidden />
            </div>
          </div>
        </div>
      );
    case "noise":
      return (
        <div
          className="dl-noise-overlay w-full h-32 rounded-xl flex items-center justify-center text-white text-sm"
          style={{ background: "linear-gradient(135deg, var(--mauve), var(--primary))" }}
        >
          Noise Overlay
        </div>
      );
    default:
      return null;
  }
}
