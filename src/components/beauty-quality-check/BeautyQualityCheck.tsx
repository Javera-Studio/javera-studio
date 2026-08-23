"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IntroStep } from "@/components/beauty-quality-check/IntroStep";
import { SingleChoiceStep } from "@/components/beauty-quality-check/SingleChoiceStep";
import { MultiChoiceStep } from "@/components/beauty-quality-check/MultiChoiceStep";
import { FreeTextStep } from "@/components/beauty-quality-check/FreeTextStep";
import { LeadFormStep } from "@/components/beauty-quality-check/LeadFormStep";
import { ThankYouStep } from "@/components/beauty-quality-check/ThankYouStep";
import { getVisibleQuestions } from "@/lib/data/beauty-quality-check";
import { trackBeautyQualityCheckEvent } from "@/lib/beauty-quality-check-tracking";
import type { BeautyQualityCheckAnswers } from "@/types/beauty-quality-check";

type Step = "intro" | "question" | "lead" | "thanks";

type State = {
  step: Step;
  answers: BeautyQualityCheckAnswers;
  questionIndex: number;
};

const initialState: State = {
  step: "intro",
  answers: {},
  questionIndex: 0,
};

/** Bringt den State nach einer Antwort zum nächsten sichtbaren Schritt oder ins Lead-Formular. */
function advance(state: State, nextAnswers: BeautyQualityCheckAnswers): State {
  const nextQuestions = getVisibleQuestions(nextAnswers);
  const isLast = state.questionIndex >= nextQuestions.length - 1;
  return {
    step: isLast ? "lead" : "question",
    answers: nextAnswers,
    questionIndex: isLast ? state.questionIndex : state.questionIndex + 1,
  };
}

