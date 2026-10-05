import { SCHEMES } from "@/data/schemes";
import type { Scheme, SchemeCategoryId } from "@/types/scheme";

/**
 * Scheme access layer. myScheme's API is not browser-accessible (region-blocked, requires
 * private headers), so scheme records come from the curated official-criteria reference set,
 * each linking to its official source. Live official datasets come from governmentApi.ts.
 */
const norm = (s: string) => s.toLowerCase();

export async function getSchemes(): Promise<Scheme[]> {
  return SCHEMES;
}
export async function getSchemeById(id: string) {
  return SCHEMES.find((s) => s.id === id) ?? null;
}
export async function getSchemesByState(stateCode: string) {
  return SCHEMES.filter((s) => s.stateCode === stateCode);
}
export async function getCentralSchemes() {
  return SCHEMES.filter((s) => s.level === "central");
}
export async function getSchemesByCategory(category: SchemeCategoryId) {
  return SCHEMES.filter((s) => s.categories.includes(category));
}
export function searchSchemesSync(query: string, list: Scheme[] = SCHEMES) {
  const terms = norm(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return list;
  return list.filter((s) => {
    const hay = norm(
      [s.name, s.shortName, s.department, s.ministry, s.benefitSummary, s.overview, s.categories.join(" "), s.stateCode === "GJ" ? "gujarat" : "", s.level, ...s.eligibilityText].join(" "),
    ).replace(/scheduled caste/g, "scheduled caste sc");
    return terms.every((t) => hay.includes(t));
  });
}
export async function searchSchemes(query: string) {
  return searchSchemesSync(query);
}
