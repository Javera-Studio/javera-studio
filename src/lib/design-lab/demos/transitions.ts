import type { DemoMeta } from "../types";

export const transitionsDemos: DemoMeta[] = [
  {
    slug: "fade-reveal", variant: "fade",
    name: "Section Fade Reveal",
    description: "Ganze Section blendet als Block sanft ein, statt Element für Element – wirkt ruhiger bei sehr dichten Sections.",
    whenToUse: "Für Sections mit vielen kleinen Elementen (z. B. Icon-Grid), wo Einzel-Reveals zu unruhig wären.",
    whenNotToUse: "Nicht für Sections mit klarer Lesereihenfolge (Überschrift → Text → CTA) – dort gestaffelte Reveals bevorzugen.",
    beautySuited: "Ja",
    claudePrompt: "Baue eine Section, die als Ganzes per IntersectionObserver von opacity 0 auf 1 übergeht (0.8s ease-out), ohne Transform, für ruhige Blockübergänge.",
  },
  {
    slug: "slide-reveal", variant: "slide",
    name: "Section Slide Reveal",
    description: "Section schiebt sich beim Sichtbarwerden mit größerer Distanz (40px) und leichtem Overshoot ein.",
    whenToUse: "Für den Übergang zwischen deutlich unterschiedlichen Sections (z. B. heller zu dunkler Hintergrund).",
    whenNotToUse: "Nicht bei aufeinanderfolgenden, farblich gleichen Sections – der Übergang wird dann kaum wahrgenommen und wirkt nur wie Overhead.",
    beautySuited: "Bedingt",
    claudePrompt: "Erstelle eine Section-Transition mit größerer Slide-Distanz: translateY(40px) → 0, opacity 0 → 1, cubic-bezier(0.16, 1, 0.3, 1) für einen sanften Overshoot.",
  },
];
