import type { DemoMeta } from "../types";

export const heroDemos: DemoMeta[] = [
  {
    slug: "fade-up-hero", variant: "fadeUp",
    name: "Hero Fade-Up (Zoom + Fade)",
    description: "Headline zoomt sanft rein, Subline und CTA folgen zeitversetzt von unten. Aktuelles Muster der Javera-Startseite.",
    whenToUse: "Für jede neue Startseite als Standard-Entrance – wirkt hochwertig ohne abzulenken.",
    whenNotToUse: "Nicht mit einem zusätzlichen Video-Autoplay kombinieren – zwei Bewegungen gleichzeitig wirken unruhig.",
    beautySuited: "Ja",
    claudePrompt: "Baue einen Hero-Bereich, bei dem die H1 mit einem sanften Zoom-In (scale 1.15 → 1, 1.5s ease-out) einblendet und Subline/CTA um 0.5s bzw. 1s versetzt von 20px unten nachfolgen. Respektiere prefers-reduced-motion.",
  },
  {
    slug: "parallax-hero", variant: "parallax",
    name: "Parallax Hero",
    description: "Hintergrundbild bewegt sich beim Scrollen minimal langsamer als der Vordergrund – erzeugt Tiefe.",
    whenToUse: "Bei ruhigen, hochwertigen Hero-Bildern (Studio-Ambiente, Portrait) für einen dezenten Raumeindruck.",
    whenNotToUse: "Bei Text-lastigen Heroes oder auf Mobile sparsam einsetzen – zu starker Parallax wirkt schnell billig.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle einen Parallax-Hero, bei dem das Hintergrundbild via CSS transform: translateY() an die Scrollposition gekoppelt ist (Faktor 0.15–0.25), performant über requestAnimationFrame, deaktiviert bei prefers-reduced-motion.",
  },
  {
    slug: "video-vs-bild", variant: "videoVsImage",
    name: "Video vs. Bild",
    description: "Vergleich: Standbild (schnell, leicht) versus Loop-Video (lebendig, schwerer). Zeigt beide Varianten nebeneinander.",
    whenToUse: "Bild bevorzugen, wenn Ladezeit kritisch ist (Mobile-First). Video nur bei starkem Content und komprimiertem Format (WebM/MP4, unter 2–3 MB, muted, loop).",
    whenNotToUse: "Nie ein unkomprimiertes Video oder mehrere Videos gleichzeitig auf einer Seite laden.",
    beautySuited: "Bedingt",
    claudePrompt: "Zeige mir eine Checkliste, wann ich für einen Beauty-Hero ein Video statt ein Standbild verwenden sollte, inkl. Kompressions- und Lazy-Loading-Empfehlungen für Next.js.",
  },
  {
    slug: "spiegel-effekt", variant: "mirror",
    name: "Spiegel-Effekt (Light Sweep)",
    description: "Ein Lichtstreifen läuft einmalig diagonal über das Bild – wie ein Spiegel-Reflex. Bereits im Javera-CSS als .mirror-frame vorhanden.",
    whenToUse: "Für Markenmotiv 'Schaufenster/Spiegel' – ideal beim ersten Sichtbarwerden eines Hero- oder Portraitbilds.",
    whenNotToUse: "Nicht wiederholend/looping einsetzen – der Reiz liegt im einmaligen, überraschenden Effekt.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle einen One-Shot Light-Sweep-Effekt über ein Bild: ein 16%-breiter, leicht schräger, halbtransparenter weißer Streifen läuft beim Sichtbarwerden einmal von links nach rechts (2.2s ease-out), danach bleibt er unsichtbar.",
  },
  {
    slug: "scroll-indicator", variant: "scrollIndicator",
    name: "Scroll Indicator",
    description: "Kleines, dezentes Signal am unteren Hero-Rand, das zum Weiterscrollen einlädt (Maus-Icon oder Pfeil mit sanfter Bounce-Animation).",
    whenToUse: "Bei sehr hohen, bildlastigen Heroes, wo unklar sein könnte, dass darunter mehr Inhalt folgt.",
    whenNotToUse: "Weglassen, wenn der Hero kurz ist oder bereits sichtbarer Content unterhalb der Fold anschließt.",
    beautySuited: "Ja",
    claudePrompt: "Baue einen minimalistischen Scroll-Indicator (dünne vertikale Linie mit Punkt, der sanft auf und ab bewegt, 2s ease-in-out infinite) für das untere Ende eines Hero-Bereichs, ausgeblendet bei prefers-reduced-motion.",
  },
];
