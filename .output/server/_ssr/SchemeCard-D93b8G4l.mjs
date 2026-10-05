import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CircleQuestionMark, D as BookmarkCheck, E as Bookmark, S as CircleX, T as CircleAlert, w as CircleCheck, y as ExternalLink } from "../_libs/lucide-react.mjs";
import { r as getStateByCode } from "./states-oj0p1m8w.mjs";
import { n as useLocalState } from "./useLocalState-BMomn0ZY.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SchemeCard-D93b8G4l.js
var import_jsx_runtime = require_jsx_runtime();
function StatusBadge({ status }) {
	const { t } = useI18n();
	const map = {
		potentially_eligible: {
			c: "bg-success-soft text-success",
			I: CircleCheck,
			l: t.results.eligible
		},
		more_info_required: {
			c: "bg-warning-soft text-warning-foreground",
			I: CircleQuestionMark,
			l: t.results.moreInfo
		},
		does_not_match: {
			c: "bg-destructive-soft text-destructive",
			I: CircleX,
			l: t.results.noMatch
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold", map.c),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(map.I, {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}),
			" ",
			map.l
		]
	});
}
function EligibilityExplain({ result }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 text-sm",
		children: [
			result.matchedCriteria.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: t.results.why
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-1 space-y-1",
				children: result.matchedCriteria.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						className: "mt-0.5 h-4 w-4 shrink-0 text-success",
						"aria-hidden": true
					}), r.label]
				}, r.label))
			})] }),
			result.unmatchedCriteria.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: t.results.unmatched
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-1 space-y-1",
				children: result.unmatchedCriteria.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
						className: "mt-0.5 h-4 w-4 shrink-0 text-destructive",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [r.label, r.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted-foreground",
						children: r.detail
					})] })]
				}, r.label))
			})] }),
			result.missingInformation.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: t.results.missing
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-1 space-y-1",
				children: result.missingInformation.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
						className: "mt-0.5 h-4 w-4 shrink-0 text-warning",
						"aria-hidden": true
					}), r.label]
				}, r.label))
			})] })
		]
	});
}
function SchemeCard({ scheme, result }) {
	const { t } = useI18n();
	const { isSaved, toggleSaved } = useLocalState();
	const saved = isSaved(scheme.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "animate-rise flex flex-col rounded-2xl border bg-card p-5 shadow-card transition hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded-full px-2.5 py-1 font-medium", scheme.level === "central" ? "bg-primary-soft text-primary" : "bg-saffron-soft text-foreground"),
						children: scheme.level === "central" ? t.scheme.central : `${t.scheme.state} · ${getStateByCode(scheme.stateCode)?.name ?? ""}`
					}),
					result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: result.status }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => toggleSaved(scheme.id),
						className: "ml-auto rounded-md p-1.5 text-muted-foreground hover:bg-secondary hover:text-primary",
						"aria-pressed": saved,
						"aria-label": saved ? t.scheme.saved : t.scheme.save,
						children: saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "h-5 w-5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-5 w-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-lg font-semibold leading-snug",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/schemes/$id",
					params: { id: scheme.id },
					className: "hover:text-primary",
					children: scheme.name
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: scheme.department
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium",
					children: [t.scheme.benefit, ": "]
				}), scheme.benefitSummary]
			}),
			result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-xl bg-muted p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EligibilityExplain, { result })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: [
					t.scheme.source,
					": ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: scheme.officialSourceUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-primary hover:underline",
						children: scheme.officialSourceName
					}),
					" · ",
					scheme.criteriaVerifiedOn ? `${t.scheme.verifiedOn} ${scheme.criteriaVerifiedOn}` : t.scheme.noLastUpdated
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2 pt-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/schemes/$id",
						params: { id: scheme.id },
						className: "rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: t.scheme.details
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: scheme.officialSourceUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm hover:bg-secondary",
						children: [t.scheme.official, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
							className: "h-3.5 w-3.5",
							"aria-hidden": true
						})]
					}),
					scheme.applyUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: scheme.applyUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1 rounded-lg border border-success/40 px-3 py-2 text-sm text-success hover:bg-success-soft",
						children: [t.scheme.apply, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
							className: "h-3.5 w-3.5",
							"aria-hidden": true
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { SchemeCard as n, StatusBadge as r, EligibilityExplain as t };
