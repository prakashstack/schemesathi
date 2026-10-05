import { en, type Translations } from "./en";
import { hi } from "./hi";
import { gu } from "./gu";

export type Lang = "en" | "hi" | "gu";

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "gu", label: "ગુજરાતી", short: "GU" },
  { code: "hi", label: "हिन्दी", short: "HI" },
];

export const dictionaries: Record<Lang, Translations> = { en, hi, gu };

export const LANG_STORAGE_KEY = "schemesathi.lang";

export type { Translations };
