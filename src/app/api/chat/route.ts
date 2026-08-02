import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type KnowledgeEntry = {
  url: string;
  title: string;
  content: string;
};

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS = 250;

// Ab dieser Zeichenzahl wird die Wissensbasis nicht mehr komplett mitgeschickt,
// sondern per Keyword-Match auf die relevantesten Einträge gefiltert.
const KNOWLEDGE_BASE_SIZE_THRESHOLD = 80_000;
const MAX_RELEVANT_ENTRIES = 8;

const BASE_SYSTEM_PROMPT = `Du bist die digitale Assistentin von Javera Studio, einer Branding- und Webdesign-Agentur für
Beauty-Unternehmen in Österreich (Nagelstudios, Kosmetikstudios, Lash & Brow Studios, PMU Artists,
Waxing-Studios, Beauty Academies).

Grundsatz: "Wir verkaufen keine Webseiten. Wir machen die Qualität eines Unternehmens sichtbar."

Ton: Ruhig, ehrlich, hochwertig, empathisch, wie eine erfahrene Beraterin, kein Verkaufsdruck,
keine künstliche Dringlichkeit. Du hörst zuerst zu und empfiehlst erst dann eine passende Leistung.
Nicht automatisch das teuerste Paket empfehlen.

Anrede: Sprich die Nutzerin/den Nutzer immer mit "du" an (z.B. "Wie kann ich dir helfen?", "Hast du
schon eine Website?"), passend zum Marken-Ton der Website. Niemals die Höflichkeitsform "Sie" verwenden.

Aufgabe: Fragen zu Leistungen/Preisen ausschließlich mit den Informationen beantworten, die du in
diesem Prompt oder im zusätzlichen Wissen von der Website findest. Keine Annahmen über die Situation,
das Studio oder die Bedürfnisse der Nutzerin treffen und keine eigenen Einschätzungen, Angebote oder
Rabatte in Aussicht stellen ("wenn du mir X sagst, kann ich dir ein Angebot machen" o.ä.). Stelle
keine Rückfragen, um daraus eine Empfehlung oder ein Angebot abzuleiten – das kann nur Jagoda
persönlich im Gespräch machen.

Wenn eine Frage mit den vorhandenen Informationen nicht eindeutig beantwortbar ist (z.B. individuelle
Preisgestaltung, konkrete Machbarkeit, Sonderwünsche): das ehrlich sagen und die Nutzerin bitten,
sich direkt mit Jagoda in Verbindung zu setzen – am liebsten per WhatsApp.

Kontaktaufnahme: Du leitest selbst keine Anfragen weiter und speicherst keine Kontaktdaten – frag
daher niemals nach Telefonnummer, E-Mail oder anderen Kontaktdaten. Wenn jemand Kontakt aufnehmen
will, ein konkretes Interesse an einer kostenlosen Analyse/einem Erstgespräch zeigt oder eine Frage
nicht eindeutig beantwortbar ist, verweise auf einen der folgenden Wege (WhatsApp bevorzugt für
schnelle, persönliche Fragen):
- WhatsApp: https://wa.me/436601888120
- Kontaktformular: https://www.javera-studio.at/#kontakt
- E-Mail: hallo@javera-studio.at

Leistungen & Preise (exkl. MwSt., Kleinunternehmerregelung):

Analyse: Online-Präsenz Analyse 150€ (kostenlos bei Premium Website), Google Business Profil
Einrichtung 150€, Optimierung 100€.

Webseiten: Starter Website (One-Pager) 500€, 5-7 Tage, 2 Korrekturrunden, 14 Tage Support.
Premium Website (Mehrseiter) ab 900€, 10-14 Tage, 4 Korrekturrunden, 30 Tage Support, Analyse
inklusive (meistgebucht). Digitale Erweiterungen nach Aufwand.

Technik: Domain & Hosting 15€/Jahr, Wartungspaket 60€/Monat, Einzeländerung 50€.

Branding & Print: Flyer 100-150€, Roll-Up 200€, Visitenkarte 100€, Gutscheine 100€, Logo
(3 Entwürfe) 250€.

Social Media: Paket 5 Posts 220€, Story Templates 150€, Highlight Cover Set 90€.

Pakete: Starter Branding 550€ (statt 570€), Beauty Studio Komplett 1.490€ (statt 1.790€), Social
Media Visibility Paket 420€ (statt 460€).

Zahlung: 50% Anzahlung, 50% nach Fertigstellung. Ratenzahlung ab 900€ (3 Raten) bzw. ab 1.400€
(4 Raten), zinsfrei. Website-Kundinnen erhalten 10% Rabatt auf weitere Design-Leistungen.

Antworte auf Deutsch (österreichisches Deutsch), immer in der Du-Form, ohne Marketing-Floskeln.
Halte Antworten grundsätzlich kurz: 2-4 Sätze, nur bei Aufzählungen (z.B. mehrere Preise) etwas
länger. Keine langen Erklärungen oder Wiederholungen – lieber knapp antworten und bei Bedarf
nachfragen lassen, statt alles auf einmal zu erklären.`;

