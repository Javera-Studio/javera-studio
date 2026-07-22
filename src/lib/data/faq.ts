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
        relatedLinks: [{ label: "Markenauftritts", href: "/leistungen#leistungen" }],
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
          { label: "Leistungsübersicht", href: "/leistungen#leistungen" },
          { label: "Preise", href: "/preise" },
        ],
      },
      {
        id: "faq-website-start",
        question: "Was brauche ich für den Start?",
        answer: "Für den Start reichen ein paar grundlegende Informationen: dein Logo, falls schon vorhanden, ein paar aktuelle Fotos deines Studios oder deiner Arbeiten, deine Leistungen mit Preisen sowie kurze Infos zu dir und deinem Studio. Deine Texte müssen nicht perfekt formuliert sein – daraus erstelle ich professionelle Website-Texte. Falls dir noch ein Logo fehlt, entwickle ich das gerne im Rahmen des Brandings für dich.",
        relatedLinks: [{ label: "Brandings", href: "/leistungen#leistungen" }],
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
        relatedLinks: [{ label: "Preisseite", href: "/preise#finanzierung" }],
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
        answer: "Ein Logo ist mehr als ein hübsches Bildzeichen – es ist der visuelle Kern deiner Marke. Kundinnen erkennen dein Studio dadurch auf den ersten Blick wieder, egal ob auf der Website, auf Instagram oder auf einem Flyer.\n\nEin durchdachtes Logo schafft sofort Vertrauen und lässt dein Beauty-Unternehmen professionell und hochwertig wirken – gerade in einer Branche, in der der erste Eindruck entscheidet.\n\nIch gestalte Logos, die zu deiner Marke, deiner Zielgruppe und deinem gesamten Branding passen. Alle Details dazu findest du auf der Leistungen-Seite.",
        relatedLinks: [{ label: "Leistungen-Seite", href: "/leistungen#leistungen" }],
      },
      {
        id: "faq-branding-corporate-design",
        question: "Was gehört zu einem Corporate Design?",
        answer: "Zu einem stimmigen Corporate Design gehören dein Logo, eine festgelegte Farbpalette, passende Schriftarten sowie einheitliche Gestaltungselemente.\n\nDiese Elemente ziehen sich im Idealfall durch alle Kanäle – von der Website über Social Media bis zu deinen Drucksorten.\n\nSo tritt dein Studio überall gleich professionell und wiedererkennbar auf, online wie offline. Mehr zum Leistungsumfang findest du auf der Leistungen-Seite.",
        relatedLinks: [
          { label: "Drucksorten", href: "/preise#grafik-print" },
          { label: "Leistungen-Seite", href: "/leistungen#leistungen" },
        ],
      },
      {
        id: "faq-branding-nur-logo",
        question: "Kann ich nur ein Logo bestellen?",
        answer: "Ja, ein Logo ist auch einzeln buchbar und kostet ab 250 € – inklusive 3 Entwürfen, Farbvarianten sowie PNG- und PDF-Dateien.\n\nDu musst also nicht gleich eine ganze Website oder ein komplettes Branding-Paket buchen, wenn du aktuell nur ein neues Logo brauchst.\n\nFalls später weitere Leistungen wie Drucksorten oder Social Media Design dazukommen sollen, stelle ich dir gerne ein individuelles Paket zusammen. Alle Preise findest du auf der Preisseite.",
        relatedLinks: [
          { label: "Preisseite", href: "/preise#grafik-print" },
          { label: "Social Media Design", href: "/preise#social" },
        ],
      },
      {
        id: "faq-branding-flyer",
        question: "Gestaltest du auch Flyer?",
        answer: "Ja. Neben Flyern gestalte ich auch Visitenkarten, Roll-Ups und Gutscheine – alle passend zu deinem bestehenden Branding.\n\nSo wirkt dein Auftritt on- und offline aus einem Guss, egal ob Kundinnen deine Website besuchen oder einen Flyer in der Hand halten.\n\nDiese Drucksorten sind einzeln buchbar oder lassen sich mit Website und Social Media Design kombinieren.",
        relatedLinks: [
          { label: "Drucksorten", href: "/preise#grafik-print" },
          { label: "Social Media Design", href: "/preise#social" },
        ],
      },
      {
        id: "faq-branding-social-media",
        question: "Gestaltest du Social Media Designs?",
        answer: "Ja. Ich gestalte Story-Vorlagen, Highlight-Cover und Feed-Templates, die zu deinem Branding passen.\n\nSo wirkt dein Instagram-Auftritt genauso professionell wie deine Website – ein durchgängiges Bild über alle Kanäle hinweg.\n\nDiese Leistungen sind einzeln buchbar oder lassen sich mit deinem Logo und deinen Drucksorten kombinieren.",
        relatedLinks: [
          { label: "Social Media Designs", href: "/preise#social" },
          { label: "Drucksorten", href: "/preise#grafik-print" },
        ],
      },
      {
        id: "faq-branding-einheitlich",
        question: "Warum ist ein einheitlicher Markenauftritt wichtig?",
        answer: "Ein einheitlicher Markenauftritt sorgt dafür, dass Kundinnen dein Studio auf jedem Kanal sofort wiedererkennen – auf der Website, auf Instagram und auf gedruckten Materialien.\n\nDas schafft Vertrauen und wirkt professioneller als ein Mix aus unterschiedlichen Farben, Schriften und Stilen.\n\nBei JAVERA Studio bekommst du Logo, Branding, Website und Drucksorten deshalb aus einer Hand – abgestimmt bis ins letzte Detail.",
        relatedLinks: [{ label: "aus einer Hand", href: "/leistungen#einer-hand" }],
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
        answer: "Eine Garantie für bestimmte Google-Rankings kann ich dir ehrlicherweise nicht geben – das verspricht seriös niemand, auch keine Agentur.\n\nWas ich dir aber garantieren kann, ist eine saubere technische Grundlage: Jede Website wird suchmaschinenfreundlich aufgebaut und kann von Google zuverlässig erfasst und indexiert werden. Auf Wunsch richte ich außerdem die Google Search Console für dich ein.\n\nWer zusätzlich sichtbarer werden möchte, kann eine weiterführende SEO-Optimierung dazubuchen. Ebenso unterstütze ich bei der Einrichtung bzw. Optimierung deines Google-Unternehmensprofils – dadurch steigen deine Chancen, auch bei Google Maps sichtbar zu werden.",
        relatedLinks: [
          { label: "SEO-Optimierung", href: "/leistungen#leistungen" },
          { label: "Google-Unternehmensprofils", href: "/preise#google-business" },
        ],
      },
      {
        id: "faq-seo-bedeutung",
        question: "Was bedeutet SEO?",
        answer: "SEO steht für Suchmaschinenoptimierung – ganz einfach gesagt: alle Maßnahmen, die dafür sorgen, dass deine Website bei Google gefunden wird, wenn jemand nach genau deinem Angebot sucht.\n\nSucht zum Beispiel jemand nach „Kosmetikstudio Wien“, „Nagelstudio Wien“, „Wimpernstudio Wien“ oder einfach nach „Kosmetikstudio in meiner Nähe“, entscheidet SEO mit darüber, ob dein Studio in den Ergebnissen erscheint.\n\nDazu gehören unter anderem eine klare Seitenstruktur, passende Suchbegriffe, schnelle Ladezeiten und eine mobile Optimierung. Jede Website von JAVERA Studio enthält bereits eine SEO-Grundoptimierung.",
        relatedLinks: [{ label: "SEO-Grundoptimierung", href: "/leistungen#leistungen" }],
      },
      {
        id: "faq-seo-warum-wichtig",
        question: "Warum ist Google für Beauty-Studios wichtig?",
        answer: "Viele Kundinnen suchen ihr nächstes Beauty-Studio gar nicht über Instagram, sondern ganz direkt über Google oder Google Maps – zum Beispiel mit Suchbegriffen wie „Kosmetikstudio in meiner Nähe“, „Nagelstudio Wien“, „Wimpernstudio 1220“ oder „Wimpernverlängerung Wien“.\n\nWer in diesen Ergebnissen nicht auftaucht, verliert Anfragen an Studios, die dort präsenter sind – unabhängig davon, wie gut die eigene Instagram-Seite aussieht.\n\nGenau deshalb ist ein gepflegtes Google-Unternehmensprofil so wichtig. In Kombination mit einer durchdachten Website erhöht es deine Sichtbarkeit dort, wo potenzielle Kundinnen aktiv nach dir suchen: Die Website liefert die Inhalte, das Google-Unternehmensprofil sorgt für die Auffindbarkeit auf der Karte.",
        relatedLinks: [{ label: "Google-Unternehmensprofil", href: "/preise#google-business" }],
      },
      {
        id: "faq-seo-dauer",
        question: "Wie lange dauert SEO?",
        answer: "SEO ist kein einmaliger Schritt, den man abhakt, sondern ein fortlaufender Prozess.\n\nWie schnell sich Ergebnisse zeigen, hängt stark von deinem Standort, dem Wettbewerb in deiner Umgebung und den Suchbegriffen ab, für die du gefunden werden möchtest. Ein Nagelstudio in einem kleineren Ort hat es oft leichter als ein Kosmetikstudio mitten in Wien mit vielen Mitbewerberinnen.\n\nErste Effekte der SEO-Grundoptimierung, etwa eine bessere Erfassung durch Google, zeigen sich häufig nach einigen Wochen. Eine spürbar bessere Platzierung entwickelt sich meist über mehrere Monate.",
        relatedLinks: [{ label: "SEO-Grundoptimierung", href: "/leistungen#leistungen" }],
      },
      {
        id: "faq-seo-instagram-reicht",
        question: "Reicht Instagram für Google?",
        answer: "Nein. Instagram-Inhalte werden von Google kaum erfasst und tauchen in den klassischen Suchergebnissen so gut wie nicht auf.\n\nInstagram ersetzt also keine Website – beide erfüllen unterschiedliche Aufgaben. Google kann die Inhalte einer Website wesentlich besser verstehen, strukturieren und in den Suchergebnissen anzeigen als einen Instagram-Feed.\n\nWer nur über Instagram erreichbar ist, bleibt für Google-Suchen praktisch unsichtbar. Eine eigene Website ist deshalb die Grundlage dafür, dass dein Studio überhaupt bei Google gefunden werden kann. Mehr dazu liest du in meinem Blogartikel Instagram oder Website?",
        relatedLinks: [{ label: "Instagram oder Website?", href: "/blog/instagram-oder-website" }],
      },
      {
        id: "faq-seo-google-maps",
        question: "Kann ich bei Google Maps gefunden werden?",
        answer: "Ja. Über ein optimiertes Google-Unternehmensprofil wird dein Studio auf Google Maps und in der lokalen Suche angezeigt – inklusive Öffnungszeiten, Bewertungen und Wegbeschreibung.\n\nIch unterstütze dich dabei gerne: Entweder richte ich dein Google-Unternehmensprofil komplett neu ein, oder ich optimiere ein bereits bestehendes Profil, damit du in deiner Umgebung besser gefunden wirst.",
        relatedLinks: [{ label: "Google-Unternehmensprofil", href: "/preise#google-business" }],
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
        answer: "Ein Website-Projekt läuft bei mir in klaren, nachvollziehbaren Schritten ab.\n\nAlles beginnt mit dem Erstkontakt und einer kostenlosen Vorschau, in der du bereits einen ersten Eindruck von deinem möglichen Design bekommst. Danach besprechen wir gemeinsam deine Wünsche, Inhalte und Ziele.\n\nEs folgt die Umsetzung deiner Website, anschließend hast du Zeit für Korrekturen und Anpassungen. Sobald alles passt, geht deine Website live – der Launch.\n\nAuch danach lasse ich dich nicht allein: Im Rahmen der Nachbetreuung unterstütze ich dich in den ersten Wochen nach der Veröffentlichung. Den gesamten Ablauf findest du auch anschaulich auf der Leistungen-Seite.",
        relatedLinks: [{ label: "Leistungen-Seite", href: "/leistungen#ablauf" }],
      },
      {
        id: "faq-zusammenarbeit-texte",
        question: "Muss ich Texte selbst schreiben?",
        answer: "Nein, das musst du nicht. Du gibst mir grundlegende Informationen zu deinem Studio, deinen Leistungen und deiner Zielgruppe.\n\nDaraus erstelle ich professionelle, gut lesbare Website-Texte – und formuliere sie gleichzeitig suchmaschinenfreundlich, damit sie auch bei Google gut ankommen.\n\nAuf Wunsch arbeite ich auch mit bereits vorhandenen Texten oder passe deinen bestehenden Stil an.",
        relatedLinks: [{ label: "suchmaschinenfreundlich", href: "/leistungen#leistungen" }],
      },
      {
        id: "faq-zusammenarbeit-fotos",
        question: "Brauche ich professionelle Fotos?",
        answer: "Professionelle Fotos wirken sich positiv auf den Gesamteindruck deiner Website aus und sind grundsätzlich empfehlenswert.\n\nSie sind aber kein Muss für den Start: Falls du noch keine professionellen Aufnahmen hast, können häufig auch hochwertige Smartphone-Bilder gut verwendet werden.\n\nViele Studios beginnen zunächst mit vorhandenen Fotos und ergänzen später professionellere Bilder. Gerne berate ich dich auch, worauf es bei guten Beauty-Fotos ankommt.",
      },
      {
        id: "faq-zusammenarbeit-korrekturen",
        question: "Wie viele Korrekturen sind enthalten?",
        answer: "Bei der Starter Website sind 2 Korrekturrunden enthalten, bei der Premium Website 4 Korrekturrunden – genug Raum, um Texte, Farben und Details vor der Veröffentlichung anzupassen.\n\nZusätzlich bekommst du nach dem Launch 1 Monat kostenlose Nachbetreuung. Innerhalb dieses Monats sind kleinere Änderungen wie Texte, Bilder oder kleine Anpassungen kostenlos für dich enthalten.\n\nGrößere Erweiterungen im Anschluss lassen sich unkompliziert über ein Wartungspaket oder als Einzelauftrag umsetzen. Alle Details dazu findest du auf der Preisseite.",
        relatedLinks: [
          { label: "Wartungspaket", href: "/preise#wartung" },
          { label: "Preisseite", href: "/preise" },
        ],
      },
      {
        id: "faq-zusammenarbeit-nach-vorschau",
        question: "Was passiert nach der kostenlosen Vorschau?",
        answer: "Nach der kostenlosen Vorschau besprechen wir gemeinsam deine Wünsche und Anmerkungen in einem persönlichen Gespräch.\n\nDas Ganze ist zu diesem Zeitpunkt völlig unverbindlich – du gehst keinerlei Verpflichtung ein, nur weil du eine Vorschau angefragt hast.\n\nErst wenn dir alles zusagt und du dich aktiv dafür entscheidest, startet das eigentliche Projekt. Den gesamten Ablauf siehst du im Überblick auf der Leistungen-Seite.",
        relatedLinks: [{ label: "Leistungen-Seite", href: "/leistungen#ablauf" }],
      },
      {
        id: "faq-zusammenarbeit-direkt",
        question: "Arbeite ich direkt mit dir?",
        answer: "Ja, ganz genau. Bei JAVERA Studio gibt es keine Agentur im Hintergrund und keine wechselnden Ansprechpartner.\n\nDu hast während des gesamten Projekts mich als direkte Ansprechpartnerin – von der ersten Anfrage bis zur Veröffentlichung deiner Website.\n\nDas bedeutet für dich: kurze Kommunikationswege, persönliche Betreuung und jemanden, der dein Studio und deine Wünsche wirklich kennt.",
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
        relatedLinks: [{ label: "Leistungen-Seite", href: "/leistungen#leistungen" }],
      },
      {
        id: "faq-branche-wimpernstudio",
        question: "Erstellst du Websites für Wimpernstudios?",
        answer: "Ja, auch Lash- und Wimpernstudios gehören zu meiner Spezialisierung. Ich setze deine Wimpernstyles, Vorher-Nachher-Bilder und Preise so in Szene, dass potenzielle Kundinnen sofort Vertrauen fassen und einen Termin anfragen.",
        relatedLinks: [{ label: "Spezialisierung", href: "/leistungen#leistungen" }],
      },
      {
        id: "faq-branche-pmu-studio",
        question: "Erstellst du Websites für PMU-Studios?",
        answer: "Ja. Für PMU-Studios gestalte ich Websites, die sensible Themen wie Permanent Make-up seriös und vertrauensvoll darstellen – inklusive Vorher-Nachher-Galerie, Ablaufbeschreibung und transparenten Preisen.",
        relatedLinks: [{ label: "transparenten Preisen", href: "/preise#website" }],
      },
      {
        id: "faq-branche-waxing-studio",
        question: "Erstellst du Websites für Waxing-Studios?",
        answer: "Ja, auch für Waxing-Studios entwickle ich individuelle Websites, die deine Behandlungen klar strukturieren und Kundinnen eine einfache Möglichkeit zur Terminbuchung bieten.",
        relatedLinks: [{ label: "individuelle Websites", href: "/leistungen#leistungen" }],
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
        relatedLinks: [{ label: "Portfolio", href: "/#kundenprojekte" }],
      },
      {
        id: "faq-branche-brautstylistin",
        question: "Erstellst du Websites für Brautstylistinnen?",
        answer: "Ja, sehr gerne. Für Brautstylistinnen gestalte ich Websites, die deine Arbeiten emotional und hochwertig zeigen und Bräuten die Buchungsanfrage so einfach wie möglich machen.",
        relatedLinks: [{ label: "Websites", href: "/leistungen#leistungen" }],
      },
      {
        id: "faq-branche-beauty-akademie",
        question: "Erstellst du Websites für Beauty-Akademien?",
        answer: "Ja. Für Beauty Academies gestalte ich Websites, die Ausbildungen, Kurse und Schulungsangebote übersichtlich und vertrauensvoll darstellen – inklusive Kursbeschreibungen, Terminen und Buchungsmöglichkeiten.",
        relatedLinks: [{ label: "Websites", href: "/leistungen#leistungen" }],
      },
    ],
  },
];

export function getAllFaqItems(): FaqItem[] {
  return faqCategories.flatMap((category) => category.items);
}
