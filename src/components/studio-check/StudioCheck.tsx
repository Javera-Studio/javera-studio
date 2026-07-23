"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IntroStep } from "@/components/studio-check/IntroStep";
import { SegmentStep } from "@/components/studio-check/SegmentStep";
import { QuestionStep } from "@/components/studio-check/QuestionStep";
import { ResultView } from "@/components/studio-check/ResultView";
import { LeadFormStep } from "@/components/studio-check/LeadFormStep";
import { getQuestionsForSegment, goalOptions } from "@/lib/data/studio-check";
import { calculateResult } from "@/lib/studio-check-scoring";
import type { Goal, Segment } from "@/types/studio-check";

type Step = "intro" | "segment" | "goal" | "question" | "result" | "lead";

const initialState = {
  step: "intro" as Step,
  segment: null as Segment | null,
  goal: null as Goal | null,
  answers: {} as Record<string, string>,
  questionIndex: 0,
};

export function StudioCheck() {
  const [state, setState] = useState(initialState);
  const { step, segment, goal, answers, questionIndex } = state;
  const focusTargetRef = useRef<HTMLDivElement>(null);

  const questions = useMemo(() => (segment ? getQuestionsForSegment(segment) : []), [segment]);
  const totalSteps = 2 + (questions.length || 9);
  const currentQuestion = questions[questionIndex];

  useEffect(() => {
    focusTargetRef.current?.focus();
  }, [step, questionIndex]);

  function selectSegment(nextSegment: Segment) {
    setState((s) => ({ ...s, segment: nextSegment, step: "goal" }));
  }

  function selectGoal(nextGoal: Goal) {
    setState((s) => ({ ...s, goal: nextGoal, step: "question", questionIndex: 0 }));
  }

  function selectAnswer(answerId: string) {
    if (!currentQuestion) return;
    setState((s) => {
      const nextAnswers = { ...s.answers, [currentQuestion.id]: answerId };
      const isLast = s.questionIndex >= questions.length - 1;
      return {
        ...s,
        answers: nextAnswers,
        step: isLast ? "result" : "question",
        questionIndex: isLast ? s.questionIndex : s.questionIndex + 1,
      };
    });
  }

  function goBack() {
    setState((s) => {
      if (s.step === "goal") return { ...s, step: "segment" };
      if (s.step === "question") {
        if (s.questionIndex > 0) return { ...s, questionIndex: s.questionIndex - 1 };
        return { ...s, step: "goal" };
      }
      return s;
    });
  }

  function restart() {
    setState(initialState);
  }

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
          {step === "intro" && <IntroStep onStart={() => setState((s) => ({ ...s, step: "segment" }))} />}

          {step === "segment" && (
            <SegmentStep selected={segment} onSelect={selectSegment} progressCurrent={1} progressTotal={totalSteps} />
          )}

          {step === "goal" && (
            <QuestionStep
              question="Was möchtest du mit deinem Online-Auftritt hauptsächlich erreichen?"
              options={goalOptions}
              selectedId={goal ?? undefined}
              onSelect={(id) => selectGoal(id as Goal)}
              onBack={goBack}
              progressCurrent={2}
              progressTotal={totalSteps}
            />
          )}

          {step === "question" && currentQuestion && (
            <QuestionStep
              question={currentQuestion.question}
              options={currentQuestion.answers}
              selectedId={answers[currentQuestion.id]}
              onSelect={selectAnswer}
              onBack={goBack}
              progressCurrent={3 + questionIndex}
              progressTotal={totalSteps}
            />
          )}

          {step === "result" && segment && goal && (
            <ResultView
              result={calculateResult(segment, goal, answers, questions)}
              onRestart={restart}
              onOpenLeadForm={() => setState((s) => ({ ...s, step: "lead" }))}
            />
          )}

          {step === "lead" && segment && goal && (
            <LeadFormStep
              segment={segment}
              goal={goal}
              answers={answers}
              onBack={() => setState((s) => ({ ...s, step: "result" }))}
            />
          )}
        </div>
      </main>

      {step === "lead" && (
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
