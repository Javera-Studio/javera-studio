"use client";

import { useEffect, useState } from "react";
import { InView } from "../InView";

const TYPEWRITER_TEXT = "Die Website ist dein Schaufenster.";

export function TextDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "fadeUp":
      return (
        <InView>
          {(inView) => (
            <p className={`dl-reveal font-serif text-xl text-ink text-center ${inView ? "dl-in-view" : ""}`}>
              Fade Up Text
            </p>
          )}
        </InView>
      );
    case "fadeLeft":
      return (
        <InView>
          {(inView) => (
            <p className={`dl-fade-left font-serif text-xl text-ink text-center ${inView ? "dl-in-view" : ""}`}>
              Fade Left Text
            </p>
          )}
        </InView>
      );
    case "fadeRight":
      return (
        <InView>
          {(inView) => (
            <p className={`dl-fade-right font-serif text-xl text-ink text-center ${inView ? "dl-in-view" : ""}`}>
              Fade Right Text
            </p>
          )}
        </InView>
      );
    case "blurIn":
      return (
        <InView>
          {(inView) => (
            <p className={`dl-blur-in font-serif text-xl text-ink text-center ${inView ? "dl-in-view" : ""}`}>
              Blur In Text
            </p>
          )}
        </InView>
      );
    case "typewriter":
      return <TypewriterPreview />;
    default:
      return null;
  }
}

function TypewriterPreview() {
  const [count, setCount] = useState(0);

  return (
    <InView
      threshold={0.5}
      once
    >
      {(inView) => {
        return <TypewriterRunner active={inView} count={count} setCount={setCount} />;
      }}
    </InView>
  );
}

function TypewriterRunner({ active, count, setCount }: { active: boolean; count: number; setCount: (n: number) => void }) {
  useEffect(() => {
    if (!active || count >= TYPEWRITER_TEXT.length) return;
    const t = setTimeout(() => setCount(count + 1), 35);
    return () => clearTimeout(t);
  }, [active, count, setCount]);

  return (
    <p className="font-serif text-lg text-ink text-center">
      {TYPEWRITER_TEXT.slice(0, count)}
      <span className="dl-typewriter-cursor h-5 align-middle" />
    </p>
  );
}
