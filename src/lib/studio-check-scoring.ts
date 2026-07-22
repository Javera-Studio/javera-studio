import {
  categoryConfig,
  goalFocusPhrases,
  scoreBandsDefault,
  scoreBandsFounding,
} from "@/lib/data/studio-check";
import type {
  Category,
  CategoryResult,
  Goal,
  Recommendation,
  ScoredQuestion,
  Segment,
  StudioCheckResult,
} from "@/types/studio-check";

const MAX_POINTS_PER_QUESTION = 3;

/** Reine Berechnungsfunktion: Antworten + Fragenkatalog -> vollständiges Ergebnis. Kein Server, keine Speicherung. */
export function calculateResult(
  segment: Segment,
  goal: Goal,
  answers: Record<string, string>,
  questions: ScoredQuestion[]
): StudioCheckResult {
  const pointsByCategory = new Map<Category, { earned: number; max: number }>();
  const recommendations: Recommendation[] = [];

  for (const q of questions) {
    const stats = pointsByCategory.get(q.category) ?? { earned: 0, max: 0 };
    stats.max += MAX_POINTS_PER_QUESTION;

    const answer = q.answers.find((a) => a.id === answers[q.id]);
    if (answer) {
      stats.earned += answer.points;
      if (answer.recommendation && answer.priority) {
        recommendations.push({ text: answer.recommendation, priority: answer.priority, category: q.category });
      }
    }
    pointsByCategory.set(q.category, stats);
  }

  const categories: CategoryResult[] = (Object.keys(categoryConfig) as Category[]).map((category) => {
    const stats = pointsByCategory.get(category) ?? { earned: 0, max: 0 };
    const percent = stats.max > 0 ? Math.round((stats.earned / stats.max) * 100) : 0;
    return { category, label: categoryConfig[category].label, percent };
  });

  const score = Math.round(
    categories.reduce((sum, c) => sum + c.percent * categoryConfig[c.category].weight, 0) / 100
  );

  const strongest = categories.reduce((a, b) => (b.percent > a.percent ? b : a));
  const weakest = categories.reduce((a, b) => (b.percent < a.percent ? b : a));

  const topRecommendations = dedupeByText(recommendations)
    .sort((a, b) => (a.priority === b.priority ? 0 : a.priority === "hoch" ? -1 : 1))
    .slice(0, 3);

  return {
    segment,
    goal,
    score,
    categories,
    strongest,
    weakest,
    recommendations: topRecommendations,
    intro: buildIntro(goal, weakest.label),
  };
}

export function getScoreBand(segment: Segment, score: number): string {
  const bands = segment === "founding" ? scoreBandsFounding : scoreBandsDefault;
  return bands.find((band) => score >= band.min)?.text ?? bands[bands.length - 1].text;
}

function dedupeByText(list: Recommendation[]): Recommendation[] {
  const seen = new Set<string>();
  return list.filter((r) => {
    if (seen.has(r.text)) return false;
    seen.add(r.text);
    return true;
  });
}

function buildIntro(goal: Goal, weakestLabel: string): string {
  const focusPhrase = goalFocusPhrases[goal];
  if (!focusPhrase) {
    return `Dein größtes Potenzial liegt aktuell im Bereich ${weakestLabel} – hier lohnt sich der erste Blick.`;
  }
  return `Da dein Hauptziel ${focusPhrase} ist, solltest du zuerst an ${weakestLabel} arbeiten.`;
}
