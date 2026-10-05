//#region node_modules/.nitro/vite/services/ssr/assets/http-eACfPK5o.js
var ApiError = class extends Error {
	kind;
	constructor(kind) {
		super(kind);
		this.kind = kind;
	}
};
/** fetch with timeout + normalised, user-safe error kinds. */
async function fetchJson(url, timeoutMs = 15e3) {
	const ctrl = new AbortController();
	const timer = setTimeout(() => ctrl.abort(), timeoutMs);
	let res;
	try {
		res = await fetch(url, {
			signal: ctrl.signal,
			headers: { Accept: "application/json" }
		});
	} catch (e) {
		if (e.name === "AbortError") throw new ApiError("timeout");
		throw new ApiError(typeof navigator !== "undefined" && navigator.onLine === false ? "network" : "cors");
	} finally {
		clearTimeout(timer);
	}
	if (res.status === 429) throw new ApiError("rateLimit");
	if (!res.ok) throw new ApiError("unavailable");
	try {
		return await res.json();
	} catch {
		throw new ApiError("invalid");
	}
}
//#endregion
export { fetchJson as n, ApiError as t };
