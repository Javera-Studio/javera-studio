# JAVERA Studio – SEO & GEO Content-Regeln

Projektspezifische Content-Regeln für dieses Repo (javera-studio). Gilt zusätzlich zu den globalen Standards in `~/.claude/CLAUDE.md` bzw. `02_JAVERA GitHub/CLAUDE.md`. Vor jeder inhaltlichen Arbeit an dieser Website (neue Seiten, Blogartikel, FAQ, Leistungstexte, Landingpages) gelten diese Regeln verbindlich.

## 1. Qualität vor Quantität

- Keine Inhalte nur zur Erhöhung der Seitenanzahl erstellen.
- Jede neue Seite muss einen klaren Mehrwert bieten.
- Lieber wenige, ausführliche und hochwertige Seiten als viele oberflächliche.

## 2. Eine Seite = eine Hauptsuchintention

- Jede Seite behandelt genau ein Hauptthema.
- Beispiele: „Was kostet eine Website für ein Beauty-Studio?“, „Website oder Instagram?“, „One-Pager oder Premium-Website?“
- Keine Seite soll mehrere unterschiedliche Hauptthemen gleichzeitig behandeln.

## 3. Topic-Cluster statt isolierter Seiten

Alle Seiten sollen logisch miteinander verlinkt werden:

- Startseite → Preise → Leistungen → FAQ → Blog
- Blogartikel → passende Leistungsseite → Preise → FAQ → Kundenprojekte → verwandte Blogartikel
- Portfolio → passende Leistungen → Preise → Blogartikel
- FAQ → ausführliche Blogartikel → Leistungen → Preise

Keine Seite soll isoliert sein.

## 4. Interne Verlinkung

- Jede neue Seite soll sinnvoll auf andere relevante Inhalte verlinken.
- Bevorzugt: Preise, FAQ, Leistungen, Kundenprojekte, thematisch passende Blogartikel.
- Links müssen echten Mehrwert bieten, nicht wahllos gesetzt werden.

## 5. SEO + GEO

Inhalte für klassische Suchmaschinen UND KI-Suchsysteme optimieren:

- klare Überschriften
- direkte Antworten
- kurze Zusammenfassungen
- Tabellen wenn sinnvoll
- Beispiele
- verständliche Sprache
- keine unnötigen Fülltexte

## 6. Nutzer zuerst

- Texte immer zuerst für Menschen schreiben.
- Keywords natürlich einbinden.
- Keyword-Stuffing vermeiden.

## 7. Beauty-Spezialisierung

Die Spezialisierung auf Beauty-Studios soll in allen passenden Inhalten sichtbar werden. Relevante Branchen (natürlich verwenden, keine künstlichen Wiederholungen):

Beauty & Kosmetik, Nagelstudios, Kosmetikstudios, Wimpernstudios, Brow Studios, PMU-Studios, Waxing-Studios, Fußpflege, Beauty Salons, Beauty Lounges, Beauty Academies, Beauty-Dienstleister, Make-up Artists, Brautstylistinnen, Hairstylist:innen (Beauty, nicht klassische Friseursalons), Lash Trainerinnen, PMU-Trainerinnen, Kosmetikschulen, Wellness, Massage, Spa, Wellnessstudios, Ästhetik, Hautpflege, Medical Beauty (soweit relevant), Ästhetische Behandlungen (nicht-invasiv).

## 8. Portfolio aktiv nutzen

- Eigene Kundenprojekte aktiv in Inhalte einbinden.
- Wenn ein Artikel zu einem Portfolio-Projekt passt, darauf verweisen.
- Aktuell: Paula Venc → One-Pager; Face and More → Premium-Website.
- Portfolioseiten sollen ebenfalls zurück auf passende Blogartikel und Leistungsseiten verlinken.

## 9. Preise

- Keine Preise erfinden.
- Ausschließlich bestehende Preise und Leistungen von JAVERA Studio verwenden (Quelle: `src/app/preise/page.tsx`).

## 10. Vertrauen vor Verkauf

- Texte informieren und beraten.
- Keine übertriebenen Werbeversprechen.
- Keine unbelegten Aussagen.

## 11. Wiederkehrendes Leitmotiv

„Die Website ist das Schaufenster deines Studios im Internet.“

Zentrales Markenmotiv von JAVERA Studio. Darf in verschiedenen Formulierungen an passenden Stellen (Blogartikel, Landingpages, Leistungen) wieder aufgegriffen werden – nicht künstlich oder übermäßig häufig.

## 12. Neue Seiten – erst Blueprint, dann Umsetzung

Bevor eine neue Seite erstellt wird, zunächst einen SEO-Blueprint erstellen mit mindestens:

- Ziel der Seite
- Hauptsuchintention
- Haupt-Keyword
- Neben-Keywords
- geplante interne Verlinkungen
- passende CTA
- mögliche FAQ
- empfohlene Schema-Markups

Erst danach die eigentliche Seite umsetzen.

## 13. Bestehende Inhalte bevorzugen

Vor neuen Inhalten prüfen:

- Kann ein bestehender Artikel erweitert werden?
- Existiert bereits ein ähnliches Thema?
- Lässt sich das Thema sinnvoll intern verlinken?

Neue Seiten nur erstellen, wenn sie einen eigenständigen Mehrwert bieten.

## 14. Immer die Suchintention erfüllen (wichtigste Regel)

Nicht versuchen, möglichst viele Keywords unterzubringen, sondern die Frage der Nutzerin vollständig beantworten. Jede Seite soll so hilfreich sein, dass sie das Potenzial hat, zu den besten Ergebnissen für ihre Suchintention zu gehören. Dieses Qualitätsziel ist wichtiger als reine Textlänge oder Keyword-Dichte.

