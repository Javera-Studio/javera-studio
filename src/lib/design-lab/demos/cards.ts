import type { DemoMeta } from "../types";

export const cardsDemos: DemoMeta[] = [
  {
    slug: "hover-lift", variant: "hoverLift",
    name: "Hover Lift",
    description: "Card hebt sich beim Hover minimal an (translateY -6px) und bekommt einen weichen Schatten.",
    whenToUse: "Standard für Leistungs-, Preis- und Portfolio-Karten – klares, dezentes Feedback.",
    whenNotToUse: "Nicht bei Karten, die bereits einen 3D/Rotate-Effekt haben – Effekte nicht stapeln.",
    beautySuited: "Ja",
    claudePrompt: "Baue eine Card mit Hover-Lift: transform: translateY(-6px), box-shadow verstärkt sich, transition 0.3s ease-out.",
  },
  {
    slug: "rotate", variant: "rotate",
    name: "Subtle Rotate",
    description: "Card kippt beim Hover minimal (1–2 Grad) um die eigene Achse – wirkt spielerisch, ohne kitschig zu sein.",
    whenToUse: "Für verspieltere Bereiche wie Testimonial- oder Team-Karten.",
    whenNotToUse: "Nicht für Preistabellen oder sachliche Inhalte – zu spielerisch für seriöse Informationen.",
    beautySuited: "Bedingt",
    claudePrompt: "Erstelle eine Card, die beim Hover um 1.5deg rotiert (transform: rotate(1.5deg) scale(1.01)), transition 0.3s ease-out.",
  },
  {
    slug: "glassmorphism", variant: "glass",
    name: "Glassmorphism",
    description: "Halbtransparente Card mit backdrop-blur über einem Bild oder Farbverlauf.",
    whenToUse: "Für Badges/Info-Overlays direkt auf Hero-Bildern (z. B. 'Kostenlose Erstberatung').",
    whenNotToUse: "Nicht als Haupt-Card-Stil für Textinhalte einsetzen – reduziert Lesbarkeit auf hellem Hintergrund.",
    beautySuited: "Bedingt",
    claudePrompt: "Baue eine Glassmorphism-Card: background rgba(255,255,255,0.15), backdrop-filter: blur(12px), border 1px solid rgba(255,255,255,0.3), zum Overlay auf einem Bild.",
  },
  {
    slug: "border-glow", variant: "borderGlow",
    name: "Border Glow",
    description: "Beim Hover erscheint ein sanft leuchtender Rand in der Akzentfarbe rund um die Card.",
    whenToUse: "Für hervorgehobene Elemente wie das empfohlene Preis-Paket.",
    whenNotToUse: "Nicht bei allen Karten gleichzeitig – der Effekt lebt vom Kontrast zu ruhigeren Nachbarkarten.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle einen Border-Glow-Hover: box-shadow: 0 0 0 1px var(--mauve), 0 0 24px rgba(139,75,90,0.25), transition 0.4s ease-out.",
  },
  {
    slug: "magnetic-button", variant: "magnetic",
    name: "Magnetic Button",
    description: "Button folgt dem Mauszeiger leicht innerhalb seines Bereichs, wie magnetisch angezogen.",
    whenToUse: "Für den primären CTA-Button auf besonders hochwertigen Landingpages, sparsam eingesetzt.",
    whenNotToUse: "Nicht bei mehreren Buttons gleichzeitig und nie auf Touch-Geräten (kein Mauszeiger vorhanden).",
    beautySuited: "Bedingt",
    claudePrompt: "Baue einen Magnetic-Button: bei mousemove innerhalb des Buttons wird transform: translate(x,y) anteilig zur Cursorposition gesetzt (Faktor 0.3), bei mouseleave zurück zu translate(0,0), nur auf Geräten mit Hover-Support (matchMedia '(hover: hover)').",
  },
];
