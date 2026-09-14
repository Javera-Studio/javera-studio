import Image from "next/image";
import { testimonials, TestimonialCard } from "@/components/Testimonials";

/**
 * Echtes Kundenprojekt Anita Brows & Lashes auf /meine-arbeit. Dient als
 * wiederverwendbares Muster dafür, wie künftige echte Kundenprojekte auf dieser Seite
 * etwas ausführlicher als auf der Startseite, aber weiterhin kompakt (kein langer
 * Case-Study-Text) dargestellt werden: großes Projektvisual, kurze Ausgangssituation/
 * Umsetzung, wenige Projekt-Facts, ein hervorgehobener Designgedanke, die echte
 * Kundenstimme (wiederverwendet aus src/components/Testimonials.tsx statt dupliziert)
 * und ein Link zur Live-Website.
 */
const projectFacts = [
  "Kompletter Website-Relaunch",
  "Individueller One-Pager",
  "Separate Preisseite",
  "Neue Domain & technische Einrichtung",
  "Mobile Optimierung",
  "SEO-Grundoptimierung",
  "Bestehende Terminbuchung integriert",
];

export function AnitaBrowsAndLashes() {
  const anitaTestimonial = testimonials.find((t) => t.name === "Anita Lakatos")!;

  return (
    <section id="anita-brows-lashes" className="py-12 md:py-16 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Website-Relaunch · Lash &amp; Brow Studio in Wien</div>
        <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Anita Brows &amp; Lashes</h2>

        <div className="reveal mt-8 rounded-[1.5rem] overflow-hidden">
          <Image
            src="/anita.visual.png"
            alt="Editorial-Collage der Website anitabrowsandlashes.at mit mehreren Seitenausschnitten"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>

        <div className="mt-10 grid md:grid-cols-[3fr_2fr] gap-10 md:gap-14">
          <div>
            <p className="reveal text-muted-foreground text-lg leading-relaxed">
              Anita hatte bereits eine Website, wünschte sich für ihr Studio aber einen komplett neuen Online-Auftritt – moderner, hochwertiger und stärker auf ihre heutige Spezialisierung auf Lashes &amp; Brows abgestimmt.
            </p>
            <p className="reveal mt-4 text-muted-foreground text-lg leading-relaxed">
              Entstanden ist ein individuell gestalteter One-Pager mit zusätzlicher Preisseite, neuer Domain und einem klaren, editorialen Design.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Im Projekt enthalten</p>
            <div className="flex flex-wrap gap-2">
              {projectFacts.map((fact) => (
                <span key={fact} className="text-[11px] uppercase tracking-wide px-3 py-1 rounded-full bg-cream text-ink/70 border border-border/50">
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="reveal mt-10 font-script text-mauve-dark text-2xl md:text-3xl leading-snug max-w-2xl">
          Eine Website muss nicht groß sein, um hochwertig zu wirken. Entscheidend ist, dass Struktur, Design und Inhalt genau zum Studio passen.
        </p>

        <div className="reveal mt-10 max-w-2xl">
          <TestimonialCard testimonial={anitaTestimonial} />
        </div>

        <a
          href="https://www.anitabrowsandlashes.at/"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium w-fit"
        >
          Website ansehen <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
