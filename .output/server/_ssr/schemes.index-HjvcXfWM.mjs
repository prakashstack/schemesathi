import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schemes.index-HjvcXfWM.js
var seo = (title, description) => ({ meta: [
	{ title: `${title} | SchemeSathi` },
	{
		name: "description",
		content: description
	},
	{
		property: "og:title",
		content: `${title} | SchemeSathi`
	},
	{
		property: "og:description",
		content: description
	},
	{
		property: "og:type",
		content: "website"
	},
	{
		name: "twitter:card",
		content: "summary_large_image"
	}
] });
var $$splitComponentImporter = () => import("./schemes.index-DkyxgynM.mjs");
var Route = createFileRoute("/schemes/")({
	validateSearch: (s) => typeof s["q"] === "string" ? { q: s["q"] } : {},
	head: () => seo("Browse Government Schemes", "Search and filter Central and Gujarat government schemes, plus live official datasets from data.gov.in."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { seo as n, Route as t };
