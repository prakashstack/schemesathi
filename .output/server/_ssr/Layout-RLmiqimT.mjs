import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as LANGUAGES, r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Bookmark, f as Menu, g as Languages, o as ShieldCheck, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-RLmiqimT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Layout({ children }) {
	const { t, lang, setLang } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const links = [
		{
			to: "/schemes",
			label: t.nav.schemes
		},
		{
			to: "/categories",
			label: t.nav.categories
		},
		{
			to: "/central",
			label: t.nav.central
		},
		{
			to: "/states/gujarat",
			label: t.nav.gujarat
		},
		{
			to: "/states",
			label: t.nav.states
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground",
				children: t.common.skipToContent
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tricolor-bar h-1 no-print",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print sticky top-0 z-40 border-b bg-background/90 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center gap-4 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							"aria-label": "SchemeSathi home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg",
								children: "स"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-semibold",
								children: "SchemeSathi"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": "Main",
							className: "ml-6 hidden gap-1 lg:flex",
							children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground",
								activeProps: { className: "text-foreground bg-secondary font-medium" },
								children: l.label
							}, l.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1 rounded-md border bg-card px-2 py-1.5 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
											className: "h-4 w-4 text-muted-foreground",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: t.common.language
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: lang,
											onChange: (e) => setLang(e.target.value),
											className: "bg-transparent outline-none",
											children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: l.code,
												children: l.label
											}, l.code))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/saved",
									className: "hidden items-center gap-1 rounded-md px-3 py-2 text-sm hover:bg-secondary sm:flex",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
											className: "h-4 w-4",
											"aria-hidden": true
										}),
										" ",
										t.nav.saved
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "rounded-md p-2 hover:bg-secondary lg:hidden",
									"aria-label": "Menu",
									"aria-expanded": open,
									onClick: () => setOpen(!open),
									children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
								})
							]
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Mobile",
					className: "border-t px-4 py-2 lg:hidden",
					children: [
						...links,
						{
							to: "/saved",
							label: t.nav.saved
						},
						{
							to: "/privacy",
							label: t.nav.privacy
						}
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						className: "block rounded-md px-3 py-3 text-base hover:bg-secondary",
						children: l.label
					}, l.to))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "no-print mt-16 border-t bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-semibold",
								children: "SchemeSathi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t.trust.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 flex gap-2 text-sm font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "h-4 w-4 shrink-0 text-primary",
									"aria-hidden": true
								}), t.trust.disclaimer]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: t.footer.about
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t.footer.aboutBody
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "mt-3 inline-block text-sm text-primary underline",
								children: t.nav.privacy
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: t.footer.links
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1 text-sm",
							children: [
								["https://www.myscheme.gov.in", "myScheme (Govt. of India)"],
								["https://www.india.gov.in", "National Portal of India"],
								["https://www.data.gov.in", "Open Government Data (data.gov.in)"],
								["https://www.digitalgujarat.gov.in", "Digital Gujarat"],
								["https://gujaratindia.gov.in", "Government of Gujarat"]
							].map(([h, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: h,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-primary hover:underline",
								children: l
							}) }, h))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "border-t py-4 text-center text-xs text-muted-foreground",
					children: t.footer.madeFor
				})]
			})
		]
	});
}
function PageHeader({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "hero-gradient border-b",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-10 md:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold md:text-4xl",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: subtitle
				}),
				children
			]
		})
	});
}
//#endregion
export { PageHeader as n, Layout as t };
