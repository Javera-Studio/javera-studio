"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "Wenn ich Sterne vergeben könnte, dann 10 von 5. Jagoda hat mich angeschrieben wegen meiner Homepage. Sie hat der Himmel geschickt! Ich war schon lange unglücklich mit meiner alten und hatte keine Zeit und Kontakte für eine neue Homepage. Jagoda hat meine Vorstellungen so was von übertroffen, alles top! Du hast mich und mein Studio so schnell, ästhetisch, authentisch und professionell umgesetzt, mir fehlen noch immer die Worte und ich hab Gänsehaut, wenn ich auf faceandmore klicke! Ich kann Javera nur wärmstens weiterempfehlen.",
    name: "Michaela Kornherr",
    studio: "faceandmore.at",
    initial: "M",
  },
  {
    quote: "Absolut zu empfehlen! Ich habe lange keine Website gehabt – ich habe alles der lieben Jagoda anvertraut und bin mega glücklich mit dem Ergebnis. Professionell, schnell und zuverlässig! Sie hat mich super unterstützt und war bei jeder Frage sofort da. Danke dir, liebe Jagoda!",
    name: "Paula Venc",
    studio: "paulavenc.at",
    initial: "P",
  },
  {
    quote: "Absolute Herzensempfehlung! Nach 8 Jahren Selbstständigkeit habe ich endlich jemanden gefunden, der meine Vorstellungen zu 100 % verstanden und perfekt umgesetzt hat. Von der ersten Minute an wusste ich, dass ich in den richtigen Händen bin. Sie hat nicht einfach nur eine Webseite erstellt, sondern meine Vision sichtbar gemacht und meinem Studio einen professionellen Online-Auftritt gegeben, der zu 100 % zu mir passt.",
    name: "Danijela Boskovic",
    studio: "Divine Beauty & Nails Studio",
    initial: "D",
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (idx: number) => {
    if (idx === active) return;
    setVisible(false);
    setTimeout(() => { setActive(idx); setVisible(true); }, 300);
  };
  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((active + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Stimmen meiner Kundinnen</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Was Kundinnen sagen</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <button type="button" onClick={prev} aria-label="Vorherige Bewertung" className="absolute -left-5 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border/60 bg-background flex items-center justify-center text-ink hover:bg-peach-soft transition z-10 shadow-sm">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M12.5 5l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" onClick={next} aria-label="Nächste Bewertung" className="absolute -right-5 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border/60 bg-background flex items-center justify-center text-ink hover:bg-peach-soft transition z-10 shadow-sm">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M7.5 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="rounded-3xl bg-background border border-border/60 p-8 md:p-12 shadow-sm" style={{ transition: "opacity 300ms ease", opacity: visible ? 1 : 0 }}>
              <div className="flex items-center gap-1 mb-1">{[0,1,2,3,4].map((i) => <StarIcon key={i} />)}</div>
              <p className="text-xs text-muted-foreground mb-6">5 von 5 Sternen · Google Bewertung</p>
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-relaxed">„{t.quote}"</blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-peach-soft flex items-center justify-center text-ink font-serif text-base flex-shrink-0">{t.initial}</div>
                <div>
                  <p className="font-medium text-ink text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.studio}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Bewertung ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: i === active ? "1.75rem" : "0.375rem",
                  backgroundColor: i === active ? "var(--ink)" : "color-mix(in oklab, var(--ink) 25%, transparent)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
