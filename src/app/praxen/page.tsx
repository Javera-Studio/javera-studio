import type { Metadata } from "next";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { ContactForm } from "@/components/ContactForm";
import { PraxenHeader } from "@/components/praxen/PraxenHeader";
import { PraxenFooter } from "@/components/praxen/PraxenFooter";
import { DemoMockup } from "@/components/praxen/DemoMockup";
import {
  praxenZiele,
  praxenDemos,
  praxenPakete,
  praxenZusatzseite,
  praxenImmerEnthalten,
  praxenAblauf,
  praxenFaq,
} from "@/lib/data/praxen";

/**
 * Landingpage „Webdesign für Praxen" (/praxen).
 *
 * Eigenständiger, sachlicherer Auftritt für Physiotherapie-, Ergotherapie-, Logopädie-,
 * Podologie- und andere Therapie-/Gesundheitspraxen – gedacht zur Weiterleitung über
 * Kooperationspartner. Bewusst mit eigenem, reduziertem Header/Footer (siehe
 * `components/praxen/`) statt der Beauty-`Navbar`/`SiteFooter`, und mit sans-serif
 * Überschriften (`font-sans` überschreibt die sitweite Serif-Regel für h1–h6 gezielt auf
 * dieser Seite) statt der Playfair-Editorial-Optik des Beauty-Bereichs. Farbpalette und
 * Ton folgen der Vorgabe: Weiß dominant, Bordeaux (#8b4b5a) nur für Buttons/Akzente, Rosé
 * (#dbc7c4) sehr sparsam, Off-White (#f5f2ed) für abwechselnde Sections, warmes Anthrazit
 * für Text. `/praxen` ist bewusst NICHT in der Haupt-Navigation des Beauty-Bereichs
 * verlinkt (siehe Navbar.tsx) und wird nur gezielt (Kooperationspartner, Direktlink)
 * aufgerufen. Die Seite darf indexiert werden (siehe Metadata unten).
 *
 * Datenquelle: `src/lib/data/praxen.ts` (Ziele, Pakete, Preise, Demos, Ablauf, FAQ) – bewusst
 * getrennt von den Beauty-Preisen in `src/lib/data/pricing.ts`.
 */

