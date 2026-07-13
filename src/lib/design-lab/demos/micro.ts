import type { DemoMeta } from "../types";

export const microDemos: DemoMeta[] = [
  {
    slug: "cta-button", variant: "ctaButton",
    name: "CTA Button Micro-Interaction",
    description: "Button skaliert beim Hover minimal (1.02) und bekommt einen weichen Schatten – bereits Standard auf der Website.",
    whenToUse: "Für jeden primären Call-to-Action-Button.",
    whenNotToUse: "Nicht bei sekundären Text-Links – dort reicht eine reine Farbänderung.",
    beautySuited: "Ja",
    claudePrompt: "Baue einen Primary-Button mit Hover-Micro-Interaction: hover:scale-[1.02], hover:shadow-md, transition-all 0.3s.",
  },
  {
    slug: "icon-micro", variant: "icon",
    name: "Icon Micro-Animation",
    description: "Ein Pfeil-Icon neben einem Link bewegt sich beim Hover leicht nach rechts.",
    whenToUse: "Für 'Weiterlesen'- oder 'Mehr erfahren'-Links, um Richtung/Aktion zu unterstreichen.",
    whenNotToUse: "Nicht bei Icons ohne Handlungsbezug (reine Dekor-Icons) einsetzen.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle einen Link mit Pfeil-Icon, das bei Hover des Elternelements um 4px nach rechts transformiert, transition 0.25s ease-out.",
  },
  {
    slug: "counter", variant: "counter",
    name: "Zahlen hochzählen",
    description: "Eine Kennzahl (z. B. '50+ Projekte') zählt beim Sichtbarwerden animiert von 0 auf den Zielwert hoch.",
    whenToUse: "Für Trust-Signale wie Anzahl Projekte, Jahre Erfahrung, Kundenbewertungen.",
    whenNotToUse: "Nicht bei mehr als 2–3 Zahlen gleichzeitig auf einer Bildschirmhöhe – wirkt sonst wie ein Dashboard.",
    beautySuited: "Ja",
    claudePrompt: "Baue eine Counter-Komponente, die beim Sichtbarwerden per requestAnimationFrame von 0 auf einen Zielwert über 1.2s mit ease-out-Kurve hochzählt, danach exakten Endwert anzeigt.",
  },
];
