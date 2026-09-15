/**
 * Zentrale Datenquelle für die Praxen-Landingpage (`/praxen`).
 *
 * Bewusst getrennt von `src/lib/data/pricing.ts` (Beauty-Preise): Praxen-Websites sind ein
 * eigenständiges Angebot mit eigener Paketstruktur und eigenen Preisen, die unabhängig von
 * den Beauty-Paketen gepflegt werden. Preise als reine Zahlen hinterlegt (Formatierung z. B.
 * "ab 500 €" direkt im jeweiligen Feld, da hier – anders als bei den Beauty-Preisen – nur
 * "ab"-Preise ohne weitere Varianten gebraucht werden).
 */

/** Die drei unterschiedlichen Ziele einer Praxiswebsite (Abschnitt "Drei Ziele"). */
export const praxenZiele = [
  {
    titel: "Sichtbar werden",
    text: "Für neu gegründete oder kleinere Praxen: alle wichtigen Informationen übersichtlich an einem Ort, damit Patienten Sie überhaupt erst finden.",
  },
  {
    titel: "Vertrauen schaffen",
    text: "Für etablierte Praxen: Ihr Angebot ausführlich erklärt, damit Patienten bereits vor dem ersten Termin gut informiert und sicher sind.",
  },
  {
    titel: "Gezielt wachsen",
    text: "Für Praxen mit mehreren Schwerpunkten: eigene Seiten pro Behandlung, damit Sie über Google gezielt für Ihre einzelnen Leistungen gefunden werden.",
  },
] as const;

/** Live-Demo der LINDENBOGEN-Physiotherapie (Praxis Professional). */
export const LINDENBOGEN_DEMO_URL: string | null = "https://demo-physiotherapie.pages.dev";

/**
 * TODO(Praxis-Start- & Praxis-Premium-Demo): Für diese beiden neuen Demo-Konzepte existieren
 * aktuell noch keine eigenen Demo-Websites/Screenshots im Projekt. Sobald sie umgesetzt
 * sind, hier die echten URLs eintragen (und ein Screenshot-Bild unter `public/` ergänzen,
 * `image`-Feld entsprechend setzen) – NICHT erfinden.
 */
export type PraxenDemoStatus = "live" | "in-vorbereitung";

export type PraxenDemo = {
  slug: string;
  name: string;
  praxisart: string;
  stil: string;
  format: string;
  ziel: string;
  beschreibung: string;
  enthalten: string[];
  status: PraxenDemoStatus;
  url: string | null;
  /** Mockup-Variante für die CSS-Vorschau (siehe DemoMockup.tsx) – bewusst kein Fake-Bildpfad. */
  mockupVariante: "minimal" | "warm" | "bold";
};

export const praxenDemos: PraxenDemo[] = [
  {
    slug: "praxis-start",
    name: "Praxis Start",
    praxisart: "Beispiel: kleine Logopädie- oder Ergotherapiepraxis",
    stil: "Sehr schlicht, freundlich, hell und minimalistisch",
    format: "Hochwertiger Onepager",
    ziel: "Sichtbar werden",
    beschreibung: "Für neu gegründete oder kleinere Praxen, die alle wichtigen Informationen übersichtlich auf einer Seite zeigen möchten.",
    enthalten: [
      "Kurze Praxisvorstellung",
      "Team",
      "Kompakte Leistungsübersicht",
      "Standort und Öffnungszeiten",
      "Kontakt und Termin",
      "Grundlegende lokale SEO",
    ],
    status: "in-vorbereitung",
    url: null,
    mockupVariante: "minimal",
  },
  {
    slug: "praxis-professional",
    name: "Praxis Professional",
    praxisart: "Lindenbogen Physiotherapie",
    stil: "Warm, vertrauensvoll, hochwertig und etabliert",
    format: "Website mit mehreren Seiten",
    ziel: "Vertrauen schaffen",
    beschreibung: "Für Praxen, die ihr Angebot ausführlicher präsentieren und Patienten bereits vor dem ersten Termin umfassend informieren möchten.",
    enthalten: [
      "Startseite",
      "Leistungen gemeinsam auf einer ausführlichen Leistungsseite",
      "Praxis und Team",
      "Patienteninformationen",
      "Kontakt und Termin",
    ],
    status: "live",
    url: LINDENBOGEN_DEMO_URL,
    mockupVariante: "warm",
  },
  {
    slug: "praxis-premium",
    name: "Praxis Premium",
    praxisart: "Beispiel: interdisziplinäres Therapiezentrum oder moderne Physiotherapiepraxis",
    stil: "Sehr modern, selbstbewusst, klar und visuell auffällig – weiterhin professionell und medizinisch vertrauenswürdig",
    format: "Website mit eigenen Behandlungsseiten",
    ziel: "Gezielt wachsen",
    beschreibung: "Für Praxen mit mehreren Behandlungsschwerpunkten, die einzelne Leistungen ausführlich erklären und gezielt über Google gefunden werden möchten.",
    enthalten: [
      "Individuelle Startseite",
      "Eigene Unterseite für jede wichtige Behandlung",
      "Eigene SEO-Texte und FAQs pro Behandlung",
      "Praxis und Team",
      "Patienteninformationen",
      "Kontakt und Terminbuchung",
      "Stärkere lokale SEO-Struktur",
    ],
    status: "in-vorbereitung",
    url: null,
    mockupVariante: "bold",
  },
];

/** Die drei Leistungs- und Preispakete. */
export type PraxenPaket = {
  name: string;
  claim: string;
  preisLabel: string;
  fuer: string;
  leistungen: string[];
  beispielSeiten?: string[];
};

