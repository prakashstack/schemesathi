import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { n as PageHeader } from "./Layout-RLmiqimT.mjs";
import { t as SCHEMES } from "./schemes-3mXs6HJV.mjs";
import { t as SchemeBrowser } from "./SchemeBrowser-BGkwRtbi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/central-DBph1BqA.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t.central.title,
		subtitle: t.central.subtitle
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemeBrowser, {
			base: SCHEMES.filter((s) => s.level === "central"),
			liveQuery: "scheme"
		})
	})] });
}
//#endregion
export { Page as component };
