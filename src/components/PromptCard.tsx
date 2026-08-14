"use client";

import { useState } from "react";
import type { PromptItem } from "@/lib/data/prompts";

const COLLAPSED_HEIGHT = 180;

export function PromptCard({ item }: { item: PromptItem }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(item.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <article
      id={item.id}
      className="scroll-mt-28 rounded-2xl border border-border/60 bg-background p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs uppercase tracking-[0.15em] font-semibold text-mauve bg-peach-soft px-3 py-1 rounded-full">
          {item.category}
        </span>
        <span className="text-sm text-muted-foreground">
          {String(item.number).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-serif text-xl md:text-2xl text-ink">{item.title}</h3>
      <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
        {item.description}
      </p>

      <div className="mt-6 rounded-2xl border border-mauve/30 bg-ink text-cream overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-cream/10">
          <span className="text-xs uppercase tracking-[0.15em] text-cream/60">
            Prompt zum Kopieren
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="text-xs px-3 py-1.5 rounded-full border border-cream/30 hover:bg-cream/10 transition"
          >
            {copied ? "Kopiert ✓" : "Prompt kopieren"}
          </button>
        </div>

        <div
          className="relative overflow-hidden transition-[max-height] duration-300 ease-out"
          style={{ maxHeight: expanded ? 4000 : COLLAPSED_HEIGHT }}
        >
          <pre className="px-5 py-5 text-sm leading-relaxed whitespace-pre-wrap font-sans text-cream/90">
            {item.prompt}
          </pre>
          {!expanded && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink to-transparent"
            />
          )}
        </div>

        <div className="border-t border-cream/10 px-5 py-3">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="text-xs font-medium text-cream/80 hover:text-cream transition"
          >
            {expanded ? "Prompt einklappen" : "Vollständigen Prompt anzeigen"}
          </button>
        </div>
      </div>
    </article>
  );
}
