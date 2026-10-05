import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader } from "./Layout-RLmiqimT.mjs";
import { t as CATEGORIES } from "./categories-Cx5hpAUq.mjs";
import { t as SCHEMES } from "./schemes-3mXs6HJV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories.index-DvpnvK04.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t.categories.title,
		subtitle: t.categories.subtitle
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-3 lg:grid-cols-4",
		children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/categories/$id",
			params: { id: c.id },
			className: "rounded-2xl border bg-card p-5 shadow-card hover:border-primary hover:shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-3xl",
					"aria-hidden": true,
					children: c.emoji
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-semibold",
					children: t.categories[c.id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						SCHEMES.filter((s) => s.categories.includes(c.id)).length,
						" ",
						t.common.schemes
					]
				})
			]
		}, c.id))
	})] });
}
//#endregion
export { Page as component };
