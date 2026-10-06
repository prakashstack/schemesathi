import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, l as Compass, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-D6DlK2r4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DISTANCES = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	15,
	20,
	25,
	30,
	40,
	50,
	75,
	100,
	200
];
function Layout({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false), [km, setKm] = (0, import_react.useState)(5);
	const change = (v) => {
		setKm(v);
		window.dispatchEvent(new CustomEvent("nearby-radius-change", { detail: v * 1e3 }));
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "hidden items-center gap-2 text-sm font-medium sm:flex",
								children: ["Distance", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: km,
									onChange: (e) => change(Number(e.target.value)),
									className: "rounded-lg border bg-card px-2 py-1.5 font-normal",
									children: DISTANCES.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: x,
										children: [x, " km"]
									}, x))
								})]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-16 border-t bg-card p-6 text-center text-xs text-muted-foreground",
				children: "© OpenStreetMap contributors · Independent travel discovery application"
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
