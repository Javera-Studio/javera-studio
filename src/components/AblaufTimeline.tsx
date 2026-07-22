"use client";

import { useEffect, useRef, useState } from "react";

export type AblaufStep = { n: string; title: string; desc: string };

export function AblaufTimeline({ steps }: { steps: AblaufStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [fillPercent, setFillPercent] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(() => steps.map(() => false));
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let raf = 0;
    function measure() {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.55;
      const progressed = viewportAnchor - rect.top;
      const pct = Math.min(1, Math.max(0, progressed / rect.height));
      setFillPercent(pct * 100);
    }
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    }
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      // Fallback für Browser ohne IntersectionObserver: alle Schritte sofort sichtbar.
      // Server rendert immer "unsichtbar" (SSR kennt IntersectionObserver nicht) –
      // das Setzen hier im Effect verhindert daher einen Hydration-Mismatch.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisibleSteps(steps.map(() => true));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = Number((entry.target as HTMLElement).dataset.index);
          setVisibleSteps((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps.length]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveStep(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <div ref={containerRef} className="relative">
      <div aria-hidden className="absolute left-[21px] top-1 bottom-1 w-px bg-border/60" />
      <div
        aria-hidden
        className="absolute left-[21px] top-1 w-px transition-[height] duration-300 ease-out"
        style={{ height: `${fillPercent}%`, backgroundColor: "var(--mauve)" }}
      />
      <div className="space-y-7">
        {steps.map((step, i) => {
          const isActive = activeStep === i;
          return (
            <div
              key={step.n}
              ref={(el) => { stepRefs.current[i] = el; }}
              data-index={i}
              className="relative pl-14"
              style={{
                opacity: visibleSteps[i] ? 1 : 0,
                transform: visibleSteps[i] ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <div
                className="absolute left-0 top-0 w-11 h-11 rounded-full border-2 flex items-center justify-center font-serif text-lg text-primary transition-colors duration-500 ease-out"
                style={{
                  borderColor: isActive ? "var(--primary)" : "color-mix(in oklab, var(--ink) 15%, transparent)",
                  backgroundColor: isActive ? "var(--accent)" : "var(--background)",
                }}
              >
                {step.n}
              </div>
              <div
                className="rounded-2xl border p-6 transition-colors duration-500 ease-out"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: isActive ? "color-mix(in oklab, var(--mauve) 45%, transparent)" : "color-mix(in oklab, var(--border) 60%, transparent)",
                }}
              >
                <p className="text-sm font-semibold text-ink">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
