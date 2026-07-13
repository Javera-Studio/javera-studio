import type { DemoMeta } from "../types";

export const imagesDemos: DemoMeta[] = [
  {
    slug: "zoom-reveal", variant: "zoomReveal",
    name: "Zoom Reveal",
    description: "Bild startet leicht vergrößert (scale 1.1) und zoomt beim Einblenden sanft auf 1 zurück.",
    whenToUse: "Für Portfolio- und Vorher/Nachher-Bilder – erzeugt einen ruhigen 'Enthüllungs'-Moment.",
    whenNotToUse: "Nicht bei sehr kleinen Thumbnails – der Effekt braucht Bildfläche, um zu wirken.",
    beautySuited: "Ja",
    claudePrompt: "Baue eine Bildkomponente, die beim Sichtbarwerden von scale(1.1)/opacity 0 auf scale(1)/opacity 1 übergeht, 0.9s ease-out, per IntersectionObserver einmalig ausgelöst.",
  },
  {
    slug: "mask-reveal", variant: "maskReveal",
    name: "Mask Reveal",
    description: "Ein Balken schiebt sich über das Bild und gibt es wie ein Vorhang frei (clip-path Animation).",
    whenToUse: "Für den ersten Eindruck eines Signature-Bildes (z. B. Studio-Portrait) – wirkt editorial und hochwertig.",
    whenNotToUse: "Nicht für Bildergalerien mit vielen Elementen – zu viele gleichzeitige Masken wirken unruhig.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle einen Mask-Reveal-Effekt: das Bild ist zunächst durch clip-path: inset(0 100% 0 0) verdeckt und öffnet sich beim Sichtbarwerden auf inset(0 0 0 0), 0.9s ease-out.",
  },
  {
    slug: "light-sweep", variant: "lightSweep",
    name: "Hover Light Sweep",
    description: "Beim Hover läuft ein diagonaler Lichtstreifen einmal über das Bild – Wiederverwendung des Mirror-Frame-Patterns als Hover-Effekt statt Scroll-Trigger.",
    whenToUse: "Für Karten/Portfolio-Kacheln, um Interaktivität beim Hover zu signalisieren.",
    whenNotToUse: "Nicht auf Touch-Geräten als primäre Interaktion verlassen – Hover existiert dort nicht.",
    beautySuited: "Ja",
    claudePrompt: "Baue einen Hover-Light-Sweep: bei :hover läuft ein 120%-breiter, schräger, halbtransparenter Gradient einmal über das Bild (0.9s ease-out), per CSS-Animation die beim Verlassen zurückgesetzt wird.",
  },
  {
    slug: "hover-lift-image", variant: "hoverZoom",
    name: "Hover Zoom",
    description: "Bild zoomt beim Hover dezent (scale 1.05) innerhalb eines overflow-hidden Containers.",
    whenToUse: "Klassiker für Portfolio-Grids und Leistungskarten mit Bild – sehr sparsam und performant.",
    whenNotToUse: "Nicht mit gleichzeitigem Card-Lift kombinieren – zwei Bewegungsachsen wirken überladen.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle einen Bild-Container mit overflow-hidden, bei dem das innere Bild bei :hover von scale(1) auf scale(1.05) übergeht, 0.5s ease-out.",
  },
];