export function BeautyQualityCheck() {
  const [state, setState] = useState<State>(initialState);
  const { step, answers, questionIndex } = state;
  const focusTargetRef = useRef<HTMLDivElement>(null);

  const hasTrackedViewedRef = useRef(false);
  const hasTrackedStartedRef = useRef(false);
  const hasTrackedFirstAnswerRef = useRef(false);
  const hasTrackedCompletedRef = useRef(false);

  const questions = useMemo(() => getVisibleQuestions(answers), [answers]);
  const currentQuestion = questions[questionIndex];
  const progressTotal = questions.length + 1;
  const progressCurrent = step === "lead" || step === "thanks" ? questions.length + 1 : questionIndex + 1;

  useEffect(() => {
    focusTargetRef.current?.focus();
  }, [step, questionIndex]);

  useEffect(() => {
    if (hasTrackedViewedRef.current) return;
    hasTrackedViewedRef.current = true;
    trackBeautyQualityCheckEvent("beauty_quality_check_viewed");
  }, []);

  useEffect(() => {
    if (step !== "lead" || hasTrackedCompletedRef.current) return;
    hasTrackedCompletedRef.current = true;
    trackBeautyQualityCheckEvent("beauty_quality_check_completed");
  }, [step]);

  function trackFirstAnswerOnce() {
    if (hasTrackedFirstAnswerRef.current) return;
    hasTrackedFirstAnswerRef.current = true;
    trackBeautyQualityCheckEvent("beauty_quality_check_first_answer");
  }

  function startCheck() {
    if (!hasTrackedStartedRef.current) {
      hasTrackedStartedRef.current = true;
      trackBeautyQualityCheckEvent("beauty_quality_check_started");
    }
    setState((s) => ({ ...s, step: "question" }));
  }

  function selectSingle(id: string) {
    trackFirstAnswerOnce();
    setState((s) => {
      const q = getVisibleQuestions(s.answers)[s.questionIndex];
      if (!q || q.type !== "single") return s;
      const nextAnswers = { ...s.answers, [q.id]: id };
      const needsFollowUp = q.followUpText?.whenOptionId === id;
      if (needsFollowUp) return { ...s, answers: nextAnswers };
      return advance(s, nextAnswers);
    });
  }

  function toggleMulti(id: string) {
    trackFirstAnswerOnce();
    setState((s) => {
      const q = getVisibleQuestions(s.answers)[s.questionIndex];
      if (!q || q.type !== "multi") return s;
      const current = Array.isArray(s.answers[q.id]) ? (s.answers[q.id] as string[]) : [];
      const isSelected = current.includes(id);
      let next: string[];
      if (isSelected) {
        next = current.filter((x) => x !== id);
      } else {
        if (q.maxSelections && current.length >= q.maxSelections) return s;
        next = [...current, id];
      }
      return { ...s, answers: { ...s.answers, [q.id]: next } };
    });
  }

  function setFollowUpText(questionId: string, value: string) {
    setState((s) => ({ ...s, answers: { ...s.answers, [`${questionId}__text`]: value } }));
  }

  function setFreeText(value: string) {
    setState((s) => {
      const q = getVisibleQuestions(s.answers)[s.questionIndex];
      if (!q) return s;
      return { ...s, answers: { ...s.answers, [q.id]: value } };
    });
  }

  function continueFromCurrent() {
    trackFirstAnswerOnce();
    setState((s) => advance(s, s.answers));
  }

  function goBack() {
    setState((s) => {
      if (s.step === "lead") {
        const visible = getVisibleQuestions(s.answers);
        return { ...s, step: "question", questionIndex: Math.max(0, visible.length - 1) };
      }
      if (s.step === "question") {
        if (s.questionIndex > 0) return { ...s, questionIndex: s.questionIndex - 1 };
        return { ...s, step: "intro" };
      }
      return s;
    });
  }

  function handleLeadSubmitted() {
    trackBeautyQualityCheckEvent("beauty_quality_check_lead_submitted");
    setState((s) => ({ ...s, step: "thanks" }));
  }

  const websiteUrlAnswer = answers["has-website__text"];
  const prefillWebsite = typeof websiteUrlAnswer === "string" ? websiteUrlAnswer : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border/60">
        <div className="max-w-3xl mx-auto px-6 h-28 flex items-center justify-center">
          <Link href="/" aria-label="Javera Studio – zur Startseite">
            <Image
              src="/Javera.logo.rund.png"
              alt="Javera Studio"
              width={96}
              height={96}
              className="h-20 w-20"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12 sm:py-16">
        <div ref={focusTargetRef} tabIndex={-1} className="w-full outline-none">
          {step === "intro" && <IntroStep onStart={startCheck} />}

          {step === "question" && currentQuestion?.type === "single" && (
            <SingleChoiceStep
              question={currentQuestion}
              options={currentQuestion.options}
              selectedId={answers[currentQuestion.id] as string | undefined}
              onSelect={selectSingle}
              onBack={goBack}
              progressCurrent={progressCurrent}
              progressTotal={progressTotal}
              followUp={
                currentQuestion.followUpText
                  ? {
                      value: (answers[`${currentQuestion.id}__text`] as string | undefined) ?? "",
                      onChange: (value) => setFollowUpText(currentQuestion.id, value),
                      onContinue: continueFromCurrent,
                    }
                  : undefined
              }
            />
          )}

          {step === "question" && currentQuestion?.type === "multi" && (
            <MultiChoiceStep
              question={currentQuestion}
              selectedIds={(answers[currentQuestion.id] as string[] | undefined) ?? []}
              onToggle={toggleMulti}
              followUpValue={(answers[`${currentQuestion.id}__text`] as string | undefined) ?? ""}
              onFollowUpChange={(value) => setFollowUpText(currentQuestion.id, value)}
              onContinue={continueFromCurrent}
              onBack={goBack}
              progressCurrent={progressCurrent}
              progressTotal={progressTotal}
            />
          )}

          {step === "question" && currentQuestion?.type === "text" && (
            <FreeTextStep
              question={currentQuestion}
              value={(answers[currentQuestion.id] as string | undefined) ?? ""}
              onChange={setFreeText}
              onContinue={continueFromCurrent}
              onBack={goBack}
              progressCurrent={progressCurrent}
              progressTotal={progressTotal}
            />
          )}

          {step === "lead" && (
            <LeadFormStep
              answers={answers}
              prefillWebsite={prefillWebsite}
              onBack={goBack}
              onSubmitted={handleLeadSubmitted}
            />
          )}

          {step === "thanks" && <ThankYouStep />}
        </div>
      </main>

      {(step === "lead" || step === "thanks") && (
        <footer className="py-6 text-center text-xs text-muted-foreground">
          <Link href="/impressum" className="hover:text-ink transition-colors">
            Impressum
          </Link>
          <span className="mx-2">·</span>
          <Link href="/datenschutz" className="hover:text-ink transition-colors">
            Datenschutz
          </Link>
        </footer>
      )}
    </div>
  );
}
