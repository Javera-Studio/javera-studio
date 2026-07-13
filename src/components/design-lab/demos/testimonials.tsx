"use client";

import { InView } from "../InView";

export function TestimonialsDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "fade":
      return (
        <InView>
          {(inView) => (
            <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="dl-reveal rounded-lg bg-cream border border-border/60 h-16 flex items-center justify-center text-[11px] text-muted-foreground"
                  style={inView ? { opacity: 1, transform: "translateY(0)", transitionDelay: `${i * 0.12}s` } : undefined}
                >
                  ★★★★★
                </div>
              ))}
            </div>
          )}
        </InView>
      );
    case "starRating":
      return (
        <InView>
          {(inView) => (
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`dl-star w-6 h-6 text-primary ${inView ? "dl-in-view" : ""}`}
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5z" />
                </svg>
              ))}
            </div>
          )}
        </InView>
      );
    default:
      return null;
  }
}