export const praxenPakete: PraxenPaket[] = [
  {
    name: "Praxis Start",
    claim: "Sichtbar werden",
    preisLabel: "ab 500 €",
    fuer: "Praxisgründerinnen und Praxisgründer sowie kleinere Praxen mit einem überschaubaren Angebot.",
    leistungen: [
      "Individueller Onepager",
      "Alle wesentlichen Inhalte auf einer Seite",
      "Impressum und Datenschutz zusätzlich",
    ],
  },
  {
    name: "Praxis Professional",
    claim: "Vertrauen schaffen",
    preisLabel: "ab 900 €",
    fuer: "Praxen, die ihr Angebot ausführlicher darstellen und Patienten umfassend informieren möchten.",
    leistungen: [
      "Individuelle Startseite",
      "Bis zu 3 zusätzliche Inhaltsseiten",
      "Impressum und Datenschutz zusätzlich",
    ],
    beispielSeiten: ["Startseite", "Leistungen", "Praxis und Team", "Kontakt und Termin"],
  },
  {
    name: "Praxis Premium",
    claim: "Gezielt wachsen",
    preisLabel: "ab 1.500 €",
    fuer: "Praxen mit mehreren Schwerpunkten und höheren Anforderungen an Inhalte und Sichtbarkeit.",
    leistungen: [
      "Individuelle Startseite",
      "Bis zu 6 zusätzliche Inhaltsseiten",
      "Davon beispielsweise bis zu 4 ausführliche Behandlungsseiten",
      "Individuelle Texte und SEO-Struktur pro Behandlungsseite",
      "Impressum und Datenschutz zusätzlich",
    ],
    beispielSeiten: ["Startseite", "Krankengymnastik", "Manuelle Therapie", "Lymphdrainage", "CMD-Behandlung", "Praxis und Team", "Kontakt und Termin"],
  },
];

/** Hinweis zu weiteren Zusatzseiten, direkt unter den drei Paketen dargestellt. */
export const praxenZusatzseite = {
  preisLabel: "je 150 €",
  hinweis: "Inklusive Texterstellung, SEO-Optimierung und Einbindung in das bestehende Design.",
  fussnote: "Als Zusatzseite gilt jede eigenständige Inhalts- oder Leistungsseite. Impressum und Datenschutz werden nicht zur angegebenen Seitenanzahl gezählt.",
};

/** Gemeinsame Qualitätsmerkmale, die in allen Paketen enthalten sind. */
export const praxenImmerEnthalten = [
  "Individuelles Design statt fertiger Vorlage",
  "Optimierte Darstellung auf Smartphone, Tablet und Desktop",
  "Verständliche Struktur für Patienten",
  "Technische SEO-Grundlagen",
  "Persönliche Abstimmung",
  "Keine verpflichtenden monatlichen Website-Abos",
  "Sauberer technischer Aufbau",
] as const;

/** Die vier Schritte des Ablaufs. */
export const praxenAblauf = [
  { n: "01", titel: "Kennenlernen und Ziele klären", text: "Wir besprechen kurz Ihre Praxis, Ihr Angebot und was die Website erreichen soll." },
  { n: "02", titel: "Inhalte und Struktur entwickeln", text: "Gemeinsam legen wir fest, welche Inhalte und Seiten für Ihre Praxis wirklich sinnvoll sind." },
  { n: "03", titel: "Design und technische Umsetzung", text: "Ihre Website wird individuell gestaltet und sauber technisch umgesetzt." },
  { n: "04", titel: "Veröffentlichung und Übergabe", text: "Nach Ihrer Freigabe geht die Website online – verständlich erklärt und einsatzbereit." },
] as const;

/** FAQ-Einträge für die Praxen-Landingpage. */
export const praxenFaq = [
  {
    frage: "Welches Paket passt zu meiner Praxis?",
    antwort: "Das hängt vor allem davon ab, wie viele Behandlungsschwerpunkte Sie zeigen möchten und wie ausführlich Sie informieren wollen. Im unverbindlichen Erstgespräch klären wir das gemeinsam.",
  },
  {
    frage: "Reicht für eine neu gegründete Praxis ein Onepager?",
    antwort: "In vielen Fällen ja. Ein Onepager zeigt alle wichtigen Informationen übersichtlich auf einer Seite und ist ein hochwertiger, vollwertiger Start – kein Kompromiss.",
  },
  {
    frage: "Kann die Website später erweitert werden?",
    antwort: "Ja. Zusätzliche Seiten – etwa für weitere Behandlungen – können jederzeit ergänzt werden, wenn Ihre Praxis wächst.",
  },
  {
    frage: "Können vorhandene Texte und Bilder übernommen werden?",
    antwort: "Ja, sofern die Qualität passt. Wo nötig, werden Texte überarbeitet oder neu geschrieben, damit sie zur Struktur der Website passen.",
  },
  {
    frage: "Kann eine Online-Terminbuchung eingebunden werden?",
    antwort: "Ja, ein bestehendes oder neues Buchungssystem kann in die Website eingebunden werden.",
  },
  {
    frage: "Ist die Website für Google optimiert?",
    antwort: "Jede Website erhält eine technische und inhaltliche SEO-Grundlage. Eine bestimmte Position in den Google-Suchergebnissen kann dabei niemand garantieren.",
  },
  {
    frage: "Entstehen laufende Kosten?",
    antwort: "Es gibt keine verpflichtenden monatlichen Website-Abos. Laufende Kosten für Domain, E-Mail oder ein externes Buchungssystem hängen von den jeweiligen Anbietern ab und sind nicht automatisch inkludiert.",
  },
] as const;
