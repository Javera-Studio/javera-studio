import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/javera-logo.png";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Javera Studio" },
      { name: "description", content: "Datenschutzerklärung von Javera Studio." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DatenschutzPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3 mb-10">
      <h2 className="text-lg md:text-xl font-medium">{title}</h2>
      <div className="text-muted-foreground space-y-3">{children}</div>
    </section>
  );
}

function DatenschutzPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-10">
            Datenschutzerklärung
          </h1>

          <Section title="1. Allgemeine Hinweise">
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Ihre Daten
              werden daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO,
              TKG 2003) verarbeitet.
            </p>
          </Section>

          <Section title="2. Kontakt mit uns">
            <p>
              Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen,
              werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert.
            </p>
            <p>Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          </Section>

          <Section title="3. Gespeicherte Daten">
            <p>Folgende Daten können verarbeitet werden:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Angaben zum Studio / Anfrage</li>
              <li>ggf. weitere freiwillige Angaben</li>
            </ul>
          </Section>

          <Section title="4. Zweck der Datenverarbeitung">
            <p>Die Datenverarbeitung erfolgt zum Zweck:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bearbeitung von Anfragen</li>
              <li>Erstellung von Angeboten</li>
              <li>Kommunikation mit Interessenten</li>
            </ul>
          </Section>

          <Section title="5. Speicherdauer">
            <p>
              Ihre Daten werden nur so lange gespeichert, wie dies zur Bearbeitung Ihrer
              Anfrage notwendig ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </Section>

          <Section title="6. Hosting">
            <p>
              Diese Website wird über den Dienst „Lovable" betrieben. Dabei können Daten auf
              Servern des Anbieters gespeichert werden.
            </p>
          </Section>

          <Section title="7. Ihre Rechte">
            <p>Ihnen stehen grundsätzlich die Rechte auf:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Auskunft</li>
              <li>Berichtigung</li>
              <li>Löschung</li>
              <li>Einschränkung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerruf</li>
            </ul>
            <p>
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
              verstößt, können Sie sich bei der Datenschutzbehörde beschweren.
            </p>
          </Section>

          <Section title="8. Kontakt">
            <p>
              Für Fragen zum Datenschutz kontaktieren Sie uns unter:{" "}
              <a href="mailto:hallo@javera-studio.at" className="underline hover:text-ink">
                hallo@javera-studio.at
              </a>
            </p>
          </Section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
