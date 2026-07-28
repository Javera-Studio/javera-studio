import type {
  Category,
  CategoryConfig,
  ChoiceOption,
  CtaConfig,
  Goal,
  ScoreBand,
  Segment,
} from "@/types/studio-check";

/**
 * Fünf einheitliche Kategorien für alle drei Pfade (Website, Social Media, Gründung).
 * Website-/UX-Fragen bekommen keine eigene Kategorie, sondern fließen thematisch in
 * eine dieser fünf ein (z. B. Buchungsweg auf der Website → "buchung").
 */
export const categoryConfig: Record<Category, CategoryConfig> = {
  klarheit: { label: "Klarheit & Positionierung", weight: 25 },
  vertrauen: { label: "Vertrauen", weight: 25 },
  buchung: { label: "Buchung & Kontakt", weight: 20 },
  markenauftritt: { label: "Markenauftritt", weight: 15 },
  auffindbarkeit: { label: "Auffindbarkeit", weight: 15 },
};

export const segmentOptions: (ChoiceOption & { id: Segment })[] = [
  {
    id: "website",
    label: "Ich habe bereits eine Website.",
    description: "Ich möchte wissen, ob sie mein Studio professionell präsentiert und Buchungen unterstützt.",
  },
  {
    id: "social",
    label: "Ich nutze hauptsächlich Instagram oder Social Media.",
    description: "Ich möchte wissen, wie überzeugend mein gesamter Online-Auftritt ist.",
  },
  {
    id: "founding",
    label: "Ich starte gerade oder baue mein Studio neu auf.",
    description: "Ich möchte wissen, welche Grundlagen ich zuerst brauche.",
  },
];

export const goalOptions: (ChoiceOption & { id: Goal })[] = [
  { id: "neukundinnen", label: "Mehr passende Neukundinnen gewinnen" },
  { id: "professionalitaet", label: "Professioneller und hochwertiger wirken" },
  { id: "leistungen", label: "Meine Leistungen verständlicher präsentieren" },
  { id: "buchung", label: "Terminbuchungen vereinfachen" },
  { id: "abgrenzung", label: "Mich klarer von anderen Studios unterscheiden" },
  { id: "unsicher", label: "Ich bin mir noch nicht sicher" },
];

/**
 * Formulierung für den personalisierten Einstiegssatz im Ergebnis:
 * "Da dein Hauptziel {focusPhrase} ist, solltest du zuerst an {Kategorie} arbeiten."
 * "unsicher" hat keine Phrase – dafür gibt es einen generischen Einstiegssatz.
 */
export const goalFocusPhrases: Record<Goal, string | null> = {
  neukundinnen: "mehr passende Neukundinnen zu gewinnen",
  professionalitaet: "professioneller und hochwertiger zu wirken",
  leistungen: "deine Leistungen verständlicher zu präsentieren",
  buchung: "Terminbuchungen zu vereinfachen",
  abgrenzung: "dich klarer von anderen Studios zu unterscheiden",
  unsicher: null,
};

export const ctaConfig: Record<Segment, CtaConfig> = {
  website: {
    formTitle: "Erhalte jetzt deinen persönlichen Website-Kurzcheck",
    formSubtitle:
      "Fülle das kurze Formular aus. Ich schaue mir deine Website persönlich an und sende dir konkrete Empfehlungen.",
    buttonLabel: "Kostenlosen Website-Kurzcheck anfragen",
    href: "/#schreib-mir",
  },
  social: {
    formTitle: "Erhalte jetzt deine persönliche Webseiten-Vorschau",
    formSubtitle:
      "Fülle das kurze Formular aus. Ich zeige dir, wie eine professionelle Website deinen bestehenden Online-Auftritt optimal ergänzen kann.",
    buttonLabel: "Kostenlose Webseiten-Vorschau anfragen",
    href: "/#schreib-mir",
  },
  founding: {
    formTitle: "Erhalte jetzt deinen persönlichen Markenauftritt-Check",
    formSubtitle:
      "Fülle das kurze Formular aus. Ich unterstütze dich dabei, deinen Markenauftritt von Anfang an professionell und überzeugend aufzubauen.",
    buttonLabel: "Kostenlosen Markenauftritt-Check anfragen",
    href: "/#schreib-mir",
  },
};

/**
 * Kurze Einordnung des Gesamtscores. Für den Gründungspfad bewusst als
 * Startbereitschaft formuliert statt als Bewertung eines unfertigen Auftritts.
 * Absteigend nach "min" sortiert – das erste zutreffende Band wird verwendet.
 */
export const scoreBandsDefault: ScoreBand[] = [
  { min: 80, text: "Dein Auftritt wirkt bereits sehr überzeugend und schafft an vielen Stellen Vertrauen." },
  { min: 60, text: "Dein Auftritt ist auf einem guten Weg – an einigen Stellen bleibt aber noch Potenzial ungenutzt." },
  { min: 40, text: "Es gibt bereits eine gute Basis, in mehreren Bereichen könnte dein Auftritt aber klarer und überzeugender wirken." },
  { min: 0, text: "Aktuell bleibt an mehreren Stellen viel Potenzial ungenutzt – mit klaren nächsten Schritten lässt sich das gut verbessern." },
];

export const scoreBandsFounding: ScoreBand[] = [
  { min: 80, text: "Du bringst bereits sehr viele Grundlagen mit – dein Studio ist gut vorbereitet für den Start." },
  { min: 60, text: "Du hast schon eine solide Basis, ein paar Bausteine fehlen noch bis zum Start." },
  { min: 40, text: "Einige Grundlagen stehen bereits, andere brauchen vor dem Start noch etwas Aufmerksamkeit." },
  { min: 0, text: "Du stehst noch ganz am Anfang – das ist völlig normal und lässt sich Schritt für Schritt aufbauen." },
];
