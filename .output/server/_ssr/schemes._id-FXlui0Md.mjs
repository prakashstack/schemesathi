import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as BookmarkCheck, E as Bookmark, d as Printer, s as Share2, y as ExternalLink } from "../_libs/lucide-react.mjs";
import { r as getStateByCode } from "./states-oj0p1m8w.mjs";
import { t as LiveDatasets } from "./LiveDatasets-DZWPGqZh.mjs";
import { n as useLocalState } from "./useLocalState-BMomn0ZY.mjs";
import { r as StatusBadge, t as EligibilityExplain } from "./SchemeCard-D93b8G4l.mjs";
import { t as evaluateEligibility } from "./eligibility-CV24TfxT.mjs";
import { t as Route } from "./schemes._id-DHzIsfxV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schemes._id-FXlui0Md.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Sec({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border bg-card p-5 md:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 text-sm leading-relaxed",
			children
		})]
	});
}
var List = ({ items }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
	className: "list-disc space-y-1.5 pl-5",
	children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
});
function Detail() {
	const { scheme: s } = Route.useLoaderData();
	const { t } = useI18n();
	const { profile, isSaved, toggleSaved } = useLocalState();
	const [copied, setCopied] = (0, import_react.useState)(false);
	const saved = isSaved(s.id);
	const result = profile ? evaluateEligibility(profile, s) : null;
	const provider = s.level === "central" ? "Government of India" : `Government of ${getStateByCode(s.stateCode)?.name}`;
	const share = async () => {
		const url = window.location.href;
		if (navigator.share) try {
			await navigator.share({
				title: s.name,
				text: s.benefitSummary,
				url
			});
			return;
		} catch {}
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {}
	};
	const btn = "inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-2 text-sm hover:bg-secondary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/schemes",
				className: "no-print text-sm text-primary",
				children: ["← ", t.common.back]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground",
				children: s.level === "central" ? t.scheme.central : `${t.scheme.state} · ${getStateByCode(s.stateCode)?.name}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-semibold md:text-4xl",
				children: s.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted-foreground",
				children: [s.department, s.ministry && ` · ${s.ministry}`]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 rounded-xl bg-success-soft p-4 font-medium",
				children: s.benefitSummary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mt-5 flex flex-wrap gap-2",
				children: [
					s.applyUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: s.applyUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
						children: [s.applyLabel ?? t.scheme.apply, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: s.officialSourceUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: btn,
						children: [t.scheme.official, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toggleSaved(s.id),
						"aria-pressed": saved,
						className: btn,
						children: [saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-4 w-4" }), saved ? t.scheme.saved : t.scheme.save]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: share,
						className: btn,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), copied ? t.scheme.copied : t.scheme.share]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => window.print(),
						className: btn,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4" }), t.scheme.print]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-5",
				children: [
					result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border-2 border-primary/30 bg-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: result.status }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EligibilityExplain, { result })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-muted-foreground",
								children: t.trust.final
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sec, {
						title: t.scheme.overview,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.overview })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sec, {
						title: t.scheme.eligibility,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: s.eligibilityText })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sec, {
						title: t.scheme.benefits,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: s.benefits })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sec, {
						title: t.scheme.documents,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: s.documents })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sec, {
						title: t.scheme.process,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "list-decimal space-y-1.5 pl-5",
							children: s.applicationProcess.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sec, {
						title: t.scheme.dates,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.importantDates ?? t.scheme.noDates })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sec, {
						title: t.scheme.dataSource,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: t.scheme.department
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: s.department
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: t.scheme.dataSource
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: provider
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: t.scheme.source
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.officialSourceUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "font-medium text-primary underline",
									children: s.officialSourceName
								}) })] }),
								s.applyUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: t.scheme.application
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.applyUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "font-medium text-primary underline",
									children: s.applyLabel ?? s.applyUrl
								}) })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: t.scheme.dataKind
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: t.scheme.curated
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: t.scheme.lastUpdated
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-medium",
									children: [s.sourceLastUpdated ?? t.scheme.noLastUpdated, s.criteriaVerifiedOn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-xs font-normal text-muted-foreground",
										children: [
											t.scheme.verifiedOn,
											" ",
											s.criteriaVerifiedOn
										]
									})]
								})] })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "no-print",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveDatasets, {
							query: s.shortName ?? (s.name.split(/[(—-]/)[0] ?? s.name).trim(),
							title: t.scheme.related,
							help: t.scheme.relatedHelp,
							limit: 5
						})
					})
				]
			})
		]
	});
}
//#endregion
export { Detail as component };
