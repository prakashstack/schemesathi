import type { SchemeCategoryId } from "@/types/scheme";

export interface CategoryInfo {
  id: SchemeCategoryId;
  emoji: string;
  /** i18n key suffix */
  key: string;
  /** search keywords used for data.gov.in dataset lookups */
  keywords: string[];
}

export const CATEGORIES: CategoryInfo[] = [
  { id: "employment", emoji: "💼", key: "employment", keywords: ["employment", "rozgar"] },
  { id: "business", emoji: "🏢", key: "business", keywords: ["msme", "enterprise"] },
  { id: "startup", emoji: "🚀", key: "startup", keywords: ["startup"] },
  { id: "education", emoji: "🎓", key: "education", keywords: ["education"] },
  { id: "housing", emoji: "🏠", key: "housing", keywords: ["housing", "awas"] },
  { id: "healthcare", emoji: "🏥", key: "healthcare", keywords: ["health"] },
  { id: "agriculture", emoji: "🌾", key: "agriculture", keywords: ["agriculture", "farmer"] },
  { id: "women", emoji: "👩", key: "women", keywords: ["women"] },
  { id: "children", emoji: "👶", key: "children", keywords: ["child"] },
  { id: "disability", emoji: "♿", key: "disability", keywords: ["disability", "divyang"] },
  { id: "senior", emoji: "👴", key: "senior", keywords: ["senior citizen", "old age"] },
  { id: "financial", emoji: "💰", key: "financial", keywords: ["financial assistance"] },
  { id: "skill", emoji: "🛠", key: "skill", keywords: ["skill"] },
  { id: "scholarship", emoji: "🎓", key: "scholarship", keywords: ["scholarship"] },
  { id: "loan", emoji: "🏦", key: "loan", keywords: ["loan", "credit"] },
  { id: "subsidy", emoji: "💸", key: "subsidy", keywords: ["subsidy"] },
];

export const GUJARAT_CATEGORIES: { id: SchemeCategoryId | "sc_welfare"; label: string; keywords: string[] }[] = [
  { id: "sc_welfare", label: "SC Welfare", keywords: ["scheduled caste"] },
  { id: "education", label: "Education", keywords: ["education"] },
  { id: "employment", label: "Employment", keywords: ["employment"] },
  { id: "business", label: "Business", keywords: ["msme"] },
  { id: "startup", label: "Startup", keywords: ["startup"] },
  { id: "loan", label: "Self Employment", keywords: ["self employment"] },
  { id: "scholarship", label: "Scholarship", keywords: ["scholarship"] },
  { id: "housing", label: "Housing", keywords: ["housing"] },
  { id: "healthcare", label: "Healthcare", keywords: ["health"] },
  { id: "social_welfare", label: "Social Welfare", keywords: ["social welfare"] },
];

export const getCategory = (id: string) => CATEGORIES.find((c) => c.id === id);
