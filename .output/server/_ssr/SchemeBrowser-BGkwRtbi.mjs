import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { a as SlidersHorizontal, c as Search } from "../_libs/lucide-react.mjs";
import { t as CATEGORIES } from "./categories-Cx5hpAUq.mjs";
import { t as SCHEMES } from "./schemes-3mXs6HJV.mjs";
import { n as STATES } from "./states-oj0p1m8w.mjs";
import { t as LiveDatasets } from "./LiveDatasets-DZWPGqZh.mjs";
import { n as SchemeCard } from "./SchemeCard-D93b8G4l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SchemeBrowser-BGkwRtbi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Scheme access layer. myScheme's API is not browser-accessible (region-blocked, requires
* private headers), so scheme records come from the curated official-criteria reference set,
* each linking to its official source. Live official datasets come from governmentApi.ts.
*/
var norm = (s) => s.toLowerCase();
function searchSchemesSync(query, list = SCHEMES) {
	const terms = norm(query).split(/\s+/).filter(Boolean);
	if (!terms.length) return list;
	return list.filter((s) => {
		const hay = norm([
			s.name,
			s.shortName,
			s.department,
			s.ministry,
			s.benefitSummary,
			s.overview,
			s.categories.join(" "),
			s.stateCode === "GJ" ? "gujarat" : "",
			s.level,
			...s.eligibilityText
		].join(" ")).replace(/scheduled caste/g, "scheduled caste sc");
		return terms.every((t) => hay.includes(t));
	});
}
var EMPTY = {
	level: "",
	state: "",
	social: "",
	gender: "",
	age: "",
	income: "",
	cat: "",
	benefit: ""
};
var crit = (s, t) => s.criteria.find((c) => c.type === t);
function SchemeBrowser({ base = SCHEMES, initialQuery = "", initialCat = "", liveQuery, hideLive }) {
	const { t, f } = useI18n();
	const [q, setQ] = (0, import_react.useState)(initialQuery);
	const [submitted, setSubmitted] = (0, import_react.useState)(initialQuery);
	const [fl, setFl] = (0, import_react.useState)({
		...EMPTY,
		cat: initialCat
	});
	const [showF, setShowF] = (0, import_react.useState)(false);
	const list = (0, import_react.useMemo)(() => {
		return searchSchemesSync(q, base).filter((s) => {
			if (fl.level && s.level !== fl.level) return false;
			if (fl.state && s.level === "state" && s.stateCode !== fl.state) return false;
			if (fl.cat && !s.categories.includes(fl.cat)) return false;
			if (fl.benefit && s.benefitType !== fl.benefit) return false;
			const c = crit(s, "category");
			if (fl.social && c && !c.values.includes(fl.social)) return false;
			const g = crit(s, "gender");
			if (fl.gender && g && !g.values.includes(fl.gender)) return false;
			const a = crit(s, "age");
			const age = Number(fl.age);
			if (fl.age && a && (a.min != null && age < a.min || a.max != null && age > a.max)) return false;
			const i = crit(s, "income");
			if (fl.income && i && Number(fl.income) > i.max) return false;
			return true;
		});
	}, [
		q,
		base,
		fl
	]);
	const sel = "w-full rounded-lg border bg-card px-3 py-2 text-sm";
	const set = (k) => (e) => setFl({
		...fl,
		[k]: e.target.value
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				role: "search",
				onSubmit: (e) => {
					e.preventDefault();
					setSubmitted(q);
				},
				className: "flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: t.search.button
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: t.search.placeholder,
								className: "w-full rounded-xl border bg-card py-3 pl-10 pr-3 text-sm shadow-card"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground",
						children: t.search.button
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setShowF(!showF),
						"aria-expanded": showF,
						className: "inline-flex items-center gap-1 rounded-xl border bg-card px-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: t.search.filters
						})]
					})
				]
			}),
			showF && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 rounded-2xl border bg-card p-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium",
						children: [t.filters.level, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: sel,
							value: fl.level,
							onChange: set("level"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: t.search.all
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "central",
									children: t.scheme.central
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "state",
									children: t.scheme.state
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium",
						children: [t.filters.state, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: sel,
							value: fl.state,
							onChange: set("state"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t.search.all
							}), STATES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.code,
								children: s.name
							}, s.code))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium",
						children: [t.filters.category, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: sel,
							value: fl.social,
							onChange: set("social"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t.search.all
							}), Object.keys(t.category).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: k,
								children: t.category[k]
							}, k))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium",
						children: [t.filters.gender, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: sel,
							value: fl.gender,
							onChange: set("gender"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t.search.all
							}), Object.keys(t.gender).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: k,
								children: t.gender[k]
							}, k))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium",
						children: [t.filters.age, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 0,
							className: sel,
							value: fl.age,
							onChange: set("age")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium",
						children: [t.filters.income, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 0,
							className: sel,
							value: fl.income,
							onChange: set("income")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium",
						children: [t.filters.schemeCategory, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: sel,
							value: fl.cat,
							onChange: set("cat"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t.search.all
							}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: c.id,
								children: [
									c.emoji,
									" ",
									t.categories[c.id]
								]
							}, c.id))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium",
						children: [t.filters.benefitType, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: sel,
							value: fl.benefit,
							onChange: set("benefit"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t.search.all
							}), Object.keys(t.benefitType).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: k,
								children: t.benefitType[k]
							}, k))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFl(EMPTY),
						className: "text-left text-sm text-primary underline sm:col-span-2 lg:col-span-4",
						children: t.search.clearFilters
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				"aria-live": "polite",
				children: f(t.search.results, { n: list.length })
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl border bg-card p-6 text-center text-muted-foreground",
				children: t.search.noResults
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemeCard, { scheme: s }, s.id))
			}),
			!hideLive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveDatasets, { query: submitted.trim() || liveQuery || "scheme" })
		]
	});
}
//#endregion
export { SchemeBrowser as t };
