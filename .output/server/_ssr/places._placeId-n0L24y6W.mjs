import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./places._placeId-DKOIF2rE.mjs";
import { a as saveSelectedPlace, i as readCachedPlaceContext, r as formatDistance, t as CATEGORIES } from "./place-D7g79TpY.mjs";
import { _ as Clock3, c as Navigation, f as Lightbulb, g as Compass, h as ExternalLink, m as Globe, r as Sparkles, s as Phone, u as MapPin, v as CircleDollarSign, x as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as GoogleGenAI } from "../_libs/google__genai+p-retry+retry.mjs";
import { n as objectType, r as stringType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/places._placeId-n0L24y6W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var responseSchema = objectType({
	overview: stringType().min(1).max(500),
	tips: arrayType(stringType().min(1).max(200)).max(4),
	suggestions: arrayType(objectType({
		placeId: stringType().min(1).max(300),
		reason: stringType().min(1).max(200)
	})).max(5)
});
async function getPlaceInsights(place, nearbyPlaces) {
	const apiKey = "AIzaSyBlsTAXAmcOr2682OPpLCikWtS5laxrwFQ";
	const nearby = nearbyPlaces.filter((candidate) => candidate.id !== place.id).sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity)).slice(0, 30);
	const prompt = [
		"Write a concise, practical local visitor guide for the selected place using only the supplied facts.",
		"Do not invent amenities, ratings, opening times, prices, or claims about a business.",
		"Give an overview, up to four general visit tips, and up to five nearby place suggestions.",
		"Nearby suggestions must use an exact supplied placeId. Never invent a business or id.",
		"Return only JSON matching {overview: string, tips: string[], suggestions: [{placeId: string, reason: string}]}",
		JSON.stringify({
			selectedPlace: {
				id: place.id,
				name: place.name,
				category: place.category,
				address: place.address,
				openingHours: place.openingHours,
				tags: place.tags
			},
			nearbyPlaces: nearby.map((candidate) => ({
				id: candidate.id,
				name: candidate.name,
				category: candidate.category,
				address: candidate.address,
				distance: candidate.distance
			}))
		})
	].join("\n");
	const text = (await new GoogleGenAI({ apiKey }).models.generateContent({
		model: "gemini-2.5-flash",
		contents: prompt,
		config: { responseMimeType: "application/json" }
	})).text?.trim();
	if (!text) throw new Error("Gemini returned an empty guide. Please try again.");
	let parsed;
	try {
		parsed = JSON.parse(text);
	} catch {
		throw new Error("Gemini returned an unreadable guide. Please try again.");
	}
	const result = responseSchema.parse(parsed);
	const placesById = new Map(nearby.map((candidate) => [candidate.id, candidate]));
	const seen = /* @__PURE__ */ new Set();
	return {
		overview: result.overview,
		tips: result.tips,
		suggestions: result.suggestions.flatMap(({ placeId, reason }) => {
			const suggestedPlace = placesById.get(placeId);
			if (!suggestedPlace || seen.has(placeId)) return [];
			seen.add(placeId);
			return [{
				place: suggestedPlace,
				reason
			}];
		})
	};
}
function DetailItem({ icon: Icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3 rounded-2xl border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 break-words text-sm font-medium",
				children
			})]
		})]
	});
}
function PlaceDetails({ placeId }) {
	const navigate = useNavigate();
	const [context, setContext] = (0, import_react.useState)();
	const [loadingPlace, setLoadingPlace] = (0, import_react.useState)(true);
	const [insights, setInsights] = (0, import_react.useState)();
	const [insightsError, setInsightsError] = (0, import_react.useState)();
	const [loadingInsights, setLoadingInsights] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setContext(readCachedPlaceContext(placeId));
		setLoadingPlace(false);
		setInsights(void 0);
		setInsightsError(void 0);
	}, [placeId]);
	(0, import_react.useEffect)(() => {
		if (!context) return;
		let active = true;
		setLoadingInsights(true);
		getPlaceInsights(context.place, context.nearbyPlaces).then((result) => {
			if (active) setInsights(result);
		}).catch((error) => {
			if (!active) return;
			const message = error instanceof Error ? error.message : "";
			setInsightsError(message.length > 0 ? message.slice(0, 300) : "The AI guide couldn't be loaded right now. Place details and the map are still available.");
		}).finally(() => {
			if (active) setLoadingInsights(false);
		});
		return () => {
			active = false;
		};
	}, [context]);
	const mapUrl = (0, import_react.useMemo)(() => {
		if (!context) return "";
		const { latitude, longitude } = context.place;
		return `https://www.openstreetmap.org/export/embed.html?${new URLSearchParams({
			bbox: `${longitude - .015},${latitude - .01},${longitude + .015},${latitude + .01}`,
			layer: "mapnik",
			marker: `${latitude},${longitude}`
		})}`;
	}, [context]);
	if (loadingPlace) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mx-auto max-w-6xl px-4 py-16 text-muted-foreground",
		children: "Loading place…"
	});
	if (!context) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-7 w-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 text-2xl font-bold",
				children: "Place details are no longer in this cache"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Return to nearby places and open the place again to load its saved details."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/places",
				className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to places"]
			})
		]
	});
	const { place } = context;
	const category = CATEGORIES.find((item) => item.id === place.category);
	const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/places",
				className: "inline-flex items-center gap-2 rounded-lg py-2 text-sm font-semibold text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to nearby places"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 overflow-hidden rounded-3xl border bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex min-h-64 items-end overflow-hidden bg-gradient-to-br from-primary-soft via-card to-secondary p-6 sm:min-h-80 sm:p-10",
					children: [
						place.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: place.imageUrl,
							alt: "",
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/15 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 max-w-3xl text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-semibold",
									children: [
										category?.emoji,
										" ",
										category?.label
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl",
									children: place.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 flex items-center gap-2 text-sm text-white/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0" }), place.address ?? "Address unavailable"]
								})
							]
						}),
						!place.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-7 top-7 text-7xl opacity-20",
							"aria-hidden": "true",
							children: category?.emoji ?? "📍"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							icon: MapPin,
							label: "Location",
							children: place.address ?? `${place.latitude.toFixed(5)}, ${place.longitude.toFixed(5)}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							icon: Navigation,
							label: "Distance",
							children: formatDistance(place.distance)
						}),
						place.priceLevel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							icon: CircleDollarSign,
							label: "Price level",
							children: place.priceLevel
						}),
						place.openingHours && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							icon: Clock3,
							label: "Opening hours",
							children: place.openingHours
						}),
						place.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							icon: Phone,
							label: "Phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${place.phone}`,
								className: "text-primary hover:underline",
								children: place.phone
							})
						}),
						place.website && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							icon: Globe,
							label: "Website",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: place.website,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1 text-primary hover:underline",
								children: ["Visit website ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailItem, {
							icon: Compass,
							label: "Coordinates",
							children: [
								place.latitude.toFixed(5),
								", ",
								place.longitude.toFixed(5)
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "overflow-hidden rounded-3xl border bg-card shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 p-5 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								children: "Find your way"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Map location and directions"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: directionsUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), "Directions"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `Map showing ${place.name}`,
							src: mapUrl,
							className: "h-72 w-full border-t sm:h-96",
							loading: "lazy",
							referrerPolicy: "no-referrer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://www.openstreetmap.org/?mlat=${place.latitude}&mlon=${place.longitude}#map=16/${place.latitude}/${place.longitude}`,
							target: "_blank",
							rel: "noreferrer",
							className: "block px-5 py-3 text-xs text-muted-foreground hover:text-primary",
							children: "Map data © OpenStreetMap contributors"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-3xl border bg-card p-5 shadow-card sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-primary",
								children: "AI-powered guide"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								children: "A little local insight"
							})] })]
						}),
						loadingInsights ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 animate-pulse text-sm text-muted-foreground",
							children: "Putting together helpful details and nearby ideas…"
						}) : insightsError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 rounded-xl bg-secondary p-4 text-sm text-muted-foreground",
							children: insightsError
						}) : insights ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 leading-relaxed text-muted-foreground",
								children: insights.overview
							}),
							insights.tips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "flex items-center gap-2 font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-4 w-4 text-primary" }), "Helpful tips"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-2",
									children: insights.tips.map((tip, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 text-primary",
											children: "•"
										}), tip]
									}, `${index}-${tip}`))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 border-t pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: "Nearby ideas"
								}), insights.suggestions.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-3",
									children: insights.suggestions.map(({ place: suggestion, reason }) => {
										const suggestionCategory = CATEGORIES.find((item) => item.id === suggestion.category);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												const cachedSuggestion = context.nearbyPlaces.find((candidate) => candidate.id === suggestion.id);
												if (!cachedSuggestion) return;
												saveSelectedPlace(cachedSuggestion);
												navigate({
													to: "/places/$placeId",
													params: { placeId: cachedSuggestion.id }
												});
											},
											className: "w-full rounded-2xl border p-4 text-left transition hover:border-primary hover:bg-primary-soft/40",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-start justify-between gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: suggestion.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														"aria-hidden": "true",
														children: suggestionCategory?.emoji ?? "📍"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 block text-sm text-muted-foreground",
													children: reason
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-2 block text-xs text-primary",
													children: formatDistance(suggestion.distance)
												})
											]
										}) }, suggestion.id);
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "No other cached places nearby to suggest just now."
								})]
							})
						] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 border-t pt-4 text-xs text-muted-foreground",
							children: "AI suggestions use nearby places already returned by the places search. Always confirm important details directly with the business."
						})
					]
				})]
			})
		]
	});
}
function PlaceDetailsRoute() {
	const { placeId } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceDetails, { placeId });
}
//#endregion
export { PlaceDetailsRoute as component };
