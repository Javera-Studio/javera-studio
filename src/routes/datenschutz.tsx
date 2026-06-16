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
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten
              Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>
            <p>Verantwortlich für die Datenverarbeitung:</p>
            <p>
              JAVERA STUDIO<br />
              Jagoda Teresa Okafor<br />
              Fahngasse 6/4/2<br />
              1220 Wien<br />
              Österreich<br />
              E-Mail:{" "}
              <a href="mailto:hallo@javera-studio.at" className="underline hover:text-ink">
                hallo@javera-studio.at
              </a>
            </p>
          </Section>

          <Section title="2. Kontaktformular und Kontaktaufnahme">
            <p>
              Wenn Sie über das Kontaktformular auf dieser Website oder per E-Mail Kontakt mit uns
              aufnehmen, werden die von Ihnen angegebenen Daten zwecks Bearbeitung Ihrer Anfrage
              sowie für mögliche Anschlussfragen verarbeitet.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahmen) sowie gegebenenfalls auf Grundlage Ihrer Einwilligung
              gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p>
              Für die technische Übermittlung von Kontaktformular-Anfragen verwenden wir den Dienst
              Web3Forms. Die von Ihnen eingegebenen Daten werden an Web3Forms übermittelt und
              anschließend an unsere hinterlegte E-Mail-Adresse weitergeleitet.
            </p>
            <p>
              Weitere Informationen finden Sie unter:{" "}
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-ink"
              >
                https://web3forms.com/privacy
              </a>
            </p>
            <p>
              Die Daten werden nicht ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben,
              sofern dies nicht zur Bearbeitung Ihrer Anfrage erforderlich ist.
            </p>
          </Section>

          <Section title="3. Verarbeitung personenbezogener Daten">
            <p>Folgende Daten können verarbeitet werden:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Angaben zum Unternehmen bzw. Studio</li>
              <li>Inhalte Ihrer Anfrage</li>
              <li>freiwillig übermittelte Informationen</li>
            </ul>
          </Section>

          <Section title="4. Hosting und technische Daten">
            <p>
              Diese Website wird über externe Hosting- und Website-Dienstleister betrieben. Dabei
              können automatisch technische Informationen verarbeitet werden, darunter:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP-Adresse</li>
              <li>Browsertyp</li>
              <li>Betriebssystem</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>besuchte Seiten</li>
            </ul>
            <p>Diese Daten dienen der technischen Sicherheit und Stabilität der Website.</p>
            <p>
              Diese Website wird über Vercel gehostet. Im Rahmen des Hostings können technisch
              notwendige Daten verarbeitet werden, die für den Betrieb und die Sicherheit der
              Website erforderlich sind.
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              Diese Website kann technisch notwendige Cookies verwenden, um grundlegende
              Funktionen der Website bereitzustellen.
            </p>
          </Section>

          <Section title="6. Speicherdauer">
            <p>
              Ihre personenbezogenen Daten werden nur so lange gespeichert, wie dies zur
              Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten
              bestehen.
            </p>
          </Section>

          <Section title="7. Ihre Rechte">
            <p>Ihnen stehen grundsätzlich folgende Rechte zu:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Auskunft</li>
              <li>Berichtigung</li>
              <li>Löschung</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerruf erteilter Einwilligungen</li>
            </ul>
            <p>
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen Datenschutzrecht
              verstößt, können Sie sich bei der österreichischen Datenschutzbehörde beschweren.
            </p>
          </Section>

          <Section title="8. Kontakt">
            <p>
              Bei Fragen zum Datenschutz kontaktieren Sie uns unter:{" "}
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
