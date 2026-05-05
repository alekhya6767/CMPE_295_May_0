/**
 * Feature Flags
 * -----------------------------------------------------------------------------
 * Central switchboard for enabling/disabling features.
 *
 * Project scope:
 *   - CMPE 295A (Sem 1) -> Repository Analyzer, AI Documentation,
 *                         Architecture Visualization (basic Mermaid)
 *   - CMPE 295B (Sem 2) -> Interactive Code Q&A, Advanced Architecture Viz
 *                         (pan/zoom, per-module), novel contribution
 *
 * Flip values below to enable/disable features without deleting code.
 * Can also be overridden via NEXT_PUBLIC_FEATURE_* env vars at build time.
 */

const envFlag = (name: string, fallback: boolean): boolean => {
  const raw = process.env[`NEXT_PUBLIC_FEATURE_${name}`];
  if (raw === undefined) return fallback;
  return raw.toLowerCase() === 'true' || raw === '1';
};

export const FEATURES = {
  // ============================================================
  // Sem 1 (295A) — IN SCOPE FOR DEMO
  // ============================================================
  REPOSITORY_ANALYZER: envFlag('REPOSITORY_ANALYZER', true),
  AI_DOCUMENTATION: envFlag('AI_DOCUMENTATION', true),
  ARCHITECTURE_VIZ_BASIC: envFlag('ARCHITECTURE_VIZ_BASIC', true),

  // ============================================================
  // Sem 2 (295B) — DEFERRED, hidden from UI for Sem 1 demo
  // ============================================================
  // Interactive Code Q&A (RAG chat, Ask panel, streaming answers)
  ASK_QA: envFlag('ASK_QA', false),
  // Advanced architecture viz (pan/zoom, multi-level diagrams)
  MERMAID_INTERACTIVE: envFlag('MERMAID_INTERACTIVE', false),

  // ============================================================
  // Out of scope per PPT — permanently hidden for this project
  // ============================================================
  DEEP_RESEARCH: envFlag('DEEP_RESEARCH', false),
  LANGUAGE_SELECTOR: envFlag('LANGUAGE_SELECTOR', false),
  WIKI_EXPORT: envFlag('WIKI_EXPORT', false),
  MULTI_PROVIDER: envFlag('MULTI_PROVIDER', false), // only OpenRouter shown
} as const;

export type FeatureFlag = keyof typeof FEATURES;
