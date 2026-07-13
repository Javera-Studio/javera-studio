"use client";

import { InView } from "../InView";

export function TransitionsDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "fade":
      return (
        <InView>
          {(inView) => (
            <div className={`dl-section-fade rounded-xl bg-cream border border-border/60 px-8 py-6 text-center text-sm text-ink ${inView ? "dl-in-view" : ""}`}>
              Section-Inhalt
            </div>
          )}
        </InView>
      );
    case "slide":
      return (
        <InView>
          {(inView) => (
            <div className={`dl-section-slide rounded-xl bg-cream border border-border/60 px-8 py-6 text-center text-sm text-ink ${inView ? "dl-in-view" : ""}`}>
              Section-Inhalt
            </div>
          )}
        </InView>
      );
    default:
      return null;
  }
}
