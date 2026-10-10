import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, g as Compass, l as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-FA0y0Fk-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Layout({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [kilometres, setKilometres] = (0, import_react.useState)("20");
	const submitRadius = (event) => {
		event.preventDefault();
		const value = Number(kilometres);
		if (!Number.isFinite(value) || value <= 0) return;
		window.dispatchEvent(new CustomEvent("nearby-radius-change", { detail: value * 1e3 }));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b bg-background/90 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center gap-4 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-semibold",
								children: "Nearby Explorer"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ml-4 hidden gap-1 lg:flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/places",
								className: "rounded-md px-3 py-2 text-sm",
								children: "Explore places"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: submitRadius,
								className: "flex items-center gap-1",
								"aria-label": "Search distance",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "distance-km",
										className: "sr-only",
										children: "Distance in kilometres"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "distance-km",
										type: "number",
										min: "0.1",
										step: "0.1",
										inputMode: "decimal",
										value: kilometres,
										onChange: (event) => setKilometres(event.target.value),
										placeholder: "km",
										"aria-label": "Kilometres",
										className: "w-16 rounded-lg border bg-card px-2 py-1.5 text-sm sm:w-24"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "km"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "rounded-lg p-2 text-primary hover:bg-primary-soft",
										"aria-label": "Search places within this distance",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md p-2 lg:hidden",
								onClick: () => setOpen(!open),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})]
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t px-4 py-2 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/places",
						className: "block p-3",
						onClick: () => setOpen(false),
						children: "Explore places"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-16 border-t bg-card p-6 text-center text-xs text-muted-foreground",
				children: [
					"Powered by",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.geoapify.com/",
						target: "_blank",
						rel: "noreferrer",
						className: "font-medium text-primary hover:underline",
						children: "Geoapify"
					}),
					" ",
					"· Independent travel discovery application"
				]
			})
		]
	});
}
function PageHeader({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "hero-gradient border-b",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: subtitle
			})]
		})
	});
}
//#endregion
export { PageHeader as n, Layout as t };
