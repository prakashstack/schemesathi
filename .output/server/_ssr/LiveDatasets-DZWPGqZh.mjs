import { r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { b as Database, n as WifiOff, u as RefreshCw, y as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as fetchJson, t as ApiError } from "./http-eACfPK5o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LiveDatasets-DZWPGqZh.js
var import_jsx_runtime = require_jsx_runtime();
/**
* data.gov.in Open Government Data (OGD) Platform — catalogue API.
* Verified: responds with `Access-Control-Allow-Origin: *`, so the browser can call it directly.
* The key below is the public sample key published by data.gov.in for open access.
* Override with VITE_PUBLIC_DATAGOV_API_KEY (a public, non-secret key from data.gov.in).
*/
var BASE = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_PUBLIC_DATAGOV_API_KEY": "",
	"VITE_PUBLIC_DATAGOV_API_URL": "https://api.data.gov.in"
}["VITE_PUBLIC_DATAGOV_API_URL"] || "https://api.data.gov.in";
var KEY = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_PUBLIC_DATAGOV_API_KEY": "",
	"VITE_PUBLIC_DATAGOV_API_URL": "https://api.data.gov.in"
}["VITE_PUBLIC_DATAGOV_API_KEY"] || "579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b";
async function searchOgdDatasets(query, opts = {}) {
	const p = new URLSearchParams({
		format: "json",
		offset: "0",
		limit: String(opts.limit ?? 8),
		"api-key": KEY
	});
	p.set("filters[source]", "data.gov.in");
	if (query.trim()) p.set("filters[title]", query.trim());
	if (opts.orgType) p.set("filters[org_type]", opts.orgType);
	p.set("sort[updated]", "desc");
	const d = await fetchJson(`${BASE}/lists?${p.toString()}`);
	if (!d || d.status !== "ok" || !Array.isArray(d.records)) throw new ApiError("invalid");
	const items = d.records.map((r) => ({
		id: r.index_name,
		title: r.title ?? "Untitled dataset",
		description: r.desc ?? "",
		orgs: r.org ?? [],
		orgType: r.org_type ?? "",
		sectors: r.sector ?? [],
		updated: r.updated_date || (r.updated ? (/* @__PURE__ */ new Date(r.updated * 1e3)).toISOString() : void 0),
		url: `https://www.data.gov.in/resource/${r.index_name}`
	}));
	return {
		total: d.total ?? items.length,
		items
	};
}
function ApiErrorBox({ error, onRetry, officialUrl }) {
	const { t } = useI18n();
	const kind = error instanceof ApiError ? error.kind : "unavailable";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "alert",
		className: "rounded-xl border border-warning/40 bg-warning-soft p-4 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, {
				className: "h-4 w-4 shrink-0",
				"aria-hidden": true
			}), t.errors[kind]]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex gap-3",
			children: [onRetry && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onRetry,
				className: "inline-flex items-center gap-1 font-medium text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5" }), t.errors.retry]
			}), officialUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: officialUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "font-medium text-primary underline",
				children: t.scheme.officialPortal
			})]
		})]
	});
}
function LiveDatasets({ query, title, help, limit = 6 }) {
	const { t } = useI18n();
	const q = useQuery({
		queryKey: [
			"ogd",
			query,
			limit
		],
		queryFn: () => searchOgdDatasets(query, { limit }),
		enabled: !!query.trim(),
		retry: 1,
		staleTime: 3e5
	});
	if (!query.trim()) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "live-h",
		className: "rounded-2xl border bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id: "live-h",
				className: "flex items-center gap-2 font-display text-lg font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
					className: "h-5 w-5 text-primary",
					"aria-hidden": true
				}), title ?? t.search.liveTitle]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: [
					help ?? t.search.liveHelp,
					" · ",
					t.scheme.dataKind,
					": ",
					t.scheme.publicApi,
					" (api.data.gov.in)"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				"aria-live": "polite",
				children: [
					q.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: [
							0,
							1,
							2
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: "h-14 animate-pulse rounded-lg bg-muted" }, i))
					}),
					q.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApiErrorBox, {
						error: q.error,
						onRetry: () => q.refetch(),
						officialUrl: "https://www.data.gov.in"
					}),
					q.data && q.data.items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t.errors.empty
					}),
					q.data && q.data.items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y",
						children: q.data.items.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: d.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group flex gap-2 text-sm font-medium hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1",
									children: d.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									className: "mt-0.5 h-3.5 w-3.5 shrink-0 opacity-60",
									"aria-hidden": true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									d.orgs.slice(0, 2).join(" · "),
									d.orgType && ` · ${d.orgType}`,
									" · ",
									t.scheme.lastUpdated,
									": ",
									d.updated ? new Date(d.updated).toLocaleDateString("en-IN") : t.scheme.noLastUpdated
								]
							})]
						}, d.id))
					}),
					q.data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: [q.data.total.toLocaleString("en-IN"), " datasets on data.gov.in"]
					})
				]
			})
		]
	});
}
//#endregion
export { LiveDatasets as t };
