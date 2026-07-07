export type FaqLink = {
  label: string;
  href: string;
};

export type FaqItem = {
  /** Eindeutige, sprechende ID – erlaubt Deep-Links wie /faq#faq-website-kosten */
  id: string;
  question: string;
  answer: string;
  /** Optionale interne Verlinkungen (Blogartikel, Preise, Kundenprojekte, Kontakt, Startseite) */
  relatedLinks?: FaqLink[];
};

export type FaqCategory = {
  id: string;
  title: string;
  icon: string;
  items: FaqItem[];
};

/**
 * Zentrale FAQ-Datenstruktur. Neue Kategorie = neues Objekt im Array,
 * neue Frage = neues Objekt in items – die Seite /faq und das FAQPage-Schema
 * lesen ausschließlich aus diesem Array, ohne Code-Änderungen an anderer Stelle.
 *
 * Aktuell Platzhalter-Antworten – werden anschließend einzeln ausgearbeitet.
 */
export const faqCategories: FaqCategory[] = [
  {
    id: "websites",
    title: "Websites",
    icon: "Monitor",
    items: [
      { id: "faq-website-notwendigkeit", question: "Brauche ich als Beauty-Studio überhaupt eine Website?", answer: "Deine Website ist wie dein digitales Schaufenster. Während dein Studio vor Ort Kundinnen überzeugt, entscheidet deine Website darüber, welchen ersten Eindruck potenzielle Neukundinnen online von dir bekommen. Viele Beauty-Unternehmen investieren viel Geld in ihre Einrichtung, hochwertige Produkte und Schulungen – online verlassen sie sich jedoch ausschließlich auf Social Media. Eine professionelle Website schafft Vertrauen, präsentiert deine Leistungen übersichtlich und macht dein Studio rund um die Uhr erreichbar. Kurz gesagt: Eine Website ist heute nicht einfach nur eine Visitenkarte, sondern ein wichtiger Bestandteil eines professionellen Markenauftritts." },
      { id: "faq-website-instagram-reicht", question: "Reicht Instagram nicht aus?", answer: "Antwort folgt in Kürze." },
      { id: "faq-website-onepager", question: "Was ist ein One-Pager?", answer: "Antwort folgt in Kürze." },
      { id: "faq-website-premium", question: "Was ist eine Premium-Website?", answer: "Antwort folgt in Kürze." },
      { id: "faq-website-erweiterbar", question: "Kann meine Website später erweitert werden?", answer: "Antwort folgt in Kürze." },
      { id: "faq-website-mobil", question: "Ist meine Website für Smartphones optimiert?", answer: "Antwort folgt in Kürze." },
      { id: "faq-website-selbst-aendern", question: "Kann ich später selbst Änderungen vornehmen?", answer: "Ja – grundsätzlich ist das möglich. Da ich überwiegend statische Websites entwickle, sind regelmäßige Änderungen meist gar nicht notwendig. Eine Website ist kein Social-Media-Profil, auf dem ständig neue Inhalte veröffentlicht werden. Die meisten meiner Kundinnen ändern ihre Website nur gelegentlich – zum Beispiel, wenn sich Preise, Öffnungszeiten oder Leistungen ändern. Solche Änderungen übernehme ich gerne für dich. Falls du deine Website regelmäßig aktualisieren möchtest, etwa mit neuen Kundenbildern, Aktionen oder Angeboten, kann ich auf Wunsch einen bearbeitbaren Bereich integrieren oder du nutzt eines meiner Wartungspakete. So bleibt deine Website schnell, sicher und technisch schlank, ohne unnötig kompliziert zu werden.", relatedLinks: [{ label: "Wartungspakete", href: "/preise#wartung" }] },
      { id: "faq-website-dauer", question: "Wie lange dauert die Erstellung einer Website?", answer: "Antwort folgt in Kürze." },
      { id: "faq-website-inhalte", question: "Welche Inhalte gehören auf eine Beauty-Website?", answer: "Antwort folgt in Kürze." },
      { id: "faq-website-start", question: "Was brauche ich für den Start?", answer: "Antwort folgt in Kürze." },
    ],
  },
  {
    id: "preise",
    title: "Preise",
    icon: "Wallet",
    items: [
      { id: "faq-preise-website", question: "Was kostet eine Website?", answer: "Antwort folgt in Kürze." },
      { id: "faq-preise-logo", question: "Was kostet ein Logo?", answer: "Antwort folgt in Kürze." },
      { id: "faq-preise-versteckte-kosten", question: "Gibt es versteckte Kosten?", answer: "Antwort folgt in Kürze." },
      { id: "faq-preise-bezahlung", question: "Wie läuft die Bezahlung ab?", answer: "Antwort folgt in Kürze." },
      { id: "faq-preise-domain-hosting", question: "Sind Domain und Hosting enthalten?", answer: "Antwort folgt in Kürze." },
      { id: "faq-preise-wartung", question: "Was kostet die Wartung?", answer: "Antwort folgt in Kürze." },
      { id: "faq-preise-pakete", question: "Gibt es Pakete?", answer: "Antwort folgt in Kürze." },
      { id: "faq-preise-kombinieren", question: "Kann ich mehrere Leistungen kombinieren?", answer: "Antwort folgt in Kürze." },
    ],
  },
  {
    id: "branding",
    title: "Branding & Design",
    icon: "Palette",
    items: [
      { id: "faq-branding-logo-warum", question: "Warum brauche ich ein Logo?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branding-corporate-design", question: "Was gehört zu einem Corporate Design?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branding-nur-logo", question: "Kann ich nur ein Logo bestellen?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branding-flyer", question: "Gestaltest du auch Flyer?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branding-social-media", question: "Gestaltest du Social Media Designs?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branding-einheitlich", question: "Warum ist ein einheitlicher Markenauftritt wichtig?", answer: "Antwort folgt in Kürze." },
    ],
  },
  {
    id: "seo",
    title: "Google & SEO",
    icon: "TrendingUp",
    items: [
      { id: "faq-seo-google-gefunden", question: "Wird meine Website bei Google gefunden?", answer: "Antwort folgt in Kürze." },
      { id: "faq-seo-bedeutung", question: "Was bedeutet SEO?", answer: "Antwort folgt in Kürze." },
      { id: "faq-seo-warum-wichtig", question: "Warum ist Google für Beauty-Studios wichtig?", answer: "Antwort folgt in Kürze." },
      { id: "faq-seo-dauer", question: "Wie lange dauert SEO?", answer: "Antwort folgt in Kürze." },
      { id: "faq-seo-instagram-reicht", question: "Reicht Instagram für Google?", answer: "Antwort folgt in Kürze." },
      { id: "faq-seo-google-maps", question: "Kann ich bei Google Maps gefunden werden?", answer: "Antwort folgt in Kürze." },
    ],
  },
  {
    id: "zusammenarbeit",
    title: "Zusammenarbeit",
    icon: "Handshake",
    items: [
      { id: "faq-zusammenarbeit-ablauf", question: "Wie läuft ein Website-Projekt ab?", answer: "Antwort folgt in Kürze." },
      { id: "faq-zusammenarbeit-texte", question: "Muss ich Texte selbst schreiben?", answer: "Antwort folgt in Kürze." },
      { id: "faq-zusammenarbeit-fotos", question: "Brauche ich professionelle Fotos?", answer: "Antwort folgt in Kürze." },
      { id: "faq-zusammenarbeit-korrekturen", question: "Wie viele Korrekturen sind enthalten?", answer: "Antwort folgt in Kürze." },
      { id: "faq-zusammenarbeit-nach-vorschau", question: "Was passiert nach der kostenlosen Vorschau?", answer: "Antwort folgt in Kürze." },
      { id: "faq-zusammenarbeit-direkt", question: "Arbeite ich direkt mit dir?", answer: "Antwort folgt in Kürze." },
    ],
  },
  {
    id: "beauty-studios",
    title: "Beauty-Studios",
    icon: "Sparkles",
    items: [
      { id: "faq-branche-nagelstudio", question: "Erstellst du Websites für Nagelstudios?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branche-kosmetikstudio", question: "Erstellst du Websites für Kosmetikstudios?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branche-wimpernstudio", question: "Erstellst du Websites für Wimpernstudios?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branche-pmu-studio", question: "Erstellst du Websites für PMU-Studios?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branche-waxing-studio", question: "Erstellst du Websites für Waxing-Studios?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branche-friseur", question: "Erstellst du Websites für Friseure?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branche-makeup-artist", question: "Erstellst du Websites für Make-up Artists?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branche-brautstylistin", question: "Erstellst du Websites für Brautstylistinnen?", answer: "Antwort folgt in Kürze." },
      { id: "faq-branche-beauty-akademie", question: "Erstellst du Websites für Beauty-Akademien?", answer: "Antwort folgt in Kürze." },
    ],
  },
];

export function getAllFaqItems(): FaqItem[] {
  return faqCategories.flatMap((category) => category.items);
}
