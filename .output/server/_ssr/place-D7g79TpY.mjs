//#region node_modules/.nitro/vite/services/ssr/assets/place-D7g79TpY.js
var DEFAULT_RADIUS = 2e4;
var CACHE_TTL = 6e5;
var CACHE_PREFIX = "geoapify-places:v1:";
var SELECTED_PLACE_KEY = `${CACHE_PREFIX}selected`;
var cache = /* @__PURE__ */ new Map();
var inFlight = /* @__PURE__ */ new Map();
function saveSelectedPlace(place) {
	try {
		localStorage.setItem(SELECTED_PLACE_KEY, JSON.stringify(place));
	} catch {}
}
function readCachedPlaceContext(placeId) {
	for (const { data, expiresAt } of cache.values()) {
		if (expiresAt <= Date.now()) continue;
		const place = data.find((item) => item.id === placeId);
		if (place) return {
			place,
			nearbyPlaces: data.filter((item) => item.id !== placeId)
		};
	}
	try {
		let fallback;
		const selected = JSON.parse(localStorage.getItem(SELECTED_PLACE_KEY) ?? "null");
		if (selected?.id === placeId) fallback = selected;
		for (let index = 0; index < localStorage.length; index += 1) {
			const key = localStorage.key(index);
			if (!key?.startsWith(CACHE_PREFIX) || key === SELECTED_PLACE_KEY) continue;
			const cached = JSON.parse(localStorage.getItem(key) ?? "null");
			if (!cached || cached.expiresAt <= Date.now() || !Array.isArray(cached.data)) continue;
			const place = cached.data.find((item) => item.id === placeId);
			if (place) return {
				place,
				nearbyPlaces: cached.data.filter((item) => item.id !== placeId)
			};
		}
		return fallback ? {
			place: fallback,
			nearbyPlaces: []
		} : void 0;
	} catch {
		return;
	}
}
var formatDistance = (metres) => metres == null ? "Distance unavailable" : metres < 1e3 ? `${Math.round(metres)} m away` : `${(metres / 1e3).toFixed(1)} km away`;
function readPersistentCache(key) {
	try {
		const cached = JSON.parse(localStorage.getItem(`${CACHE_PREFIX}${key}`) ?? "null");
		return cached && cached.expiresAt > Date.now() && Array.isArray(cached.data) ? cached : void 0;
	} catch {
		return;
	}
}
function storeCache(key, data) {
	const entry = {
		expiresAt: Date.now() + CACHE_TTL,
		data
	};
	cache.set(key, entry);
	try {
		localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(entry));
	} catch {}
}
async function requestPlaces(userLocation, radius) {
	throw new Error("missing-api-key");
}
async function searchNearby(userLocation, options) {
	const key = `${userLocation.latitude.toFixed(3)}:${userLocation.longitude.toFixed(3)}:${options.radius}`;
	const cached = cache.get(key) ?? readPersistentCache(key);
	let data;
	if (cached && cached.expiresAt > Date.now()) {
		cache.set(key, cached);
		data = cached.data;
	} else {
		let request = inFlight.get(key);
		if (!request) {
			request = requestPlaces(userLocation, options.radius).then((places) => {
				storeCache(key, places);
				return places;
			}).finally(() => inFlight.delete(key));
			inFlight.set(key, request);
		}
		data = await request;
	}
	const query = options.query?.toLowerCase().trim();
	return query ? data.filter((place) => `${place.name} ${place.tags?.["categories"] ?? ""}`.toLowerCase().includes(query)) : data;
}
var CATEGORIES = [
	{
		id: "restaurant",
		label: "Restaurants",
		emoji: "🍴"
	},
	{
		id: "hotel",
		label: "Hotels",
		emoji: "🏨"
	},
	{
		id: "resort",
		label: "Resorts",
		emoji: "🏖️"
	},
	{
		id: "cafe",
		label: "Cafes",
		emoji: "☕"
	},
	{
		id: "attraction",
		label: "Attractions",
		emoji: "📸"
	},
	{
		id: "shopping",
		label: "Shopping",
		emoji: "🛍️"
	},
	{
		id: "entertainment",
		label: "Entertainment",
		emoji: "🎡"
	}
];
//#endregion
export { saveSelectedPlace as a, readCachedPlaceContext as i, DEFAULT_RADIUS as n, searchNearby as o, formatDistance as r, CATEGORIES as t };
