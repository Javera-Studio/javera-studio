import Link from "next/link";
import Image from "next/image";

/**
 * Geparkte Startseiten-Abschnitte.
 *
 * Diese Blöcke standen früher auf der Startseite und wurden im Zuge der Struktur-
 * Überarbeitung entfernt, aber bewusst NICHT gelöscht. Sie dienen als Vorlage für die
 * spätere inhaltliche Konsolidierung folgender Bereiche:
 *   - „Warum eine Website" (siehe weiterhin genutzte Section `Warum` in `src/app/page.tsx`)
 *   - „Warum Javera Studio"  -> {@link WarumJavera}
 *   - „Keine Zeit, keine Technik – kein Problem" -> {@link Zweifel}
 *   - „Mehr als nur Webseiten" (Branding) -> siehe `FeaturedBranding` in `home/demo-showcase.tsx`
 *   - Vertrauens-/Vorteils-Kacheln -> {@link FeatureBadges}
 *
 * Aktuell werden diese Komponenten nirgends gerendert. Vor einer Wiederverwendung
 * sollten die Texte zusammengeführt und entdoppelt werden.
 */

/**
 * Ursprüngliche, ausführlichere „Über mich"-Absätze der Startseite (inkl. des Satzes über
 * die drei Kinder). Der kompakte Startseiten-Abschnitt (`About` in `src/app/page.tsx`)
 * verwendet seit der Hero-/Über-mich-Überarbeitung neue, kürzere Texte ohne diesen
 * persönlichen Satz. Nichts davon wurde gelöscht – dient als Rohmaterial für eine spätere,
 * ausführliche eigene Über-mich-Seite.
 */
export const aboutLegacyParagraphs = [
  "Ich bin Jagoda – Webdesignerin & Grafikerin aus Wien, spezialisiert auf Beauty Studios. Ich begleite dich beim Aufbau eines professionellen Gesamtauftritts – von der Website über das Branding bis zu Social-Media-Design und Print.",
  "Durch meine Erfahrung in der IT verbinde ich klares Design mit Struktur und Funktion. So entsteht eine Website, die nicht nur gut aussieht, sondern Vertrauen aufbaut und neue Kundinnen anzieht.",
  "Ich arbeite bewusst unkompliziert: Du musst keine fertigen Texte oder Technik-Wissen mitbringen – ich führe dich Schritt für Schritt durch den gesamten Prozess.",
  "Als Mama von drei Kindern weiß ich, wie wertvoll Zeit ist – deshalb ist mir eine einfache, klare Zusammenarbeit besonders wichtig.",
];

/**
 * Die fünf ausführlichen "Warum eine Website"-Standardargumente, die früher als lange
 * nummerierte Liste im Problem-/Nutzenabschnitt der Startseite standen. Seit der
 * Verdichtung dieses Abschnitts (neue `Warum()`-Sektion in `src/app/page.tsx`) sind ihre
 * Kernaussagen kompakt in den neuen Fließtext eingeflossen; die ausführliche Fassung bleibt
 * hier als Archiv erhalten.
 */
export const warumBenefitsLegacy = [
  "Der erste Eindruck entsteht online — Noch bevor eine Kundin dein Studio besucht, informiert sie sich über Google oder Social Media.",
  "Vertrauen entscheidet — Eine professionelle Website schafft Vertrauen und hebt dein Studio von der Konkurrenz ab.",
  "Instagram allein reicht selten aus — Social Media ist wichtig – eine Website gibt deinem Studio ein dauerhaftes Zuhause im Internet und ergänzt deinen Online-Auftritt.",
  "Bei Google gefunden werden — Viele Kundinnen suchen aktiv nach Beauty-Studios in ihrer Nähe. Eine suchmaschinenoptimierte Website erhöht deine Sichtbarkeit und sorgt für mehr Anfragen.",
  "Ein einheitlicher Markenauftritt — Website, visueller Markenauftritt, Social Media und Print arbeiten zusammen und sorgen für einen professionellen, wiedererkennbaren Auftritt.",
];

