export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogLink = {
  label: string;
  href: string;
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string };

export type BlogPost = {
  /** URL-Segment, z.B. "website-kosten-beauty-studio" → /blog/website-kosten-beauty-studio */
  slug: string;
  /** H1 auf der Artikelseite und og:title / twitter:title */
  title: string;
  /** Meta-Description, Basis für Article-Schema und Fallback-Excerpt */
  description: string;
  /** Kurztext für die Übersichts-Card. Fällt auf description zurück, wenn nicht gesetzt. */
  excerpt?: string;
  /** ISO-Datum, z.B. "2026-07-01" – bestimmt Sortierung & Anzeige */
  date: string;
  /** z.B. "4 min Lesezeit" */
  readTime?: string;
  /** Kategorie-/Themen-Label für Card & Artikel-Kopf */
  category?: string;
  /** Pfad zu einem Beitragsbild in /public, optional */
  image?: string;
  /** Zusätzliche Keywords für Meta-Tags */
  keywords?: string[];
  /** Strukturierter Artikeltext */
  content: BlogBlock[];
  /** Optionale FAQ-Blöcke → werden als Accordion gerendert + FAQPage-Schema */
  faq?: BlogFaqItem[];
  /** Optionale interne Verlinkungen (Leistungen, Preise, Kundenprojekte, andere Artikel) */
  relatedLinks?: BlogLink[];
};

