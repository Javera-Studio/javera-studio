import type { ScoredQuestion, Segment } from "@/types/studio-check";
import { websiteQuestions } from "@/lib/data/studio-check/website-questions";
import { socialQuestions } from "@/lib/data/studio-check/social-questions";
import { foundingQuestions } from "@/lib/data/studio-check/founding-questions";

export {
  categoryConfig,
  ctaConfig,
  goalFocusPhrases,
  goalOptions,
  scoreBandsDefault,
  scoreBandsFounding,
  segmentOptions,
} from "@/lib/data/studio-check/shared";

const questionsBySegment: Record<Segment, ScoredQuestion[]> = {
  website: websiteQuestions,
  social: socialQuestions,
  founding: foundingQuestions,
};

export function getQuestionsForSegment(segment: Segment): ScoredQuestion[] {
  return questionsBySegment[segment];
}
