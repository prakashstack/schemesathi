import { _ as createFileRoute, g as lazyRouteComponent, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getSchemeById } from "./schemes-3mXs6HJV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schemes._id-DHzIsfxV.js
var $$splitComponentImporter = () => import("./schemes._id-FXlui0Md.mjs");
var $$splitNotFoundComponentImporter = () => import("./schemes._id-BLnsBcCx.mjs");
var Route = createFileRoute("/schemes/$id")({
	loader: ({ params }) => {
		const scheme = getSchemeById(params.id);
		if (!scheme) throw notFound();
		return { scheme };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Scheme not found | SchemeSathi" }, {
			name: "robots",
			content: "noindex"
		}] };
		const s = loaderData.scheme;
		const title = `${s.name} | SchemeSathi`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: s.benefitSummary
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: s.benefitSummary
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
