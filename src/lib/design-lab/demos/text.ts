import type { DemoMeta } from "../types";

export const textDemos: DemoMeta[] = [
  {
    slug: "fade-up", variant: "fadeUp",
    name: "Fade Up",
    description: "Text blendet leicht von unten (20–25px) mit Opacity-Übergang ein. Basis-Pattern der gesamten Website (.reveal).",
    whenToUse: "Standard für nahezu jeden Textblock, Überschrift oder Absatz beim Scrollen ins Bild.",
    whenNotToUse: "Nicht bei jedem einzelnen Wort separat – wirkt schnell überladen bei viel Fließtext.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle eine wiederverwendbare .reveal-Klasse: opacity 0 → 1, translateY(25px) → 0, 0.7s ease-out, ausgelöst per IntersectionObserver beim ersten Sichtbarwerden.",
  },
  {
    slug: "fade-left", variant: "fadeLeft",
    name: "Fade Left",
    description: "Text schiebt sich von rechts kommend mit Opacity-Übergang ein.",
    whenToUse: "Gut für zweispaltige Layouts, bei denen Text und Bild gegenläufig einblenden sollen.",
    whenNotToUse: "Nicht bei linksbündigem Fließtext in schmalen Spalten – kann unruhig wirken.",
    beautySuited: "Bedingt",
    claudePrompt: "Erweitere die reveal-Klasse um eine Variante 'reveal-left': translateX(30px) → 0 statt translateY, gleiche Timing-Werte.",
  },
  {
    slug: "fade-right", variant: "fadeRight",
    name: "Fade Right",
    description: "Spiegelbildlich zu Fade Left – Text kommt von links.",
    whenToUse: "Für die zweite Spalte eines zweispaltigen Layouts, damit sich beide Seiten aufeinander zu bewegen.",
    whenNotToUse: "Nicht beide Richtungen gleichzeitig auf derselben Textebene mischen.",
    beautySuited: "Bedingt",
    claudePrompt: "Erweitere die reveal-Klasse um eine Variante 'reveal-right': translateX(-30px) → 0.",
  },
  {
    slug: "blur-in", variant: "blurIn",
    name: "Blur In",
    description: "Text startet leicht unscharf (blur 6px) und schärft sich beim Einblenden.",
    whenToUse: "Für besonders hochwertige Momente – z. B. ein Markenzitat oder eine große Editorial-Headline.",
    whenNotToUse: "Sparsam einsetzen, max. 1–2 Mal pro Seite – bei häufigem Einsatz verliert der Effekt seine Wirkung.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle eine 'reveal-blur'-Klasse: filter: blur(6px) → blur(0), opacity 0 → 1, 0.8s ease-out.",
  },
  {
    slug: "typewriter", variant: "typewriter",
    name: "Typewriter",
    description: "Text erscheint zeichenweise wie getippt, mit blinkendem Cursor am Ende.",
    whenToUse: "Für einzelne kurze Statements oder Slogans (max. 1 Zeile), wenn ein 'lebendiger' Eindruck gewünscht ist.",
    whenNotToUse: "Nie für lange Absätze – erhöht die Lesezeit künstlich und wirkt bei zu häufigem Einsatz gimmickhaft.",
    beautySuited: "Bedingt",
    claudePrompt: "Baue eine Typewriter-Komponente, die einen kurzen String zeichenweise (30–40ms Intervall) einblendet, sobald sie in den Viewport scrollt, inkl. blinkendem Cursor-Strich danach.",
  },
];
