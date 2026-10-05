import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as Info } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./Layout-RLmiqimT.mjs";
import { t as SCHEMES } from "./schemes-3mXs6HJV.mjs";
import { n as useLocalState } from "./useLocalState-BMomn0ZY.mjs";
import { n as SchemeCard } from "./SchemeCard-D93b8G4l.mjs";
import { n as isApplicableRegion, t as evaluateEligibility } from "./eligibility-CV24TfxT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/results-DPNcy_6m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Results() {
	const { t } = useI18n();
	const { profile, setProfile } = useLocalState();
	const [tab, setTab] = (0, import_react.useState)("potentially_eligible");
	const evald = (0, import_react.useMemo)(() => profile ? SCHEMES.filter((s) => isApplicableRegion(profile, s)).map((s) => ({
		s,
		r: evaluateEligibility(profile, s)
	})) : [], [profile]);
	if (!profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg",
			children: t.results.noProfile
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/eligibility",
			className: "mt-6 inline-block rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground",
			children: t.results.start
		})]
	});
	const groups = [
		{
			k: "potentially_eligible",
			l: t.results.eligible
		},
		{
			k: "more_info_required",
			l: t.results.moreInfo
		},
		{
			k: "does_not_match",
			l: t.results.noMatch
		}
	];
	const shown = evald.filter((x) => x.r.status === tab).sort((a, b) => b.r.matchedCriteria.length - a.r.matchedCriteria.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t.results.title,
		subtitle: t.results.subtitle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-wrap gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/eligibility",
				className: "rounded-lg border bg-card px-4 py-2",
				children: t.results.edit
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setProfile(null),
				className: "rounded-lg px-4 py-2 text-muted-foreground underline",
				children: t.results.clear
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 rounded-xl border border-warning/40 bg-warning-soft p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [t.results.important, ":"] }),
					" ",
					t.results.eligibleHelp,
					" ",
					t.trust.final
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "tablist",
				className: "mt-6 flex flex-wrap gap-2",
				children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					role: "tab",
					"aria-selected": tab === g.k,
					onClick: () => setTab(g.k),
					className: `rounded-full border px-4 py-2 text-sm ${tab === g.k ? "border-primary bg-primary text-primary-foreground" : "bg-card"}`,
					children: [
						g.l,
						" (",
						evald.filter((x) => x.r.status === g.k).length,
						")"
					]
				}, g.k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "tabpanel",
				className: "mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: shown.length ? shown.map(({ s, r }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemeCard, {
					scheme: s,
					result: r
				}, s.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: t.results.empty
				})
			})
		]
	})] });
}
//#endregion
export { Results as component };
