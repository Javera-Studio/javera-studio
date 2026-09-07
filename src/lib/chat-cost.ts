/**
 * Grobe Kostenschätzung für einen Anthropic-Chat-Request anhand der
 * zurückgelieferten Usage-Werte. Wird nur für das interne Kosten-Tracking
 * (chat_usage) verwendet – nicht an die Nutzerin ausgegeben.
 *
 * Preise: USD pro 1 Mio. Tokens, Stand 07.09.2026 (claude.com/pricing).
 * Bewusst als einfache Tabelle im Code – kein API-Call, keine Dependency.
 */

export type ChatUsage = {
  input_tokens?: number;
  output_tokens?: number;
  cache_creation_input_tokens?: number;
  cache_read_input_tokens?: number;
};

type ModelPricing = {
  input: number;
  output: number;
  cacheWrite5m: number;
  cacheRead: number;
};

const PRICING_USD_PER_MTOK: Record<string, ModelPricing> = {
  // Claude Haiku 4.5
  "claude-haiku-4-5-20251001": {
    input: 1.0,
    output: 5.0,
    cacheWrite5m: 1.25,
    cacheRead: 0.1,
  },
};

/**
 * Geschätzte API-Kosten in USD für einen einzelnen Request.
 * Unbekanntes Modell -> 0 (kein Rateraten, lieber sichtbar 0 im Tracking).
 */
export function estimateChatCostUsd(model: string, usage: ChatUsage): number {
  const p = PRICING_USD_PER_MTOK[model];
  if (!p) return 0;

  const input = Math.max(0, usage.input_tokens ?? 0);
  const output = Math.max(0, usage.output_tokens ?? 0);
  const cacheWrite = Math.max(0, usage.cache_creation_input_tokens ?? 0);
  const cacheRead = Math.max(0, usage.cache_read_input_tokens ?? 0);

  const usd =
    (input * p.input +
      output * p.output +
      cacheWrite * p.cacheWrite5m +
      cacheRead * p.cacheRead) /
    1_000_000;

  // 6 Nachkommastellen, passend zu NUMERIC(10,6) in der DB.
  return Math.round(usd * 1_000_000) / 1_000_000;
}
