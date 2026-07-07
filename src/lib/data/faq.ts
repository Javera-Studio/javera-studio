export type FaqLink = {
  label: string;
  href: string;
};

export type FaqItem = {
  /** Eindeutige, sprechende ID – erlaubt Deep-Links wie /faq#faq-website-kosten */
  id: string;
  question: string;
  answer: string;
  /** Optionale interne Verlinkungen (Blogartikel, Preise, Kundenprojekte, Kontakt, Startseite) */
  relatedLinks?: FaqLink[];
};

export type FaqCategory = {
  id: string;
  title: string;
  icon: string;
  items: FaqItem[];
};

/**
 * Zentrale FAQ-Datenstruktur. Neue Kategorie = neues Objekt im Array,
 * neue Frage = neues Objekt in items – die Seite /faq und das FAQPage-Schema
 * lesen ausschließlich aus diesem Array, ohne Code-Änderungen an anderer Stelle.
 */
export const faqCategories: FaqCategory[] = [
  {
    id: "websites",
    title: "Websites",
    icon: "Monitor",
    items: [
      {
        id: "faq-website-notwendigkeit",
        question: "Brauche ich als Beauty-Studio überhaupt eine Website?",
        answer: "Deine Website ist wie dein digitales Schaufenster. Während dein Studio vor Ort Kundinnen überzeugt, entscheidet deine Website darüber, welchen ersten Eindruck potenzielle Neukundinnen online von dir bekommen. Viele Beauty-Unternehmen investieren viel Geld in ihre Einrichtung, hochwertige Produkte und Schulungen – online verlassen sie sich jedoch ausschließlich auf Social Media. Eine professionelle Website schafft Vertrauen, präsentiert deine Leistungen übersichtlich und macht dein Studio rund um die Uhr erreichbar. Kurz gesagt: Eine Website ist heute nicht einfach nur eine Visitenkarte, sondern ein wichtiger Bestandteil eines professionellen Markenauftritts.",
        relatedLinks: [{ label: "Markenauftritts", href: "/leistungen" }],
      },
      {
        id: "faq-website-instagram-reicht",
        question: "Reicht Instagram nicht aus?",
        answer: "Instagram ist ein großartiges Schaufenster für aktuelle Eindrücke, ersetzt aber keine Website. Du bist dort vom Algorithmus abhängig, Inhalte gehen in der Story-Flut unter und ohne Account ist dein Studio für viele potenzielle Kundinnen kaum auffindbar. Deine Website gehört dagegen dir – sie ist rund um die Uhr erreichbar, wird bei Google gefunden und zeigt Öffnungszeiten, Preise und Leistungen übersichtlich an einem Ort. Beide Kanäle ergänzen sich optimal: Instagram für Nähe und aktuelle Einblicke, die Website als verlässliche Zentrale deines Online-Auftritts. Mehr dazu liest du in meinem Blogartikel Instagram oder Website?",
        relatedLinks: [{ label: "Instagram oder Website?", href: "/blog/instagram-oder-website" }],
      },
      {
        id: "faq-website-onepager",
        question: "Was ist ein One-Pager?",
        answer: "Ein One-Pager ist eine Website, auf der alle wichtigen Informationen – Leistungen, Preise, Über mich und Kontakt – übersichtlich auf einer einzigen Seite dargestellt sind. Er eignet sich besonders für Studios, die einen schnellen, kompakten und dennoch professionellen Online-Auftritt möchten. Bei JAVERA Studio heißt der One-Pager Starter Website und ist die ideale Lösung für einen unkomplizierten Einstieg.",
        relatedLinks: [{ label: "Starter Website", href: "/preise#website" }],
      },
      {
        id: "faq-website-premium",
        question: "Was ist eine Premium-Website?",
        answer: "Die Premium Website ist eine mehrseitige Website mit eigenen Unterseiten für Leistungen, Preise, Über mich, FAQ und weitere Themen. Sie bietet mehr Raum für deine Behandlungen, Ergebnisse und Kundenstimmen und eignet sich besonders für Studios mit größerem Leistungsangebot oder Wachstumsplänen. Zusätzlich profitierst du von einer klareren Seitenstruktur, die sich positiv auf deine Sichtbarkeit bei Google auswirkt.",
        relatedLinks: [{ label: "Premium Website", href: "/preise#website" }],
      },
      {
        id: "faq-website-erweiterbar",
        question: "Kann meine Website später erweitert werden?",
        answer: "Ja, jederzeit. Egal ob neue Leistungsseiten, ein Online-Shop, ein Buchungssystem oder ein mehrsprachiger Auftritt – deine Website wächst mit deinem Studio mit. Solche Ergänzungen sind unter Erweiterungen nach Wunsch aufgelistet und werden individuell nach Aufwand kalkuliert, ganz ohne festes Paket.",
        relatedLinks: [{ label: "Erweiterungen nach Wunsch", href: "/preise#erweiterungen" }],
      },
      {
        id: "faq-website-mobil",
        question: "Ist meine Website für Smartphones optimiert?",
        answer: "Ja, jede Website wird von Anfang an für Smartphones, Tablets und Desktop optimiert. Da die meisten deiner Kundinnen dich über das Handy finden und kontaktieren, achte ich besonders auf schnelle Ladezeiten, gut lesbare Schriftgrößen und leicht bedienbare Buttons auf kleinen Bildschirmen.",
      },
      {
        id: "faq-website-selbst-aendern",
        question: "Kann ich später selbst Änderungen vornehmen?",
        answer: "Ja – grundsätzlich ist das möglich. Da ich überwiegend statische Websites entwickle, sind regelmäßige Änderungen meist gar nicht notwendig. Eine Website ist kein Social-Media-Profil, auf dem ständig neue Inhalte veröffentlicht werden. Die meisten meiner Kundinnen ändern ihre Website nur gelegentlich – zum Beispiel, wenn sich Preise, Öffnungszeiten oder Leistungen ändern. Solche Änderungen übernehme ich gerne für dich. Falls du deine Website regelmäßig aktualisieren möchtest, etwa mit neuen Kundenbildern, Aktionen oder Angeboten, kann ich auf Wunsch einen bearbeitbaren Bereich integrieren oder du nutzt eines meiner Wartungspakete. So bleibt deine Website schnell, sicher und technisch schlank, ohne unnötig kompliziert zu werden.",
        relatedLinks: [{ label: "Wartungspakete", href: "/preise#wartung" }],
      },
      {
        id: "faq-website-dauer",
        question: "Wie lange dauert die Erstellung einer Website?",
        answer: "Eine Starter Website ist meist innerhalb von 5–7 Tagen fertig, eine Premium Website nach 10–14 Tagen. Die genaue Dauer hängt vom Umfang deines Studios sowie davon ab, wie schnell mir Texte, Bilder und Feedback zur Verfügung stehen. Die ersten Entwürfe siehst du oft schon nach wenigen Tagen.",
        relatedLinks: [{ label: "Premium Website", href: "/preise#website" }],
      },
      {
        id: "faq-website-inhalte",
        question: "Welche Inhalte gehören auf eine Beauty-Website?",
        answer: "Zu einer professionellen Beauty-Website gehören mindestens: eine klare Vorstellung deines Studios, eine übersichtliche Leistungsübersicht, transparente Preise, Kundenstimmen oder Vorher-Nachher-Bilder, deine Öffnungszeiten sowie eine einfache Möglichkeit zur Kontaktaufnahme oder Terminbuchung. Auf einer Premium Website lassen sich diese Inhalte zusätzlich auf eigene Unterseiten wie Leistungen oder Preise aufteilen.",
        relatedLinks: [
          { label: "Leistungsübersicht", href: "/leistungen" },
          { label: "Preise", href: "/preise" },
        ],
      },
      {
        id: "faq-website-start",
        question: "Was brauche ich für den Start?",
        answer: "Für den Start reichen ein paar grundlegende Informationen: dein Logo, falls schon vorhanden, ein paar aktuelle Fotos deines Studios oder deiner Arbeiten, deine Leistungen mit Preisen sowie kurze Infos zu dir und deinem Studio. Deine Texte müssen nicht perfekt formuliert sein – daraus erstelle ich professionelle Website-Texte. Falls dir noch ein Logo fehlt, entwickle ich das gerne im Rahmen des Brandings für dich.",
        relatedLinks: [{ label: "Brandings", href: "/leistungen" }],
      },
    ],
  },
  {
    id: "preise",
    title: "Preise",
    icon: "Wallet",
    items: [
      {
        id: "faq-preise-website",
        question: "Was kostet eine Website?",
        answer: "Eine Starter Website (One-Pager) startet bei 500 €, eine Premium Website mit mehreren Seiten ab 900 €. Der genaue Preis hängt vom Umfang deines Studios und deinen Wünschen ab. Neben den festen Paketen sind auch vollständig individuelle Pakete möglich – so lassen sich Website, Branding und weitere Leistungen flexibel kombinieren, meist mit einem Preisvorteil gegenüber der Einzelbuchung. Alle aktuellen Preise findest du übersichtlich auf der Preisseite, mehr Hintergrundwissen liefert mein Blogartikel Was kostet eine Website für ein Beauty-Studio?",
        relatedLinks: [
          { label: "Preisseite", href: "/preise#website" },
          { label: "Was kostet eine Website für ein Beauty-Studio?", href: "/blog/website-kosten-beauty-studio" },
        ],
      },
      {
        id: "faq-preise-logo",
        question: "Was kostet ein Logo?",
        answer: "Ein professionelles Logo kostet bei mir ab 250 €. Enthalten sind: 3 individuelle Entwürfe • Farbvarianten • PNG-Dateien • PDF-Datei. Alle Preise findest du transparent aufgelistet auf der Preisseite.",
        relatedLinks: [{ label: "Preisseite", href: "/preise#grafik-print" }],
      },
      {
        id: "faq-preise-versteckte-kosten",
        question: "Gibt es versteckte Kosten?",
        answer: "Nein. Du erhältst vor Projektbeginn ein transparentes Angebot. Zusätzliche laufende Kosten entstehen lediglich für: Domain (ca. 15 € pro Jahr), optional ein Wartungspaket (60 €/Monat) oder einzelne Änderungswünsche nach Aufwand. Alle Informationen dazu findest du auf der Preisseite.",
        relatedLinks: [
          { label: "Domain", href: "/preise#domain-hosting" },
          { label: "Wartungspaket", href: "/preise#wartung" },
          { label: "Preisseite", href: "/preise" },
        ],
      },
      {
        id: "faq-preise-bezahlung",
        question: "Wie läuft die Bezahlung ab?",
        answer: "Für alle Projekte gilt eine Anzahlung von 50 %. Bei größeren Projekten biete ich zusätzlich zinsfreie Teilzahlungen an: Projekte ab 900 € – 3 Monatsraten möglich, die erste Rate wird bei Auftragserteilung fällig, die beiden weiteren jeweils monatlich. Projekte ab 1.400 € – 4 Monatsraten möglich, die erste Rate wird bei Auftragserteilung fällig, anschließend erfolgt jeweils eine weitere Monatsrate. Mehr Details dazu findest du in der FAQ Kann ich meine Website auch in Raten bezahlen?",
        relatedLinks: [{ label: "Kann ich meine Website auch in Raten bezahlen?", href: "/faq#faq-preise-ratenzahlung" }],
      },
      {
        id: "faq-preise-domain-hosting",
        question: "Sind Domain und Hosting enthalten?",
        answer: "Nein, Domain und Hosting sind nicht in den Website-Paketen enthalten und laufen direkt über einen externen Anbieter auf deinen Namen. So behältst du jederzeit die volle Kontrolle über deine Website. Die Kosten dafür liegen bei ca. 15 € pro Jahr und sind auf der Preisseite gelistet.",
        relatedLinks: [{ label: "Preisseite", href: "/preise#domain-hosting" }],
      },
      {
        id: "faq-preise-wartung",
        question: "Was kostet die Wartung?",
        answer: "Das Wartungspaket kostet 60 € pro Monat und beinhaltet bis zu 4 kleine Änderungen wie neue Texte, Fotos oder Aktionen. Falls du nur gelegentlich etwas anpassen möchtest, sind einzelne Änderungswünsche auch ohne Paket möglich und werden nach Aufwand berechnet. Alle Details findest du im Bereich Wartungspaket auf der Preisseite.",
        relatedLinks: [{ label: "Wartungspaket", href: "/preise#wartung" }],
      },
      {
        id: "faq-preise-pakete",
        question: "Gibt es Pakete?",
        answer: "Ja. Neben den einzeln buchbaren Leistungen gibt es feste Pakete wie Starter Branding, Beauty Studio Komplett oder das Social Media Visibility Paket, die im Vergleich zur Einzelbuchung einen Preisvorteil bieten. Passt keines der festen Pakete genau zu deinem Studio, entwickle ich gerne ein individuelles Paket, das exakt auf deine Bedürfnisse zugeschnitten ist – ebenfalls mit Preisvorteil gegenüber Einzelbuchungen. Alle Pakete findest du in der Übersicht auf der Preisseite.",
        relatedLinks: [{ label: "Preisseite", href: "/preise#pakete" }],
      },
      {
        id: "faq-preise-kombinieren",
        question: "Kann ich mehrere Leistungen kombinieren?",
        answer: "Ja, sehr gerne sogar. Website, Branding, Google Business, Social Media Design und Drucksorten lassen sich beliebig miteinander kombinieren – entweder als festes Paket oder als individuell zusammengestelltes Angebot. Kombinierte Buchungen bringen dir in der Regel einen Preisvorteil gegenüber Einzelbuchungen. Am einfachsten besprechen wir deine Wünsche in einem kurzen, unverbindlichen Gespräch.",
        relatedLinks: [
          { label: "Website", href: "/preise#website" },
          { label: "Social Media Design", href: "/preise#social" },
        ],
      },
      {
        id: "faq-preise-ratenzahlung",
        question: "Kann ich meine Website auch in Raten bezahlen?",
        answer: "Ja. Für Projekte ab 900 € biete ich eine zinsfreie Zahlung in drei Monatsraten an. Für Projekte ab 1.400 € sind sogar vier zinsfreie Monatsraten möglich. Die erste Rate wird jeweils bei Auftragserteilung fällig, die weiteren monatlich. So bleibt eine professionelle Website auch bei größeren Projekten gut planbar. Alle Projektpreise findest du im Überblick auf der Preisseite.",
        relatedLinks: [{ label: "Preisseite", href: "/preise" }],
      },
    ],
  },
  {
    id: "branding",
    title: "Branding & Design",
    icon: "Palette",
    items: [
      {
        id: "faq-branding-logo-warum",
        question: "Warum brauche ich ein Logo?",
        answer: "Ein Logo ist mehr als nur ein Bildzeichen – es ist der visuelle Kern deiner Marke und sorgt dafür, dass dein Studio auf den ersten Blick wiedererkannt wird. Ob auf der Website, auf Instagram oder auf Flyern: Ein durchdachtes Logo schafft Vertrauen und lässt dein Beauty-Unternehmen professionell und hochwertig wirken. Ich gestalte Logos, die zu deiner Marke und deiner Zielgruppe passen und sich problemlos in dein gesamtes Branding integrieren lassen.",
        relatedLinks: [{ label: "Branding", href: "/leistungen" }],
      },
      {
        id: "faq-branding-corporate-design",
        question: "Was gehört zu einem Corporate Design?",
        answer: "Zu einem stimmigen Corporate Design gehören unter anderem dein Logo, eine festgelegte Farbpalette, passende Schriftarten sowie einheitliche Gestaltungselemente, die sich über Website, Social Media und Drucksorten ziehen. Ein einheitliches Corporate Design sorgt dafür, dass dein Studio überall gleich professionell und wiedererkennbar auftritt – online wie offline.",
        relatedLinks: [{ label: "Corporate Design", href: "/leistungen" }],
      },
      {
        id: "faq-branding-nur-logo",
        question: "Kann ich nur ein Logo bestellen?",
        answer: "Ja, ein Logo ist einzeln buchbar und kostet ab 250 €, inklusive 3 Entwürfen, Farbvarianten sowie PNG- und PDF-Dateien. Du musst also nicht gleich eine ganze Website oder ein komplettes Branding-Paket buchen, wenn du aktuell nur ein neues Logo brauchst. Auf Wunsch stelle ich dir aber auch ein individuelles Paket zusammen, falls später weitere Leistungen dazukommen sollen. Alle Preise findest du auf der Preisseite.",
        relatedLinks: [{ label: "Preisseite", href: "/preise#grafik-print" }],
      },
      {
        id: "faq-branding-flyer",
        question: "Gestaltest du auch Flyer?",
        answer: "Ja. Neben Flyern gestalte ich auch Visitenkarten, Roll-Ups und Gutscheine – alle passend zu deinem bestehenden Branding, damit dein Auftritt on- und offline einheitlich wirkt. Die Drucksorten sind einzeln buchbar oder lassen sich mit Website und Social Media Design kombinieren.",
        relatedLinks: [{ label: "Drucksorten", href: "/preise#grafik-print" }],
      },
      {
        id: "faq-branding-social-media",
        question: "Gestaltest du Social Media Designs?",
        answer: "Ja. Ich gestalte Story-Vorlagen, Highlight-Cover und Feed-Templates, die zu deinem Branding passen und deinen Instagram-Auftritt genauso professionell wirken lassen wie deine Website. Diese Leistungen sind einzeln buchbar oder Teil des Social Media Visibility Pakets.",
        relatedLinks: [{ label: "Social Media Visibility Pakets", href: "/preise#social" }],
      },
      {
        id: "faq-branding-einheitlich",
        question: "Warum ist ein einheitlicher Markenauftritt wichtig?",
        answer: "Ein einheitlicher Markenauftritt sorgt dafür, dass Kundinnen dein Studio auf jedem Kanal sofort wiedererkennen – auf der Website, auf Instagram und auf gedruckten Materialien. Das schafft Vertrauen und wirkt professioneller als ein Mix aus unterschiedlichen Farben, Schriften und Stilen. Bei JAVERA Studio bekommst du Website, Branding und Drucksorten deshalb aus einer Hand.",
        relatedLinks: [{ label: "aus einer Hand", href: "/leistungen" }],
      },
    ],
  },
  {
    id: "seo",
    title: "Google & SEO",
    icon: "TrendingUp",
    items: [
      {
        id: "faq-seo-google-gefunden",
        question: "Wird meine Website bei Google gefunden?",
        answer: "Jede Website, die ich erstelle, erhält eine SEO-Grundoptimierung – dazu gehören unter anderem saubere Seitentitel, aussagekräftige Meta-Beschreibungen und eine technisch korrekte Struktur, damit Google deine Seite gut erfassen kann. Wie schnell und wie weit oben du gefunden wirst, hängt zusätzlich von deiner Region, deiner Konkurrenz und deinem Google Business Profil ab. Eine SEO-Grundoptimierung ist bei jeder Website automatisch enthalten.",
        relatedLinks: [{ label: "SEO-Grundoptimierung", href: "/leistungen" }],
      },
      {
        id: "faq-seo-bedeutung",
        question: "Was bedeutet SEO?",
        answer: "SEO steht für Suchmaschinenoptimierung und beschreibt alle Maßnahmen, die dafür sorgen, dass deine Website bei Google besser gefunden wird. Dazu zählen unter anderem eine klare Seitenstruktur, passende Suchbegriffe, schnelle Ladezeiten und eine mobile Optimierung. Jede Website von JAVERA Studio enthält bereits eine SEO-Grundoptimierung, damit dein Studio online sichtbar wird.",
        relatedLinks: [{ label: "SEO-Grundoptimierung", href: "/leistungen" }],
      },
      {
        id: "faq-seo-warum-wichtig",
        question: "Warum ist Google für Beauty-Studios wichtig?",
        answer: "Die meisten Kundinnen suchen ihr nächstes Beauty-Studio heute über Google – sei es direkt über die Suche oder über Google Maps. Wer dort nicht oder nur unvollständig zu finden ist, verliert Anfragen an Studios, die online präsenter sind. Eine gut auffindbare Website in Kombination mit einem gepflegten Google Business Profil erhöht deine Sichtbarkeit genau dort, wo potenzielle Kundinnen aktiv nach dir suchen.",
        relatedLinks: [{ label: "Google Business Profil", href: "/leistungen" }],
      },
      {
        id: "faq-seo-dauer",
        question: "Wie lange dauert SEO?",
        answer: "SEO ist kein einmaliger Schritt, sondern ein fortlaufender Prozess. Erste Effekte der SEO-Grundoptimierung, etwa eine bessere Erfassung durch Google, zeigen sich häufig nach einigen Wochen. Eine spürbar bessere Platzierung in den Suchergebnissen entwickelt sich meist über mehrere Monate, abhängig von deiner Region und der lokalen Konkurrenz.",
        relatedLinks: [{ label: "SEO-Grundoptimierung", href: "/leistungen" }],
      },
      {
        id: "faq-seo-instagram-reicht",
        question: "Reicht Instagram für Google?",
        answer: "Nein. Instagram-Inhalte werden von Google kaum erfasst und tauchen in den klassischen Suchergebnissen so gut wie nicht auf. Wer nur über Instagram erreichbar ist, bleibt für Google-Suchen praktisch unsichtbar. Eine eigene Website ist deshalb die Grundlage dafür, dass dein Studio überhaupt bei Google gefunden werden kann. Mehr dazu liest du in meinem Blogartikel Instagram oder Website?",
        relatedLinks: [{ label: "Instagram oder Website?", href: "/blog/instagram-oder-website" }],
      },
      {
        id: "faq-seo-google-maps",
        question: "Kann ich bei Google Maps gefunden werden?",
        answer: "Ja. Über ein optimiertes Google Business Profil wird dein Studio auf Google Maps und in der lokalen Suche angezeigt – inklusive Öffnungszeiten, Bewertungen und Wegbeschreibung. Ich richte dein Google Business Profil ein oder optimiere ein bestehendes Profil, damit du in deiner Umgebung besser gefunden wirst.",
        relatedLinks: [{ label: "Google Business Profil", href: "/leistungen" }],
      },
    ],
  },
  {
    id: "zusammenarbeit",
    title: "Zusammenarbeit",
    icon: "Handshake",
    items: [
      {
        id: "faq-zusammenarbeit-ablauf",
        question: "Wie läuft ein Website-Projekt ab?",
        answer: "Am Anfang steht ein unverbindliches Kennenlerngespräch, in dem wir deine Wünsche und Ziele besprechen. Danach erstelle ich einen ersten Entwurf deiner Website, den wir gemeinsam Schritt für Schritt anpassen, bis alles passt. Nach der finalen Freigabe geht deine Website online, und du erhältst zusätzlich Support in den ersten Wochen nach dem Launch. Den genauen Ablauf findest du übersichtlich auf der Leistungen-Seite.",
        relatedLinks: [{ label: "Leistungen-Seite", href: "/leistungen" }],
      },
      {
        id: "faq-zusammenarbeit-texte",
        question: "Muss ich Texte selbst schreiben?",
        answer: "Nein, das musst du nicht. Du gibst mir grundlegende Informationen zu deinem Studio, deinen Leistungen und deiner Zielgruppe, und ich erstelle daraus professionelle, gut lesbare Website-Texte. Auf Wunsch arbeite ich auch mit bereits vorhandenen Texten oder passe deinen bestehenden Stil an.",
      },
      {
        id: "faq-zusammenarbeit-fotos",
        question: "Brauche ich professionelle Fotos?",
        answer: "Professionelle Fotos wirken sich positiv auf den Gesamteindruck deiner Website aus, sind aber kein Muss für den Start. Viele Studios beginnen zunächst mit vorhandenen Fotos und ergänzen später hochwertigere Bilder. Falls du noch keine professionellen Fotos hast, berate ich dich gerne, worauf es bei guten Beauty-Fotos ankommt.",
      },
      {
        id: "faq-zusammenarbeit-korrekturen",
        question: "Wie viele Korrekturen sind enthalten?",
        answer: "Bei der Starter Website sind 2 Korrekturrunden enthalten, bei der Premium Website 4 Korrekturrunden. Damit hast du ausreichend Möglichkeiten, Texte, Farben und Details anzupassen, bevor deine Website veröffentlicht wird. Weitere Änderungswünsche darüber hinaus sind jederzeit nach Aufwand möglich.",
        relatedLinks: [{ label: "Premium Website", href: "/preise#website" }],
      },
      {
        id: "faq-zusammenarbeit-nach-vorschau",
        question: "Was passiert nach der kostenlosen Vorschau?",
        answer: "Nach der kostenlosen Vorschau besprechen wir gemeinsam deine Wünsche und Anmerkungen in einem persönlichen Gespräch. Passt alles, geht es direkt in die Umsetzung deiner Website – inklusive Feinschliff bei Farben, Texten und Details, bis dein neuer Auftritt bereit für die Veröffentlichung ist. Den gesamten Ablauf siehst du im Überblick auf der Leistungen-Seite.",
        relatedLinks: [{ label: "Leistungen-Seite", href: "/leistungen" }],
      },
      {
        id: "faq-zusammenarbeit-direkt",
        question: "Arbeite ich direkt mit dir?",
        answer: "Ja. Bei JAVERA Studio gibt es keine Zwischenstationen oder wechselnden Ansprechpartner – du arbeitest während des gesamten Projekts persönlich mit mir zusammen, von der ersten Anfrage bis zur Veröffentlichung deiner Website.",
      },
    ],
  },
  {
    id: "beauty-studios",
    title: "Beauty-Studios",
    icon: "Sparkles",
    items: [
      {
        id: "faq-branche-nagelstudio",
        question: "Erstellst du Websites für Nagelstudios?",
        answer: "Ja, Nagelstudios gehören zu meinem Kernbereich. Ich gestalte Websites, die deine Nageldesigns, Preise und Buchungsmöglichkeiten übersichtlich präsentieren und dein Studio online sichtbar machen. Mehr dazu liest du in meinem Artikel Website für Nagelstudio Wien: Warum du ohne Google unsichtbar bist.",
        relatedLinks: [{ label: "Website für Nagelstudio Wien: Warum du ohne Google unsichtbar bist", href: "/blog/warum-nagelstudio-wien-website" }],
      },
      {
        id: "faq-branche-kosmetikstudio",
        question: "Erstellst du Websites für Kosmetikstudios?",
        answer: "Ja. Für Kosmetikstudios gestalte ich Websites, die deine Behandlungen, Ergebnisse und dein Studio professionell in Szene setzen – von der Gesichtsbehandlung bis zum Aquafacial. Alle Leistungen findest du in der Übersicht auf der Leistungen-Seite.",
        relatedLinks: [{ label: "Leistungen-Seite", href: "/leistungen" }],
      },
      {
        id: "faq-branche-wimpernstudio",
        question: "Erstellst du Websites für Wimpernstudios?",
        answer: "Ja, auch Lash- und Wimpernstudios gehören zu meiner Spezialisierung. Ich setze deine Wimpernstyles, Vorher-Nachher-Bilder und Preise so in Szene, dass potenzielle Kundinnen sofort Vertrauen fassen und einen Termin anfragen.",
        relatedLinks: [{ label: "Spezialisierung", href: "/leistungen" }],
      },
      {
        id: "faq-branche-pmu-studio",
        question: "Erstellst du Websites für PMU-Studios?",
        answer: "Ja. Für PMU-Studios gestalte ich Websites, die sensible Themen wie Permanent Make-up seriös und vertrauensvoll darstellen – inklusive Vorher-Nachher-Galerie, Ablaufbeschreibung und transparenten Preisen.",
        relatedLinks: [{ label: "transparenten Preisen", href: "/preise" }],
      },
      {
        id: "faq-branche-waxing-studio",
        question: "Erstellst du Websites für Waxing-Studios?",
        answer: "Ja, auch für Waxing-Studios entwickle ich individuelle Websites, die deine Behandlungen klar strukturieren und Kundinnen eine einfache Möglichkeit zur Terminbuchung bieten.",
        relatedLinks: [{ label: "individuelle Websites", href: "/leistungen" }],
      },
      {
        id: "faq-branche-friseur",
        question: "Erstellst du Websites für Friseure?",
        answer: "Mein Fokus liegt auf Beauty-Unternehmen im engeren Sinne – etwa Nagel-, Kosmetik-, Lash- und PMU-Studios. Klassische Friseursalons betreue ich in der Regel nicht, Hairstylist:innen mit Fokus auf Beauty-Styling wie Brautstyling sind jedoch herzlich willkommen.",
      },
      {
        id: "faq-branche-makeup-artist",
        question: "Erstellst du Websites für Make-up Artists?",
        answer: "Ja. Für Make-up Artists gestalte ich Websites, die dein Portfolio, deine Preise und deine Buchungsmöglichkeiten stilvoll präsentieren – ideal, um neue Kundinnen und Kooperationen zu gewinnen.",
        relatedLinks: [{ label: "Portfolio", href: "/leistungen" }],
      },
      {
        id: "faq-branche-brautstylistin",
        question: "Erstellst du Websites für Brautstylistinnen?",
        answer: "Ja, sehr gerne. Für Brautstylistinnen gestalte ich Websites, die deine Arbeiten emotional und hochwertig zeigen und Bräuten die Buchungsanfrage so einfach wie möglich machen.",
        relatedLinks: [{ label: "Websites", href: "/leistungen" }],
      },
      {
        id: "faq-branche-beauty-akademie",
        question: "Erstellst du Websites für Beauty-Akademien?",
        answer: "Ja. Für Beauty Academies gestalte ich Websites, die Ausbildungen, Kurse und Schulungsangebote übersichtlich und vertrauensvoll darstellen – inklusive Kursbeschreibungen, Terminen und Buchungsmöglichkeiten.",
        relatedLinks: [{ label: "Websites", href: "/leistungen" }],
      },
    ],
  },
];

export function getAllFaqItems(): FaqItem[] {
  return faqCategories.flatMap((category) => category.items);
}
