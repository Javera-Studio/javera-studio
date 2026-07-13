"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { PreviewModeContext } from "./preview-mode-context";

interface InViewProps {
  className?: string;
  threshold?: number;
  once?: boolean;
  children: (inView: boolean) => React.ReactNode;
}

/**
 * Two behaviours depending on PreviewModeContext:
 * - "viewport" (default, used on the category pages): re-observes on every
 *   enter/exit via IntersectionObserver, so demos pause when scrolled away.
 * - "mount" (used inside the preview modal): the demo is already visible
 *   the moment it mounts, so an IntersectionObserver would fire "true"
 *   immediately and no transition would ever play. Instead we start at
 *   false and flip to true one frame later, so the CSS transition runs.
 */
export function InView({ className, threshold = 0.3, once = false, children }: InViewProps) {
  const mode = useContext(PreviewModeContext);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (mode === "mount") {
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mode, threshold, once]);

  return (
    <div ref={ref} className={className}>
      {children(inView)}
    </div>
  );
}
