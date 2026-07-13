import type { DemoMeta } from "../types";

export const scrollDemos: DemoMeta[] = [
  {
    slug: "sticky-section", variant: "sticky",
    name: "Sticky Section",
    description: "Bild bleibt beim Scrollen fixiert, während daneben Text weiterscrollt (position: sticky).",
    whenToUse: "Für Ablaufstrecken oder Vorher/Nachher-Erzählungen mit mehreren Textabschnitten neben einem Bild.",
    whenNotToUse: "Nicht auf Mobile mit sehr kurzen Sections – der Sticky-Effekt braucht Scroll-Distanz, um zu wirken.",
    beautySuited: "Ja",
    claudePrompt: "Baue eine zweispaltige Section, bei der die linke Bildspalte position: sticky; top: 6rem hat, während rechts mehrere Textblöcke normal scrollen.",
  },
  {
    slug: "scroll-progress", variant: "progress",
    name: "Scroll Progress Bar",
    description: "Dünner Balken am oberen Seitenrand zeigt den Lesefortschritt der Seite.",
    whenToUse: "Für lange Inhaltsseiten wie Blogartikel oder ausführliche Leistungsseiten.",
    whenNotToUse: "Nicht auf kurzen Seiten (z. B. Kontakt) – dort ohne Mehrwert.",
    beautySuited: "Bedingt",
    claudePrompt: "Erstelle eine fixierte 3px hohe Progress-Bar am oberen Viewport-Rand, deren width sich anhand von window.scrollY / (scrollHeight - clientHeight) berechnet, performant über requestAnimationFrame.",
  },
  {
    slug: "horizontal-scroll", variant: "horizontal",
    name: "Horizontal Scroll",
    description: "Eine Reihe von Karten scrollt seitlich statt vertikal – ideal für Referenzen oder Vorher/Nachher-Bilder.",
    whenToUse: "Für Portfolio-Galerien oder Bewertungs-Karussells, nie für ganze Seiteninhalte.",
    whenNotToUse: "Nicht als primäre Navigation der gesamten Seite verwenden – nur für einzelne, klar abgegrenzte Sections.",
    beautySuited: "Ja",
    claudePrompt: "Baue eine horizontal scrollbare Kartenreihe mit overflow-x: auto, scroll-snap-type: x mandatory, jede Karte scroll-snap-align: start, dezente Scrollbar.",
  },
  {
    slug: "snap-scroll", variant: "snap",
    name: "Snap Scroll",
    description: "Jede Section rastet beim Scrollen sauber im Viewport ein (scroll-snap-type: y mandatory).",
    whenToUse: "Für moderne, kurze Onepager/Landingpages mit klar getrennten Vollbild-Sections.",
    whenNotToUse: "Nicht für inhaltsreiche Seiten mit unterschiedlich hohen Sections – erzwungenes Einrasten wirkt dort störend.",
    beautySuited: "Bedingt",
    claudePrompt: "Erstelle ein Snap-Scroll-Layout: Container mit scroll-snap-type: y mandatory, jede volle Section height: 100vh; scroll-snap-align: start.",
  },
  {
    slug: "parallax-scroll", variant: "parallax",
    name: "Parallax Scrolling",
    description: "Hintergrundebene bewegt sich langsamer als die Vordergrundebene beim Scrollen – erzeugt Tiefenwirkung.",
    whenToUse: "Dezent bei Beauty-/Luxus-Sections mit Bildhintergrund, laut Empfehlung sparsam einsetzen.",
    whenNotToUse: "Nicht mehrere Parallax-Ebenen gleichzeitig auf einer Seite – siehe Design-Lab-Regel 'keine mehreren Parallax-Systeme gleichzeitig'.",
    beautySuited: "Ja",
    claudePrompt: "Baue eine Section mit Parallax-Hintergrund: das Hintergrundbild verschiebt sich per transform: translateY() um 20% der Scrolldistanz relativ zum Container, über IntersectionObserver nur aktiv, wenn sichtbar.",
  },
];
