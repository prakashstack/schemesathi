import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./Layout-FA0y0Fk-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-CKi_D6Kj.js
var import_jsx_runtime = require_jsx_runtime();
var points = [
	["Current location", "We request your approximate current location when opening nearby places. It is used to calculate distances and find nearby results."],
	["No accounts", "Nearby Explorer does not require a sign-in or ask for identity documents."],
	["Favorites stay local", "Your saved places are stored in this browser using localStorage."],
	["Place-data providers", "Your selected coordinates and category may be sent to Geoapify to return nearby places."]
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
