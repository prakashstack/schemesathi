import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useLocalState-B574UQTy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Safe localStorage helpers. Storage may be unavailable (private mode, blocked
* cookies) — every access is guarded and failures degrade silently.
*/
function readJson(key) {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(key);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function writeJson(key, value) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
var STORAGE_KEYS = { saved: "nearby-explorer.favorites.v1" };
var C = (0, import_react.createContext)(null);
function LocalStateProvider({ children }) {
	const [favorites, setFavorites] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => setFavorites(readJson(STORAGE_KEYS.saved) ?? []), []);
	const toggleSaved = (0, import_react.useCallback)((id) => setFavorites((prev) => {
		const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
		writeJson(STORAGE_KEYS.saved, next);
		return next;
	}), []);
	const value = (0, import_react.useMemo)(() => ({
		favorites,
		toggleSaved,
		isSaved: (id) => favorites.includes(id)
	}), [favorites, toggleSaved]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C.Provider, {
		value,
		children
	});
}
function useLocalState() {
	const c = (0, import_react.useContext)(C);
	if (!c) throw new Error("LocalStateProvider missing");
	return c;
}
//#endregion
export { useLocalState as n, LocalStateProvider as t };
