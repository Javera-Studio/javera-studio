/**
 * Einzige Quelle für Preise, Zahlungsbedingungen, Korrekturrunden und
 * Supportzeiten von JAVERA Studio. Sowohl die Preise-Seite
 * (src/app/preise/page.tsx) als auch der Chatbot (src/app/api/chat/route.ts)
 * lesen ausschließlich von hier. Ein geänderter Betrag kann dadurch nicht an
 * einer Stelle aktualisiert und an der anderen vergessen werden.
 *
 * Preise sind als reine Zahlen hinterlegt, die Formatierung ("500 €",
 * "1.490 €") übernimmt formatEuro() zentral an einer Stelle.
 */

export const pricing = {
  standDatum: "12.07.2026",

  analyse: {
    onlinePraesenzAnalyse: {
      titel: "Online-Präsenz Analyse",
      betrag: 150,
      einheit: "einmalig",
      hinweis: "Bei Buchung einer Premium Website kostenlos enthalten.",
    },
    websiteGesundheitscheck: {
      titel: "Website-Gesundheitscheck",
      betrag: 100,
      einheit: "einmalig",
    },
    googleBusinessEinrichtung: {
      titel: "Google Business Profil Einrichtung",
      betrag: 150,
    },
    googleBusinessOptimierung: {
      titel: "Google Business Profil Optimierung",
      betrag: 100,
    },
  },

  websites: {
    starter: {
      titel: "Starter Website",
      beschreibung: "One-Pager · alle Infos auf einer Seite",
      betrag: 500,
      betragPraefix: "" as const,
      einheit: "einmalig",
      seiten: "1 Seite",
      dauer: "5–7 Tage",
      korrekturrunden: 2,
      supportTage: 14,
    },
    premium: {
      titel: "Premium Website",
      beschreibung: "Mehrseiter · je nach Wunsch & Umfang",
      betrag: 900,
      betragPraefix: "ab" as const,
      einheit: "einmalig",
      seiten: "Mehrere Seiten",
      dauer: "10–14 Tage",
      korrekturrunden: 4,
      supportTage: 30,
      analyseInklusive: true,
    },
  },

  technik: {
    domainHosting: { titel: "Domain & Hosting", betrag: 15, einheit: "/ Jahr" },
    wartung: {
      titel: "Wartungspaket",
      betrag: 60,
      einheit: "/ Monat",
      inklusive: "bis zu 4 Änderungen pro Monat",
    },
    einzelaenderung: { titel: "Einzeländerung", betrag: 50, einheit: "einmalig" },
  },

  branding: [
    { titel: "Flyer einseitig", beschreibung: "A5 oder A6 · inkl. 2 Korrekturschleifen", betrag: 100 },
    { titel: "Flyer zweiseitig", beschreibung: "A5 oder A6 · inkl. 2 Korrekturschleifen", betrag: 150 },
    { titel: "Roll-Up / Banner", beschreibung: "Druckfertige Datei · Druckkoordination optional", betrag: 200 },
    { titel: "Visitenkarte", beschreibung: "Beidseitig · PNG & druckfertige PDF", betrag: 100 },
    { titel: "Geschenkskarten / Gutscheine", beschreibung: "Druckfertiges Gutschein-Design", betrag: 100 },
    { titel: "Logo Design", beschreibung: "3 Entwürfe · Farbvarianten · PNG & PDF", betrag: 250 },
  ],

  social: [
    { titel: "Social Media Paket (5 Posts)", beschreibung: "Individuelle Content-Layouts im Brand-Design", betrag: 220 },
    { titel: "Story Templates (5 Stück)", beschreibung: "Canva-bearbeitbar · individuell angepasst", betrag: 150 },
    { titel: "Instagram Highlight Cover Set (6 Stück)", beschreibung: "Minimalistische Cover Icons für Instagram Highlights", betrag: 90 },
  ],

  pakete: [
    {
      titel: "Starter Branding",
      beschreibung: "Logo + Visitenkarte + 5 Social Media Posts",
      betrag: 550,
      statt: 570,
    },
    {
      titel: "Beauty Studio Komplett",
      beschreibung: "Premium Website + Logo + 10 Social Media Posts + Flyer + Google Business Profil",
      betrag: 1490,
      statt: 1790,
    },
    {
      titel: "Social Media Visibility Paket",
      beschreibung: "5 Social Media Posts + 5 Story Templates + 6 Highlight Covers",
      betrag: 420,
      statt: 460,
    },
  ],

  zahlung: {
    anzahlungProzent: 50,
    ratenzahlung: [
      { abBetrag: 900, raten: 3 },
      { abBetrag: 1400, raten: 4 },
    ],
    zinsfrei: true,
    websiteRabattProzent: 10,
  },

  // Digitale Erweiterungen: bewusst ohne festen Preis hinterlegt, da individuell
  // nach Aufwand kalkuliert. Weder hier noch im Prompt Preise/Details erfinden.
  erweiterungenPreishinweis: "Digitale Erweiterungen werden individuell nach Aufwand kalkuliert, es gibt keinen festen Standardpreis.",
  erweiterungen: [
    { titel: "Zusätzliche Leistungsseiten", beschreibung: "Für Studios mit vielen Behandlungen oder Angeboten." },
    { titel: "Mehrsprachige Website", beschreibung: "In mehreren Sprachen für internationale Kundinnen." },
    { titel: "Blog & CMS", beschreibung: "Inhalte und Beiträge später selbst verwalten." },
    { titel: "Einrichtung eines neuen Buchungssystems", beschreibung: "Komplette Einrichtung und Konfiguration nach Aufwand." },
    { titel: "Academy- oder Schulungsbereich", beschreibung: "Ideal für Ausbildungen, Kurse und Workshops." },
    { titel: "Online-Shop", beschreibung: "Produkte direkt über die Website verkaufen." },
    { titel: "Individuelle Sonderfunktionen", beschreibung: "Spezielle Wünsche und Funktionen nach Absprache." },
  ],
} as const;

export function formatEuro(betrag: number): string {
  return `${betrag.toLocaleString("de-AT")} €`;
}