/**
 * Zentrale Artikel-Liste. Neuer Artikel = neues Objekt hier ergänzen –
 * Blog-Übersicht, einzelne Artikelseiten, Sitemap und Schema-Markup
 * lesen ausschließlich aus diesem Array, ohne Code-Änderungen an anderer Stelle.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "warum-nagelstudio-wien-website",
    title: "Website für Nagelstudio Wien: Warum du ohne Google unsichtbar bist",
    description:
      "Du hast ein Nagelstudio in Wien? Ohne eigene Website verlierst du täglich neue Kundinnen. Erfahre, was eine professionelle Nagelstudio-Website bringt und was sie kostet.",
    date: "2026-05-01",
    readTime: "6 min Lesezeit",
    category: "Sichtbarkeit & SEO",
    keywords: ["Website Nagelstudio Wien", "Nagelstudio Google Sichtbarkeit", "Nagelstudio Website Kosten"],
    content: [
      { type: "paragraph", text: "Immer mehr Kundinnen suchen ihr nächstes Nagelstudio nicht mehr über Empfehlungen, sondern direkt über Google. Wer als lokales Studio dort nicht auftaucht, verliert Anfragen an Studios, die einfacher zu finden sind." },
      { type: "paragraph", text: "In diesem Artikel erfährst du, wie Kundinnen in Wien heute nach einem Nagelstudio suchen, was eine gute Website dafür leisten muss und mit welchen Kosten du realistisch rechnen kannst." },
      { type: "heading", text: "So suchen Kundinnen heute nach einem Nagelstudio" },
      { type: "paragraph", text: "Viele Kundinnen suchen ihr Nagelstudio heute direkt über Google – zum Beispiel nach:" },
      { type: "list", items: ["Nagelstudio Wien", "Nagelstudio Wien 1010", "Nagelstudio in meiner Nähe", "Maniküre Wien", "Gelnägel Wien"] },
      { type: "paragraph", text: "Google zeigt bei diesen Suchen bevorzugt Studios mit einer eigenen Website und Google-Bewertungen an – sie wirken auffindbarer und vertrauenswürdiger. Wer nur auf Instagram ist, taucht bei diesen Suchen in der Regel gar nicht auf." },
      { type: "heading", text: "Was sollte auf einer Website für ein Nagelstudio stehen?" },
      { type: "paragraph", text: "Eine gute Website zeigt Interessentinnen auf einen Blick alles, was sie vor einem Termin wissen möchten:" },
      { type: "list", items: ["Leistungen", "Preise", "Bilder der Arbeiten", "Bewertungen", "Kontakt", "Google Maps", "Terminbuchung", "Häufige Fragen"] },
      { type: "heading", text: "Das Problem mit Instagram allein" },
      { type: "paragraph", text: "Instagram ist wunderbar, um bestehende Kundinnen zu halten und deine Arbeit zu zeigen. Aber Instagram ist kein Ersatz für Google. Niemand tippt „Nagelstudio Wien“ in Google und landet auf einem Instagram-Profil." },
      { type: "paragraph", text: "Dazu kommt: Instagram gehört dir nicht. Der Algorithmus ändert sich, die Reichweite bricht ein, im schlimmsten Fall wird das Konto gesperrt. Eine eigene Website gehört dir – dauerhaft und unabhängig." },
      { type: "heading", text: "Was eine Website konkret bringt" },
      { type: "paragraph", text: "Eine gute Website macht dich bei Google auffindbar – genau in dem Moment, in dem jemand aktiv nach einem Nagelstudio sucht. Konkret bringt sie dir:" },
      { type: "list", items: ["Vertrauen, noch bevor die Kundin anruft", "Einen professionellen ersten Eindruck", "Informationen rund um die Uhr – auch außerhalb deiner Öffnungszeiten", "Weniger Rückfragen per WhatsApp oder Telefon", "Eine bessere Erfahrung für deine Kundinnen von Anfang an"] },
      { type: "heading", text: "Was kostet eine Website für ein Nagelstudio in Wien?" },
      { type: "paragraph", text: "Viele kleinere Nagelstudios starten bereits mit einem übersichtlichen One-Pager, der alle wichtigen Informationen auf einer Seite bündelt. Bietest du mehrere Leistungen an, hast mehrere Mitarbeiterinnen oder möchtest langfristig stärker bei Google sichtbar sein, profitierst du häufig von einer Premium-Website mit mehreren Unterseiten." },
      { type: "paragraph", text: "Bei JAVERA Studio kostet die Starter Website einmalig ab 500 €, die Premium Website ab 900 € – je nach Umfang. Dazu kommen ca. 15 € pro Jahr für Domain & Hosting. Verglichen mit dem Umsatz einer einzigen Neukundin pro Monat rechnet sich das sehr schnell." },
      { type: "paragraph", text: "Einen ausführlichen Preisvergleich für alle Beauty-Branchen findest du in meinem Artikel zu den Website-Kosten für Beauty-Studios." },
      { type: "heading", text: "Fazit: Google-Sichtbarkeit und Instagram ergänzen sich" },
      { type: "paragraph", text: "Instagram bleibt wichtig, um deine Arbeit zu zeigen und mit bestehenden Kundinnen in Kontakt zu bleiben. Für die Suche über Google reicht das jedoch nicht aus. Deine Website ist das Schaufenster deines Studios im Internet – der Ort, an dem neue Kundinnen dich finden, dir vertrauen und einen Termin buchen, unabhängig von Algorithmus und Reichweite." },
      { type: "heading", text: "Bereit, dein Studio online sichtbar zu machen?" },
      { type: "paragraph", text: "Eine professionelle Website ist der einfachste Weg, planbar neue Kundinnen zu gewinnen. Du musst dabei nichts riskieren – ich erstelle dir vorab kostenlos eine Demo, ganz auf dein Studio zugeschnitten." },
      { type: "callout", text: "Du bekommst vorab eine kostenlose Analyse & Demo deines Studios – damit du siehst, wie dein Auftritt online wirken könnte. Unverbindlich und individuell gestaltet." },
    ],
    faq: [
      { question: "Braucht ein Nagelstudio in Wien wirklich eine Website?", answer: "Ja, vor allem wenn du über Google gefunden werden möchtest. Viele Kundinnen suchen aktiv nach „Nagelstudio Wien“ oder „Nagelstudio in meiner Nähe“ – ohne Website taucht dein Studio bei diesen Suchen in der Regel nicht auf." },
      { question: "Reicht Instagram für ein Nagelstudio?", answer: "Instagram ist wichtig, um deine Arbeiten zu zeigen und bestehende Kundinnen zu halten. Für die Google-Suche reicht es aber nicht aus – dafür brauchst du eine eigene Website." },
      { question: "Was kostet eine Website für ein Nagelstudio?", answer: "Eine Starter Website kostet bei JAVERA Studio ab 500 €, eine Premium Website ab 900 € – abhängig vom Umfang. Details findest du im Artikel „Was kostet eine Website für ein Beauty-Studio?“." },
      { question: "Wie werde ich bei Google gefunden?", answer: "Mit einer Website, die suchmaschinenfreundlich aufgebaut ist – klare Struktur, sinnvolle Überschriften und ein Google Business Profil, das auf deine Website verlinkt." },
      { question: "Welche Inhalte sollte eine Nagelstudio-Website enthalten?", answer: "Leistungen, Preise, Bilder deiner Arbeiten, Bewertungen, Kontaktmöglichkeiten, Google Maps, eine Terminbuchung und Antworten auf häufige Fragen." },
    ],
    relatedLinks: [
      { label: "Was kostet eine Website für ein Beauty-Studio?", href: "/blog/website-kosten-beauty-studio" },
      { label: "Instagram oder Website? Warum beides zusammen wirkt", href: "/blog/instagram-oder-website" },
      { label: "Alle Preise im Überblick", href: "/preise" },
      { label: "Häufige Fragen zu Preisen", href: "/preise#faq" },
      { label: "Kundenprojekt: One-Pager für Paula Venc ansehen", href: "/#kundenprojekte" },
      { label: "Direkt Kontakt aufnehmen", href: "/#schreib-mir" },
    ],
  },
  {
    slug: "beauty-trends-2026",
    title: "Die größten Beauty-Trends 2026 – was Kund:innen jetzt wirklich wollen",
    description:
      "Skin First, Natural Brows, Scalp Health und Neuro-Beauty: Erfahre, welche Beauty-Trends 2026 deine Kund:innen bewegen – und wie du dein Studio optimal positionierst.",
    keywords: ["Beauty Trends 2026", "Skin First Behandlung", "Natural Brows", "Scalp Health Studio", "Neuro-Beauty", "Clean Beauty 2026"],
    date: "2026-05-02",
    readTime: "6 min Lesezeit",
    category: "Beauty Trends 2026",
    content: [
      { type: "paragraph", text: "Jedes Jahr tauchen neue Beauty-Trends auf – doch längst nicht jeder davon ist für dein Studio relevant. Viele Beauty-Unternehmerinnen fragen sich: Welche Entwicklungen bleiben wirklich wichtig, und welche sind nur ein kurzfristiger Hype?" },
      { type: "paragraph", text: "Dieser Artikel zeigt dir, welche Trends 2026 tatsächlich die Erwartungen deiner Kundinnen prägen – und was das konkret für dein Studio bedeutet. Die Beauty-Welt dreht sich dabei nicht mehr um Transformation, sondern um Verfeinerung: mehr Substanz, weniger Effekt." },
      { type: "heading", text: "Skin First – Gesunde Haut als neues Luxusgut" },
      { type: "paragraph", text: "Das Ziel ist nicht mehr perfekte Abdeckung, sondern sichtbar gepflegte, strahlende Haut. Kundinnen buchen 2026 gezielt Behandlungen für Barrier-Repair und Mikrobiompflege – weniger Säure-Peelings, mehr Aufbau und Langzeitpflege. Makeup folgt der Haut, nicht umgekehrt: leichte Texturen, feuchtigkeitsreiche Glossfinishes, kaum Foundation." },
      { type: "subheading", text: "Was bedeutet das für dein Studio?" },
      { type: "paragraph", text: "Kundinnen erwarten heute ehrliche Beratung statt schneller Kaschier-Lösungen. Wer Hautanalysen anbietet, Ergebnisse verständlich erklärt und auf langfristige Pflege statt kurzfristige Effekte setzt, baut genau das Vertrauen auf, das 2026 den Unterschied macht." },
      { type: "heading", text: "Natural Brows 2.0 – Weniger Lamination, mehr Präzision" },
      { type: "paragraph", text: "Die überdramatische Laminated-Brow-Ära neigt sich dem Ende zu. 2026 sind Brauen definiert, aber natürlich geformt – angepasst ans individuelle Muster, mit Fokus auf Dichte und Balance." },
      { type: "subheading", text: "Was bedeutet das für dein Studio?" },
      { type: "paragraph", text: "Die Consultation vor der Behandlung wird wichtiger denn je. Wer die individuelle Augenbrauenform genau analysiert und die Kundin aktiv in die Entscheidung einbindet, liefert ein Ergebnis, das langfristig überzeugt – statt eines Looks, der schon in wenigen Monaten wieder aus der Mode ist." },
      { type: "heading", text: "Scalp Health – Das Haar beginnt an der Wurzel" },
      { type: "paragraph", text: "Kopfhautpflege ist 2026 kein Nischenthema mehr. Kund:innen fragen aktiv nach Kopfhaut-Analysen, pflegenden Treatments und Low-Maintenance-Schnittformen. Warme, dimensionale Haarfarben – weiche Kupfertöne, reiche Brünetten, sanfte Goldblondtöne – ersetzen harte High-Contrast-Looks." },
      { type: "subheading", text: "Was bedeutet das für dein Studio?" },
      { type: "paragraph", text: "Kopfhaut-Analysen und individuelle Pflegeempfehlungen werden zunehmend erwartet – nicht nur bei Facials, auch bei Haarbehandlungen. Studios, die dieses Thema aktiv ansprechen, positionieren sich als kompetente Ansprechpartnerin für ganzheitliche Pflege, nicht nur für den nächsten Termin." },
      { type: "heading", text: "Wellness trifft Beauty – Neuro-Beauty im Kommen" },
      { type: "paragraph", text: "Der Zusammenhang zwischen mentaler Gesundheit und Hautbild rückt ins Zentrum. Studios, die Behandlungen als ganzheitliches Erlebnis gestalten – ruhige Atmosphäre, Aromatherapie, achtsame Rituale – treffen genau den Nerv der Zeit. Kund:innen wollen keine schnelle Behandlung, sondern eine echte Auszeit." },
      { type: "subheading", text: "Was bedeutet das für dein Studio?" },
      { type: "paragraph", text: "Nicht jedes Studio muss sich komplett neu erfinden. Schon kleine Anpassungen – eine ruhigere Atmosphäre, bewusst gewählte Musik oder ein kurzer Moment der Ruhe vor der Behandlung – verändern, wie eine Kundin den Besuch erlebt und in Erinnerung behält." },
      { type: "heading", text: "Personalisierung & Beratung als Servicekern" },
      { type: "paragraph", text: "2026 kommen Kund:innen informiert – sie kennen Inhaltsstoffe, vergleichen Ergebnisse und erwarten individuelle Empfehlungen statt Standardprogramme." },
      { type: "subheading", text: "Was bedeutet das für dein Studio?" },
      { type: "paragraph", text: "Wer Fragen ehrlich beantwortet, Ergebnisse realistisch einschätzt und Empfehlungen auf die jeweilige Kundin zuschneidet statt Standardpakete zu verkaufen, baut genau das Vertrauensverhältnis auf, das aus einer Erstkundin eine Stammkundin macht." },
      { type: "quote", text: "Die Botschaft ist klar: 2026 gewinnen Studios, die Gesundheit, Echtheit und echte Expertise in den Mittelpunkt stellen. Weniger Drama, mehr Wirkung – das ist der Spirit dieser Saison." },
      { type: "heading", text: "Was bedeutet das für dein Beauty-Studio?" },
      { type: "paragraph", text: "Studios sollten 2026 besonders auf folgende Punkte achten:" },
      { type: "list", items: ["Persönliche Beratung", "Hochwertige Präsentation", "Authentische Kommunikation", "Professionelle Website", "Aktuelle Bilder", "Vertrauen und Markenauftritt"] },
      { type: "heading", text: "Der gemeinsame Nenner: Vertrauen entsteht online" },
      { type: "paragraph", text: "Alle diese Trends haben eines gemeinsam: Kundinnen informieren sich bewusster, vergleichen Studios online und bauen bereits vor dem ersten Termin Vertrauen auf. Trends zu kennen ist das eine – aber wenn dein Studio online nicht sichtbar ist, bucht jemand anderes den Termin." },
      { type: "paragraph", text: "Deine Website ist das Schaufenster deines Studios im Internet: der Ort, an dem persönliche Beratung, hochwertige Präsentation und Vertrauen zum ersten Mal sichtbar werden – oft schon lange bevor jemand anruft." },
      { type: "callout", text: "Du bekommst vorab eine kostenlose Analyse & Demo deines Studios – damit du siehst, wie dein Auftritt online wirken könnte. Unverbindlich und individuell gestaltet." },
    ],
    faq: [
      { question: "Welche Beauty-Trends bleiben langfristig relevant?", answer: "Trends rund um Hautgesundheit, ehrliche Beratung und Personalisierung sind keine kurzfristigen Hypes, sondern spiegeln ein grundsätzlich verändertes Kundinnenverhalten wider. Sie bleiben auch über 2026 hinaus relevant." },
      { question: "Muss jedes Studio jedem Trend folgen?", answer: "Nein. Nicht jeder Trend passt zu jedem Studio. Wichtiger ist, die Entwicklungen zu kennen und gezielt die Punkte umzusetzen, die zu deiner Zielgruppe und deinem Angebot passen." },
      { question: "Was erwarten Kundinnen heute von einem modernen Beauty-Studio?", answer: "Ehrliche Beratung, eine hochwertige Präsentation der Leistungen und einen professionellen Auftritt – online wie vor Ort. Reine Verkaufsgespräche wirken zunehmend unglaubwürdig." },
      { question: "Welche Rolle spielt die Website für den ersten Eindruck?", answer: "Eine sehr große: Viele Kundinnen informieren sich online, bevor sie überhaupt Kontakt aufnehmen. Deine Website entscheidet oft mit darüber, ob Vertrauen entsteht oder die Suche woanders weitergeht." },
      { question: "Wie kann ich mein Studio modern präsentieren?", answer: "Mit aktuellen Bildern deiner Arbeiten, einer klaren Struktur deiner Leistungen und Preise sowie einem Online-Auftritt, der zu deiner Marke passt – auf Instagram genauso wie auf deiner Website." },
    ],
    relatedLinks: [
      { label: "Was kostet eine Website für ein Beauty-Studio?", href: "/blog/website-kosten-beauty-studio" },
      { label: "Instagram oder Website? Warum beides zusammen wirkt", href: "/blog/instagram-oder-website" },
      { label: "Alle Preise im Überblick", href: "/preise" },
      { label: "Häufige Fragen zu Preisen", href: "/preise#faq" },
      { label: "Kundenprojekte ansehen", href: "/#kundenprojekte" },
      { label: "Direkt Kontakt aufnehmen", href: "/#schreib-mir" },
    ],
  },
  {
    slug: "instagram-oder-website",
    title: "Instagram oder Website? Warum viele erfolgreiche Studios beides kombinieren",
    description:
      "Instagram ist für viele Beauty Studios einer der wichtigsten Kanäle, um sichtbar zu werden und Vertrauen aufzubauen. Doch immer mehr erfolgreiche Studios ergänzen ihren Auftritt durch eine eigene Website. Warum die Kombination aus Instagram, Website und einem einheitlichen Branding oft besonders professionell wirkt.",
    keywords: ["Instagram Beauty Studio", "Website Beauty Studio", "Branding Wien", "Instagram und Website kombinieren", "Instagram vs Website"],
    date: "2026-06-15",
    readTime: "6 min Lesezeit",
    category: "Sichtbarkeit & Branding",
    content: [
      { type: "paragraph", text: "Viele Beauty-Profis fragen sich irgendwann: Reicht Instagram nicht eigentlich aus? Ich poste regelmäßig, meine Community wächst – wozu also noch eine Website?" },
      { type: "paragraph", text: "Instagram ist wichtig, keine Frage. Aber was passiert, wenn eine Interessentin mehr wissen möchte – deine Preise, deine Leistungen, ob du gerade freie Termine hast? Oder wenn sie dein Studio nicht über Instagram, sondern über Google sucht?" },
      { type: "paragraph", text: "Genau an diesem Punkt beginnt die Rolle einer eigenen Website." },
      { type: "heading", text: "Instagram vs. Website – der direkte Vergleich" },
      { type: "paragraph", text: "Beide Kanäle erfüllen unterschiedliche Aufgaben. Ein direkter Vergleich macht das schnell sichtbar:" },
      {
        type: "table",
        headers: ["Instagram", "Website"],
        rows: [
          ["Inspiration", "Informationen"],
          ["Reichweite", "Vertrauen"],
          ["Stories", "Leistungen"],
          ["Reels", "Preise"],
          ["Community", "Google-Sichtbarkeit"],
          ["Kurzfristige Inhalte", "Dauerhafte Präsenz"],
        ],
      },
      { type: "heading", text: "Instagram bleibt unverzichtbar" },
      { type: "paragraph", text: "Instagram ist für Beauty Studios eine großartige Möglichkeit, Arbeiten zu zeigen, Persönlichkeit zu vermitteln und mit Kundinnen in Kontakt zu bleiben. Viele erfolgreiche Studios gewinnen einen Großteil ihrer Anfragen direkt über Social Media – und das aus gutem Grund. Die Plattform ist visuell, persönlich und erlaubt eine direkte Verbindung zur Community." },
      { type: "heading", text: "Was passiert, wenn Instagram ausfällt?" },
      { type: "paragraph", text: "Accounts können gehackt oder eingeschränkt werden, Algorithmen ändern sich und die Reichweite kann schwanken – unabhängig davon, wie gut deine Inhalte sind. Eine eigene Website gehört ausschließlich dir. Sie bleibt online, unabhängig von Plattform-Entscheidungen, die du selbst nicht beeinflussen kannst." },
      { type: "heading", text: "Warum manche Studios zusätzlich auf eine Website setzen" },
      { type: "paragraph", text: "Während Instagram perfekt für aktuelle Inhalte, Stories und Kundennähe ist, bietet eine Website einen festen Ort für alle wichtigen Informationen – jederzeit abrufbar, auch dann, wenn du gerade eine Kundin behandelst und nicht ans Handy gehen kannst:" },
      { type: "list", items: ["Leistungen und Preise", "Behandlungen", "Terminbuchung", "Schulungen und Workshops", "Kontaktmöglichkeiten", "Bewertungen", "Häufige Fragen"] },
      { type: "paragraph", text: "Interessentinnen finden dadurch schneller die Informationen, die sie suchen – ohne durch den Feed scrollen zu müssen." },
      { type: "heading", text: "Der professionelle Eindruck einer starken Marke" },
      { type: "paragraph", text: "Besonders hochwertig wirkt ein Studio, wenn Website, Instagram, Farben, Schriften und Bildsprache aufeinander abgestimmt sind. Ein einheitliches Branding schafft Vertrauen und Wiedererkennung. Kundinnen erkennen sofort, dass alles zusammengehört und professionell aufgebaut wurde – das vermittelt Seriosität, noch bevor der erste Termin gebucht wird." },
      { type: "heading", text: "Mehr Übersicht für Kundinnen" },
      { type: "paragraph", text: "Je größer ein Studio wird, desto wichtiger wird eine klare Struktur. Gerade bei:" },
      { type: "list", items: ["mehreren Behandlungen", "Schulungen", "Workshops", "Aktionen", "Teammitgliedern"] },
      { type: "paragraph", text: "… kann eine Website helfen, Informationen übersichtlich darzustellen – statt alles in Highlights und Story-Archiven zu verstecken." },
      { type: "heading", text: "Warum Google trotzdem wichtig bleibt" },
      { type: "paragraph", text: "Viele Kundinnen suchen aktiv nach Begriffen wie:" },
      { type: "list", items: ["Nagelstudio Wien", "Kosmetikstudio Wien", "PMU Studio Wien", "Wimpernstudio Wien"] },
      { type: "paragraph", text: "Instagram kann dabei unterstützen, gefunden zu werden – etwa über Hashtags oder Standortmarkierungen. Eine eigene Website hilft zusätzlich dabei, bei Google sichtbar zu sein und diese Informationen dauerhaft bereitzustellen, unabhängig von Algorithmus-Änderungen." },
      { type: "heading", text: "Fazit: Instagram und Website ergänzen sich" },
      { type: "paragraph", text: "Instagram und eine eigene Website schließen sich nicht aus – sie übernehmen unterschiedliche Aufgaben. Instagram sorgt für Nähe, Reichweite und aktuelle Einblicke in deinen Alltag. Deine Website ist das Schaufenster deines Studios im Internet: der Ort, an dem Interessentinnen in Ruhe alle wichtigen Informationen finden und sich ein vollständiges Bild von deinem Studio machen können." },
      { type: "quote", text: "Eine Website ersetzt Instagram nicht. Und Instagram ersetzt keine Website. Die Kombination aus beiden Kanälen kann jedoch dabei helfen, professioneller aufzutreten, Informationen übersichtlich darzustellen und eine starke Marke aufzubauen, die Vertrauen schafft und im Gedächtnis bleibt." },
      { type: "heading", text: "Bereit, deinen Online-Auftritt auf das nächste Level zu bringen?" },
      { type: "paragraph", text: "Ich erstelle dir vorab kostenlos eine individuelle Demo – angepasst an dein Studio, deine Leistungen und deine Persönlichkeit. So siehst du, wie deine Website aussehen könnte, bevor du dich entscheidest." },
      { type: "callout", text: "Du bekommst vorab eine kostenlose Analyse & Demo deines Studios – damit du siehst, wie dein Auftritt online wirken könnte. Unverbindlich und individuell gestaltet." },
    ],
    faq: [
      { question: "Reicht Instagram für ein kleines Beauty-Studio?", answer: "Für den Anfang oft ja – vor allem, wenn du hauptsächlich über Empfehlungen und lokale Reichweite wächst. Sobald du aber auch über Google gefunden werden möchtest oder Informationen strukturiert bereitstellen willst, stößt Instagram allein an seine Grenzen." },
      { question: "Brauche ich eine Website, wenn ich viele Empfehlungen bekomme?", answer: "Empfehlungen sind wertvoll, ersetzen aber keine Auffindbarkeit bei Google. Viele Interessentinnen recherchieren zusätzlich online, bevor sie einen Termin buchen – eine Website gibt ihnen dort die nötigen Informationen." },
      { question: "Kann ich Instagram mit meiner Website verbinden?", answer: "Ja. Dein Instagram-Feed lässt sich direkt in deine Website einbinden, sodass Besucher deine aktuellen Beiträge sehen, ohne die Plattform wechseln zu müssen." },
      { question: "Was ist wichtiger – Website oder Instagram?", answer: "Keines von beiden ist grundsätzlich wichtiger. Instagram stärkt Reichweite und Nähe, die Website schafft Vertrauen und dauerhafte Auffindbarkeit. Die Kombination bringt den größten Effekt." },
      { question: "Kann ich meine Online-Terminbuchung auf meiner Website integrieren?", answer: "Ja. Bestehende Buchungssysteme wie Planity, Treatwell oder Beautinda lassen sich problemlos in deine Website einbinden, sodass Kundinnen direkt online einen Termin reservieren können." },
    ],
    relatedLinks: [
      { label: "Was kostet eine Website für ein Beauty-Studio?", href: "/blog/website-kosten-beauty-studio" },
      { label: "Alle Preise im Überblick", href: "/preise" },
      { label: "Häufige Fragen zu Preisen", href: "/preise#faq" },
      { label: "Kundenprojekte ansehen", href: "/#kundenprojekte" },
      { label: "Direkt Kontakt aufnehmen", href: "/#schreib-mir" },
    ],
  },
  {
    slug: "website-kosten-beauty-studio",
    title: "Was kostet eine Website für ein Beauty-Studio?",
    description:
      "Du möchtest wissen, was eine Website für dein Beauty-Studio kostet? Erfahre, welche Faktoren den Preis beeinflussen, welche Website zu deinem Studio passt und warum professionelles Webdesign eine Investition in deinen Erfolg ist.",
    keywords: ["Website Kosten Beauty Studio", "Website Preis Nagelstudio", "Homepage erstellen lassen Kosmetikstudio", "Webdesign Preise Wien"],
    date: "2026-07-02",
    readTime: "8 min Lesezeit",
    category: "Preise & Kosten",
    content: [
      { type: "paragraph", text: "Du führst ein Nagelstudio, Kosmetikstudio, Wimpernstudio, PMU-Studio, Waxing-Studio oder arbeitest als Make-up Artist und fragst dich, was eine professionelle Website eigentlich kostet? Dann bist du nicht allein." },
      { type: "paragraph", text: "Wenn du nach den Kosten für eine Website suchst, findest du im Internet alles – von kostenlosen Baukastensystemen über Angebote für wenige Hundert Euro bis hin zu Agenturen, die mehrere Tausend Euro verlangen. Kein Wunder, dass viele Studioinhaberinnen unsicher sind, welcher Preis realistisch ist und welche Lösung wirklich zu ihrem Studio passt." },
      { type: "paragraph", text: "In diesem Artikel zeige ich dir transparent," },
      { type: "list", items: ["welche Faktoren den Preis einer Website beeinflussen", "warum die Kosten so unterschiedlich ausfallen", "welche Website für dein Beauty-Studio sinnvoll ist", "und mit welchen Preisen du realistisch rechnen solltest"] },
      { type: "paragraph", text: "Mein Ziel ist nicht, dir die teuerste Lösung zu verkaufen, sondern dir dabei zu helfen, eine fundierte Entscheidung für dein Studio zu treffen." },
      { type: "heading", text: "Kurz zusammengefasst" },
      { type: "paragraph", text: "Die Kosten für eine professionell gestaltete Website hängen nicht von der Beauty-Branche ab, sondern vor allem vom Umfang, den gewünschten Funktionen und dem individuellen Design." },
      { type: "paragraph", text: "Zur Orientierung findest du hier die aktuellen Einstiegspreise bei JAVERA Studio:" },
      {
        type: "table",
        headers: ["Leistung", "Preis ab"],
        rows: [
          ["One-Pager Website", "500 €"],
          ["Premium Website", "900 €"],
          ["Logo Design", "250 €"],
          ["Visitenkarten", "100 €"],
          ["Flyer", "100 €"],
          ["Social-Media-Design", "90 €"],
        ],
      },
      { type: "paragraph", text: "Jedes Projekt wird individuell kalkuliert. Der endgültige Preis richtet sich nach deinen Anforderungen und dem Umfang der gewünschten Leistungen." },
      { type: "heading", text: "Warum unterscheiden sich Website-Preise so stark?" },
      { type: "paragraph", text: "Wenn du nach „Website Kosten“ oder „Homepage erstellen lassen“ suchst, wirst du schnell feststellen, dass die Preise enorm auseinandergehen. Manche Anbieter werben mit Websites für wenige Euro im Monat, während andere mehrere Tausend Euro verlangen." },
      { type: "paragraph", text: "Der Grund ist einfach: Website ist nicht gleich Website. Genauso wie eine klassische Maniküre, eine Neumodellage oder eine umfangreiche PMU-Behandlung unterschiedliche Leistungen umfassen, unterscheiden sich auch Websites erheblich in ihrem Umfang." },
      { type: "paragraph", text: "Zur groben Orientierung:" },
      {
        type: "table",
        headers: ["Anbieter", "Typische Preisspanne*"],
        rows: [
          ["Baukastensystem (Eigenleistung)", "geringe monatliche Kosten + eigener Zeitaufwand"],
          ["Freelancer", "ca. 500 € – 2.000 €"],
          ["Spezialisierte Webdesign-Agenturen", "ca. 1.500 € – 5.000 € oder mehr"],
        ],
      },
      { type: "paragraph", text: "*Die tatsächlichen Preise hängen immer vom Umfang des Projekts und den enthaltenen Leistungen ab." },
      { type: "paragraph", text: "Deshalb lohnt es sich nicht, Angebote ausschließlich anhand des Preises zu vergleichen. Viel wichtiger ist die Frage: Welche Leistungen sind enthalten und welche Website bringt dein Beauty-Studio wirklich weiter?" },
      { type: "paragraph", text: "Ein höherer Preis bedeutet nicht automatisch eine bessere Website – genauso wenig wie das günstigste Angebot automatisch die beste Wahl ist. Entscheidend ist, welche Leistungen enthalten sind, ob die Website individuell für dein Studio erstellt wird und ob der Anbieter deine Branche und Zielgruppe versteht." },
      { type: "paragraph", text: "Achte deshalb nicht nur auf den Preis, sondern darauf, welchen Mehrwert du langfristig für dein Studio erhältst." },
      { type: "heading", text: "Meine Philosophie" },
      { type: "paragraph", text: "Ich habe JAVERA Studio gegründet, weil ich überzeugt bin, dass auch kleine Beauty-Studios einen hochwertigen Online-Auftritt verdienen." },
      { type: "paragraph", text: "Viele selbstständige Beauty-Profis investieren mit viel Leidenschaft in ihr Studio, hochwertige Produkte, moderne Geräte und regelmäßige Weiterbildungen. Für eine professionelle Website bleibt dagegen oft nur ein kleines Budget – oder sie wird immer wieder auf später verschoben." },
      { type: "paragraph", text: "Dabei entsteht der erste Eindruck heute häufig lange bevor eine Kundin dein Studio betritt." },
      { type: "quote", text: "Deine Website ist das Schaufenster deines Studios im Internet." },
      { type: "paragraph", text: "Sie entscheidet oft darüber, ob eine Interessentin Vertrauen fasst, sich näher mit deinem Angebot beschäftigt oder direkt zur Konkurrenz weiterklickt." },
      { type: "paragraph", text: "Deshalb ist es mein Ziel, professionelles Webdesign für Beauty-Studios bezahlbar zu machen – ohne auf individuelles Design, persönliche Betreuung oder eine hochwertige Umsetzung zu verzichten." },
      { type: "heading", text: "Kostet eine Website für ein Nagelstudio, Kosmetikstudio oder PMU-Studio unterschiedlich viel?" },
      { type: "paragraph", text: "Die kurze Antwort lautet: Nein." },
      { type: "paragraph", text: "Der Preis einer Website richtet sich nicht danach, ob du ein Nagelstudio, Kosmetikstudio, Wimpernstudio oder PMU-Studio führst. Entscheidend ist vielmehr, welche Inhalte und Funktionen deine Website haben soll." },
      { type: "paragraph", text: "Ein kleines Nagelstudio mit einer übersichtlichen Leistungsübersicht benötigt oft deutlich weniger Umfang als eine Beauty-Academy mit Schulungsangeboten, mehreren Standorten oder zahlreichen Unterseiten." },
      { type: "paragraph", text: "Deshalb gibt es keine festen Preise pro Branche. Entscheidend ist, welche Inhalte und Funktionen deine Website benötigt." },
      { type: "heading", text: "Welche Website passt zu deinem Beauty-Studio?" },
      { type: "paragraph", text: "Jedes Studio ist einzigartig. Dennoch gibt es typische Anforderungen, an denen man sich orientieren kann." },
      { type: "subheading", text: "Für kleinere Studios: Ein One-Pager reicht oft völlig aus" },
      { type: "paragraph", text: "Ein One-Pager bündelt alle wichtigen Informationen auf einer einzigen Seite. Dazu gehören zum Beispiel:" },
      { type: "list", items: ["Vorstellung deines Studios", "Leistungen", "Preise", "Bilder deiner Arbeiten", "Kontaktmöglichkeiten", "Google Maps", "Terminbuchung oder WhatsApp", "Häufige Fragen"] },
      { type: "paragraph", text: "Ein One-Pager eignet sich besonders für:" },
      { type: "list", items: ["Nagelstudios", "Wimpernstudios", "Brow Studios", "kleinere Kosmetikstudios", "Make-up Artists", "Waxing-Studios"] },
      { type: "paragraph", text: "Wenn dein Angebot übersichtlich ist und du deinen Kundinnen einen professionellen ersten Eindruck vermitteln möchtest, ist ein One-Pager oft die ideale Lösung. Ein gutes Beispiel dafür ist mein Kundenprojekt für Paula Venc – ein moderner One-Pager für eine Nailart-Künstlerin." },
      { type: "subheading", text: "Für größere Studios empfiehlt sich eine Premium-Website" },
      { type: "paragraph", text: "Sobald dein Angebot umfangreicher wird, stößt ein One-Pager schnell an seine Grenzen. Eine Premium-Website bietet deutlich mehr Möglichkeiten, dein Studio professionell zu präsentieren. Sie eignet sich besonders, wenn du:" },
      { type: "list", items: ["viele verschiedene Behandlungen anbietest", "mehrere Mitarbeiterinnen hast", "Vorher-Nachher-Ergebnisse zeigen möchtest", "eine Galerie integrieren willst", "Schulungen anbietest", "mehrere Standorte hast", "langfristig bei Google besser gefunden werden möchtest"] },
      { type: "paragraph", text: "Durch mehrere Unterseiten lassen sich Inhalte strukturierter darstellen. Besucher finden schneller die Informationen, die sie suchen, und Google kann einzelne Leistungen besser verstehen. Ein Beispiel für eine Premium-Website ist mein Kundenprojekt „Face and More“." },
      { type: "heading", text: "Welche Website passt zu deinem Studio?" },
      { type: "paragraph", text: "Falls du dir noch unsicher bist, hilft dir diese kleine Orientierung:" },
      {
        type: "table",
        headers: ["Wenn du...", "Dann passt häufig..."],
        rows: [
          ["gerade gegründet hast oder ein kleineres Studio führst", "One-Pager"],
          ["hauptsächlich eine übersichtliche Präsentation deiner Leistungen möchtest", "One-Pager"],
          ["nur wenige Behandlungen anbietest", "One-Pager"],
          ["viele verschiedene Leistungen anbietest", "Premium-Website"],
          ["Vorher-Nachher-Galerien ausführlich zeigen möchtest", "Premium-Website"],
          ["Schulungen oder Kurse anbietest", "Premium-Website"],
          ["mehrere Mitarbeiterinnen oder Standorte hast", "Premium-Website"],
          ["langfristig mehr Sichtbarkeit über Google aufbauen möchtest", "Premium-Website"],
        ],
      },
      { type: "paragraph", text: "Wichtig: Diese Tabelle dient nur als Orientierung. Jede Website wird individuell geplant. Gemeinsam finden wir heraus, welche Lösung am besten zu deinem Studio, deinen Zielen und deinem Budget passt." },
      { type: "heading", text: "Welche Faktoren beeinflussen den Preis einer Website?" },
      { type: "paragraph", text: "Nicht die Branche entscheidet über den Preis, sondern der tatsächliche Arbeitsaufwand. Zu den wichtigsten Faktoren gehören:" },
      { type: "subheading", text: "Anzahl der Seiten" },
      { type: "paragraph", text: "Ein One-Pager benötigt deutlich weniger Zeit als eine Website mit mehreren Unterseiten." },
      { type: "subheading", text: "Individuelles Design" },
      { type: "paragraph", text: "Eine Website, die speziell für dein Studio gestaltet wird, unterscheidet sich deutlich von einer Standardvorlage. Farben, Schriften, Bildsprache und Gestaltung werden auf deine Marke abgestimmt und sorgen dafür, dass dein Studio professionell und wiedererkennbar auftritt." },
      { type: "subheading", text: "Inhalte" },
      { type: "paragraph", text: "Je mehr Leistungen, Texte, Bilder oder Galerien eingebunden werden sollen, desto größer wird der Aufwand. Falls du noch keine fertigen Texte hast, unterstütze ich dich selbstverständlich dabei." },
      { type: "subheading", text: "Funktionen" },
      { type: "paragraph", text: "Zum Beispiel:" },
      { type: "list", items: ["Online-Terminbuchung", "Kontaktformular", "WhatsApp", "Google Maps", "Instagram-Einbindung", "Gutscheine", "Mehrsprachigkeit"] },
      { type: "paragraph", text: "Jede zusätzliche Funktion bedeutet zusätzlichen Planungs- und Entwicklungsaufwand." },
      { type: "subheading", text: "Suchmaschinenoptimierung (SEO)" },
      { type: "paragraph", text: "Eine schöne Website allein bringt wenig, wenn sie später nicht gefunden wird. Deshalb sollte bereits beim Aufbau auf eine saubere Seitenstruktur, sinnvolle Überschriften, schnelle Ladezeiten und eine suchmaschinenfreundliche Umsetzung geachtet werden." },
      { type: "heading", text: "Warum kostet eine professionelle Website mehr als ein Baukastensystem?" },
      { type: "paragraph", text: "Vielleicht hast du beim Recherchieren bereits Angebote gesehen, die mit einer Website für wenige Euro im Monat werben. Deshalb stellt sich schnell die Frage: Warum sollte ich mehrere Hundert Euro für eine professionell erstellte Website investieren?" },
      { type: "paragraph", text: "Die Antwort liegt im Unterschied zwischen einer Vorlage und einer individuell entwickelten Website. Ein Baukastensystem stellt dir Werkzeuge zur Verfügung – ähnlich wie ein leerer Raum mit Möbeln, die du selbst zusammenbauen musst. Du bist für Gestaltung, Inhalte, Struktur, Suchmaschinenoptimierung und die technische Einrichtung selbst verantwortlich." },
      { type: "paragraph", text: "Eine professionelle Website entsteht dagegen individuell für dein Studio. Du erhältst nicht nur ein schönes Design, sondern eine Website, die zu deiner Marke passt, Vertrauen schafft und darauf ausgelegt ist, Interessentinnen in Kundinnen zu verwandeln. Dazu gehören unter anderem:" },
      { type: "list", items: ["individuelles Design statt einer Standardvorlage", "eine klare und benutzerfreundliche Seitenstruktur", "verständlich formulierte und suchmaschinenfreundliche Texte", "eine überzeugende Präsentation deiner Leistungen", "Optimierung für Smartphones und Tablets", "Grundlagen für eine bessere Auffindbarkeit bei Google", "persönliche Beratung und Betreuung während des gesamten Projekts"] },
      { type: "paragraph", text: "Natürlich gibt es Studios, für die ein Baukastensystem ausreichen kann – insbesondere, wenn Zeit, Design und Auffindbarkeit keine große Rolle spielen." },
      { type: "paragraph", text: "Wenn deine Website jedoch dein Studio professionell repräsentieren und langfristig neue Kundinnen gewinnen soll, lohnt sich eine individuell gestaltete Lösung in den meisten Fällen deutlich mehr." },
      { type: "heading", text: "Eine Website ist eine Investition – keine Ausgabe" },
      { type: "paragraph", text: "Viele Beauty-Studios investieren mehrere Tausend Euro in ihre Einrichtung, hochwertige Geräte, Produkte und regelmäßige Schulungen. Das ist wichtig, denn all das trägt zu einem positiven Erlebnis im Studio bei." },
      { type: "paragraph", text: "Doch bevor eine neue Kundin dein Studio überhaupt betritt, informiert sie sich häufig online. Noch bevor sie dich kontaktiert oder einen Termin bucht, entscheidet sie innerhalb weniger Sekunden, ob dein Studio einen vertrauenswürdigen und professionellen Eindruck macht." },
      { type: "paragraph", text: "Sie schaut sich deine Arbeiten an, liest Bewertungen und gewinnt einen ersten Eindruck von deinem Studio." },
      { type: "paragraph", text: "Genau deshalb ist deine Website das Schaufenster deines Studios im Internet. Sie ist oft der erste Kontakt mit deiner Marke und entscheidet mit darüber, ob Vertrauen entsteht oder die Interessentin weitersucht." },
      { type: "paragraph", text: "Eine professionelle Website kostet Geld – kann dir aber über viele Jahre dabei helfen, neue Kundinnen zu gewinnen und dein Studio hochwertig zu präsentieren." },
      { type: "heading", text: "Fazit" },
      { type: "paragraph", text: "Die Kosten für eine Website hängen nicht davon ab, ob du ein Nagelstudio, Kosmetikstudio, Wimpernstudio oder PMU-Studio führst. Wichtiger ist die Frage: Welche Website unterstützt dein Studio wirklich?" },
      { type: "paragraph", text: "Für viele Beauty-Studios ist bereits eine professionell gestaltete Website der erste Schritt zu einem überzeugenden Online-Auftritt. Welche Lösung am besten zu deinem Studio passt, hängt von deinen individuellen Zielen und Anforderungen ab." },
      { type: "paragraph", text: "Die beste Website ist nicht die teuerste – sondern diejenige, die zu deinem Studio, deinen Zielen und deinem Budget passt." },
      { type: "paragraph", text: "Du bist dir unsicher, welche Website zu deinem Studio passt? Kein Problem. Ich erstelle dir aktuell kostenlos und unverbindlich eine individuelle Website-Vorschau. So kannst du dir ansehen, wie dein zukünftiger Online-Auftritt aussehen könnte, bevor du dich für eine Zusammenarbeit entscheidest. Außerdem berate ich dich ehrlich, welche Lösung für dein Studio sinnvoll ist – ganz ohne Verkaufsdruck und ohne Verpflichtung." },
    ],
    relatedLinks: [
      { label: "Alle Preise im Überblick", href: "/preise" },
      { label: "Häufige Fragen zu Preisen", href: "/preise#faq" },
      { label: "Kundenprojekte ansehen", href: "/#kundenprojekte" },
      { label: "Instagram oder Website? Warum beides zusammen wirkt", href: "/blog/instagram-oder-website" },
    ],
  },
  {
    slug: "homepage-website-webseite-unterschied",
    title: "Homepage, Website oder Webseite – was ist eigentlich der Unterschied?",
    description:
      "Was ist der Unterschied zwischen Homepage, Website und Webseite? Erfahre, was die Begriffe wirklich bedeuten und warum sie im Alltag oft synonym verwendet werden.",
    keywords: ["Homepage Website Unterschied", "Was ist eine Webseite", "Website vs Homepage"],
    date: "2026-07-03",
    readTime: "5 min Lesezeit",
    category: "Webdesign Grundlagen",
    content: [
      { type: "paragraph", text: "Wenn du dich mit einer neuen Website beschäftigst, stolperst du schnell über verschiedene Begriffe: Homepage. Website. Webseite." },
      { type: "paragraph", text: "Oft werden sie im Alltag gleich verwendet. Tatsächlich bedeuten sie aber nicht genau dasselbe." },
      { type: "paragraph", text: "Die gute Nachricht: Für die meisten Menschen spielt dieser Unterschied keine große Rolle. Trotzdem lohnt es sich, die Begriffe einmal zu verstehen – vor allem, wenn du Angebote vergleichst oder dich mit deinem eigenen Online-Auftritt beschäftigst." },
      { type: "heading", text: "Kurz erklärt" },
      { type: "paragraph", text: "Falls du nur eine schnelle Antwort suchst:" },
      {
        type: "table",
        headers: ["Begriff", "Bedeutung"],
        rows: [
          ["Homepage", "Die Startseite einer Website"],
          ["Webseite", "Eine einzelne Seite innerhalb einer Website"],
          ["Website", "Der gesamte Internetauftritt"],
        ],
      },
      { type: "paragraph", text: "Im Alltag werden die Begriffe häufig synonym verwendet – und das ist völlig normal." },
      { type: "heading", text: "Was ist eine Homepage?" },
      { type: "paragraph", text: "Der Begriff Homepage stammt aus den Anfangszeiten des Internets. Eigentlich bezeichnet er nur die erste Seite einer Website, also die Startseite." },
      { type: "paragraph", text: "Von dort aus gelangen Besucher zu weiteren Bereichen wie:" },
      { type: "list", items: ["Leistungen", "Über mich", "Preise", "Blog", "Kontakt"] },
      { type: "paragraph", text: "Trotzdem sagen viele Menschen bis heute einfach „Homepage“, obwohl sie die gesamte Website meinen." },
      { type: "heading", text: "Was ist eine Website?" },
      { type: "paragraph", text: "Eine Website ist der komplette Internetauftritt eines Unternehmens oder einer Person. Dazu gehören alle einzelnen Seiten, zum Beispiel:" },
      { type: "list", items: ["Startseite", "Leistungen", "Preise", "Kundenprojekte", "Blog", "Kontakt"] },
      { type: "paragraph", text: "Man kann sich eine Website wie ein Buch vorstellen: Die Website ist das gesamte Buch, die einzelnen Webseiten sind die Kapitel." },
      { type: "heading", text: "Was ist eine Webseite?" },
      { type: "paragraph", text: "Eine Webseite bezeichnet genau eine einzelne Seite innerhalb einer Website. Zum Beispiel:" },
      { type: "list", items: ["deine Startseite", "deine Preise-Seite", "ein einzelner Blogartikel", "deine Kontaktseite"] },
      { type: "paragraph", text: "Jede dieser Seiten ist eine Webseite. Alle zusammen ergeben deine Website." },
      { type: "heading", text: "Warum werden die Begriffe so oft verwechselt?" },
      { type: "paragraph", text: "Im Alltag hat sich der Begriff Homepage über viele Jahre eingebürgert. Viele sagen „Ich brauche eine Homepage“, gemeint ist aber meistens „Ich brauche eine Website“. Das ist völlig normal – auch viele Unternehmen verwenden die Begriffe gemischt." },
      { type: "heading", text: "Spielt das überhaupt eine Rolle?" },
      { type: "paragraph", text: "Ehrlich gesagt: nein. Wenn eine Kundin sagt „Ich brauche eine Homepage“, weiß jede Webdesignerin sofort, was gemeint ist. Niemand wird dich korrigieren." },
      { type: "paragraph", text: "Viel wichtiger ist die Frage: Wie gut präsentiert deine Website dein Unternehmen?" },
      { type: "heading", text: "Welchen Begriff verwenden wir bei JAVERA Studio?" },
      { type: "paragraph", text: "Bei JAVERA Studio verwenden wir überwiegend den Begriff Website, weil er den gesamten Internetauftritt beschreibt. Wenn Kundinnen von ihrer Homepage sprechen, meinen sie jedoch fast immer ihre komplette Website – deshalb verwenden wir in Gesprächen beide Begriffe ganz selbstverständlich." },
      { type: "paragraph", text: "Entscheidend ist am Ende nicht die Bezeichnung, sondern dass dein Online-Auftritt professionell, übersichtlich und leicht verständlich ist." },
      { type: "heading", text: "Warum ist das für Beauty-Studios interessant?" },
      { type: "paragraph", text: "Viele Beauty-Unternehmerinnen beschäftigen sich zum ersten Mal mit einer eigenen Website. Dabei tauchen automatisch Begriffe wie Homepage, Website oder Webseite auf. Wichtiger als die richtige Bezeichnung ist jedoch, dass dein Online-Auftritt Vertrauen schafft und alle wichtigen Informationen übersichtlich präsentiert." },
      { type: "quote", text: "Deine Website ist das Schaufenster deines Studios im Internet." },
      { type: "paragraph", text: "Sie hilft potenziellen Kundinnen dabei, sich einen ersten Eindruck von deinem Studio zu verschaffen, und erleichtert ihnen die Entscheidung, Kontakt aufzunehmen oder einen Termin zu buchen." },
      { type: "heading", text: "Fazit" },
      { type: "paragraph", text: "Ob du Homepage, Website oder Webseite sagst, ist im Alltag nicht entscheidend. Wichtig ist, dass dein Online-Auftritt zu deinem Studio passt, Vertrauen schafft und deine Leistungen professionell präsentiert." },
      { type: "paragraph", text: "Die Begriffe unterscheiden sich zwar technisch, werden im täglichen Sprachgebrauch aber häufig synonym verwendet." },
    ],
    faq: [
      { question: "Ist Homepage dasselbe wie Website?", answer: "Nicht ganz. Technisch bezeichnet die Homepage nur die Startseite einer Website. Im Alltag werden beide Begriffe jedoch häufig gleich verwendet." },
      { question: "Was ist eine Webseite?", answer: "Eine Webseite ist eine einzelne Seite innerhalb einer Website, zum Beispiel die Kontaktseite oder ein Blogartikel." },
      { question: "Welcher Begriff ist richtig?", answer: "Alle drei Begriffe sind richtig – entscheidend ist der Zusammenhang. Im Alltag wird meist „Homepage“ oder „Website“ für den gesamten Internetauftritt verwendet." },
      { question: "Sollte ich auf meiner eigenen Website von Homepage oder Website sprechen?", answer: "Beides ist möglich. Der Begriff „Website“ ist fachlich präziser, während „Homepage“ vielen Menschen vertrauter ist." },
      { question: "Spielt das für Google eine Rolle?", answer: "Nein. Google versteht beide Begriffe. Viel wichtiger sind hochwertige Inhalte, eine klare Struktur und ein guter Mehrwert für die Besucher." },
    ],
    relatedLinks: [
      { label: "Was kostet eine Website für ein Beauty-Studio?", href: "/blog/website-kosten-beauty-studio" },
      { label: "Instagram oder Website – was braucht dein Studio wirklich?", href: "/blog/instagram-oder-website" },
      { label: "Alle Preise im Überblick", href: "/preise" },
      { label: "Kundenprojekte ansehen", href: "/#kundenprojekte" },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
