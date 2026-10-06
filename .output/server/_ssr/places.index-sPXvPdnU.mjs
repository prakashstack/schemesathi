import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Heart, i as Navigation, n as Star, o as MapPin, r as SearchX, s as LocateFixed } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./Layout-D6DlK2r4.mjs";
import { n as useLocalState } from "./useLocalState-B574UQTy.mjs";
import { t as CATEGORIES } from "./place-1f_YPgvE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/places.index-sPXvPdnU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_RADIUS = 5e3;
var ENDPOINTS = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter"];
function calculateDistance(a, b) {
	const r = 6371e3, p = Math.PI / 180, d1 = (b.latitude - a.latitude) * p, d2 = (b.longitude - a.longitude) * p, x = Math.sin(d1 / 2) ** 2 + Math.cos(a.latitude * p) * Math.cos(b.latitude * p) * Math.sin(d2 / 2) ** 2;
	return 2 * r * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}
var formatDistance = (m) => m == null ? "Distance unavailable" : m < 1e3 ? `${Math.round(m)} m away` : `${(m / 1e3).toFixed(1)} km away`;
var f = {
	restaurant: "[\"amenity\"=\"restaurant\"]",
	cafe: "[\"amenity\"=\"cafe\"]",
	hotel: "[\"tourism\"=\"hotel\"]",
	resort: "[\"tourism\"=\"resort\"]",
	attraction: "[\"tourism\"~\"attraction|museum|gallery|theme_park\"]",
	shopping: "[\"shop\"]",
	entertainment: "[\"amenity\"~\"cinema|theatre|nightclub\"]"
};
var cache = /* @__PURE__ */ new Map();
function mapOsmElementToPlace(e, c, u) {
	const latitude = e.lat ?? e.center?.lat, longitude = e.lon ?? e.center?.lon, t = e.tags ?? {};
	if (latitude == null || longitude == null || !t.name) return null;
	const address = [
		t["addr:housenumber"],
		t["addr:street"],
		t["addr:suburb"],
		t["addr:city"],
		t["addr:state"],
		t["addr:postcode"]
	].filter(Boolean).join(", ");
	return {
		id: `${e.type}-${e.id}`,
		name: t.name,
		category: c,
		latitude,
		longitude,
		address: address || void 0,
		phone: t.phone,
		website: t.website,
		openingHours: t.opening_hours,
		distance: calculateDistance(u, {
			latitude,
			longitude
		}),
		osmType: e.type,
		osmId: String(e.id),
		tags: t
	};
}
async function searchNearby(u, o, signal) {
	const c = o.category ?? "attraction", k = `${u.latitude.toFixed(3)}:${u.longitude.toFixed(3)}:${o.radius}:${c}`, hit = cache.get(k);
	let data;
	if (hit && Date.now() - hit.at < 12e4) data = hit.data;
	else {
		const query = `[out:json][timeout:12];nwr${f[c]}(around:${o.radius},${u.latitude},${u.longitude});out center tags 80;`;
		let response;
		for (const endpoint of ENDPOINTS) try {
			const res = await fetch(endpoint, {
				method: "POST",
				headers: { "content-type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({ data: query }),
				signal
			});
			if (res.ok) {
				response = res;
				break;
			}
			if (res.status !== 429 && res.status !== 504) throw new Error("network");
		} catch (error) {
			if (error.name === "AbortError") throw error;
		}
		if (!response) throw new Error("busy");
		data = (await response.json()).elements.map((e) => mapOsmElementToPlace(e, c, u)).filter((p) => p !== null).sort((a, b) => (a.distance ?? 0) - (b.distance ?? 0));
		cache.set(k, {
			at: Date.now(),
			data
		});
	}
	const q = o.query?.toLowerCase().trim();
	return q ? data.filter((p) => `${p.name} ${p.tags?.cuisine ?? ""}`.toLowerCase().includes(q)) : data;
}
function PlaceCard({ place }) {
	const { isSaved, toggleSaved } = useLocalState();
	const [imageError, setImageError] = (0, import_react.useState)(false);
	const saved = isSaved(place.id);
	const category = CATEGORIES.find((item) => item.id === place.category);
	const directions = `https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "animate-rise overflow-hidden rounded-2xl border bg-card shadow-card transition hover:shadow-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-44 bg-primary-soft",
			children: [place.imageUrl && !imageError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: place.imageUrl,
				alt: "",
				className: "h-full w-full object-cover",
				loading: "lazy",
				onError: () => setImageError(true)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-full place-items-center text-4xl",
				"aria-label": "Image unavailable",
				children: category?.emoji
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => toggleSaved(place.id),
				className: "absolute right-3 top-3 rounded-full bg-card/90 p-2",
				"aria-label": saved ? "Remove from favorites" : "Save place",
				"aria-pressed": saved,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${saved ? "fill-primary text-primary" : ""}` })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium text-primary",
					children: [
						category?.emoji,
						" ",
						category?.label
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-xl font-semibold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/places/$id",
						params: { id: place.id },
						children: place.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm",
					children: [
						place.rating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-warning text-warning" }),
								place.rating,
								" ",
								place.reviewCount ? `(${place.reviewCount.toLocaleString()})` : ""
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No rating available" }),
						place.priceText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: place.priceText }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: place.isOpen ? "text-success" : "text-muted-foreground",
							children: place.isOpen ? "Open now" : "Closed"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 flex gap-1 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0" }), place.address ?? "Address unavailable"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-medium",
					children: formatDistance(place.distance)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/places/$id",
						params: { id: place.id },
						className: "rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground",
						children: "View details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: directions,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), "Directions"]
					})]
				})
			]
		})]
	});
}
function State({ loading, radius }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-7 flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed bg-card p-8 text-center",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-18 w-18 place-items-center rounded-full bg-primary-soft p-5 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(loading ? LocateFixed : SearchX, { className: `h-9 w-9 ${loading ? "animate-spin" : "animate-bounce"}` })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-xl font-semibold",
				children: loading ? "Finding places near you" : "No places found nearby"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: loading ? "We’re checking OpenStreetMap data. This can take a few moments." : `No places were found within ${radius / 1e3} km. Try a wider radius or another category.`
			})
		]
	});
}
function Places() {
	const [loc, setLoc] = (0, import_react.useState)(), [message, setMessage] = (0, import_react.useState)("Use your location to search OpenStreetMap nearby data."), [radius, setRadius] = (0, import_react.useState)(DEFAULT_RADIUS), [cat, setCat] = (0, import_react.useState)("restaurant"), [places, setPlaces] = (0, import_react.useState)([]), [loading, setLoading] = (0, import_react.useState)(false);
	const locate = () => {
		if (!navigator.geolocation) return setMessage("Location services are not supported by this browser.");
		setMessage("Detecting your location...");
		navigator.geolocation.getCurrentPosition((p) => {
			setLoc({
				latitude: p.coords.latitude,
				longitude: p.coords.longitude,
				accuracy: p.coords.accuracy
			});
			setMessage("Your current location detected");
		}, () => setMessage("We couldn't access your location. Please allow location access and try again."));
	};
	(0, import_react.useEffect)(() => {
		const handler = (e) => setRadius(e.detail);
		window.addEventListener("nearby-radius-change", handler);
		return () => window.removeEventListener("nearby-radius-change", handler);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!loc) return;
		const c = new AbortController();
		setLoading(true);
		setPlaces([]);
		searchNearby(loc, {
			radius,
			category: cat
		}, c.signal).then(setPlaces).catch((e) => {
			if (e.name !== "AbortError") setMessage(e.message === "busy" ? "The places service is temporarily busy. Please try again in a moment." : "Unable to load nearby places.");
		}).finally(() => setLoading(false));
		return () => c.abort();
	}, [
		loc,
		radius,
		cat
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Explore nearby places",
		subtitle: "OpenStreetMap data, searched after you request your location."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: locate,
				className: "rounded-xl bg-primary px-5 py-3 text-primary-foreground",
				children: "Use my location"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm",
				children: message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: CATEGORIES.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setCat(x.id),
					className: "rounded-full border px-3 py-2",
					children: [
						x.emoji,
						" ",
						x.label
					]
				}, x.id))
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(State, {
				loading: true,
				radius
			}) : places.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 md:grid-cols-2",
				children: places.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			}) : loc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(State, {
				loading: false,
				radius
			}) : null
		]
	})] });
}
//#endregion
export { Places as component };
