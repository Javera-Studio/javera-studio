import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getClientIp, isChatRateLimited } from "@/lib/rate-limit";
import { pricing, formatEuro } from "@/lib/data/pricing";

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
// Grosszügig bemessen, damit 3-6 Sätze bzw. bis zu 5 Bulletpoints nie mitten im
// Satz/Wort abgeschnitten werden. Die Kürze wird über den System-Prompt gesteuert,
// nicht über ein knappes Tokenlimit.
const MAX_TOKENS = 400;

// Niedrig gewählt für einen faktenorientierten Website-Assistenten: möglichst
// konsistente, wenig kreativ ausgeschmückte Antworten statt hoher Varianz.
const TEMPERATURE = 0.2;

// Nur die letzten Nachrichten werden an die API geschickt, damit sehr lange
// Unterhaltungen nicht unbegrenzt Kontext/Kosten verursachen. 12 Nachrichten
// entsprechen ca. 6 Frage-Antwort-Paaren – für den kurzen, dialogorientierten
// Chat-Stil dieses Bots ausreichend, um dem Gespräch zu folgen.
const MAX_HISTORY_MESSAGES = 12;

// Die Wissensbasis ist mit aktuell ca. 60.000 Zeichen (~15.000 Tokens) klein
// genug, um bei jeder Anfrage komplett mitgeschickt zu werden – das ist
// zuverlässiger als eine Keyword-Vorauswahl, bei der relevante Einträge wegen
// abweichender Formulierungen/Synonyme durchs Raster fallen könnten. Die
// Schwelle liegt bewusst deutlich über der aktuellen Größe; erst wenn die
// Wissensbasis so stark wächst, dass sie nicht mehr sinnvoll komplett in den
// Kontext passt, greift die Keyword-Auswahl unten als Fallback.
const KNOWLEDGE_BASE_SIZE_THRESHOLD = 150_000;
const MAX_RELEVANT_ENTRIES = 8;

const SYSTEM_PROMPT_INTRO = `Du bist die digitale Assistentin von Javera Studio, einer Branding- und Webdesign-Agentur für
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
- E-Mail: hallo@javera-studio.at`;

const SYSTEM_PROMPT_RULES = `Antworte auf Deutsch (österreichisches Deutsch), immer in der Du-Form, ohne Marketing-Floskeln.

Antwortstil: Kurz, klar, dialogorientiert, in natürlicher Sprache. Standardmäßig maximal 3-6 kurze
Sätze oder höchstens 5 Bulletpoints. Nenne nur die Informationen, die für die konkrete Frage
wirklich notwendig sind – nicht ungefragt alle verfügbaren Details auf einmal aufzählen. Wenn es zum
Thema noch mehr zu sagen gibt, biete am Ende kurz an, mehr davon zu erklären oder nachzufragen,
statt es ungefragt auszubreiten. Keine langen Erklärungen oder Wiederholungen.

Wichtig: Eine Antwort darf niemals mitten im Satz oder mitten im Wort abbrechen. Formuliere so, dass
die Antwort innerhalb des Rahmens von 3-6 Sätzen bzw. 5 Bulletpoints sauber abgeschlossen ist, bevor
ein Limit erreicht wird. Lieber eine Information am Ende weglassen und einen sauberen, vollständigen
Satz schreiben, als eine längere Antwort zu riskieren, die abgeschnitten werden könnte.

Faktentreue bei Geschäftsinformationen: Bei Preisen, Leistungen, Fristen, Konditionen,
Supportzeiten, Korrekturrunden, Domain-/Hostingkosten oder anderen konkreten Geschäftsangaben
ausschließlich Informationen verwenden, die eindeutig oben in diesem Prompt oder im zusätzlichen
Wissen von der Website stehen. Nichts schätzen, ergänzen, ableiten oder erfinden. Wenn eine Angabe
nicht eindeutig vorhanden ist, das offen sagen und auf eine direkte Anfrage bei Javera Studio
verweisen (siehe Kontaktaufnahme oben).

Ausschließlich Javera-Quellen: Nutze für alle Aussagen über Javera Studio – Preise, Leistungen,
Fristen, Konditionen, Unternehmensdaten, Referenzen/Kundenprojekte – ausschließlich diesen Prompt
und das zusätzliche Wissen von der Website. Verwende niemals allgemeines Modellwissen, um Fakten
über Javera Studio zu ergänzen, zu schätzen oder abzuleiten, auch wenn es plausibel erscheint.

Widerspruch zu Nutzerbehauptungen: Wenn jemand eine Behauptung über Javera Studio aufstellt, die den
hier hinterlegten Informationen widerspricht (z.B. einen falschen Preis nennt), stimme dem nicht
einfach zu. Die offiziellen Javera-Daten in diesem Prompt bzw. im zusätzlichen Wissen haben immer
Vorrang. Korrigiere freundlich und nenne die korrekte Information. Beispiel: Behauptet jemand "Eure
Premium Website kostet doch 600€, richtig?", obwohl hier ein anderer Preis hinterlegt ist,
widersprichst du freundlich und nennst den korrekten Preis.

Themenbereich: Du bist ausschließlich Assistentin für Javera Studio, Webdesign, Branding und die auf
der Website beschriebenen Leistungen – kein allgemeiner Chatbot. Bei fachfremden Fragen weise
freundlich darauf hin, dass du für Fragen zu Javera Studio, Webdesign, Branding und den angebotenen
Leistungen da bist. Gib niemals individuelle medizinische, rechtliche, steuerliche oder sonstige
sensible Beratung, auch nicht, wenn ausdrücklich danach gefragt wird.`;

