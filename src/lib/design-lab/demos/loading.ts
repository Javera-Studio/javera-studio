import type { DemoMeta } from "../types";

export const loadingDemos: DemoMeta[] = [
  {
    slug: "skeleton", variant: "skeleton",
    name: "Skeleton Shimmer",
    description: "Platzhalter-Balken mit durchlaufendem Glanzlicht, während echte Inhalte (z. B. Bilder, Formularantwort) laden.",
    whenToUse: "Für Bild-Platzhalter, Formular-Ladezustände oder dynamisch nachgeladene Inhalte.",
    whenNotToUse: "Nicht für Inhalte, die ohnehin sofort verfügbar sind (statischer Text) – unnötiger Ladezustand.",
    beautySuited: "Ja",
    claudePrompt: "Baue eine Skeleton-Komponente: grauer Balken mit einem linear-gradient-Glanzlicht, das per CSS-Animation von links nach rechts durchläuft (1.5s linear infinite), pausiert bei prefers-reduced-motion.",
  },
  {
    slug: "spinner", variant: "spinner",
    name: "Spinner",
    description: "Dezenter, dünner rotierender Ring in der Akzentfarbe – bereits im Kontaktformular als Sendezustand nutzbar.",
    whenToUse: "Für kurze, unmittelbare Ladezustände (Formular-Submit, Button-Klick mit Serveranfrage).",
    whenNotToUse: "Nicht für Ladezeiten über 3–4 Sekunden – dort besser einen Fortschrittsbalken mit Kontext zeigen.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle einen minimalistischen Spinner: 24px Ring, border-top in Akzentfarbe, restliche border transparent, animation: spin 0.8s linear infinite.",
  },
  {
    slug: "progress-loader", variant: "progress",
    name: "Progress Loader",
    description: "Balken, der den Fortschritt eines mehrstufigen Vorgangs (z. B. Formular-Wizard, Datei-Upload) anzeigt.",
    whenToUse: "Bei mehrstufigen Prozessen, wo die Nutzerin wissen soll, wie weit sie ist.",
    whenNotToUse: "Nicht bei einstufigen, kurzen Aktionen – dort reicht ein Spinner.",
    beautySuited: "Bedingt",
    claudePrompt: "Baue einen Progress-Loader: Balken mit width transition (0.4s ease-out) entsprechend eines Prozent-Props, abgerundete Ecken, Farbe var(--primary).",
  },
];
