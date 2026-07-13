import type { DemoMeta } from "../types";

export const testimonialsDemos: DemoMeta[] = [
  {
    slug: "testimonial-fade", variant: "fade",
    name: "Testimonial Fade-In",
    description: "Zitat-Karten blenden gestaffelt (stagger 0.1–0.3s) nacheinander ein, statt gleichzeitig.",
    whenToUse: "Für Testimonial-Grids mit 3–6 Karten – gestaffeltes Einblenden führt den Blick.",
    whenNotToUse: "Nicht bei mehr als 6 Karten gleichzeitig im Viewport – Gesamtdauer wird dann zu lang.",
    beautySuited: "Ja",
    claudePrompt: "Baue ein Testimonial-Grid, bei dem jede Karte die reveal-Klasse mit reveal-stagger-1 bis reveal-stagger-6 je nach Index erhält, damit sie nacheinander einblenden.",
  },
  {
    slug: "star-rating-micro", variant: "starRating",
    name: "Sternebewertung Micro-Animation",
    description: "Sterne einer Bewertung füllen sich beim Sichtbarwerden nacheinander leicht zeitversetzt statt alle gleichzeitig.",
    whenToUse: "Für Google-Bewertungs-Badges oder einzelne hervorgehobene Kundenstimmen.",
    whenNotToUse: "Nicht bei einer Liste mit vielen Bewertungen gleichzeitig – dann lieber statisch darstellen.",
    beautySuited: "Ja",
    claudePrompt: "Erstelle eine 5-Sterne-Anzeige, bei der jeder Stern mit 60ms Versatz von opacity 0/scale 0.5 auf opacity 1/scale 1 übergeht, ausgelöst beim Sichtbarwerden.",
  },
];