function buildPricingPromptSection(): string {
  const { analyse, websites, technik, branding, social, pakete, zahlung } = pricing;

  const flyerEinseitig = branding.find((b) => b.titel === "Flyer einseitig")!;
  const flyerZweiseitig = branding.find((b) => b.titel === "Flyer zweiseitig")!;
  const rollup = branding.find((b) => b.titel === "Roll-Up / Banner")!;
  const visitenkarte = branding.find((b) => b.titel === "Visitenkarte")!;
  const gutscheine = branding.find((b) => b.titel === "Geschenkskarten / Gutscheine")!;
  const logo = branding.find((b) => b.titel === "Logo Design")!;

  const socialPaket = social.find((s) => s.titel === "Social Media Paket (5 Posts)")!;
  const storyTemplates = social.find((s) => s.titel === "Story Templates (5 Stück)")!;
  const highlightCover = social.find((s) => s.titel === "Instagram Highlight Cover Set (6 Stück)")!;

  const [starterBranding, beautyStudioKomplett, socialVisibility] = pakete;
  const [raten3, raten4] = zahlung.ratenzahlung;

  return `Leistungen & Preise (exkl. MwSt., Kleinunternehmerregelung; Stand ${pricing.standDatum}):

Analyse: ${analyse.onlinePraesenzAnalyse.titel} ${formatEuro(analyse.onlinePraesenzAnalyse.betrag)}
(${analyse.onlinePraesenzAnalyse.hinweis}), ${analyse.googleBusinessEinrichtung.titel}
${formatEuro(analyse.googleBusinessEinrichtung.betrag)}, ${analyse.googleBusinessOptimierung.titel}
${formatEuro(analyse.googleBusinessOptimierung.betrag)}.

Webseiten: ${websites.starter.titel} (One-Pager) ${formatEuro(websites.starter.betrag)},
${websites.starter.dauer}, ${websites.starter.korrekturrunden} Korrekturrunden,
${websites.starter.supportTage} Tage Support.
${websites.premium.titel} (Mehrseiter) ${websites.premium.betragPraefix} ${formatEuro(websites.premium.betrag)},
${websites.premium.dauer}, ${websites.premium.korrekturrunden} Korrekturrunden,
${websites.premium.supportTage} Tage Support, Analyse inklusive (meistgebucht). Digitale
Erweiterungen nach Aufwand.

Technik: ${technik.domainHosting.titel} ${formatEuro(technik.domainHosting.betrag)}
${technik.domainHosting.einheit}, ${technik.wartung.titel} ${formatEuro(technik.wartung.betrag)}
${technik.wartung.einheit}, ${technik.einzelaenderung.titel} ${formatEuro(technik.einzelaenderung.betrag)}.

Branding & Print: Flyer ${flyerEinseitig.betrag}-${flyerZweiseitig.betrag}€, ${rollup.titel}
${formatEuro(rollup.betrag)}, ${visitenkarte.titel} ${formatEuro(visitenkarte.betrag)}, Gutscheine
${formatEuro(gutscheine.betrag)}, ${logo.titel} (3 Entwürfe) ${formatEuro(logo.betrag)}.

Social Media: ${socialPaket.titel} ${formatEuro(socialPaket.betrag)}, ${storyTemplates.titel}
${formatEuro(storyTemplates.betrag)}, ${highlightCover.titel} ${formatEuro(highlightCover.betrag)}.

Pakete: ${starterBranding.titel} ${formatEuro(starterBranding.betrag)} (statt
${formatEuro(starterBranding.statt)}), ${beautyStudioKomplett.titel}
${formatEuro(beautyStudioKomplett.betrag)} (statt ${formatEuro(beautyStudioKomplett.statt)}),
${socialVisibility.titel} ${formatEuro(socialVisibility.betrag)} (statt
${formatEuro(socialVisibility.statt)}).

Zahlung: ${zahlung.anzahlungProzent}% Anzahlung, ${zahlung.anzahlungProzent}% nach Fertigstellung.
Ratenzahlung ab ${formatEuro(raten3.abBetrag)} (${raten3.raten} Raten) bzw. ab
${formatEuro(raten4.abBetrag)} (${raten4.raten} Raten), zinsfrei. Website-Kundinnen erhalten
${zahlung.websiteRabattProzent}% Rabatt auf weitere Design-Leistungen.`;
}

