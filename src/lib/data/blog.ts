export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogLink = {
  label: string;
  href: string;
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string };

export type BlogPost = {
  /** URL-Segment, z.B. "website-kosten-beauty-studio" → /blog/website-kosten-beauty-studio */
  slug: string;
  /** H1 auf der Artikelseite und og:title / twitter:title */
  title: string;
  /** Meta-Description, Basis für Article-Schema und Fallback-Excerpt */
  description: string;
  /** Kurztext für die Übersichts-Card. Fällt auf description zurück, wenn nicht gesetzt. */
  excerpt?: string;
  /** ISO-Datum, z.B. "2026-07-01" – bestimmt Sortierung & Anzeige */
  date: string;
  /** z.B. "4 min Lesezeit" */
  readTime?: string;
  /** Kategorie-/Themen-Label für Card & Artikel-Kopf */
  category?: string;
  /** Pfad zu einem Beitragsbild in /public, optional */
  image?: string;
  /** Zusätzliche Keywords für Meta-Tags */
  keywords?: string[];
  /** Strukturierter Artikeltext */
  content: BlogBlock[];
  /** Optionale FAQ-Blöcke → werden als Accordion gerendert + FAQPage-Schema */
  faq?: BlogFaqItem[];
  /** Optionale interne Verlinkungen (Leistungen, Preise, Kundenprojekte, andere Artikel) */
  relatedLinks?: BlogLink[];
};

/**
 * Zentrale Artikel-Liste. Neuer Artikel = neues Objekt hier ergänzen –
 * Blog-Übersicht, einzelne Artikelseiten, Sitemap und Schema-Markup
 * lesen ausschließlich aus diesem Array, ohne Code-Änderungen an anderer Stelle.
 */
export const blogPosts: BlogPost[] = [];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
