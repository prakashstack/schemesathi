import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { w as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./Layout-RLmiqimT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-BAfGymDc.js
var import_jsx_runtime = require_jsx_runtime();
var points = [
	["No login required", "There are no accounts, passwords or OTPs. Anyone can use SchemeSathi immediately."],
	["No backend account or server storage", "SchemeSathi has no server of its own and no database. Your answers are never sent to us."],
	["Eligibility is processed in your browser", "Your age, location, category, income and other answers are compared with published scheme criteria by code running on your own device."],
	["No Aadhaar, PAN or identity documents", "We never ask for Aadhaar, PAN, bank account numbers or any identity document."],
	["Saved preferences stay on this device", "Your language, saved schemes and last eligibility answers are kept in your browser's localStorage so you can come back later. Use \"Clear my answers\" on the results page or clear your browser data to remove them."],
	["Public data sources", "Live dataset search calls the Government of India open-data API (data.gov.in) directly from your browser with only your search words. The optional PIN code lookup calls the public India Post PIN API with only the PIN you type."]
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Privacy",
		subtitle: "Simple and privacy-friendly by design."
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
			children: "SchemeSathi is not affiliated with or operated by the Government of India or any State Government."
		})]
	})] });
}
//#endregion
export { Page as component };