function buildBaseSystemPrompt(): string {
  return `${SYSTEM_PROMPT_INTRO}

${buildPricingPromptSection()}

${SYSTEM_PROMPT_RULES}`;
}

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

// Fallback für den Fall, dass die Wissensbasis irgendwann deutlich über
// KNOWLEDGE_BASE_SIZE_THRESHOLD wächst. Reines Keyword-Matching ohne
// Synonym-Erkennung – bei aktueller Wissensbasisgröße kommt diese Funktion
// nicht zum Einsatz (siehe Kommentar bei KNOWLEDGE_BASE_SIZE_THRESHOLD).
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

// Sicherheitsnetz zusätzlich zur Prompt-Anweisung: Falls die Antwort trotzdem am
// Tokenlimit endet, wird sie auf den letzten vollständig abgeschlossenen Satz
// gekürzt, statt mitten im Satz/Wort abgeschnitten an die Nutzerin auszugeben.
function trimIfCutOff(text: string, stopReason: string | undefined): string {
  if (stopReason !== "max_tokens") return text;

  const sentenceEndings = [".", "!", "?"];
  let lastCompleteEnd = -1;
  for (const ending of sentenceEndings) {
    const idx = text.lastIndexOf(ending);
    if (idx > lastCompleteEnd) lastCompleteEnd = idx;
  }

  if (lastCompleteEnd === -1) return text;
  return text.slice(0, lastCompleteEnd + 1).trim();
}

function formatKnowledgeEntries(entries: KnowledgeEntry[]): string {
  return entries
    .map((entry) => `### ${entry.title}\n${entry.content}`)
    .join("\n\n");
}

async function buildSystemPrompt(latestUserMessage: string): Promise<string> {
  const baseSystemPrompt = buildBaseSystemPrompt();
  const knowledgeBase = await loadKnowledgeBase();
  if (!knowledgeBase || knowledgeBase.length === 0) {
    return baseSystemPrompt;
  }

  const totalChars = knowledgeBase.reduce((sum, e) => sum + e.content.length + e.title.length, 0);
  const entriesToInclude =
    totalChars > KNOWLEDGE_BASE_SIZE_THRESHOLD
      ? selectRelevantEntries(knowledgeBase, latestUserMessage)
      : knowledgeBase;

  return `${baseSystemPrompt}

--- ZUSÄTZLICHES WISSEN VON DER WEBSITE ---
${formatKnowledgeEntries(entriesToInclude)}`;
}

export async function POST(request: Request) {
  if (isChatRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: "Zu viele Nachrichten. Bitte warte kurz, bevor du weiterschreibst." },
      { status: 429 }
    );
  }

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

  // Nur die letzten Nachrichten mitschicken, siehe MAX_HISTORY_MESSAGES.
  const recentMessages = messages.slice(-MAX_HISTORY_MESSAGES);

  const latestUserMessage = [...recentMessages].reverse().find((m) => m.role === "user")?.content ?? "";
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
        temperature: TEMPERATURE,
        system: systemPrompt,
        messages: recentMessages.map((m) => ({ role: m.role, content: m.content })),
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
    const rawReply = data?.content?.[0]?.text ?? "";
    const reply = trimIfCutOff(rawReply, data?.stop_reason);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Fehler beim Aufruf der Anthropic API:", error);
    return NextResponse.json(
      { error: "Der Chat-Assistent ist gerade nicht erreichbar. Bitte später erneut versuchen." },
      { status: 502 }
    );
  }
}
