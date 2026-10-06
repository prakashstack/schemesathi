import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./Layout-D6DlK2r4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-Bmi09Ozg.js
var import_jsx_runtime = require_jsx_runtime();
var points = [
	["Location is optional", "We ask for your approximate location only when you select Use my location. It is used to calculate distances and find nearby results."],
	["No accounts", "Nearby Explorer does not require a sign-in or ask for identity documents."],
	["Favorites stay local", "Your saved places are stored in this browser using localStorage."],
	["Place-data providers", "When a live provider is configured, your chosen coordinates and search terms may be sent to that provider to return nearby places."]
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Privacy",
		subtitle: "Clear choices, with no background location tracking."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl space-y-4 px-4 py-8",
		children: [points.map(([h, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-3 rounded-2xl border bg-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: h
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: d
			})] })]
		}, h)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pt-4 text-sm text-muted-foreground",
			children: "Nearby Explorer is an independent travel discovery application."
		})]
	})] });
}
//#endregion
export { Page as component };
