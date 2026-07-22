export type Segment = "website" | "social" | "founding";

export type Category = "klarheit" | "vertrauen" | "buchung" | "markenauftritt" | "auffindbarkeit";

export type Goal =
  | "neukundinnen"
  | "professionalitaet"
  | "leistungen"
  | "buchung"
  | "abgrenzung"
  | "unsicher";

export type Priority = "hoch" | "mittel";

export type ChoiceOption = {
  id: string;
  label: string;
  description?: string;
};

/** Eine Antwortmöglichkeit innerhalb einer bewerteten Frage. points: 0–3, 3 = stärkste Antwort. */
export type AnswerOption = {
  id: string;
  label: string;
  points: number;
  /** Nur bei schwachen Antworten (points 0–1): warum hier Potenzial liegt. */
  explanation?: string;
  /** Nur bei schwachen Antworten (points 0–1): konkrete nächste Handlung. */
  recommendation?: string;
  priority?: Priority;
};

export type ScoredQuestion = {
  id: string;
  category: Category;
  question: string;
  answers: AnswerOption[];
};

export type CategoryConfig = {
  label: string;
  weight: number;
};

export type CategoryResult = {
  category: Category;
  label: string;
  percent: number;
};

export type Recommendation = {
  text: string;
  priority: Priority;
  category: Category;
};

export type ScoreBand = {
  min: number;
  text: string;
};

export type CtaConfig = {
  question: string;
  buttonLabel: string;
  href: string;
};

export type StudioCheckResult = {
  segment: Segment;
  goal: Goal;
  score: number;
  categories: CategoryResult[];
  strongest: CategoryResult;
  weakest: CategoryResult;
  recommendations: Recommendation[];
  intro: string;
};

/** Request-Body für POST /api/studio-check-lead. answers wird serverseitig neu ausgewertet, nicht dem Client vertraut. */
export type StudioCheckLeadPayload = {
  firstName: string;
  email: string;
  contact?: string;
  message?: string;
  consent: boolean;
  segment: Segment;
  goal: Goal;
  answers: Record<string, string>;
  hp_company?: string;
};
