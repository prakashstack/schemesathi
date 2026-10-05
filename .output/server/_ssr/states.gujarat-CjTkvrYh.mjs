import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { y as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./Layout-RLmiqimT.mjs";
import { n as GUJARAT_CATEGORIES } from "./categories-Cx5hpAUq.mjs";
import { t as SCHEMES } from "./schemes-3mXs6HJV.mjs";
import { t as LiveDatasets } from "./LiveDatasets-DZWPGqZh.mjs";
import { n as SchemeCard } from "./SchemeCard-D93b8G4l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/states.gujarat-CjTkvrYh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	const [cat, setCat] = (0, import_react.useState)("");
	const gj = SCHEMES.filter((s) => s.stateCode === "GJ");
	const def = GUJARAT_CATEGORIES.find((c) => c.id === cat);
	const list = !cat ? gj : gj.filter((s) => cat === "sc_welfare" ? s.criteria.some((c) => c.type === "category" && c.values.includes("sc")) : s.categories.includes(cat));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t.states.gujaratTitle,
		subtitle: t.states.gujaratSub,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-3 text-sm",
			children: [
				["https://www.digitalgujarat.gov.in", "Digital Gujarat"],
				["https://esamajkalyan.gujarat.gov.in", "e-Samaj Kalyan"],
				["https://gujaratindia.gov.in", "gujaratindia.gov.in"]
			].map(([h, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: h,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "inline-flex items-center gap-1 rounded-lg border bg-card px-3 py-1.5",
				children: [l, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
			}, h))
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl space-y-6 px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				role: "group",
				"aria-label": t.filters.schemeCategory,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setCat(""),
					"aria-pressed": !cat,
					className: `rounded-full border px-4 py-2 text-sm ${!cat ? "bg-primary text-primary-foreground" : "bg-card"}`,
					children: [
						t.search.all,
						" (",
						gj.length,
						")"
					]
				}), GUJARAT_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c.id),
					"aria-pressed": cat === c.id,
					className: `rounded-full border px-4 py-2 text-sm ${cat === c.id ? "bg-primary text-primary-foreground" : "bg-card"}`,
					children: c.label
				}, c.id))]
			}),
			list.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemeCard, { scheme: s }, s.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-warning/40 bg-warning-soft p-5 text-sm",
				children: [
					t.states.noApi,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.digitalgujarat.gov.in",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "font-medium text-primary underline",
						children: "Digital Gujarat"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveDatasets, {
				query: `Gujarat${def && def.id !== "sc_welfare" ? "" : ""}`,
				limit: 6
			})
		]
	})] });
}
//#endregion
export { Page as component };
