import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as ArrowUpRight, g as Compass, i as ShieldCheck, u as MapPin } from "../_libs/lucide-react.mjs";
import { t as NearbyPlaces } from "./NearbyPlaces-b8SOXoNc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D3PoM-bO.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "travel-hero overflow-hidden text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.25fr_0.75fr] md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-wider backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), " DISCOVER AROUND YOU"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl",
					children: "Your next plan starts nearby."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg",
					children: "Restaurants, stays, attractions and more—picked from live places around your current location."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid content-end gap-3 sm:grid-cols-2 md:grid-cols-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 place-items-center rounded-2xl bg-white text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 text-primary-foreground/60" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg font-extrabold",
							children: "Live nearby search"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-primary-foreground/75",
							children: "Fresh places based on your device location."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-6 w-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg font-extrabold",
							children: "Your location, your control"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-primary-foreground/75",
							children: "Only used to find relevant places."
						})
					]
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NearbyPlaces, {})] });
}
//#endregion
export { Home as component };
