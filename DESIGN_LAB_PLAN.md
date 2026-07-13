# Javera Design Lab – Struktur & Guidelines

Persönliche, wiederverwendbare UI- & Animationsbibliothek innerhalb des javera-studio Repos. Dient ausschließlich zum Experimentieren, Lernen und Wiederverwenden für zukünftige Kundenprojekte. Beeinflusst die bestehende Website nicht: eigenes Stylesheet, eigenes Layout, kein Eintrag in der Haupt-Navigation, `robots: noindex`.

Referenzen: `Javera_Design_Lab_Plan.pdf` und `Zusammenfassung_Scrolling_Designs_Lovable.pdf` (Assests/Webseite/Design LAB).

## Ziel

Nicht nur Effekte sammeln, sondern verstehen: Zweck, Wirkung, passender Einsatzbereich. Jede Animation ist dokumentiert (Name, Beschreibung, wann einsetzen/nicht, Beauty-Eignung, Claude-Prompt, Bewertungs- und Notiz-Platzhalter). Langfristig eine eigene, wiedererkennbare Handschrift statt Standard-KI-Vorlagen.

## Routing

- `/design-lab` – Übersicht: nur leichte Vorschaukarten (Titel, Beschreibung, Badge, „Öffnen“), keine großen Demos.
- `/design-lab/[category]` – eine dynamische Route für alle 12 Kategorien (SSG via `generateStaticParams`, jede Kategorie wird beim Build als eigene statische Seite vorgerendert – dadurch technisch wie „unabhängig ladende“ Einzelseiten, ohne 12 Dateien pflegen zu müssen).

Aktuelle Kategorien (Slug): `hero`, `text`, `images`, `cards`, `scroll`, `luxury`, `micro`, `cursor`, `loading`, `transitions`, `galleries`, `testimonials`.

## Ordnerstruktur

```
src/app/design-lab/
  layout.tsx            # importiert design-lab.css, robots: noindex
  design-lab.css         # eigenständiges, "dl-"-präfixtes Stylesheet
  page.tsx                # Übersichtsseite
  [category]/
    page.tsx              # Kategorie-Seite (generateStaticParams über alle Slugs)

src/lib/design-lab/
  types.ts                 # Category, DemoMeta
  categories.ts             # Metadaten der 12 Kategorien (Titel, Beschreibung, Badge)
  demos/
    hero.ts, text.ts, images.ts, cards.ts, scroll.ts, luxury.ts,
    micro.ts, cursor.ts, loading.ts, transitions.ts, galleries.ts,
    testimonials.ts         # je Kategorie: Array von DemoMeta (Doku pro Animation)
    index.ts                 # demosByCategory-Registry

src/components/design-lab/
  InView.tsx                # IntersectionObserver render-prop (re-observiert bei jedem Enter/Exit)
  DemoCard.tsx                # Layout: Live-Demo links, Doku rechts (Notizen, Sterne, Prompt)
  CategoryCard.tsx             # Vorschaukarte auf der Übersichtsseite
  StarRatingPlaceholder.tsx    # Platzhalter-Sternebewertung
  DesignLabHeader.tsx           # eigener, schlanker Header (Breadcrumb + "Zur Website")
  demos/
    hero.tsx, text.tsx, images.tsx, cards.tsx, scroll.tsx, luxury.tsx,
    micro.tsx, cursor.tsx, loading.tsx, transitions.tsx, galleries.tsx,
    testimonials.tsx        # eine Client-Komponente pro Kategorie, `variant`-Prop
    registry.tsx              # Slug → Demo-Komponente
```

## Technologien

- Next.js App Router, TypeScript, Tailwind CSS – wie der Rest des Repos.
- Server Components für Übersicht/Kategorie-Seiten (Metadaten, SSG). `"use client"` nur in den Demo-Komponenten selbst (Hover-/Scroll-/Cursor-Interaktion, IntersectionObserver).
- Eigenes CSS (`design-lab.css`), nicht `globals.css` – verhindert jede Kollision mit der Haupt-Website. Alle Klassen mit `dl-` präfixt.
- Keine neuen Dependencies. Alle Effekte mit CSS-Transitions/Keyframes und schlanken `useEffect`/`requestAnimationFrame`-Hooks umgesetzt.

