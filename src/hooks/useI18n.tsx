import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { dictionaries, LANGUAGES, LANG_STORAGE_KEY, type Lang, type Translations } from "@/i18n";

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  /** Interpolates {name} placeholders. */
  f: (template: string, vars: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

function isLang(v: string | null): v is Lang {
  return v === "en" || v === "hi" || v === "gu";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Read after hydration only — localStorage is not available during SSR.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (isLang(stored)) setLangState(stored);
    } catch {
      /* storage blocked — keep default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const f = useCallback(
    (template: string, vars: Record<string, string | number>) =>
      template.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? `{${k}}`)),
    [],
  );

  const value = useMemo<I18nValue>(() => ({ lang, setLang, t: dictionaries[lang], f }), [lang, setLang, f]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export { LANGUAGES };
export type { Lang };
