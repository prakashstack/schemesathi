import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Star, y as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./Layout-RLmiqimT.mjs";
import { n as STATES } from "./states-oj0p1m8w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/states.index-CdXZHWEU.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t.states.title,
		subtitle: t.states.subtitle
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/states/gujarat",
			className: "flex items-center justify-between rounded-2xl border-2 border-primary bg-primary-soft p-6 hover:shadow-lift",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-xs font-semibold uppercase text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5" }), "Featured"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-2xl font-semibold",
					children: t.states.gujaratTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t.states.gujaratSub
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "→"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: STATES.filter((s) => s.code !== "GJ").map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-medium",
						children: [
							s.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: s.type === "ut" ? "UT" : ""
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: t.states.noApi
					}),
					s.portalUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: s.portalUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-2 inline-flex items-center gap-1 text-sm text-primary",
						children: [t.states.portal, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
					})
				]
			}, s.code))
		})]
	})] });
}
//#endregion
export { Page as component };