export function BrandManifesto() {
  return (
    <section aria-label="Markenphilosophie" className="py-14 md:py-20 bg-background">
      <div className="reveal max-w-3xl mx-auto px-6 text-center">
        <div className="mirror-frame relative w-[134px] h-[134px] md:w-[173px] md:h-[173px] mx-auto mb-10 rounded-2xl overflow-hidden shadow-sm">
          <Image src="/spiegel.png" alt="" fill sizes="173px" className="object-cover" aria-hidden />
        </div>
        <p className="font-script text-mauve-dark text-3xl md:text-4xl">
          Deine Website ist das Fenster zu deinem Studio und der Spiegel deiner Qualität.
        </p>
      </div>
    </section>
  );
}

const featureBadges = [
  { title: "48h Vorschau", desc: "Kostenlose und unverbindliche Webseiten-Vorschau." },
  { title: "1 Monat Betreuung", desc: "Persönliche Begleitung nach dem Launch." },
  { title: "Alles aus einer Hand", desc: "Webdesign, Branding und Printdesign." },
  { title: "Flexible Ratenzahlung", desc: "Bis zu 4 zinsfreie Teilzahlungen möglich." },
];

export function FeatureBadges() {
  return (
    <section id="vorteile" aria-label="Deine Vorteile" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">Darauf kannst du dich verlassen</div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {featureBadges.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-stagger-${(i % 6) + 1} rounded-2xl border bg-white px-6 py-6 text-center shadow-sm`}
              style={{ borderColor: "#E8DDD9" }}
            >
              <p className="font-serif text-lg text-ink">{f.title}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const javeraPoints = [
  "Spezialisierung auf Beauty Studios – Nails, Kosmetik, Friseur & Co.",
  "Website, Branding & Grafik aus einer Hand",
  "Einheitliches Design über alle Kanäle: Web, Print & Social Media",
  "Individuell gestaltet – kein Template, keine 08/15-Lösung",
  "Persönliche Zusammenarbeit direkt mit mir – von Anfang bis Ende",
  "Schnelle Umsetzung mit klaren, sichtbaren Ergebnissen",
  "SEO-Grundoptimierung für bessere Sichtbarkeit bei Google",
  "10 % Rabatt auf alle Design-Leistungen für Website-Kunden",
];

export function WarumJavera() {
  return (
    <section className="py-12 md:py-16 bg-mint-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Warum Javera Studio</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Mehr als eine Website – dein komplettes visuelles Erscheinungsbild, das Kundinnen bringt.</h2>
          <div className="reveal reveal-delay mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Von der Website über den visuellen Markenauftritt bis zu Instagram-Posts und Flyern – ich gestalte alles, was dein Beauty Studio sichtbar und unverwechselbar macht.</p>
            <p>Du bekommst kein Fertigprodukt von der Stange, sondern ein durchgängiges visuelles Konzept, das zu deiner Marke, deinem Stil und deinen Kundinnen passt.</p>
            <p className="text-ink font-medium">Starte mit einer kostenlosen Website-Analyse – ich zeige dir, wo Potenzial steckt und was dein Auftritt wirklich braucht.</p>
          </div>
        </div>
        <div className="mt-12 text-sm uppercase tracking-[0.2em] text-muted-foreground">Das bekommst du</div>
        <div className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {javeraPoints.map((p, i) => (
            <div key={p} className={`reveal reveal-stagger-${(i % 7) + 1} flex items-start gap-4 py-3`}>
              <span className="mt-1 text-ink shrink-0">✔</span>
              <span className="text-ink leading-relaxed">{p}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 reveal">
          <Link href="/webseiten-vorschau" className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Webseiten-Vorschau anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Zweifel() {
  return (
    <section className="py-12 md:py-16 bg-peach-soft">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Keine Sorge</div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Keine Zeit, keine Technik – kein Problem.</h2>
        <div className="reveal reveal-delay mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
          <p>Du musst keine fertigen Texte haben, keine Bilder vorbereiten und dich auch nicht mit Technik auskennen.</p>
          <p>Ich übernehme Struktur, Design und Aufbau für dich und führe dich Schritt für Schritt durch den gesamten Prozess.</p>
          <p>Du bekommst eine erste Demo – und wir passen alles gemeinsam an, bis es perfekt zu deinem Studio passt.</p>
        </div>
        <Link href="/webseiten-vorschau" className="reveal inline-block mt-10 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
          Kostenlose Webseiten-Vorschau anfragen
        </Link>
      </div>
    </section>
  );
}