## Performance-Konzept

- **Lazy start:** Scroll-getriggerte Demos animieren erst, wenn sie via `InView` in den Viewport kommen (kein Autoplay außerhalb des sichtbaren Bereichs).
- **Pause außerhalb des Viewports:** `InView` beobachtet standardmäßig weiter (nicht nur einmalig) und liefert `inView` bei jedem Enter/Exit neu – Demo-Komponenten können darauf reagieren (z. B. Video pausiert/entfernt, Counter/Progress setzen zurück). Für reine One-Shot-Reveals (`once` Prop) wird nach dem ersten Sichtbarwerden nicht mehr beobachtet.
- **Isolierte Demos:** jede Demo-Karte hat ihren eigenen `InView`-Beobachter – nie ein globaler "alles animiert gleichzeitig"-Trigger. Dadurch animiert nur, was gerade im Viewport ist.
- **Code-Splitting:** jede Kategorie ist eine eigene Route (`[category]/page.tsx`), Next.js lädt nur den Code der aktuell geöffneten Kategorie.
- **Kein Bild-/Video-Overkill:** ein einziges Standbild (`design-lab-hero.jpg`, per `ffmpeg` aus dem bestehenden `hero.mp4` extrahiert) für alle Bild-Demos wiederverwendet. Das Video-vs-Bild-Beispiel ist die einzige Stelle mit `<video>`, und das auch nur wenn sichtbar.
- **`prefers-reduced-motion`:** zentral in `design-lab.css` behandelt – alle Transitions/Keyframes werden deaktiviert, Endzustände sofort sichtbar.
- **Keine kombinierten Systeme:** pro Demo-Karte immer nur ein Effekt (kein Parallax + Snap + Sticky gleichzeitig), passend zur Vorgabe "Scroll-Effekte getrennt testen".

## Guideline: neue Kategorie hinzufügen

1. Slug in `CategorySlug` (`src/lib/design-lab/types.ts`) ergänzen.
2. Eintrag in `src/lib/design-lab/categories.ts` (Titel, Beschreibung, Badge).
3. `src/lib/design-lab/demos/<kategorie>.ts` anlegen: Array von `DemoMeta`-Objekten (mind. 2 Beispiele), in `demos/index.ts` unter `demosByCategory` registrieren.
4. `src/components/design-lab/demos/<kategorie>.tsx` anlegen: eine Client-Komponente mit `variant`-Prop, ein `switch` pro `variant` aus Schritt 3. In `registry.tsx` eintragen.
5. Fertig – `/design-lab/<kategorie>` wird automatisch über `generateStaticParams` mitgebaut, keine neue Route-Datei nötig.

## Guideline: neue Animation zu bestehender Kategorie hinzufügen

1. Neuen Eintrag im passenden `demos/<kategorie>.ts`-Array ergänzen: `slug`, `variant`, `name`, `description`, `whenToUse`, `whenNotToUse`, `beautySuited`, `claudePrompt`.
2. Im zugehörigen `components/design-lab/demos/<kategorie>.tsx` einen neuen `case` für den `variant`-Wert ergänzen, der die eigentliche Vorschau rendert.
3. Nötige CSS-Klassen (falls neu) mit `dl-`-Präfix in `design-lab.css` ergänzen, inkl. `prefers-reduced-motion`-Fallback.
4. Sparsam bleiben: lieber ein sauberes Beispiel je Pattern als viele Varianten desselben Effekts.

## Was bewusst vermieden wurde

- Keine Änderung an `Navbar.tsx`, `globals.css` oder anderen von der Haupt-Website geteilten Dateien.
- Kein Eintrag im Hauptmenü – Design Lab ist ein internes Tool, kein Kunden-Content (`robots: noindex`).
- Keine 20 gleichzeitig laufenden Animationen, kein mehrfaches Video-Autoplay, keine kombinierten Scroll-Systeme auf einer Seite.
