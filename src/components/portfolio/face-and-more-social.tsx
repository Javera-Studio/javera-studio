import Image from "next/image";

/**
 * Instagram-/Social-Media-Arbeiten für Face and More.
 *
 * Ursprünglich Teil der Startseite, seit der Kundenprojekte-Verdichtung hierher nach
 * `/meine-arbeit` verschoben. Inhalte, Bilder und Texte sind unverändert übernommen.
 * Der Anker `id="face-and-more"` ist das Ziel des Links „Gesamtes Projekt ansehen" auf
 * der Startseite (siehe `FaceAndMore` in `src/app/page.tsx`).
 */
const leistungen = [
  "Instagram-Profil optimiert",
  "6 Highlight-Cover gestaltet",
  "1 Karussell-Post Vorlage erstellt",
  "2 editierbare Beitragsvorlagen entwickelt",
  "6 Story-Vorlagen für regelmäßige Inhalte",
  "Einheitliches Branding für Website & Social Media",
];

export function FaceAndMoreSocial() {
  return (
    <section id="face-and-more" className="py-12 md:py-16 bg-stone-50/40 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Face and More – Website und digitaler Auftritt</div>
          <p className="reveal text-muted-foreground leading-relaxed">
            Ergänzend zum Website-Relaunch von{" "}
            <a href="https://faceandmore.at" target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4 hover:text-mauve transition-colors">
              Face and More
            </a>{" "}
            durfte ich auch den Instagram-Auftritt des Studios visuell weiterentwickeln.
          </p>
        </div>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: Mockup Images */}
          <div className="reveal md:col-span-7">
            {/* Mobile: stacked */}
            <div className="flex flex-col gap-4 md:hidden">
              <Image
                src="/insta.mockup.feed.png"
                alt="Instagram Feed & Story Mockup für Face & More"
                loading="lazy"
                width={800}
                height={600}
                className="w-full rounded-2xl drop-shadow-xl"
              />
              <Image
                src="/insta.mockup.png"
                alt="Instagram-Profil Mockup für Face & More"
                loading="lazy"
                width={600}
                height={600}
                className="w-3/4 mx-auto"
                style={{ filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.13))" }}
              />
            </div>
            {/* Desktop: overlapping layout – Feed groß, Profil versetzt */}
            <div className="hidden md:block relative" style={{ paddingBottom: "11rem" }}>
              <div className="w-[56%] relative z-10 drop-shadow-2xl">
                <Image
                  src="/insta.mockup.feed.png"
                  alt="Instagram Feed & Story Mockup für Face & More"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full rounded-2xl"
                />
              </div>
              <div
                className="absolute bottom-0 w-[41%] z-20"
                style={{ left: "38%", transform: "translateY(-30%)", filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.14))" }}
              >
                <Image
                  src="/insta.mockup.png"
                  alt="Instagram-Profil Mockup für Face & More"
                  loading="lazy"
                  width={600}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>
            <p className="reveal mt-8 font-script text-mauve-dark text-2xl md:text-3xl">
              Ein professioneller Auftritt endet nicht bei der Website – er setzt sich auf Social Media fort.
            </p>
          </div>

          {/* Right: Text */}
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 break-words">
              Social Media Visibility Paket
            </div>
            <h2 className="reveal font-serif text-3xl md:text-5xl text-ink leading-tight">
              Instagram-Auftritt mit Wiedererkennungswert
            </h2>
            <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">
              Neben dem Website-Relaunch wurde auch der Instagram-Auftritt von Face &amp; More überarbeitet. Ziel war ein professioneller, einheitlicher Markenauftritt, der Vertrauen schafft und die Expertise des Studios sichtbar macht.
            </p>
            <p className="reveal mt-5 text-sm text-muted-foreground uppercase tracking-widest">Gemeinsam haben wir:</p>
            <ul className="reveal mt-4 space-y-3">
              {leistungen.map((l) => (
                <li key={l} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
