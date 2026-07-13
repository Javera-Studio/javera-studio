"use client";

import { useEffect, useRef, useState } from "react";

interface InViewProps {
  className?: string;
  threshold?: number;
  once?: boolean;
  children: (inView: boolean) => React.ReactNode;
}

/**
 * Re-observes on every enter/exit (unless `once`), so continuous demo
 * animations can pause when scrolled out of view instead of running
 * permanently off-screen.
 */
export function InView({ className, threshold = 0.3, once = false, children }: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
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
  }, [threshold, once]);

  return (
    <div ref={ref} className={className}>
      {children(inView)}
    </div>
  );
}
