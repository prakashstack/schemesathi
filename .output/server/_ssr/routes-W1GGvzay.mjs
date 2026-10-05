import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as BadgeCheck, _ as Landmark, h as LockKeyhole, i as Sparkles, k as ArrowRight, l as ScanSearch, o as ShieldCheck, x as ClipboardList } from "../_libs/lucide-react.mjs";
import { t as CATEGORIES } from "./categories-Cx5hpAUq.mjs";
import { t as SCHEMES } from "./schemes-3mXs6HJV.mjs";
import { n as SchemeCard } from "./SchemeCard-D93b8G4l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-W1GGvzay.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { t } = useI18n();
	const featured = [
		"pm-mudra-yojana",
		"gj-mysy",
		"pmay-urban-2"
	].map((id) => SCHEMES.find((s) => s.id === id)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero-gradient relative overflow-hidden border-b",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "civic-pattern absolute inset-0 opacity-60",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }), t.trust.title]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl",
						children: t.hero.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg text-muted-foreground",
						children: t.hero.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/eligibility",
							className: "inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-lift hover:bg-primary/90",
							children: [t.hero.check, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/schemes",
							className: "inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3.5 font-medium hover:bg-secondary",
							children: t.hero.browse
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground",
						children: [
							[Landmark, t.hero.pill1],
							[BadgeCheck, t.hero.pill2],
							[LockKeyhole, t.hero.pill3]
						].map(([I, l], i) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4 text-success" }), l]
							}, i);
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold md:text-3xl",
				children: t.how.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 grid gap-5 md:grid-cols-3",
				children: [
					[
						ClipboardList,
						t.how.s1,
						t.how.s1d
					],
					[
						ScanSearch,
						t.how.s2,
						t.how.s2d
					],
					[
						Sparkles,
						t.how.s3,
						t.how.s3d
					]
				].map(([I, h, d], i) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 font-semibold",
								children: [
									i + 1,
									". ",
									h
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: d
							})
						]
					}, i);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: t.categories.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/categories",
					className: "text-sm text-primary",
					children: [t.common.viewAll, " →"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/categories/$id",
					params: { id: c.id },
					className: "flex flex-col items-center gap-2 rounded-xl border bg-card p-4 text-center text-sm hover:border-primary hover:shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						"aria-hidden": true,
						children: c.emoji
					}), t.categories[c.id]]
				}, c.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold",
				children: t.nav.schemes
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 md:grid-cols-3",
				children: featured.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemeCard, { scheme: s }, s.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border-l-4 border-primary bg-primary-soft p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: t.trust.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: t.trust.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-medium",
						children: t.trust.disclaimer
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
