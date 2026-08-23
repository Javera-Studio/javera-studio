export type ChoiceOption = {
  id: string;
  label: string;
};

export type SingleChoiceQuestion = {
  id: string;
  type: "single";
  question: string;
  options: ChoiceOption[];
  /** Zusätzliches Freitextfeld, das erscheint, sobald diese Option gewählt wird. */
  followUpText?: {
    whenOptionId: string;
    label: string;
    placeholder?: string;
    optional?: boolean;
  };
  /** Diese Frage optisch etwas prominenter darstellen (kleiner Aha-Moment). */
  emphasized?: boolean;
  /** Überspringen, wenn diese Funktion anhand der bisherigen Antworten false liefert. */
  showWhen?: (answers: BeautyQualityCheckAnswers) => boolean;
};

export type MultiChoiceQuestion = {
  id: string;
  type: "multi";
  question: string;
  options: ChoiceOption[];
  maxSelections?: number;
  /** Zusätzliches Freitextfeld, das erscheint, sobald diese Option mit ausgewählt wird. */
  followUpText?: {
    whenOptionId: string;
    label: string;
    placeholder?: string;
  };
  showWhen?: (answers: BeautyQualityCheckAnswers) => boolean;
};

export type FreeTextQuestion = {
  id: string;
  type: "text";
  question: string;
  placeholder?: string;
  optional?: boolean;
  showWhen?: (answers: BeautyQualityCheckAnswers) => boolean;
};

export type BeautyQualityCheckQuestion = SingleChoiceQuestion | MultiChoiceQuestion | FreeTextQuestion;

/**
 * Antworten-Speicher des Checks.
 * - single-choice: string (Option-ID)
 * - multi-choice: string[] (Option-IDs)
 * - text / followUpText: string
 */
export type BeautyQualityCheckAnswers = Record<string, string | string[] | undefined>;

export type LeadPriority = "sehr-interessant" | "interessant" | "niedrig";

/** Request-Body für POST /api/beauty-quality-check-lead. answers wird serverseitig neu ausgewertet. */
export type BeautyQualityCheckLeadPayload = {
  firstName: string;
  studioName: string;
  email: string;
  instagram?: string;
  website?: string;
  region?: string;
  consent: boolean;
  answers: BeautyQualityCheckAnswers;
  hp_company?: string;
};
