"use client";

import { useState } from "react";

export function PromptBox({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="my-8 rounded-2xl border border-mauve/30 bg-ink text-cream overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-cream/10">
        <span className="text-xs uppercase tracking-[0.15em] text-cream/60">Prompt zum Kopieren</span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs px-3 py-1.5 rounded-full border border-cream/30 hover:bg-cream/10 transition"
        >
          {copied ? "Kopiert ✓" : "Kopieren"}
        </button>
      </div>
      <pre className="px-5 py-5 text-sm leading-relaxed whitespace-pre-wrap font-sans text-cream/90">
        {text}
      </pre>
    </div>
  );
}
