"use client";

import { useEffect, useRef, useState } from "react";

export function CursorDemo({ variant }: { variant: string }) {
  switch (variant) {
    case "dot":
      return <CursorDotPreview />;
    case "trail":
      return <CursorTrailPreview />;
    default:
      return null;
  }
}

function CursorDotPreview() {
  const stageRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setSupported(false);
      return;
    }
    const stage = stageRef.current;
    const dot = dotRef.current;
    if (!stage || !dot) return;
    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      dot.style.left = `${e.clientX - rect.left}px`;
      dot.style.top = `${e.clientY - rect.top}px`;
    };
    stage.addEventListener("mousemove", onMove);
    return () => stage.removeEventListener("mousemove", onMove);
  }, []);

  if (!supported) {
    return <p className="text-xs text-muted-foreground text-center">Nur auf Geräten mit Maus verfügbar.</p>;
  }

  return (
    <div ref={stageRef} className="dl-cursor-stage w-full h-32 rounded-xl bg-cream flex items-center justify-center">
      <p className="text-xs text-muted-foreground">Bewege die Maus hier</p>
      <div ref={dotRef} className="dl-cursor-dot" />
    </div>
  );
}

function CursorTrailPreview() {
  const stageRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const [supported, setSupported] = useState(true);
  const positions = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setSupported(false);
      return;
    }
    const stage = stageRef.current;
    if (!stage) return;
    positions.current = dotsRef.current.map(() => ({ x: 0, y: 0 }));

    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      positions.current.unshift({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      positions.current.pop();
      dotsRef.current.forEach((dot, i) => {
        const p = positions.current[i];
        if (dot && p) {
          dot.style.left = `${p.x}px`;
          dot.style.top = `${p.y}px`;
          dot.style.opacity = `${1 - i / dotsRef.current.length}`;
        }
      });
    };
    stage.addEventListener("mousemove", onMove);
    return () => stage.removeEventListener("mousemove", onMove);
  }, []);

  if (!supported) {
    return <p className="text-xs text-muted-foreground text-center">Nur auf Geräten mit Maus verfügbar.</p>;
  }

  return (
    <div ref={stageRef} className="dl-cursor-stage w-full h-32 rounded-xl bg-cream flex items-center justify-center">
      <p className="text-xs text-muted-foreground">Bewege die Maus hier</p>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotsRef.current[i] = el;
          }}
          className="dl-cursor-dot"
          style={{ width: 8, height: 8, transition: "opacity 0.2s" }}
        />
      ))}
    </div>
  );
}
