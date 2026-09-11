import Image from "next/image";

/**
 * Demo-/Showcase-Projekte.
 *
 * Diese Blöcke lagen ursprünglich auf der Startseite (`src/app/page.tsx`) und wurden
 * unverändert ausgelagert, damit die Startseite auf die drei echten Kundenprojekte
 * fokussiert bleibt. Verwendet werden sie jetzt auf `/meine-arbeit` (Bereich „Website-Demos"
 * und „Visuelle Marken- und Designmaterialien"). Inhalte, Bilder und Links sind bewusst 1:1
 * erhalten – eine inhaltliche Neugestaltung folgt in einem späteren Schritt. Beide Bereiche
 * kennzeichnen die gezeigten Arbeiten transparent als Demo-Websites bzw. Designkonzepte,
 * nicht als reale Kundenprojekte.
 */

export const demos = [
  { title: "PURE SKIN Studio", category: "Kosmetikstudio", desc: "Cleanes, ruhiges Design für mehr Vertrauen, klare Angebote und mehr Anfragen.", focus: "Vertrauen & hochwertige Präsentation", url: "https://demo-pure-skin-studio-launch.vercel.app", image: "/demo-pure-skin.png" },
  { title: "Nail Atelier", category: "Nagelstudio", desc: "Elegantes Nail-Studio Design mit Fokus auf Ästhetik, Vertrauen und einen modernen Markenauftritt.", focus: "Eleganz & Markenwirkung", url: "https://demo-nailatelier.vercel.app", image: "/demo-nail-atelier.png" },
  { title: "Ivory Bridal Studio", category: "Bridal Stylistin", desc: "Elegante Onepage-Website für Brautstylistinnen – modern, vertrauensvoll und perfekt für Anfragen rund um den Hochzeitstag.", focus: "Vertrauen & Premium-Auftritt", url: "https://demo-ivorybridalstudio.vercel.app", image: "/demo-ivorystudio.png" },
  { title: "LUMEA Laser Clinic", category: "Beauty Klinik", desc: "Seriöse Klinik-Website mit Fokus auf Vertrauen, Beratung und professionelle Darstellung.", focus: "Seriosität & Beratung", url: "https://demo-lumea-laser-clinic.vercel.app", image: "/demo-lumea.png" },
  { title: "Lumis Klinik", category: "Beauty Klinik", desc: "Moderne Klinik-Website mit Fokus auf Vertrauen, hochwertige Darstellung und professionelle Außenwirkung.", focus: "Vertrauen & Professionalität", url: "https://demo-lumis-klinik.vercel.app", image: "/demo-lumis-klinik.png" },
  { title: "Salon Noir", category: "Friseursalon", desc: "Auffällige Website für starke Markenwirkung, mehr Sichtbarkeit und neue Kundinnen.", focus: "Markenwirkung & Sichtbarkeit", url: "https://demo-noir-vision.vercel.app", image: "/demo-salon-noir.png" },
];

