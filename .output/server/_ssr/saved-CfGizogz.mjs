import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader } from "./Layout-RLmiqimT.mjs";
import { t as SCHEMES } from "./schemes-3mXs6HJV.mjs";
import { n as useLocalState } from "./useLocalState-BMomn0ZY.mjs";
import { n as SchemeCard } from "./SchemeCard-D93b8G4l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saved-CfGizogz.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	const { saved } = useLocalState();
	const list = SCHEMES.filter((s) => saved.includes(s.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t.saved.title,
		subtitle: t.saved.subtitle
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: list.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemeCard, { scheme: s }, s.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-12 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t.saved.empty
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/schemes",
				className: "mt-4 inline-block rounded-xl bg-primary px-5 py-3 text-primary-foreground",
				children: t.hero.browse
			})]
		})
	})] });
}
//#endregion
export { Page as component };
