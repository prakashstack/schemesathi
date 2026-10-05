import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as QueryClientProvider, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as I18nProvider } from "./useI18n-DWodu3YF.mjs";
import { _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Layout } from "./Layout-RLmiqimT.mjs";
import { t as Route$10 } from "./categories._id-_G0nCb-X.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as LocalStateProvider } from "./useLocalState-BMomn0ZY.mjs";
import { n as seo, t as Route$11 } from "./schemes.index-HjvcXfWM.mjs";
import { t as Route$12 } from "./schemes._id-DHzIsfxV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-COTvHTPu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BokJTyzr.css";
function reportRuntimeError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__appErrorEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__reportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportRuntimeError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SchemeSathi — Find Government Schemes You May Be Eligible For" },
			{
				name: "description",
				content: "Independent platform to discover Central and Gujarat government schemes and check eligibility in your browser. Free, no login."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#2f3fb0"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Public+Sans:wght@400;500;600;700&family=Noto+Sans+Gujarati:wght@400;600&family=Noto+Sans+Devanagari:wght@400;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalStateProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) })
	});
}
var $$splitComponentImporter$8 = () => import("./routes-W1GGvzay.mjs");
var Route$8 = createFileRoute("/")({
	head: () => seo("Find Government Schemes You May Be Eligible For", "Check eligibility for Central and Gujarat government schemes in your browser. Independent, free, no login required."),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./central-DBph1BqA.mjs");
var Route$7 = createFileRoute("/central")({
	head: () => seo("Central Government Schemes", "Schemes run by Government of India ministries — loans, housing, health cover, scholarships, pensions and more."),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./eligibility-BaxVIpPc.mjs");
var Route$6 = createFileRoute("/eligibility")({
	head: () => seo("Check My Eligibility", "Answer a few simple questions to see government schemes you may be eligible for. Processed entirely in your browser."),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-BAfGymDc.mjs");
var Route$5 = createFileRoute("/privacy")({
	head: () => seo("Privacy", "SchemeSathi needs no login and processes your eligibility answers entirely in your browser."),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./results-DPNcy_6m.mjs");
var Route$4 = createFileRoute("/results")({
	head: () => seo("Schemes You May Be Eligible For", "Your personalised list of government schemes, with an explanation of which published criteria you match."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./saved-CfGizogz.mjs");
var Route$3 = createFileRoute("/saved")({
	head: () => seo("Saved Schemes", "Schemes you saved on this device. No account needed."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./categories.index-DvpnvK04.mjs");
var Route$2 = createFileRoute("/categories/")({
	head: () => seo("Scheme Categories", "Browse government schemes by category — employment, education, housing, healthcare, scholarships, loans and more."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./states.index-CdXZHWEU.mjs");
var Route$1 = createFileRoute("/states/")({
	head: () => seo("States & Union Territories", "Browse government schemes by Indian state and union territory, starting with Gujarat."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./states.gujarat-CjTkvrYh.mjs");
var Route = createFileRoute("/states/gujarat")({
	head: () => seo("Gujarat Government Schemes", "Gujarat state schemes for SC welfare, education, scholarships, business, startups, housing, healthcare and social welfare."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var CentralRoute = Route$7.update({
	id: "/central",
	path: "/central",
	getParentRoute: () => Route$9
});
var EligibilityRoute = Route$6.update({
	id: "/eligibility",
	path: "/eligibility",
	getParentRoute: () => Route$9
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$9
});
var ResultsRoute = Route$4.update({
	id: "/results",
	path: "/results",
	getParentRoute: () => Route$9
});
var SavedRoute = Route$3.update({
	id: "/saved",
	path: "/saved",
	getParentRoute: () => Route$9
});
var CategoriesIndexRoute = Route$2.update({
	id: "/categories/",
	path: "/categories/",
	getParentRoute: () => Route$9
});
var CategoriesIdRoute = Route$10.update({
	id: "/categories/$id",
	path: "/categories/$id",
	getParentRoute: () => Route$9
});
var SchemesIndexRoute = Route$11.update({
	id: "/schemes/",
	path: "/schemes/",
	getParentRoute: () => Route$9
});
var SchemesIdRoute = Route$12.update({
	id: "/schemes/$id",
	path: "/schemes/$id",
	getParentRoute: () => Route$9
});
var StatesIndexRoute = Route$1.update({
	id: "/states/",
	path: "/states/",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	CentralRoute,
	EligibilityRoute,
	PrivacyRoute,
	ResultsRoute,
	SavedRoute,
	CategoriesIdRoute,
	SchemesIdRoute,
	StatesGujaratRoute: Route.update({
		id: "/states/gujarat",
		path: "/states/gujarat",
		getParentRoute: () => Route$9
	}),
	CategoriesIndexRoute,
	SchemesIndexRoute,
	StatesIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