export const metadata: Metadata = {
  title: "Webdesign für Praxen | Individuelle Praxis-Websites | JAVERA Studio",
  description:
    "Individuelle Websites für Physiotherapie, Ergotherapie, Logopädie, Podologie und weitere Praxen – vom professionellen Onepager bis zur umfangreichen Praxiswebsite.",
  alternates: { canonical: "https://www.javera-studio.at/praxen" },
  openGraph: {
    title: "Webdesign für Praxen | Individuelle Praxis-Websites | JAVERA Studio",
    description:
      "Individuelle Websites für Physiotherapie, Ergotherapie, Logopädie, Podologie und weitere Praxen – vom professionellen Onepager bis zur umfangreichen Praxiswebsite.",
    url: "https://www.javera-studio.at/praxen",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Webdesign für Praxen | Individuelle Praxis-Websites | JAVERA Studio",
    description:
      "Individuelle Websites für Physiotherapie, Ergotherapie, Logopädie, Podologie und weitere Praxen.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.javera-studio.at/" },
    { "@type": "ListItem", position: 2, name: "Webdesign für Praxen", item: "https://www.javera-studio.at/praxen" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: praxenFaq.map((f) => ({
    "@type": "Question",
    name: f.frage,
    acceptedAnswer: { "@type": "Answer", text: f.antwort },
  })),
};

function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#6b655f] mb-6">
          <span className="w-8 h-px bg-[#d8d2cc]" />
          Webdesign für Praxen
          <span className="w-8 h-px bg-[#d8d2cc]" />
        </div>
        <h1 className="reveal font-sans font-semibold tracking-tight text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15] text-[#2b2826] text-balance">
          Eine Website, die Vertrauen schafft – noch vor dem ersten Termin.
        </h1>
        <p className="reveal reveal-delay mt-6 text-lg text-[#5c5751] leading-relaxed max-w-2xl mx-auto">
          Individuell entwickelte Websites für Physiotherapie, Ergotherapie, Logopädie, Podologie und weitere Gesundheits- und Therapiepraxen.
        </p>
        <p className="reveal reveal-delay mt-3 text-[#6b655f] max-w-xl mx-auto">
          Professionell, übersichtlich und genau auf Ihre Praxis zugeschnitten – ohne Baukastendesign.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-3 justify-center">
          <a href="#demos" className="px-7 py-3.5 rounded-full bg-[#8b4b5a] text-white hover:bg-[#733e4b] transition-colors font-medium">
            Demo-Websites ansehen
          </a>
          <a href="#pakete" className="px-7 py-3.5 rounded-full border border-[#d8d2cc] text-[#3a3532] hover:bg-[#f5f2ed] transition-colors font-medium">
            Pakete vergleichen
          </a>
        </div>

        <ul className="reveal reveal-delay mt-14 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-[#5c5751]">
          {["Individuell gestaltet", "Mobil optimiert", "Für lokale Sichtbarkeit vorbereitet"].map((m) => (
            <li key={m} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b4b5a]" aria-hidden />
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Einfuehrung() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f2ed]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="reveal font-sans font-semibold tracking-tight text-3xl md:text-4xl text-[#2b2826]">
          So individuell wie Ihre Praxis
        </h2>
        <p className="reveal reveal-delay mt-5 text-[#5c5751] text-lg leading-relaxed">
          Ob kompakter Onepager oder umfangreiche Website mit eigenen Seiten für Ihre Behandlungsschwerpunkte: Der passende Aufbau richtet sich nach Ihren Zielen, Ihrem Angebot und dem Informationsbedarf Ihrer Patienten.
        </p>

        <div className="reveal reveal-delay mt-10 mx-auto max-w-2xl rounded-2xl bg-white border border-[#e2dcd6] px-7 py-6 md:px-9 md:py-7 text-left">
          <p className="text-[#3a3532] leading-relaxed">
            Die gezeigten Designs dienen als Inspiration. Jede Website wird individuell für die jeweilige Praxis entwickelt. Die Pakete unterscheiden sich im Umfang – nicht in der gestalterischen Qualität.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 md:gap-10 text-left">
          {praxenZiele.map((z, i) => (
            <div key={z.titel} className={`reveal reveal-stagger-${i + 1}`}>
              <div className="text-xs uppercase tracking-[0.14em] text-[#6b655f] mb-2">Ziel {String(i + 1).padStart(2, "0")}</div>
              <p className="font-sans font-semibold text-lg text-[#2b2826]">{z.titel}</p>
              <p className="mt-2 text-sm text-[#5c5751] leading-relaxed">{z.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demos() {
  return (
    <section id="demos" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.14em] text-[#6b655f] mb-3">Beispiele</div>
          <h2 className="reveal font-sans font-semibold tracking-tight text-3xl md:text-4xl text-[#2b2826]">Drei Designrichtungen als Inspiration</h2>
          <p className="reveal reveal-delay mt-4 text-[#5c5751] leading-relaxed">
            Jede Demo zeigt einen anderen Stil und ein anderes Ziel. Ihre eigene Website wird davon ausgehend individuell für Ihre Praxis entwickelt – keine der Demos ist eine fertige Vorlage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {praxenDemos.map((d, i) => (
            <div key={d.slug} className={`reveal-card reveal-stagger-${i + 1} flex flex-col`}>
              <DemoMockup variante={d.mockupVariante} status={d.status} />
              <div className="mt-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-sans font-semibold text-xl text-[#2b2826]">{d.name}</p>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#f5f2ed] text-[#5c5751] whitespace-nowrap">{d.ziel}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[#6b655f]">{d.format}</p>
                <p className="mt-3 text-sm text-[#5c5751] leading-relaxed">{d.beschreibung}</p>
                <p className="mt-3 text-xs text-[#6b655f] italic">{d.praxisart}</p>

                <ul className="mt-4 space-y-1.5">
                  {d.enthalten.slice(0, 4).map((e) => (
                    <li key={e} className="text-sm text-[#5c5751] flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#8b4b5a] shrink-0" aria-hidden />
                      {e}
                    </li>
                  ))}
                </ul>

                {d.status === "live" && d.url ? (
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-[#3a3532] border-b border-[#3a3532]/30 pb-0.5 hover:border-[#3a3532] transition-colors"
                  >
                    Demo ansehen <span aria-hidden>→</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 mt-5 text-sm text-[#6b655f] cursor-not-allowed" aria-disabled="true">
                    Demo in Vorbereitung
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pakete() {
  return (
    <section id="pakete" className="py-16 md:py-24 bg-[#f5f2ed] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.14em] text-[#6b655f] mb-3">Pakete</div>
          <h2 className="reveal font-sans font-semibold tracking-tight text-3xl md:text-4xl text-[#2b2826]">Drei Pakete, klar vergleichbar</h2>
          <p className="reveal reveal-delay mt-4 text-[#5c5751] leading-relaxed">
            Die Pakete unterscheiden sich im Umfang – nicht in der gestalterischen Qualität. Auch der Onepager wird hochwertig und individuell gestaltet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {praxenPakete.map((p, i) => (
            <div key={p.name} className={`reveal-card reveal-stagger-${i + 1} flex flex-col rounded-2xl bg-white border border-[#e2dcd6] p-8`}>
              <p className="text-xs uppercase tracking-[0.14em] text-[#6b655f]">{p.claim}</p>
              <p className="mt-2 font-sans font-semibold text-2xl text-[#2b2826]">{p.name}</p>
              <p className="mt-3 font-sans font-semibold text-xl text-[#8b4b5a]">{p.preisLabel}</p>
              <p className="mt-4 text-sm text-[#5c5751] leading-relaxed">{p.fuer}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {p.leistungen.map((l) => (
                  <li key={l} className="text-sm text-[#3a3532] flex items-start gap-2.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#8b4b5a] shrink-0" aria-hidden />
                    {l}
                  </li>
                ))}
              </ul>

              {p.beispielSeiten && (
                <div className="mt-6 pt-5 border-t border-[#ece7e2]">
                  <p className="text-xs uppercase tracking-[0.1em] text-[#6b655f] mb-2">Beispiel</p>
                  <p className="text-sm text-[#6b655f] leading-relaxed">{p.beispielSeiten.join(" · ")}</p>
                </div>
              )}

              <a
                href="#kontakt"
                className="mt-7 inline-flex justify-center px-6 py-3 rounded-full border border-[#d8d2cc] text-[#3a3532] hover:bg-[#f5f2ed] transition-colors font-medium"
              >
                Unverbindlich anfragen
              </a>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 max-w-3xl mx-auto rounded-2xl bg-white border border-[#e2dcd6] px-7 py-6 text-center">
          <p className="text-[#3a3532]">
            Weitere Zusatzseiten: <span className="font-semibold">{praxenZusatzseite.preisLabel}</span>
          </p>
          <p className="mt-1 text-sm text-[#5c5751]">{praxenZusatzseite.hinweis}</p>
          <p className="mt-3 text-xs text-[#6b655f]">{praxenZusatzseite.fussnote}</p>
        </div>

        <p className="reveal mt-8 max-w-2xl mx-auto text-center text-sm text-[#5c5751] leading-relaxed">
          Der genaue Preis richtet sich nach Seitenumfang, Funktionen und benötigten Inhalten. Nach einem unverbindlichen Erstgespräch erhalten Sie ein transparentes Angebot.
        </p>
      </div>
    </section>
  );
}

function ImmerEnthalten() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="reveal font-sans font-semibold tracking-tight text-3xl md:text-4xl text-[#2b2826] text-center">
          Was in jedem Paket enthalten ist
        </h2>
        <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {praxenImmerEnthalten.map((item, i) => (
            <li key={item} className={`reveal reveal-stagger-${(i % 7) + 1} flex items-start gap-3 text-[#3a3532]`}>
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8b4b5a] shrink-0" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Ablauf() {
  return (
    <section id="ablauf" className="py-16 md:py-24 bg-[#f5f2ed] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="reveal font-sans font-semibold tracking-tight text-3xl md:text-4xl text-[#2b2826] text-center">Ablauf</h2>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {praxenAblauf.map((s, i) => (
            <div key={s.n} className={`reveal reveal-stagger-${i + 1}`}>
              <span className="font-sans text-2xl text-[#8b4b5a]">{s.n}</span>
              <p className="mt-3 font-sans font-semibold text-[#2b2826]">{s.titel}</p>
              <p className="mt-2 text-sm text-[#5c5751] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UeberJavera() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs uppercase tracking-[0.14em] text-[#6b655f] mb-4">Über Javera Studio</div>
        <h2 className="reveal font-sans font-semibold tracking-tight text-3xl md:text-4xl text-[#2b2826]">
          Individuelle, codebasierte Websites – keine Baukastenseiten.
        </h2>
        <div className="reveal reveal-delay mt-6 space-y-4 text-[#5c5751] text-lg leading-relaxed text-left sm:text-center">
          <p>
            Ich bin Jagoda, Webdesignerin aus Wien und Gründerin von Javera Studio. Neben Beauty-Studios entwickle ich auch für Physiotherapie-, Ergotherapie-, Logopädie- und Podologiepraxen individuelle Websites – passend zur jeweiligen Praxis statt aus dem Baukasten.
          </p>
          <p>
            Im Mittelpunkt stehen ein durchdachtes Design, verständliche Inhalte für Patienten, lokale Sichtbarkeit und eine einfache Nutzerführung. Die Zusammenarbeit läuft persönlich und direkt mit mir.
          </p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-[#f5f2ed] scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="reveal font-sans font-semibold tracking-tight text-3xl md:text-4xl text-[#2b2826] text-center">Häufige Fragen</h2>
        <div className="mt-10 divide-y divide-[#e2dcd6] border-t border-b border-[#e2dcd6]">
          {praxenFaq.map((f) => (
            <details key={f.frage} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-sans font-medium text-[#2b2826]">
                {f.frage}
                <span className="shrink-0 text-[#8b4b5a] transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-[#5c5751] leading-relaxed">{f.antwort}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function AbschlussCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="reveal font-sans font-semibold tracking-tight text-3xl md:text-4xl text-[#2b2826]">Welche Website passt zu Ihrer Praxis?</h2>
        <p className="reveal reveal-delay mt-4 text-[#5c5751] text-lg leading-relaxed">
          In einem unverbindlichen Gespräch klären wir, welcher Umfang für Ihre Praxis wirklich sinnvoll ist.
        </p>
        <div className="reveal mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#kontakt" className="px-7 py-3.5 rounded-full bg-[#8b4b5a] text-white hover:bg-[#733e4b] transition-colors font-medium">
            Unverbindlich anfragen
          </a>
          <a href="#demos" className="px-7 py-3.5 rounded-full border border-[#d8d2cc] text-[#3a3532] hover:bg-[#f5f2ed] transition-colors font-medium">
            Demo-Websites ansehen
          </a>
        </div>
      </div>
    </section>
  );
}

export default function PraxenPage() {
  return (
    <main className="bg-white text-[#3a3532] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ScrollRevealInit />
      <PraxenHeader />

      <Hero />
      <Einfuehrung />
      <Demos />
      <Pakete />
      <ImmerEnthalten />
      <Ablauf />
      <UeberJavera />
      <Faq />
      <AbschlussCTA />

      <ContactForm
        id="kontakt"
        eyebrow="Kontakt"
        title="Projekt besprechen"
        intro="Erzählen Sie mir kurz von Ihrer Praxis und Ihrem Vorhaben – ich melde mich persönlich bei Ihnen zurück."
        defaultSubject="Praxis-Website – unverbindliche Anfrage"
        inquirySource="Praxen-Anfrage"
        submitLabel="Anfrage senden"
      />

      <PraxenFooter />
    </main>
  );
}
