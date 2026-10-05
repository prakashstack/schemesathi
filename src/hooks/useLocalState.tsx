import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { readJson, removeKey, STORAGE_KEYS, writeJson } from "@/lib/storage";
import type { UserProfile } from "@/types/scheme";

interface Ctx {
  profile: UserProfile | null;
  setProfile: (p: UserProfile | null) => void;
  saved: string[];
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
}
const C = createContext<Ctx | null>(null);

export function LocalStateProvider({ children }: { children: ReactNode }) {
  const [profile, setP] = useState<UserProfile | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  useEffect(() => {
    setP(readJson<UserProfile>(STORAGE_KEYS.profile));
    setSaved(readJson<string[]>(STORAGE_KEYS.saved) ?? []);
  }, []);
  const setProfile = useCallback((p: UserProfile | null) => {
    setP(p);
    if (p) writeJson(STORAGE_KEYS.profile, p);
    else removeKey(STORAGE_KEYS.profile);
  }, []);
  const toggleSaved = useCallback((id: string) => {
    setSaved((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      writeJson(STORAGE_KEYS.saved, next);
      return next;
    });
  }, []);
  const value = useMemo(() => ({ profile, setProfile, saved, toggleSaved, isSaved: (id: string) => saved.includes(id) }), [profile, setProfile, saved, toggleSaved]);
  return <C.Provider value={value}>{children}</C.Provider>;
}

export function useLocalState() {
  const c = useContext(C);
  if (!c) throw new Error("LocalStateProvider missing");
  return c;
}
