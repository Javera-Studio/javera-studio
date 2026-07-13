"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { InView } from "../InView";

export function HeroDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "fadeUp":
      return (
        <InView>
          {(inView) => (
            <div className="text-center">
              <p
                className="font-serif text-xl text-ink transition-all duration-700"
                style={{ opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(1.15)" }}
              >
                Dein Studio. Online sichtbar.
              </p>
              <p
                className="mt-2 text-xs text-muted-foreground transition-all duration-700"
                style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.25s" }}
              >
                Premium-Website für dein Beauty-Studio
              </p>
              <span
                className="mt-4 inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs transition-all duration-700"
                style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.5s" }}
              >
                Jetzt entdecken
              </span>
            </div>
          )}
        </InView>
      );

    case "parallax":
      return <ParallaxPreview />;

    case "videoVsImage":
      return <VideoVsImagePreview />;

    case "mirror":
      return (
        <div className="dl-light-sweep rounded-xl overflow-hidden w-full h-full relative">
          <Image src="/design-lab-hero.jpg" alt="Spiegel-Effekt Vorschau" fill className="object-cover" sizes="320px" />
          <p className="absolute bottom-2 left-2 text-[11px] text-white/90 bg-black/30 rounded px-2 py-0.5">Hover für Sweep</p>
        </div>
      );

    case "scrollIndicator":
      return (
        <div className="flex flex-col items-center gap-2">
          <div className="w-5 h-8 rounded-full border border-ink/30 flex items-start justify-center p-1">
            <span className="w-1 h-1.5 rounded-full bg-ink/60 animate-bounce" />
          </div>
          <p className="text-[11px] text-muted-foreground">Scroll</p>
        </div>
      );

    default:
      return null;
  }
}

function ParallaxPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => setOffset(el.scrollTop * 0.4);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full max-h-[220px] overflow-y-auto rounded-xl">
      <div className="relative h-[420px]">
        <div
          className="absolute inset-x-0 top-0 h-[300px] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url(/design-lab-hero.jpg)", transform: `translateY(${offset}px)` }}
        />
        <p className="absolute bottom-3 left-3 text-[11px] text-muted-foreground bg-background/80 rounded px-2 py-0.5">↕ Im Kasten scrollen</p>
      </div>
    </div>
  );
}

function VideoVsImagePreview() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full text-center">
      <div>
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image src="/design-lab-hero.jpg" alt="Statisches Hero-Bild" fill className="object-cover" sizes="160px" />
        </div>
        <p className="mt-1 text-[11px] text-muted-foreground">Bild (leicht)</p>
      </div>
      <div>
        <InView>
          {(inView) => (
            <div className="aspect-square rounded-lg overflow-hidden bg-black">
              {inView && (
                <video className="w-full h-full object-cover" src="/hero.mp4" autoPlay muted loop playsInline />
              )}
            </div>
          )}
        </InView>
        <p className="mt-1 text-[11px] text-muted-foreground">Video (schwerer)</p>
      </div>
    </div>
  );
}
