import { _ as createFileRoute, g as lazyRouteComponent, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getCategory } from "./categories-Cx5hpAUq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories._id-_G0nCb-X.js
var $$splitComponentImporter = () => import("./categories._id-CBBMRGTb.mjs");
var Route = createFileRoute("/categories/$id")({
	loader: ({ params }) => {
		const cat = getCategory(params.id);
		if (!cat) throw notFound();
		return { cat };
	},
	head: ({ loaderData }) => {
		const n = loaderData?.cat.id ?? "Category";
		const title = `${n.charAt(0).toUpperCase() + n.slice(1)} Schemes | SchemeSathi`;
		const d = `Government schemes in the ${n} category, with eligibility criteria and official links.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: d
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: d
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
