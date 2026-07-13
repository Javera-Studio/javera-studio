"use client";

import Image from "next/image";
import { InView } from "../InView";

export function ImagesDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "zoomReveal":
      return (
        <InView>
          {(inView) => (
            <div className={`dl-zoom-reveal relative w-full h-40 rounded-xl overflow-hidden ${inView ? "dl-in-view" : ""}`}>
              <Image src="/design-lab-hero.jpg" alt="Zoom Reveal Vorschau" fill className="object-cover" sizes="320px" />
            </div>
          )}
        </InView>
      );
    case "maskReveal":
      return (
        <InView>
          {(inView) => (
            <div className={`dl-mask-reveal relative w-full h-40 rounded-xl overflow-hidden ${inView ? "dl-in-view" : ""}`}>
              <Image src="/design-lab-hero.jpg" alt="Mask Reveal Vorschau" fill className="object-cover" sizes="320px" />
            </div>
          )}
        </InView>
      );
    case "lightSweep":
      return (
        <div className="dl-light-sweep relative w-full h-40 rounded-xl overflow-hidden">
          <Image src="/design-lab-hero.jpg" alt="Light Sweep Vorschau" fill className="object-cover" sizes="320px" />
          <p className="absolute bottom-2 left-2 text-[11px] text-white/90 bg-black/30 rounded px-2 py-0.5">Hover</p>
        </div>
      );
    case "hoverZoom":
      return (
        <div className="dl-hover-zoom relative w-full h-40 rounded-xl overflow-hidden">
          <Image src="/design-lab-hero.jpg" alt="Hover Zoom Vorschau" fill className="object-cover" sizes="320px" />
          <p className="absolute bottom-2 left-2 text-[11px] text-white/90 bg-black/30 rounded px-2 py-0.5">Hover</p>
        </div>
      );
    default:
      return null;
  }
}
