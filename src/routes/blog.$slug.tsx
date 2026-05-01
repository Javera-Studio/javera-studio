import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactElement } from "react";
import { SiteFooter } from "@/components/SiteFooter";

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: () => ReactElement;
};

const posts: Record<string, Post> = {
  "warum-nagelstudio-wien-website": {
    slug: "warum-nagelstudio-wien-website",
    title: "Website für Nagelstudio Wien: Warum du ohne Google unsichtbar bist",
    description:
      "Du hast ein Nagelstudio in Wien? Ohne eigene Website verlierst du täglich neue Kundinnen. Erfahre, was eine professionelle Nagelstudio-Website bringt und was sie kostet.",
    date: "Mai 2026",
    readTime: "4 Minuten",
    content: () => (
      <>
        <p>
          Viele Nagelstudios in Wien sind gut gebucht — zumindest am Anfang. Die
          ersten Kundinnen kommen über Empfehlungen, Instagram, oder weil das
          Studio einfach um die Ecke liegt. Aber irgendwann stagniert es. Neue
          Kundinnen bleiben aus. Und der Grund ist meistens derselbe: Das Studio
          ist bei Google unsichtbar.
        </p>

        <h2>Wie Kundinnen in Wien heute ein Nagelstudio suchen</h2>
        <p>
          Stell dir vor, jemand zieht neu nach Wien-Favoriten. Sie kennt
          niemanden, hat keine Empfehlung. Was macht sie? Sie öffnet Google und
          tippt: „Nagelstudio Wien Favoriten" oder „Nageldesign in meiner Nähe".
        </p>
        <p>
          Was erscheint? Nagelstudios mit einer eigenen Website. Studios mit
          Google-Bewertungen. Studios die professionell wirken — und die man
          direkt buchen kann.
        </p>
        <p>Wer nur auf Instagram ist, erscheint dort nicht. Gar nicht.</p>

        <h2>Das Problem mit Instagram allein</h2>
        <p>
          Instagram ist wunderbar, um bestehende Kundinnen zu halten und deine
          Arbeit zu zeigen. Aber Instagram ist kein Ersatz für Google. Niemand
          tippt „Nagelstudio Wien" in Google und landet auf einem
          Instagram-Profil.
        </p>
        <p>
          Dazu kommt: Instagram gehört dir nicht. Der Algorithmus ändert sich,
          die Reichweite bricht ein, im schlimmsten Fall wird das Konto
          gesperrt. Eine eigene Website für dein Nagelstudio gehört dir —
          dauerhaft und unabhängig.
        </p>

        <h2>Was eine Website für dein Nagelstudio in Wien konkret bringt</h2>
        <p>Eine gute Website für ein Nagelstudio in Wien macht drei Dinge:</p>
        <p>
          <strong>Erstens</strong> macht sie dich bei Google auffindbar — genau
          dann, wenn jemand aktiv nach einem Nagelstudio sucht. Das sind die
          wertvollsten Kundinnen überhaupt, weil sie bereits buchbereit sind.
        </p>
        <p>
          <strong>Zweitens</strong> baut sie Vertrauen auf — bevor die Kundin
          überhaupt anruft. Fotos, Preise, Leistungen, Bewertungen. Die Kundin
          weiß schon vor dem ersten Kontakt, dass sie bei dir richtig ist.
        </p>
        <p>
          <strong>Drittens</strong> nimmt sie dir Arbeit ab. Ein Buchungslink
          auf der Website bedeutet weniger WhatsApp-Nachrichten, weniger
          Telefonate, weniger Hin-und-Her — mehr Zeit für deine Kundinnen.
        </p>

        <h2>Wann lohnt sich eine Website für ein Nagelstudio nicht?</h2>
        <p>
          Ehrlich gesagt: Wenn du bereits vollständig ausgebucht bist und keine
          neuen Kundinnen brauchst, ist eine Website weniger dringend. Aber
          selbst dann schützt sie dich — falls Instagram wegbricht, falls du
          umziehst oder expandieren möchtest.
        </p>

        <h2>Was kostet eine Website für ein Nagelstudio in Wien?</h2>
        <p>
          Eine professionelle Nagelstudio-Website in Wien kostet einmalig ab
          350 € (Starter) bis ab 600 € (Premium) — je nach Umfang und
          gewünschten Funktionen. Dazu kommen ca. 10–20 € pro Jahr für die
          Domain und ca. 5–15 € pro Monat für Hosting.
        </p>
        <p>
          Verglichen mit dem Umsatz einer einzigen Neukunde pro Monat rechnet
          sich das sehr schnell. Und du entscheidest erst nach einer
          kostenlosen Demo, ob du weitermachen möchtest — ohne Vorauszahlung,
          ohne Risiko.
        </p>

        <h2>Fazit: Instagram ist Marketing. Eine Website ist Infrastruktur.</h2>
        <p>
          Beides zusammen funktioniert am besten — aber wenn du nur eines
          haben kannst, dann die Website. Sie arbeitet für dich, auch wenn du
          gerade bei einer Kundin bist.
        </p>
        <p>
          Wenn du sehen möchtest, wie eine Website für dein Nagelstudio
          aussehen könnte: Ich erstelle dir kostenlos eine individuelle Demo —
          unverbindlich, in wenigen Tagen, ganz auf deinen Stil abgestimmt.
        </p>
      </>
    ),
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Javera Studio` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-3xl font-serif text-ink mb-3">Artikel nicht gefunden</h1>
        <Link to="/blog" className="text-primary hover:underline">
          ← Zurück zum Blog
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <article className="max-w-2xl mx-auto px-6 pt-16 pb-16">
          <Link
            to="/blog"
            className="text-sm text-muted-foreground hover:text-ink transition-colors"
          >
            ← Zurück zum Blog
          </Link>

          <div className="mt-8 mb-6 text-xs text-muted-foreground">
            {post.date} · Lesedauer: {post.readTime}
          </div>

          <h1 className="text-3xl md:text-4xl font-serif text-ink leading-tight mb-8">
            {post.title}
          </h1>

          <div className="text-foreground/90 leading-relaxed space-y-5 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_strong]:text-ink">
            {post.content()}
          </div>

          <div className="mt-12 p-6 md:p-8 bg-cream border border-border rounded-2xl text-center">
            <p className="text-ink font-semibold mb-2">
              Lust auf eine eigene Website für dein Studio?
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              Ich erstelle dir kostenlos eine individuelle Demo — unverbindlich
              und ganz auf deinen Stil abgestimmt.
            </p>
            <Link
              to="/demo-anfrage"
              className="inline-block py-3 px-6 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition"
            >
              Kostenlose Demo sichern
            </Link>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-10">
            Javera Studio — Webdesign für Beauty Studios in Wien
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
