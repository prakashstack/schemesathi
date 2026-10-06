import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { readJson, STORAGE_KEYS, writeJson } from "@/lib/storage";
interface Ctx { favorites: string[]; toggleSaved: (id: string) => void; isSaved: (id: string) => boolean }
const C = createContext<Ctx | null>(null);
export function LocalStateProvider({ children }: { children: ReactNode }) { const [favorites, setFavorites] = useState<string[]>([]); useEffect(() => setFavorites(readJson<string[]>(STORAGE_KEYS.saved) ?? []), []); const toggleSaved = useCallback((id: string) => setFavorites((prev) => { const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]; writeJson(STORAGE_KEYS.saved, next); return next; }), []); const value = useMemo(() => ({ favorites, toggleSaved, isSaved: (id: string) => favorites.includes(id) }), [favorites, toggleSaved]); return <C.Provider value={value}>{children}</C.Provider>; }
export function useLocalState() { const c = useContext(C); if (!c) throw new Error("LocalStateProvider missing"); return c; }
