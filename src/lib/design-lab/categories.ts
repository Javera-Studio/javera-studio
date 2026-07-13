import type { Category, CategorySlug } from "./types";

export const categories: Category[] = [
  { slug: "hero", title: "Hero Animationen", description: "Erste Sekunde der Website: Bild/Video, Parallax, Spiegel-Effekt, Scroll Indicator.", badge: "5 Beispiele" },
  { slug: "text", title: "Text Animationen", description: "Fade Up/Left/Right, Blur In, Letter Animation, Typewriter.", badge: "5 Beispiele" },
  { slug: "images", title: "Bilder", description: "Zoom Reveal, Mask Reveal, Hover-Effekte, Light Sweep.", badge: "4 Beispiele" },
  { slug: "cards", title: "Cards", description: "Hover Lift, Rotate, Glassmorphism, Border Glow, Magnetic Button.", badge: "5 Beispiele" },
  { slug: "scroll", title: "Scroll Effekte", description: "Sticky Sections, Horizontal Scroll, Snap Scroll, Scroll Progress, Parallax.", badge: "5 Beispiele" },
  { slug: "luxury", title: "Luxury Effekte", description: "Lichtreflexe, goldene Linien, Spiegel-Reflexionen, Soft Glow, Noise Overlay.", badge: "4 Beispiele" },
  { slug: "micro", title: "Micro Animationen", description: "CTA Buttons, Icons, Zahlen hochzählen.", badge: "3 Beispiele" },
  { slug: "cursor", title: "Cursor Effekte", description: "Cursor Dot, Cursor Trail – dezente Interaktionen für Desktop.", badge: "2 Beispiele" },
  { slug: "loading", title: "Loading Animationen", description: "Skeleton Shimmer, Spinner, Progress Loader.", badge: "3 Beispiele" },
  { slug: "transitions", title: "Section Übergänge", description: "Fade Reveal und Slide Reveal zwischen Sections.", badge: "2 Beispiele" },
  { slug: "galleries", title: "Galleries", description: "Horizontale Galerie, Vorher/Nachher-Slider.", badge: "2 Beispiele" },
  { slug: "testimonials", title: "Testimonials", description: "Fade-In Karten, Sternebewertung-Micro-Animation.", badge: "2 Beispiele" },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const categorySlugs: CategorySlug[] = categories.map((c) => c.slug);