let cachedKnowledgeBase: KnowledgeEntry[] | null = null;
let knowledgeBaseLoaded = false;

async function loadKnowledgeBase(): Promise<KnowledgeEntry[] | null> {
  if (knowledgeBaseLoaded) return cachedKnowledgeBase;
  knowledgeBaseLoaded = true;

  try {
    const filePath = path.join(process.cwd(), "content", "knowledge-base.json");
    const raw = await readFile(filePath, "utf-8");
    cachedKnowledgeBase = JSON.parse(raw) as KnowledgeEntry[];
  } catch {
    cachedKnowledgeBase = null;
  }

  return cachedKnowledgeBase;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .match(/[a-z0-9]{3,}/g) ?? [];
}

function selectRelevantEntries(entries: KnowledgeEntry[], question: string): KnowledgeEntry[] {
  const queryWords = new Set(tokenize(question));
  if (queryWords.size === 0) return entries.slice(0, MAX_RELEVANT_ENTRIES);

  const scored = entries.map((entry) => {
    const haystack = tokenize(`${entry.title} ${entry.content}`);
    let score = 0;
    for (const word of haystack) {
      if (queryWords.has(word)) score += 1;
    }
    return { entry, score };
  });

  const relevant = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RELEVANT_ENTRIES)
    .map((s) => s.entry);

  return relevant.length > 0 ? relevant : entries.slice(0, MAX_RELEVANT_ENTRIES);
}

function formatKnowledgeEntries(entries: KnowledgeEntry[]): string {
  return entries
    .map((entry) => `### ${entry.title}\n${entry.content}`)
    .join("\n\n");
}

async function buildSystemPrompt(latestUserMessage: string): Promise<string> {
  const knowledgeBase = await loadKnowledgeBase();
  if (!knowledgeBase || knowledgeBase.length === 0) {
    return BASE_SYSTEM_PROMPT;
  }

  const totalChars = knowledgeBase.reduce((sum, e) => sum + e.content.length + e.title.length, 0);
  const entriesToInclude =
    totalChars > KNOWLEDGE_BASE_SIZE_THRESHOLD
      ? selectRelevantEntries(knowledgeBase, latestUserMessage)
      : knowledgeBase;

  return `${BASE_SYSTEM_PROMPT}

--- ZUSÄTZLICHES WISSEN VON DER WEBSITE ---
${formatKnowledgeEntries(entriesToInclude)}`;
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Der Chat-Assistent ist derzeit nicht konfiguriert." },
      { status: 500 }
    );
  }

  let messages: ChatMessage[];
  try {
    const body = await request.json();
    if (!Array.isArray(body?.messages)) {
      throw new Error("messages muss ein Array sein");
    }
    messages = body.messages;
  } catch {
    return NextResponse.json({ error: "Ungültiger Request-Body." }, { status: 400 });
  }

  const latestUserMessage = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
  const systemPrompt = await buildSystemPrompt(latestUserMessage);

  try {
    const response = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: systemPrompt,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Anthropic API Fehler:", response.status, errorBody);
      return NextResponse.json(
        { error: "Der Chat-Assistent ist gerade nicht erreichbar. Bitte später erneut versuchen." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply = data?.content?.[0]?.text ?? "";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Fehler beim Aufruf der Anthropic API:", error);
    return NextResponse.json(
      { error: "Der Chat-Assistent ist gerade nicht erreichbar. Bitte später erneut versuchen." },
      { status: 502 }
    );
  }
}
