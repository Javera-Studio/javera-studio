import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { PromptCard } from "@/components/PromptCard";
import { promptItems, getPromptCategories, getPromptsByCategory } from "@/lib/data/prompts";

export const metadata: Metadata = {
  title: "Kostenlose KI-Prompts für Beauty-Studios | Javera Studio",
  description:
    "Kostenlose KI-Prompts für Beauty-Studios: Content-Ideen, Instagram-Texte und praktische Unterstützung für den Studioalltag. Direkt kopieren und ausprobieren.",
  alternates: { canonical: "https://www.javera-studio.at/prompts" },
  openGraph: {
    title: "Kostenlose KI-Prompts für Beauty-Studios | Javera Studio",
    description:
      "Kostenlose KI-Prompts für Beauty-Studios: Content-Ideen, Instagram-Texte und praktische Unterstützung für den Studioalltag. Direkt kopieren und ausprobieren.",
    url: "https://www.javera-studio.at/prompts",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Kostenlose KI-Prompts für Beauty-Studios | Javera Studio",
    description:
      "Kostenlose KI-Prompts für Beauty-Studios: Content-Ideen, Instagram-Texte und praktische Unterstützung für den Studioalltag. Direkt kopieren und ausprobieren.",
    images: ["/og-image.jpg"],
  },
};

export default function PromptsPage() {
  const categories = getPromptCategories();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kostenlose KI-Prompts für Beauty-Studios",
    description:
      "Kostenlose KI-Prompts für Beauty-Studios: Content-Ideen, Instagram-Texte und praktische Unterstützung für den Studioalltag.",
    url: "https://www.javera-studio.at/prompts",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: promptItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        description: item.description,
      })),
    },
  };

  return (
    <main className="bg-background text-ink min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-14 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: "var(--peach-soft)" }}
        />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <span className="w-8 h-px bg-muted-foreground/50" />
              Javera KI-Bibliothek
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
              KI kann dir im Studio Arbeit abnehmen. Wenn du ihr die richtigen Fragen stellst.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Hier findest du kostenlose KI-Prompts speziell für Beauty-Unternehmerinnen – für Content,
              Kundenkommunikation, Texte, Organisation und deinen Online-Auftritt.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Keine komplizierten Anleitungen. Prompt kopieren, deine Angaben einsetzen und ausprobieren.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs text-muted-foreground">
              <span className="px-3 py-1.5 rounded-full border border-border/60">Kostenlos</span>
              <span className="px-3 py-1.5 rounded-full border border-border/60">Direkt kopierbar</span>
              <span className="px-3 py-1.5 rounded-full border border-border/60">Für Beauty-Studios</span>
            </div>

            <div className="mt-8">
              <a
                href="#prompt-bibliothek"
                className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
              >
                Zu den Prompts ↓
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-xl shadow-ink/10">
            <Image
              src="/kiprompts.png"
              alt="Illustration einer erschöpften Beauty-Studio-Betreiberin am Laptop, die sich mit Social-Media-Content abmüht"
              width={1402}
              height={1122}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Erklärung */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-ink">
            KI soll dich unterstützen – nicht nach KI klingen lassen.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Viele KI-Ergebnisse wirken austauschbar, weil die KI zu wenig Informationen bekommt. Mit
            einem guten Prompt gibst du ihr Kontext, Zielgruppe, Aufgabe und Tonalität vor.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Die folgenden Prompts sind deshalb bewusst etwas ausführlicher aufgebaut. Du musst meistens
            nur die Angaben in den eckigen Klammern durch deine eigenen ersetzen.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="rounded-2xl bg-background border border-border/60 p-5">
              <span className="text-xs uppercase tracking-[0.15em] text-mauve font-semibold">
                Schritt 1
              </span>
              <p className="mt-2 text-sm text-ink font-medium">Prompt kopieren</p>
            </div>
            <div className="rounded-2xl bg-background border border-border/60 p-5">
              <span className="text-xs uppercase tracking-[0.15em] text-mauve font-semibold">
                Schritt 2
              </span>
              <p className="mt-2 text-sm text-ink font-medium">Angaben in [Klammern] ersetzen</p>
            </div>
            <div className="rounded-2xl bg-background border border-border/60 p-5">
              <span className="text-xs uppercase tracking-[0.15em] text-mauve font-semibold">
                Schritt 3
              </span>
              <p className="mt-2 text-sm text-ink font-medium">In ChatGPT einfügen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt-Bibliothek */}
      <section id="prompt-bibliothek" className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          {categories.map((category) => (
            <div key={category} className="mb-14 last:mb-0">
              <h2 className="font-serif text-2xl md:text-3xl text-ink mb-6">{category}</h2>
              <div className="space-y-6">
                {getPromptsByCategory(category).map((item) => (
                  <PromptCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Javera-Übergang */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
            KI kann dir Arbeit abnehmen. Dein Online-Auftritt sollte trotzdem nach dir aussehen.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Javera Studio unterstützt Beauty-Unternehmerinnen dabei, ihre Qualität auch online sichtbar
            zu machen – mit individuellen Websites, Branding und einem professionellen Online-Auftritt.
          </p>
          <div className="mt-8">
            <Link
              href="/leistungen"
              className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
            >
              Javera Studio kennenlernen
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