---

# Security Standards für JAVERA Next.js Projekte

Canonical/Single Source of Truth: [Javera-Studio/javera-dev-standards](https://github.com/Javera-Studio/javera-dev-standards) (SECURITY-STANDARDS.md). Diese Kopie hier ist die für dieses Repo verbindliche, git-getrackte Fassung — bei Änderungen am Standard beide Stellen synchron halten.

Diese Standards gelten für **jedes** Next.js-Projekt, das für JAVERA Studio Kunden gebaut wird. Bei Projektstart und vor jedem Production-Deploy prüfen und umsetzen.

## 1. HTTP Security Header (Code-Ebene — immer umsetzen)

In `next.config.js` bzw. `next.config.ts` per `headers()` setzen:

- **Content-Security-Policy (CSP)** — vor dem Setzen IMMER zuerst den Code nach allen extern eingebundenen Ressourcen scannen (Fonts, Analytics-Snippets, Notion-/Elementor-Embeds, Maps-Embeds, Payment-Widgets, Booking-Tools wie Treatwell/Calendly) und die CSP passend dazu bauen. Nie eine generische CSP blind übernehmen — danach lokal testen und Browser-Konsole (F12) auf CSP-Verstöße prüfen.
- **Strict-Transport-Security** — `max-age=63072000; includeSubDomains; preload`
- **X-Frame-Options** — `SAMEORIGIN` (Clickjacking-Schutz)
- **X-Content-Type-Options** — `nosniff`
- **Referrer-Policy** — `strict-origin-when-cross-origin`
- **Permissions-Policy** — nicht genutzte Browser-Features explizit sperren (`camera=()`, `microphone=()`, `geolocation=()` außer bei Standort-Feature wie Anfahrtsbeschreibung)

Nach jedem Deploy: Ergebnis mit securityheaders.com gegenchecken (Ziel: mind. Note A).

Umsetzung in diesem Repo: `next.config.ts`.

## 2. CORS

- `Access-Control-Allow-Origin: *` nur setzen, wenn wirklich öffentliche Assets (z. B. Fonts, Bilder für externe Einbindung) betroffen sind — niemals bei API-Routen mit sensiblen Daten (Formulardaten, Buchungen)
- Next.js API-Routes: CORS explizit und restriktiv pro Route konfigurieren, nicht global öffnen

## 3. Formulare & API-Routes

- Serverseitige Validierung IMMER zusätzlich zur Client-Validierung (Client-Checks sind umgehbar)
- Rate-Limiting auf API-Routes gegen Spam/Missbrauch von Kontaktformularen
- Honeypot-Feld oder einfaches CAPTCHA gegen Bot-Spam bei Buchungsanfragen
- Keine API-Keys, SMTP-Zugangsdaten o. ä. im Client-Bundle — nur `NEXT_PUBLIC_`-Prefix für Werte, die wirklich öffentlich sein dürfen. Alles andere ausschließlich als Server-Env-Variable in Vercel, nie ins Git-Repo committen (`.env.local` in `.gitignore`)

Umsetzung in diesem Repo: `src/lib/rate-limit.ts` + Honeypot-Feld `hp_company` in `ContactForm.tsx` / `MtechLaserForm.tsx` und den zugehörigen API-Routes. Für zuverlässiges Rate-Limiting über mehrere Serverless-Instanzen hinweg (statt nur pro warme Instanz) auf Upstash Ratelimit upgraden, sobald Formular-Traffic/Spam es rechtfertigt.

## 4. Dependencies

- Vor Projektabschluss: `npm audit` laufen lassen, kritische/hohe Findings fixen
- Dependabot bzw. Vercel-eigene Update-Hinweise aktivieren, wo möglich
- Keine veralteten/unmaintained Packages für sicherheitsrelevante Funktionen (Auth, Payment, Formular-Handling)

## 5. robots.txt, sitemap.xml, security.txt

- `robots.txt` und `sitemap.xml` Standard bei jedem Projekt
- `/.well-known/security.txt` ergänzen (RFC 9116)

Umsetzung in diesem Repo: `src/app/robots.ts`, `src/app/sitemap.ts`, `public/.well-known/security.txt`.

## 6. Mixed Content

- Sicherstellen, dass ALLE eingebundenen Ressourcen (Bilder, Scripts, Fonts, iframes) über `https://` geladen werden, keine `http://`-Referenzen

## 7. Dinge, die NICHT im Code passieren (manuell prüfen/einstellen, aber im Report erwähnen)

| Punkt | Wo einstellen | Warum wichtig |
|---|---|---|
| **DNSSEC** | Beim Domain-Registrar | Schützt vor DNS-Spoofing/Cache-Poisoning |
| **DNS CAA-Record** | Beim DNS-Provider | Legt fest, welche CAs Zertifikate für die Domain ausstellen dürfen |
| **SSL/TLS-Zertifikat** | Bei Vercel automatisch (Let's Encrypt), bei Fremd-Hosting prüfen | Auto-Renewal + TLS 1.3 |
| **SPF / DKIM / DMARC** | Beim E-Mail-/DNS-Provider | Schützt die Domain vor E-Mail-Spoofing/Phishing |
| **Malware-/Blacklist-Scan** | Google Safe Browsing, VirusTotal, Sucuri SiteCheck | Bei jedem Webseitencheck durchführen |
| **Registrar-Zugang/2FA** | Beim Registrar | Kompromittierte Registrar-Logins sind ein häufiger Grund für gehackte Kundenseiten |
