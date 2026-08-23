import type {
  BeautyQualityCheckAnswers,
  BeautyQualityCheckQuestion,
} from "@/types/beauty-quality-check";

/**
 * Fragenkatalog des Beauty-Qualitätschecks (/beauty-qualitaetscheck).
 * Zielgruppe: etablierte Beauty-Unternehmerinnen, deren Online-Auftritt nicht
 * mehr zur heutigen Qualität ihres Studios passt. Anders als /studio-check
 * gibt es hier keinen automatischen Score – die Antworten werden von Jagoda
 * vollständig manuell ausgewertet, ohne automatische Lead-Priorisierung.
 *
 * Fragen hier ändern/ergänzen, um Texte und Optionen anzupassen. Die
 * Reihenfolge in diesem Array bestimmt die Reihenfolge im Check.
 */
export const beautyQualityCheckQuestions: BeautyQualityCheckQuestion[] = [
  // Block 1 – Dein Studio heute
  {
    id: "studio-duration",
    type: "single",
    question: "Wie lange gibt es dein Studio bzw. deine Selbstständigkeit bereits?",
    options: [
      { id: "gruendung", label: "Noch in Gründung" },
      { id: "unter-2", label: "Unter 2 Jahren" },
      { id: "2-5", label: "2–5 Jahre" },
      { id: "5-10", label: "5–10 Jahre" },
      { id: "mehr-als-10", label: "Mehr als 10 Jahre" },
    ],
  },
  {
    id: "current-offerings",
    type: "multi",
    question: "Welche Bereiche bietest du aktuell an?",
    options: [
      { id: "kosmetik", label: "Klassische Kosmetik / Hautbehandlungen" },
      { id: "apparativ", label: "Apparative Kosmetik" },
      { id: "pmu", label: "Permanent Make-up" },
      { id: "laser", label: "Laser / dauerhafte Haarentfernung" },
      { id: "lashes-brows", label: "Lashes / Brows" },
      { id: "naegel", label: "Nägel" },
      { id: "fusspflege", label: "Fußpflege" },
      { id: "koerper", label: "Körperbehandlungen" },
      { id: "academy", label: "Schulungen / Academy" },
      { id: "andere", label: "Andere" },
    ],
    followUpText: {
      whenOptionId: "andere",
      label: "Was bietest du noch an? (optional)",
      placeholder: "z. B. Wimpernverlängerung, Bridal Styling …",
    },
  },
  {
    id: "offering-development",
    type: "multi",
    question: "Wie hat sich dein Angebot in den letzten Jahren entwickelt?",
    options: [
      { id: "mehr-leistungen", label: "Ich biete heute deutlich mehr Leistungen an" },
      { id: "spezialisiert", label: "Ich habe mich stärker spezialisiert" },
      { id: "hoeheres-niveau", label: "Meine Preise bzw. mein Qualitätsniveau sind gestiegen" },
      { id: "erweitert", label: "Ich habe mein Studio erweitert oder modernisiert" },
      { id: "schulungen", label: "Ich biete inzwischen Schulungen an" },
      { id: "gleich", label: "Mein Angebot ist ungefähr gleich geblieben" },
    ],
  },

  // Block 2 – Deine Website
  {
    id: "has-website",
    type: "single",
    question: "Hast du aktuell eine eigene Website?",
    options: [
      { id: "ja", label: "Ja" },
      { id: "nein", label: "Nein" },
      { id: "im-aufbau", label: "Sie ist gerade im Aufbau" },
    ],
    followUpText: {
      whenOptionId: "ja",
      label: "Wie lautet deine Website-URL?",
      placeholder: "z. B. deinestudio.at",
    },
  },
  {
    id: "website-origin",
    type: "single",
    question: "Wie ist deine Website entstanden?",
    showWhen: (a) => a["has-website"] === "ja",
    options: [
      { id: "baukasten", label: "Selbst mit einem Baukastensystem erstellt" },
      { id: "bekannte", label: "Von Freunden / Bekannten erstellt" },
      { id: "agentur", label: "Von einem Webdesigner / einer Agentur erstellt" },
      { id: "weiss-nicht", label: "Ich weiß es nicht mehr genau" },
      { id: "sonstiges", label: "Sonstiges" },
    ],
  },
  {
    id: "website-last-update",
    type: "single",
    question: "Wann wurde deine Website zuletzt wirklich grundlegend überarbeitet?",
    showWhen: (a) => a["has-website"] === "ja",
    options: [
      { id: "12-monate", label: "Innerhalb der letzten 12 Monate" },
      { id: "1-3-jahre", label: "Vor 1–3 Jahren" },
      { id: "3-5-jahre", label: "Vor 3–5 Jahren" },
      { id: "mehr-als-5", label: "Vor mehr als 5 Jahren" },
      { id: "kaum", label: "Eigentlich seit der Erstellung kaum" },
    ],
  },
  {
    id: "website-reflects-offer",
    type: "single",
    question: "Spiegelt deine Website dein aktuelles Angebot vollständig wider?",
    showWhen: (a) => a["has-website"] === "ja",
    options: [
      { id: "vollstaendig", label: "Ja, vollständig" },
      { id: "groesstenteils", label: "Größtenteils" },
      { id: "teilweise", label: "Teilweise" },
      { id: "nein", label: "Nein, einige Leistungen fehlen oder sind veraltet" },
    ],
  },
  {
    id: "website-matches-level",
    type: "single",
    question:
      "Wenn du deine Website heute selbst als Neukundin sehen würdest – würde sie für dich zum heutigen Niveau deines Studios passen?",
    showWhen: (a) => a["has-website"] === "ja",
    emphasized: true,
    options: [
      { id: "ja-absolut", label: "Ja, absolut" },
      { id: "groesstenteils", label: "Größtenteils" },
      { id: "unsicher", label: "Ich bin unsicher" },
      { id: "eher-nicht", label: "Eher nicht" },
      { id: "nein", label: "Nein" },
    ],
  },

  // Block 3 – Wahrnehmung & Qualität
  {
    id: "perception-statement",
    type: "single",
    question: "Welche Aussage trifft auf deinen Online-Auftritt am ehesten zu?",
    options: [
      { id: "hochwertig", label: "Er wirkt genauso hochwertig wie mein Studio" },
      { id: "okay", label: "Er ist grundsätzlich okay, könnte aber moderner wirken" },
      { id: "zeigt-nicht-richtig", label: "Er zeigt meine Erfahrung und Qualität nicht richtig" },
      { id: "schwaecher", label: "Er wirkt deutlich schwächer als mein tatsächliches Studio" },
      { id: "schwer-zu-sagen", label: "Ich kann das selbst schwer beurteilen" },
    ],
  },
  {
    id: "what-works-well",
    type: "multi",
    question: "Was vermittelt dein Online-Auftritt aktuell gut?",
    options: [
      { id: "erfahrung", label: "Meine Erfahrung" },
      { id: "qualitaet", label: "Die Qualität meiner Arbeit" },
      { id: "studio-atmosphaere", label: "Mein Studio / meine Atmosphäre" },
      { id: "spezialisierung", label: "Meine Spezialisierung" },
      { id: "leistungen", label: "Meine Leistungen" },
      { id: "preise", label: "Meine Preise / mein Qualitätsniveau" },
      { id: "persoenlichkeit", label: "Meine Persönlichkeit" },
      { id: "vertrauen", label: "Kundenstimmen / Vertrauen" },
      { id: "academy", label: "Schulungen / Academy" },
      { id: "nichts", label: "Eigentlich nichts davon so richtig" },
    ],
  },
  {
    id: "whats-missing",
    type: "multi",
    question: "Was fehlt dir aktuell am meisten?",
    maxSelections: 3,
    options: [
      { id: "modernes-design", label: "Moderneres Design" },
      { id: "klare-struktur", label: "Klarere Struktur" },
      { id: "profi-texte", label: "Professionellere Texte" },
      { id: "aktuelle-bilder", label: "Aktuelle Bilder" },
      { id: "leistungsdarstellung", label: "Bessere Darstellung meiner Leistungen" },
      { id: "vertrauen-expertise", label: "Mehr Vertrauen / Expertise" },
      { id: "schulungsdarstellung", label: "Bessere Darstellung meiner Schulungen" },
      { id: "kontakt-buchung", label: "Einfachere Kontakt- oder Buchungsmöglichkeit" },
      { id: "google-sichtbarkeit", label: "Bessere Google-Sichtbarkeit" },
      { id: "weiss-nicht", label: "Ich weiß es nicht genau" },
    ],
  },

  // Block 4 – Kundinnenperspektive
  {
    id: "first-touchpoint",
    type: "multi",
    question: "Stell dir vor, eine neue Kundin kennt dich noch überhaupt nicht. Was sieht sie online zuerst?",
    options: [
      { id: "website", label: "Meine Website" },
      { id: "instagram", label: "Instagram" },
      { id: "facebook", label: "Facebook" },
      { id: "google-profil", label: "Google-Unternehmensprofil" },
      { id: "bewertungen", label: "Bewertungen" },
      { id: "buchungsplattform", label: "Buchungsplattform" },
      { id: "weiss-nicht", label: "Ich weiß es nicht" },
    ],
  },
  {
    id: "clarity-why-choose-you",
    type: "single",
    question: "Kann eine neue Interessentin online schnell erkennen, warum sie gerade zu dir kommen sollte?",
    options: [
      { id: "sehr-klar", label: "Ja, sehr klar" },
      { id: "groesstenteils", label: "Größtenteils" },
      { id: "teilweise", label: "Teilweise" },
      { id: "eher-nicht", label: "Eher nicht" },
      { id: "nein", label: "Nein" },
    ],
  },
  {
    id: "trust-visible",
    type: "single",
    question: "Sind Vertrauen und Expertise sichtbar, ohne dass jemand erst lange suchen muss?",
    options: [
      { id: "ja", label: "Ja" },
      { id: "teilweise", label: "Teilweise" },
      { id: "eher-nicht", label: "Eher nicht" },
      { id: "nein", label: "Nein" },
      { id: "schwer-zu-beurteilen", label: "Schwer zu beurteilen" },
    ],
  },

  // Block 5 – Deine Entwicklung
  {
    id: "biggest-change",
    type: "text",
    question: "Was hat sich in deinem Studio in den letzten Jahren am stärksten verändert?",
    placeholder: "Zum Beispiel: neue Leistungen, mehr Erfahrung, höheres Preisniveau, neues Studio, Spezialisierung, Schulungen …",
  },
  {
    id: "biggest-frustration",
    type: "text",
    question: "Was stört dich aktuell selbst am meisten an deinem Online-Auftritt?",
    placeholder: "Was würdest du selbst am liebsten verändern?",
    optional: true,
  },

  // Block 6 – Zukunft / Qualifizierung
  {
    id: "relaunch-timing",
    type: "single",
    question: "Möchtest du deinen Online-Auftritt grundsätzlich in nächster Zeit verändern?",
    options: [
      { id: "moeglichst-bald", label: "Ja, möglichst bald" },
      { id: "1-3-monate", label: "In den nächsten 1–3 Monaten" },
      { id: "vielleicht-spaeter", label: "Vielleicht später" },
      { id: "erst-informieren", label: "Ich möchte mich erst einmal informieren" },
    ],
  },
  {
    id: "relaunch-priorities",
    type: "multi",
    question: "Wenn dein Online-Auftritt wirklich zu deinem heutigen Studio passen würde – was wäre dir dabei am wichtigsten?",
    maxSelections: 3,
    options: [
      { id: "aussenwirkung", label: "Hochwertigere Außenwirkung" },
      { id: "vertrauen-neukundinnen", label: "Mehr Vertrauen bei Neukundinnen" },
      { id: "leistungen-praesentieren", label: "Meine Leistungen besser präsentieren" },
      { id: "erfahrung-zeigen", label: "Meine Erfahrung stärker zeigen" },
      { id: "schulungen-praesentieren", label: "Schulungen professioneller präsentieren" },
      { id: "mehr-buchungen", label: "Mehr Anfragen / Buchungen" },
      { id: "google-sichtbarkeit", label: "Besser bei Google gefunden werden" },
      { id: "unabhaengig-social-media", label: "Weniger abhängig von Social Media sein" },
    ],
  },
  {
    id: "budget-realistic",
    type: "single",
    question:
      "Ein kompletter individueller Website-Relaunch bei Javera Studio kostet 1.500 € Fixpreis. Wäre diese Investition grundsätzlich realistisch für dich, wenn Konzept und Umsetzung zu deinem Studio passen?",
    options: [
      { id: "ja", label: "Ja" },
      { id: "ja-mehr-infos", label: "Grundsätzlich ja, ich möchte vorher mehr erfahren" },
      { id: "eher-nicht", label: "Aktuell eher nicht" },
    ],
  },
];

export function getVisibleQuestions(answers: BeautyQualityCheckAnswers): BeautyQualityCheckQuestion[] {
  return beautyQualityCheckQuestions.filter((q) => !q.showWhen || q.showWhen(answers));
}

