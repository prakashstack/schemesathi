import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as saveSelectedPlace, n as DEFAULT_RADIUS, o as searchNearby, r as formatDistance, t as CATEGORIES } from "./place-D7g79TpY.mjs";
import { d as LocateFixed, n as Star, o as SearchX, p as Heart, s as Phone, u as MapPin } from "../_libs/lucide-react.mjs";
import { n as useLocalState } from "./useLocalState-B574UQTy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/NearbyPlaces-b8SOXoNc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PlaceCard({ place }) {
	const navigate = useNavigate();
	const { isSaved, toggleSaved } = useLocalState();
	const [imageError, setImageError] = (0, import_react.useState)(false);
	const saved = isSaved(place.id);
	const category = CATEGORIES.find((item) => item.id === place.category);
	const openDetails = () => {
		saveSelectedPlace(place);
		navigate({
			to: "/places/$placeId",
			params: { placeId: place.id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		role: "link",
		tabIndex: 0,
		onClick: openDetails,
		onKeyDown: (event) => {
			if (event.target !== event.currentTarget) return;
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				openDetails();
			}
		},
		className: "animate-rise cursor-pointer overflow-hidden rounded-2xl border bg-card shadow-card transition hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-36 bg-gradient-to-br from-primary-soft via-card to-secondary",
			children: [place.imageUrl && !imageError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: place.imageUrl,
				alt: "",
				className: "h-full w-full object-cover",
				loading: "lazy",
				onError: () => setImageError(true)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-full place-items-center text-5xl",
				"aria-label": "Place category",
				children: category?.emoji ?? "📍"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (event) => {
					event.stopPropagation();
					toggleSaved(place.id);
				},
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
					className: "mt-1 text-xl font-bold",
					children: place.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm",
					children: [place.rating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-warning text-warning" }),
							place.rating,
							" ",
							place.reviewCount ? `(${place.reviewCount.toLocaleString()})` : ""
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No rating available" }), place.priceLevel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: place.priceLevel })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 flex gap-1 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0" }), place.address ?? "Address unavailable"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-medium",
					children: formatDistance(place.distance)
				}),
				place.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${place.phone}`,
					onClick: (event) => event.stopPropagation(),
					className: "mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "Call place"]
				})
			]
		})]
	});
}
var LOCATION_KEY = "nearby-explorer-location";
function describeSearchError(error) {
	const code = error instanceof Error ? error.message : "";
	if (code === "missing-api-key") return "Geoapify is not configured. Set VITE_GEOAPIFY_API_KEY in .env and restart the dev server.";
	if (code === "provider-auth") return "Geoapify rejected the API key. Check that the key is active and allowed for this domain and the Places API.";
	if (code === "provider-rate-limit") return "The Geoapify request limit has been reached. Wait a moment, then try again.";
	if (code === "provider-invalid-response") return "Geoapify returned an unexpected response. Please try again later.";
	if (code === "provider-no-usable-places") return "Geoapify returned places, but none had the details needed to display them.";
	if (code.startsWith("provider-http-")) return `Geoapify returned an error (${code.slice(14)}). Check the API key and Places API settings.`;
	if (error instanceof TypeError) return "Could not reach Geoapify. Check your connection and whether browser or domain restrictions are blocking the request.";
	return "Unable to load nearby places right now. Please try again.";
}
function LocationState({ loading, radius, error, onRetry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-7 flex min-h-64 flex-col items-center justify-center rounded-3xl border border-dashed bg-card p-8 text-center shadow-card",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-16 w-16 place-items-center rounded-full bg-primary-soft text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(loading ? LocateFixed : SearchX, { className: `h-8 w-8 ${loading ? "animate-spin" : "animate-bounce"}` })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-xl font-bold",
				children: loading ? "Finding the best places near you" : error ? "Unable to find places" : "No places found nearby"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-md text-sm text-muted-foreground",
				children: loading ? "Searching Geoapify Places within your selected distance." : error ?? `No matching places were found within ${radius / 1e3} km. Try a wider distance.`
			}),
			error && onRetry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onRetry,
				className: "mt-5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90",
				children: "Try again"
			})
		]
	});
}
function NearbyPlaces() {
	const [location, setLocation] = (0, import_react.useState)();
	const [message, setMessage] = (0, import_react.useState)("Getting your current location…");
	const [locationError, setLocationError] = (0, import_react.useState)();
	const [locationRetryCount, setLocationRetryCount] = (0, import_react.useState)(0);
	const [radius, setRadius] = (0, import_react.useState)(DEFAULT_RADIUS);
	const [category, setCategory] = (0, import_react.useState)("all");
	const [allPlaces, setAllPlaces] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [searchError, setSearchError] = (0, import_react.useState)();
	const [retryCount, setRetryCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!navigator.geolocation) {
			const error = "Location services are not supported by this browser.";
			setMessage(error);
			setLocationError(error);
			return;
		}
		setLocationError(void 0);
		setMessage("Getting your current location…");
		navigator.geolocation.getCurrentPosition((position) => {
			const current = {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				accuracy: position.coords.accuracy
			};
			setLocation(current);
			setLocationError(void 0);
			setMessage("Showing places around your current location");
			try {
				localStorage.setItem(LOCATION_KEY, JSON.stringify(current));
			} catch {}
		}, () => {
			const error = "Allow location access in your browser or device settings, then try again to see nearby places.";
			setMessage(error);
			setLocationError(error);
		}, {
			enableHighAccuracy: true,
			maximumAge: 0,
			timeout: 1e4
		});
	}, [locationRetryCount]);
	(0, import_react.useEffect)(() => {
		const changeRadius = (event) => setRadius(event.detail);
		window.addEventListener("nearby-radius-change", changeRadius);
		return () => window.removeEventListener("nearby-radius-change", changeRadius);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!location) return;
		let active = true;
		setLoading(true);
		setSearchError(void 0);
		setAllPlaces([]);
		setCategory("all");
		searchNearby(location, { radius }).then((results) => {
			if (active) setAllPlaces(results);
		}).catch((error) => {
			if (active) setSearchError(describeSearchError(error));
		}).finally(() => {
			if (active) setLoading(false);
		});
		return () => {
			active = false;
		};
	}, [
		location,
		radius,
		retryCount
	]);
	const availableCategories = (0, import_react.useMemo)(() => CATEGORIES.filter((item) => allPlaces.some((place) => place.category === item.id)), [allPlaces]);
	const places = (0, import_react.useMemo)(() => category === "all" ? allPlaces : allPlaces.filter((place) => place.category === category), [allPlaces, category]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative mx-auto max-w-6xl px-4 py-8 md:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border bg-card p-5 shadow-card sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-semibold text-primary",
							children: [
								"NEAR YOU · ",
								radius / 1e3,
								" KM"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-3xl font-bold tracking-tight",
							children: "Places you’ll love"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							"aria-live": "polite",
							children: message
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex snap-x gap-2 overflow-x-auto pb-2",
					children: [allPlaces.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setCategory("all"),
						"aria-pressed": category === "all",
						className: `shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${category === "all" ? "bg-primary text-primary-foreground shadow-card" : "border bg-card text-foreground hover:border-primary"}`,
						children: [
							"All (",
							allPlaces.length,
							")"
						]
					}), availableCategories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setCategory(item.id),
						"aria-pressed": category === item.id,
						className: `shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${category === item.id ? "bg-primary text-primary-foreground shadow-card" : "border bg-card text-foreground hover:border-primary"}`,
						children: [
							item.emoji,
							" ",
							item.label
						]
					}, item.id))]
				}),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationState, {
					loading: true,
					radius
				}) : places.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: places.map((place) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place }, place.id))
				}) : location ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationState, {
					loading: false,
					radius,
					error: searchError,
					onRetry: () => setRetryCount((count) => count + 1)
				}) : locationError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationState, {
					loading: false,
					radius,
					error: locationError,
					onRetry: () => setLocationRetryCount((count) => count + 1)
				}) : null
			]
		})
	});
}
//#endregion
export { NearbyPlaces as t };
