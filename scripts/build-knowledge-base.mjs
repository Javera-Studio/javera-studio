/**
 * Wissensbasis für den Chat-Assistenten generieren.
 *
 * Ausführen: npm run build-knowledge
 * Danach committen & deployen: git add content/knowledge-base.json && git commit ...
 *
 * Wann erneut ausführen: nach jedem neuen Blogartikel und nach jeder FAQ-Änderung,
 * damit der Chatbot aktuelle Inhalte kennt.
 *
 * Hinweis zur Architektur: Es wird NICHT die live gehostete Website gecrawlt
 * (fetch + cheerio auf https://www.javera-studio.at). Dieses Repo IST die
 * Quelle der FAQ- und Blog-Inhalte (src/lib/data/faq.ts, src/lib/data/blog.ts) –
 * die Website rendert exakt aus diesen Dateien. Ein Live-Crawl wäre daher nur
 * ein unnötiger Umweg über HTTP + HTML-Parsing (inkl. möglicher Puppeteer-
 * Abhängigkeit für JS-Rendering), mit dem Risiko, veraltete/gecachte Inhalte
 * zu erwischen. Direktes Einlesen der TypeScript-Datenmodule ist schneller,
 * zuverlässiger und bleibt automatisch 1:1 synchron mit dem, was live steht.
 *
 * Voraussetzung: Node 22.6+ (natives TypeScript-Modul-Loading, hier genutzt
 * um src/lib/data/faq.ts und blog.ts direkt zu importieren).
 */

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

async function loadFaqEntries() {
  const { faqCategories } = await import(
    pathToFileURL(path.join(rootDir, "src/lib/data/faq.ts")).href
  );

  return faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      url: `https://www.javera-studio.at/faq#${item.id}`,
      title: `FAQ: ${item.question}`,
      content: item.answer,
    }))
  );
}

async function loadBlogEntries() {
  const { blogPosts } = await import(
    pathToFileURL(path.join(rootDir, "src/lib/data/blog.ts")).href
  );

  return blogPosts.map((post) => {
    const bodyText = post.content
      .map((block) => {
        switch (block.type) {
          case "paragraph":
          case "heading":
          case "subheading":
          case "quote":
          case "callout":
            return block.text;
          case "list":
            return block.items.join(" | ");
          case "table":
            return [block.headers.join(" | "), ...block.rows.map((r) => r.join(" | "))].join("\n");
          default:
            return "";
        }
      })
      .filter(Boolean)
      .join("\n\n");

    const faqText = (post.faq ?? [])
      .map((f) => `Frage: ${f.question}\nAntwort: ${f.answer}`)
      .join("\n\n");

    const content = [post.description, bodyText, faqText].filter(Boolean).join("\n\n");

    return {
      url: `https://www.javera-studio.at/blog/${post.slug}`,
      title: post.title,
      content,
    };
  });
}

async function main() {
  console.log("Baue Wissensbasis aus src/lib/data/faq.ts und src/lib/data/blog.ts …");

  const [faqEntries, blogEntries] = await Promise.all([loadFaqEntries(), loadBlogEntries()]);
  const entries = [...faqEntries, ...blogEntries];

  const outDir = path.join(rootDir, "content");
  const outFile = path.join(outDir, "knowledge-base.json");
  await mkdir(outDir, { recursive: true });
  await writeFile(outFile, JSON.stringify(entries, null, 2), "utf-8");

  const totalChars = entries.reduce((sum, e) => sum + e.content.length + e.title.length, 0);
  const approxTokens = Math.round(totalChars / 4);

  console.log(`\nFertig: ${outFile}`);
  console.log(`  FAQ-Einträge:   ${faqEntries.length}`);
  console.log(`  Blogartikel:    ${blogEntries.length}`);
  console.log(`  Gesamt:         ${entries.length} Einträge`);
  console.log(`  Zeichen gesamt: ~${totalChars.toLocaleString("de-AT")}`);
  console.log(`  Tokens (grob):  ~${approxTokens.toLocaleString("de-AT")}`);
}

main().catch((err) => {
  console.error("Fehler beim Bauen der Wissensbasis:", err);
  process.exitCode = 1;
});
