import type { DemoMeta } from "../types";

export const luxuryDemos: DemoMeta[] = [
  {
    slug: "soft-glow", variant: "softGlow",
    name: "Soft Glow",
    description: "Ein weicher, radialer Lichtschein hinter einem Element – z. B. hinter einem Badge oder Signature-Bild.",
    whenToUse: "Um ein einzelnes Element (Preis-Badge, Zitat) dezent hervorzuheben.",
    whenNotToUse: "Nicht hinter mehreren Elementen gleichzeitig – der Fokus-Effekt geht sonst verloren.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle einen weichen radialen Glow hinter einem Element: position absolute, radial-gradient von var(--rose-gold-soft) zu transparent, blur(40px), niedrige Opacity.",
  },
  {
    slug: "gold-line", variant: "goldLine",
    name: "Goldene Linie (Editorial Rule)",
    description: "Dünne, goldene Trennlinie, die sich beim Sichtbarwerden von 0 auf volle Breite auszieht. Baut auf der bestehenden .editorial-rule-Klasse auf.",
    whenToUse: "Als Trenner zwischen Überschrift und Fließtext, oder als Signatur-Element bei Zitaten.",
    whenNotToUse: "Nicht mehrfach auf derselben Bildschirmhöhe – wirkt sonst wie ein Ladebalken.",
    beautySuited: "Ja",
    claudePrompt: "Erweitere .editorial-rule um eine Scroll-Animation: width 0 → 48px, 0.8s ease-out, ausgelöst per IntersectionObserver.",
  },
  {
    slug: "mirror-reflection", variant: "mirrorReflection",
    name: "Spiegel-Reflexion",
    description: "Unterhalb eines Bildes erscheint eine sanft ausgeblendete, gespiegelte Reflexion – wie auf einer glänzenden Fläche.",
    whenToUse: "Für Produktfotos oder Signature-Portraits auf hellem, ruhigem Hintergrund.",
    whenNotToUse: "Nicht bei Bildern mit komplexem/buntem Hintergrund – die Reflexion wirkt dort unsauber.",
    beautySuited: "Ja",
    claudePrompt: "Baue eine Bild-Reflexion: darunter eine gespiegelte Kopie des Bildes (transform: scaleY(-1)) mit linear-gradient mask-image von 40% Opacity auf transparent.",
  },
  {
    slug: "noise-overlay", variant: "noise",
    name: "Noise Overlay",
    description: "Feines, statisches Rauschen (Grain) über Bildern oder Flächen – nimmt der digitalen Glätte etwas weg.",
    whenToUse: "Auf großflächigen Farbflächen oder Hero-Bildern, um einen edlen, 'gedruckten' Look zu erzeugen.",
    whenNotToUse: "Nicht über Text oder kleinen UI-Elementen – reduziert dort die Lesbarkeit.",
    beautySuited: "Bedingt",
    claudePrompt: "Erstelle ein Noise-Overlay: ein SVG-Filter (feTurbulence) als background-image, opacity 0.04, pointer-events: none, als ::before über der Section gelegt.",
  },
];
