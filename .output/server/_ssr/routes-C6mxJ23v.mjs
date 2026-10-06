import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as LocateFixed } from "../_libs/lucide-react.mjs";
import { t as CATEGORIES } from "./place-1f_YPgvE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C6mxJ23v.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "hero-gradient border-b",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "inline-flex rounded-full bg-primary-soft px-3 py-1 text-sm font-medium text-primary",
					children: "Travel, at your pace"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 max-w-3xl font-display text-5xl font-semibold leading-tight md:text-7xl",
					children: "Discover amazing places around you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-lg text-muted-foreground",
					children: "Find a memorable meal, a stay, or your next small adventure—all in one calm, useful guide."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/places",
					search: {},
					className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 font-medium text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocateFixed, { className: "h-5 w-5" }), "Use my current location"]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold",
			children: "Find your kind of place"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7",
			children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/places",
				search: { category: cat.id },
				className: "rounded-2xl border bg-card p-5 text-center shadow-card transition hover:-translate-y-0.5 hover:shadow-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-3xl",
					children: cat.emoji
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm font-medium",
					children: cat.label
				})]
			}, cat.id))
		})]
	})] });
}
//#endregion
export { Home as component };
