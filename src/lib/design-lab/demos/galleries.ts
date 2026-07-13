import type { DemoMeta } from "../types";

export const galleriesDemos: DemoMeta[] = [
  {
    slug: "horizontal-gallery", variant: "horizontal",
    name: "Horizontale Galerie",
    description: "Bilder scrollen seitlich mit Snap-Einrasten – bereits als Scroll-Effekt-Pattern dokumentiert, hier im Galerie-Kontext.",
    whenToUse: "Für Referenzbilder, Kundenprojekte oder Behandlungsergebnisse in loser Reihenfolge.",
    whenNotToUse: "Nicht, wenn Bilder eine feste Reihenfolge/Vergleich haben (dann besser Vorher/Nachher-Slider).",
    beautySuited: "Ja",
    claudePrompt: "Baue eine horizontale Bildergalerie mit scroll-snap-type: x mandatory, dezenten Pfeiltasten links/rechts, Lazy-Loading der Bilder außerhalb des sichtbaren Bereichs.",
  },
  {
    slug: "before-after", variant: "beforeAfter",
    name: "Vorher/Nachher-Slider",
    description: "Ein vertikaler Schieberegler deckt das Nachher-Bild auf, während das Vorher-Bild darunter sichtbar bleibt.",
    whenToUse: "Für Behandlungsergebnisse (z. B. Microneedling, PMU) – sehr überzeugendes Beweis-Format.",
    whenNotToUse: "Nicht ohne Einverständnis der Kundin zur Bildnutzung einsetzen; nicht bei irreführenden/übertriebenen Vergleichen.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle einen Vorher/Nachher-Bildvergleich: zwei übereinanderliegende Bilder, das obere per clip-path anhand der Position eines Schiebereglers (Pointer-Events, auch Touch) freigegeben.",
  },
];
