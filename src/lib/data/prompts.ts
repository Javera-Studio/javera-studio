/**
 * Zentrale Datenstruktur für die KI-Prompt-Bibliothek unter /prompts.
 * Neue Kategorie = neuer Wert in PromptCategory, neuer Prompt = neues Objekt
 * in promptItems – die Seite /prompts rendert ausschließlich aus diesem Array,
 * ohne Code-Änderungen an anderer Stelle.
 */
export type PromptCategory =
  | "Social Media"
  | "Kundenkommunikation"
  | "Google Business"
  | "Website-Texte"
  | "Bewertungen"
  | "Behandlungstexte"
  | "Preis- und Terminanfragen"
  | "Organisation";

export type PromptItem = {
  /** Eindeutige, sprechende ID – erlaubt Deep-Links wie /prompts#prompt-content-ideen */
  id: string;
  /** Fortlaufende Nummer für die Anzeige (z.B. "01") */
  number: number;
  category: PromptCategory;
  title: string;
  description: string;
  prompt: string;
};

export const promptItems: PromptItem[] = [
  {
    id: "prompt-content-ideen",
    number: 1,
    category: "Social Media",
    title: "30 Content-Ideen für dein Beauty-Studio",
    description:
      "Keine Ahnung, was du posten sollst? Dieser Prompt entwickelt aus deinen Behandlungen, deiner Zielgruppe und den Fragen deiner Kundinnen 30 konkrete Content-Ideen.",
    prompt: `Du bist Social-Media-Stratege mit Spezialisierung auf Beauty-Studios und lokale Dienstleistungsunternehmen.

Ich betreibe ein Beauty-Studio und möchte Instagram-Content erstellen, der nicht nur schön aussieht, sondern Vertrauen aufbaut, meine Expertise sichtbar macht und potenziellen Kundinnen hilft, sich für eine Behandlung zu entscheiden.

Mein Studio:
- Behandlungen: [BEHANDLUNGEN]
- Wunschkundinnen: [ZIELGRUPPE]
- Was mir bei meiner Arbeit besonders wichtig ist: [Z. B. NATÜRLICHE ERGEBNISSE / HAUTGESUNDHEIT / INDIVIDUELLE BERATUNG]
- Meine Besonderheit gegenüber anderen Studios: [OPTIONAL]

Versetze dich zuerst in eine potenzielle Kundin meines Studios.

Überlege:
- Welche Fragen stellt sie sich vor einer Buchung?
- Welche Ängste oder Unsicherheiten hat sie?
- Was hält sie möglicherweise von einer Buchung ab?
- Welche Ergebnisse wünscht sie sich?
- Was möchte sie über mich wissen, bevor sie mir vertraut?
- Welche Dinge aus meinem Arbeitsalltag oder meiner Expertise wären für sie überraschend oder interessant?

Erstelle daraus 30 konkrete Instagram-Content-Ideen.

Verteile die Ideen auf:
- Vertrauen & Persönlichkeit
- Expertise & Aufklärung
- typische Fragen und Unsicherheiten
- Behandlungsentscheidungen
- Ergebnisse & Erwartungen
- Einblicke hinter die Kulissen

Für jede Idee brauche ich:
1. eine konkrete Content-Idee
2. eine starke Hook für die ersten 1–2 Sekunden bzw. die erste Zeile
3. das passende Format: Reel, Karussell, Story oder einzelner Post
4. in 1–2 Sätzen, was ich konkret zeigen oder erzählen soll

Wichtig:
Keine austauschbaren Vorschläge wie „Zeige ein Vorher-Nachher", „Stelle dein Team vor", „Gib Beauty-Tipps" oder „Zeige einen Blick hinter die Kulissen".
Wenn du eine solche Kategorie verwendest, entwickle daraus einen konkreten Blickwinkel, der neugierig macht.

Die Inhalte sollen professionell und menschlich wirken und dürfen auch typische Irrtümer, ehrliche Einblicke, kleine Fehler, überraschende Fakten oder Fragen aufgreifen, die Kundinnen normalerweise nicht laut stellen.

Vermeide Clickbait, übertriebene Verkaufsformulierungen und typische KI-Sprache.

Ziel: Ich möchte nach deiner Antwort 30 Ideen haben, die ich tatsächlich sofort umsetzen könnte.`,
  },
  {
    id: "prompt-instagram-post",
    number: 2,
    category: "Social Media",
    title: "Aus einer Idee wird ein fertiger Instagram-Post",
    description:
      "Du hast ein Thema, weißt aber nicht, wie du daraus einen guten Beitrag machen sollst? Dieser Prompt entwickelt daraus Hook, Mehrwert, Vertrauen und CTA.",
    prompt: `Du bist Content-Texter mit Spezialisierung auf Beauty-Dienstleistungen.

Ich möchte einen Instagram-Post über folgende Behandlung erstellen:

Behandlung: [BEHANDLUNG]

Falls bekannt:
- Wunsch meiner Kundinnen: [WUNSCH]
- häufige Unsicherheit oder Frage: [BEDENKEN/FRAGE]
- Besonderheit meiner Behandlung oder Arbeitsweise: [BESONDERHEIT]

Bevor du schreibst, überlege, warum eine potenzielle Kundin diesen Beitrag freiwillig weiterlesen oder speichern würde.

Wähle anschließend selbst den interessantesten Blickwinkel für den Post. Nutze dafür beispielsweise eine häufige Fehlannahme, eine ehrliche Kundenfrage, einen überraschenden Fakt, eine Entscheidungshilfe oder einen Gedanken, den viele Kundinnen vor einer Buchung haben.

Schreibe daraus einen fertigen Instagram-Post.

Der Post braucht:

1. HOOK
Eine kurze erste Zeile, die neugierig macht, ohne Clickbait zu sein.

2. MEHRWERT
Erkläre das Thema verständlich und konkret. Schreibe so, als würde eine erfahrene Kosmetikerin ihrer Kundin etwas persönlich erklären.

3. VERTRAUEN
Lass meine Kompetenz durch die Erklärung sichtbar werden, statt einfach zu behaupten, dass ich Expertin bin.

4. CTA
Beende den Beitrag mit einer natürlichen Frage oder Handlungsaufforderung, die zum Inhalt passt. Nicht automatisch „Jetzt Termin buchen".

Schreibstil:
- menschlich
- kompetent
- warm
- klar
- keine übertriebene Werbesprache
- keine unnötigen Emojis
- keine erfundenen Fakten oder Behandlungsergebnisse

Vermeide typische KI-Sätze und Floskeln wie:
„Gönn dir …"
„Entdecke …"
„Tauche ein …"
„Bist du bereit …"
„Deine Haut wird es dir danken."
„Du verdienst es …"

Der Text soll sich anhören, als hätte ihn eine gute Beauty-Unternehmerin selbst geschrieben – nicht eine Werbeagentur und nicht ChatGPT.`,
  },
];

export function getPromptCategories(): PromptCategory[] {
  return Array.from(new Set(promptItems.map((item) => item.category)));
}

export function getPromptsByCategory(category: PromptCategory): PromptItem[] {
  return promptItems.filter((item) => item.category === category);
}