export function DemoProjects() {
  const row1 = demos.slice(0, 3);
  const row2 = demos.slice(3);
  return (
    <section id="demos" className="py-12 md:py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Website-Demos</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Beispiel-Websites für Beauty Businesses</h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg">Jede Demo wurde für eine andere Zielgruppe und Markenidentität entwickelt. So bekommst du ein Gefühl dafür, wie unterschiedlich ein Webauftritt wirken kann – und welche Richtung zu deinem Business passt.</p>
          <p className="reveal reveal-delay mt-3 text-sm text-muted-foreground italic">Demo-Websites bzw. Designkonzepte – keine echten Kundenprojekte.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {row1.map((d, i) => (
            <div key={d.title} className={`reveal-card reveal-stagger-${(i % 4) + 1} group relative bg-background rounded-3xl border border-border/60 hover:shadow-xl hover:shadow-ink/5 transition overflow-hidden flex flex-col p-6 md:p-8`}>
              <div className="relative rounded-2xl overflow-hidden mb-6 flex items-center justify-center aspect-[16/10]" style={{ backgroundColor: "var(--peach-soft)" }}>
                <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 text-[10px] uppercase tracking-wider font-medium text-ink shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-mauve" />Showcase Project
                </span>
                <Image src={d.image} alt={`${d.title} Demo Vorschau`} loading="lazy" width={600} height={375} className="w-full h-full object-contain transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{d.category}</div>
              <h3 className="font-serif text-ink mt-2 text-2xl md:text-3xl">{d.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{d.desc}</p>
              <p className="mt-auto pt-4 text-sm text-ink/70 italic">→ Fokus: {d.focus}</p>
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
                Demo ansehen <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
          {row2.map((d, i) => (
            <div key={d.title} className={`reveal-card reveal-stagger-${(i % 4) + 1} group relative bg-background rounded-3xl border border-border/60 hover:shadow-xl hover:shadow-ink/5 transition overflow-hidden flex flex-col p-6 md:p-8`}>
              <div className="relative rounded-2xl overflow-hidden mb-6 flex items-center justify-center aspect-[16/10]" style={{ backgroundColor: "var(--peach-soft)" }}>
                <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 text-[10px] uppercase tracking-wider font-medium text-ink shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-mauve" />Showcase Project
                </span>
                <Image src={d.image} alt={`${d.title} Demo Vorschau`} loading="lazy" width={600} height={375} className="w-full h-full object-contain transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{d.category}</div>
              <h3 className="font-serif text-ink mt-2 text-2xl md:text-3xl">{d.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{d.desc}</p>
              <p className="mt-auto pt-4 text-sm text-ink/70 italic">→ Fokus: {d.focus}</p>
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
                Demo ansehen <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xs text-muted-foreground reveal">Weitere Branchen und Projekte folgen.</p>
      </div>
    </section>
  );
}

export function FeaturedBranding() {
  const mockups = [
    { src: "/luxe-visitenkarten.png", alt: "Visitenkarten Mockup", span: "md:col-span-6", aspect: "aspect-[3/4]", label: "Visitenkarten" },
    { src: "/luxe-preisliste.png", alt: "Preisliste Mockup", span: "md:col-span-6", aspect: "aspect-[3/4]", label: "Preisliste" },
    { src: "/luxe-social-1.png", alt: "Social Media Template 1", span: "md:col-span-4", aspect: "aspect-[9/16]", label: "Social Post" },
    { src: "/luxe-social-2.png", alt: "Social Media Template 2", span: "md:col-span-4", aspect: "aspect-[9/16]", label: "Social Post" },
    { src: "/luxe-social-3.png", alt: "Social Media Template 3", span: "md:col-span-4", aspect: "aspect-[9/16]", label: "Social Post" },
    { src: "/luxe-gutschein.png", alt: "Gutschein Mockup", span: "md:col-span-12", aspect: "aspect-[16/9]", label: "Gutscheine" },
  ];
  const bullets = ["Website Design", "Visueller Markenauftritt", "Preislisten", "Gutscheine", "Social Media Templates", "Visitenkarten"];

  return (
    <section className="relative py-14 md:py-20 bg-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-60" style={{ background: "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--peach-soft) 70%, transparent) 0%, transparent 70%)" }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20 md:mb-28">
          <div className="reveal text-xs uppercase tracking-[0.28em] text-muted-foreground mb-5">
            <span className="editorial-rule mr-3" />Komplettes Branding<span className="editorial-rule ml-3" />
          </div>
          <h2 className="reveal font-serif text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight">Mehr als nur Webseiten</h2>
          <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">Ich entwickle nicht nur moderne Websites, sondern komplette visuelle Markenauftritte für Beauty Studios — abgestimmt auf Stil, Zielgruppe und Markenwirkung.</p>
          <p className="reveal reveal-delay mt-3 text-sm text-muted-foreground italic">Luxe Nails Vienna ist ein Designkonzept bzw. Showcase-Projekt, kein reales Kundenprojekt.</p>
        </div>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="reveal-card md:col-span-7 order-2 md:order-1">
            <div className="relative rounded-[2rem] overflow-hidden group" style={{ boxShadow: "0 30px 80px -30px color-mix(in oklab, var(--ink) 25%, transparent)" }}>
              <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 text-[10px] uppercase tracking-wider font-medium text-ink shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-mauve" />Showcase Project
              </span>
              <div className="aspect-[4/5] md:aspect-[5/6] w-full" style={{ backgroundColor: "var(--peach-soft)" }}>
                <Image src="/demo-luxe-nails.png" alt="Luxe Nails Vienna — Website & Branding Hero" loading="lazy" width={800} height={1000} className="w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]" />
              </div>
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 reveal reveal-delay">
            <div className="text-[11px] uppercase tracking-[0.32em] text-rose-gold mb-5">Featured Project</div>
            <h3 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight">Luxe Nails<br />Vienna</h3>
            <div className="mt-6 h-px w-12 bg-ink/20" />
            <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">Luxuriöses Branding-Konzept für ein modernes Wiener Nagelstudio — inklusive Website, Preislisten, Gutscheinen, Visitenkarten und Social Media Assets.</p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-ink/80">
                  <span aria-hidden className="inline-block h-[6px] w-[6px] rounded-full" style={{ backgroundColor: "var(--rose-gold)" }} />{b}
                </li>
              ))}
            </ul>
            <a href="https://demo-luxe-nails-vienna.vercel.app" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 mt-10 text-sm font-medium tracking-wide text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
              Projekt ansehen <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        <div className="mt-24 md:mt-36">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-3">Brand Identity</div>
              <h4 className="font-serif text-2xl md:text-3xl text-ink">Visuelle Markenwelt</h4>
              <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">Jedes Element — vom Farbkonzept bis zum Gutschein — ist aufeinander abgestimmt und auf deine Zielgruppe zugeschnitten.</p>
            </div>
            <div className="hidden md:block text-xs text-muted-foreground italic">Branding · Print · Social</div>
          </div>
          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            {mockups.map((m, i) => (
              <figure key={i} className={`reveal-card reveal-stagger-${(i % 6) + 1} ${m.span} group relative overflow-hidden rounded-2xl bg-cream`} style={{ boxShadow: "0 20px 50px -25px color-mix(in oklab, var(--ink) 18%, transparent)" }}>
                <div className={`${m.aspect} w-full overflow-hidden`}>
                  <Image src={m.src} alt={m.alt} loading="lazy" width={800} height={800} className="w-full h-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.05]" />
                </div>
                <figcaption className="absolute left-4 bottom-4 text-[10px] uppercase tracking-[0.25em] text-ink/0 group-hover:text-ink/70 bg-background/0 group-hover:bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-500">{m.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
