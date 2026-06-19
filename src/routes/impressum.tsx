import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/javera-logo.png";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Javera Studio" },
      { name: "description", content: "Impressum von Javera Studio." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <main className="bg-background text-ink min-h-screen flex flex-col">
      <header className="py-6 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <img src={logo} alt="Javera Studio" className="h-16 md:h-20 w-auto" />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-ink transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <article className="flex-1 py-16 md:py-24">
        <div className="max-w-[760px] mx-auto px-6 leading-relaxed">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-10">Impressum</h1>

          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10">
            Angaben gemäß § 5 ECG
          </p>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Unternehmensbezeichnung</h2>
            <p className="text-muted-foreground">JAVERA STUDIO</p>
          </section>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Inhaberin</h2>
            <p className="text-muted-foreground">Jagoda Teresa Okafor</p>
          </section>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Adresse</h2>
            <p className="text-muted-foreground">
              Fahngasse 6/4/2<br />
              1220 Wien<br />
              Österreich
            </p>
          </section>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Kontakt</h2>
            <p className="text-muted-foreground">
              E-Mail:{" "}
              <a href="mailto:hallo@javera-studio.at" className="underline hover:text-ink">
                hallo@javera-studio.at
              </a>
            </p>
          </section>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Unternehmensgegenstand</h2>
            <p className="text-muted-foreground">
              Werbeagentur<br />
              Webdesign, Branding, Social Media Design sowie digitale Marketing- und Gestaltungsdienstleistungen
            </p>
          </section>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Gewerbebehörde</h2>
            <p className="text-muted-foreground">Magistratisches Bezirksamt für den 22. Bezirk Wien</p>
          </section>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">GISA-Zahl</h2>
            <p className="text-muted-foreground">39749697</p>
          </section>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Anwendbare Rechtsvorschriften</h2>
            <p className="text-muted-foreground">
              Gewerbeordnung:{" "}
              <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
                www.ris.bka.gv.at
              </a>
            </p>
          </section>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Haftung für Inhalte</h2>
            <p className="text-muted-foreground">
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr
              übernommen.
            </p>
          </section>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Urheberrecht</h2>
            <p className="text-muted-foreground">
              Die Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht. Jede
              Vervielfältigung oder Verwendung bedarf der schriftlichen Zustimmung.
            </p>
          </section>

          <section className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Bildnachweise</h2>
            <p className="text-muted-foreground">
              Eigene Inhalte sowie lizenzierte bzw. KI-generierte Bilder.
            </p>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
