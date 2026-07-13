"use client";

import { useEffect, useState } from "react";
import { InView } from "../InView";

export function LoadingDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "skeleton":
      return (
        <div className="w-full max-w-[220px] space-y-2">
          <div className="dl-skeleton h-4 w-3/4" />
          <div className="dl-skeleton h-4 w-full" />
          <div className="dl-skeleton h-4 w-1/2" />
        </div>
      );
    case "spinner":
      return <div className="dl-spinner" />;
    case "progress":
      return <ProgressLoaderPreview />;
    default:
      return null;
  }
}

function ProgressLoaderPreview() {
  return (
    <InView threshold={0.5}>
      {(inView) => <ProgressLoaderRunner active={inView} />}
    </InView>
  );
}

function ProgressLoaderRunner({ active }: { active: boolean }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (!active) {
      setPct(0);
      return;
    }
    const t = setTimeout(() => setPct(72), 200);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className="w-full max-w-[220px]">
      <div className="dl-progress-track">
        <div className="dl-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-2 text-xs text-muted-foreground text-center">Schritt 2 von 3</p>
    </div>
  );
}
