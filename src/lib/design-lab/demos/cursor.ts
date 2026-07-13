import type { DemoMeta } from "../types";

export const cursorDemos: DemoMeta[] = [
  {
    slug: "cursor-dot", variant: "dot",
    name: "Cursor Dot",
    description: "Ein kleiner, weicher Punkt folgt dem Mauszeiger mit leichter Verzögerung und vergrößert sich über interaktiven Elementen.",
    whenToUse: "Für sehr hochwertige, experimentelle Landingpages auf Desktop – als zusätzliches Markenelement.",
    whenNotToUse: "Nie als einzige Interaktionsanzeige, nie auf Touch-Geräten – dort ersatzlos deaktivieren.",
    beautySuited: "Bedingt",
    claudePrompt: "Baue einen Custom-Cursor-Dot: ein 12px-Kreis folgt der Mausposition mit CSS transition (0.15s ease-out), vergrößert sich auf 32px bei Hover über Links/Buttons, nur aktiv bei matchMedia '(hover: hover) and (pointer: fine)'.",
  },
  {
    slug: "cursor-trail", variant: "trail",
    name: "Cursor Trail",
    description: "Ein kurzer, sanft ausblendender Schweif folgt der Mausbewegung.",
    whenToUse: "Nur für sehr spezielle, verspielte Experimentalseiten – nicht Teil des Standard-Repertoires für Kundenprojekte.",
    whenNotToUse: "Nicht auf Kundenwebsites für Beauty-Studios – lenkt vom Inhalt ab und wirkt technikverliebt statt luxuriös.",
    beautySuited: "Eher nicht",
    claudePrompt: "Erstelle einen Cursor-Trail-Effekt: mehrere kleine Punkte, die der Mausposition mit gestaffelter Verzögerung folgen und dabei ausblenden, nur zu Demonstrationszwecken im Design Lab.",
  },
];
