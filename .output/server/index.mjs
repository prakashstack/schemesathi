globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/arrow-right-BTVpJM5w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-X2CcdtAf+B6F3xg8U0OV3vvKBVc\"",
		"mtime": "2026-10-05T18:57:38.912Z",
		"size": 156,
		"path": "../public/assets/arrow-right-BTVpJM5w.js"
	},
	"/assets/bookmark-BLRbn3ki.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd-87xjjsG8zp6p5stOUM0ZuuMMLJY\"",
		"mtime": "2026-10-05T18:57:38.920Z",
		"size": 221,
		"path": "../public/assets/bookmark-BLRbn3ki.js"
	},
	"/assets/categories-BVTFcN3E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"700-7eTvbcCZ49YL070NYtS+QMU4klU\"",
		"mtime": "2026-10-05T18:57:38.920Z",
		"size": 1792,
		"path": "../public/assets/categories-BVTFcN3E.js"
	},
	"/assets/categories._id-BBsivp6D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"253-W9A2MsXXeD0VjA/KpyInpvhcrNQ\"",
		"mtime": "2026-10-05T18:57:38.923Z",
		"size": 595,
		"path": "../public/assets/categories._id-BBsivp6D.js"
	},
	"/assets/categories.index-BajvaH3C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e3-5vSlk4OEMgQ3SI96AIEuSVZRTA0\"",
		"mtime": "2026-10-05T18:57:38.923Z",
		"size": 995,
		"path": "../public/assets/categories.index-BajvaH3C.js"
	},
	"/assets/central-BjviRqXV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20a-SNBa9BdFRtL4OvTMc3cpJS7SXA4\"",
		"mtime": "2026-10-05T18:57:38.923Z",
		"size": 522,
		"path": "../public/assets/central-BjviRqXV.js"
	},
	"/assets/circle-check-DZF1xeJL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-v77rG3ilmzgD6KKfST1EgUMkvzg\"",
		"mtime": "2026-10-05T18:57:38.925Z",
		"size": 169,
		"path": "../public/assets/circle-check-DZF1xeJL.js"
	},
	"/assets/eligibility-rxihCSuV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82e-o33tqdo2GbqK86G/VekAGfyHL8A\"",
		"mtime": "2026-10-05T18:57:38.925Z",
		"size": 2094,
		"path": "../public/assets/eligibility-rxihCSuV.js"
	},
	"/assets/external-link-B1XkRhfJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f2-d7Y4zCJmIvZbzGt4v1d7tm1279w\"",
		"mtime": "2026-10-05T18:57:38.925Z",
		"size": 242,
		"path": "../public/assets/external-link-B1XkRhfJ.js"
	},
	"/assets/eligibility-ZZZs74MO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3644-m3TihzvPe8oLf7NInPi6sSp7Rxg\"",
		"mtime": "2026-10-05T18:57:38.925Z",
		"size": 13892,
		"path": "../public/assets/eligibility-ZZZs74MO.js"
	},
	"/assets/http-TDdFKwLn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"214-Jrp3o6X5cx8izW630S+pyrjXUQw\"",
		"mtime": "2026-10-05T18:57:38.933Z",
		"size": 532,
		"path": "../public/assets/http-TDdFKwLn.js"
	},
	"/assets/link-Di3ucnTW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bd9-+6vs24nh43/2ikAHs+m2fie9h8g\"",
		"mtime": "2026-10-05T18:57:38.937Z",
		"size": 11225,
		"path": "../public/assets/link-Di3ucnTW.js"
	},
	"/assets/LiveDatasets-imfg_nEw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"336f-S/4BXNTy1ZvkA4vNOJTpZ9gIVbg\"",
		"mtime": "2026-10-05T18:57:38.912Z",
		"size": 13167,
		"path": "../public/assets/LiveDatasets-imfg_nEw.js"
	},
	"/assets/preload-helper-CmOrESRF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"160b-FbUNiu6jBFos9rTA9MJefgQKAno\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 5643,
		"path": "../public/assets/preload-helper-CmOrESRF.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/privacy-D40VEufT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"78d-oZEq1QBUbOuC8yJiwEDZ3NIptdc\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 1933,
		"path": "../public/assets/privacy-D40VEufT.js"
	},
	"/assets/results-CVpcGHOy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4d-+A1YdT343g2g94UAWVfn2+jPBco\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 2637,
		"path": "../public/assets/results-CVpcGHOy.js"
	},
	"/assets/saved-CB9cSSN4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39a-HbSLH1zviQSEoS+cz0iCPn1i8MQ\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 922,
		"path": "../public/assets/saved-CB9cSSN4.js"
	},
	"/assets/routes-BxgelqXL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1791-T/Uoo9UlLtwB21ElQjinaWrc6bE\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 6033,
		"path": "../public/assets/routes-BxgelqXL.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-05T18:32:27.026Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2d3-5fxNaon/+hJ/YlXbCtyptxDYS8I\"",
		"mtime": "2026-10-05T18:57:24.721Z",
		"size": 723,
		"path": "../public/favicon.svg"
	},
	"/assets/scheme-BhCZdIAE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f-QVee7VxvUfT7WQpeQ/I9EB4JtIs\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 111,
		"path": "../public/assets/scheme-BhCZdIAE.js"
	},
	"/assets/SchemeBrowser-DEW2mPwE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"178c-kSJ271dF91N30ikqoemCTGTINsA\"",
		"mtime": "2026-10-05T18:57:38.912Z",
		"size": 6028,
		"path": "../public/assets/SchemeBrowser-DEW2mPwE.js"
	},
	"/assets/SchemeCard-BgVC-74N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15be-SSZACabxfFZxwObmZcIGCtKKBLQ\"",
		"mtime": "2026-10-05T18:57:38.912Z",
		"size": 5566,
		"path": "../public/assets/SchemeCard-BgVC-74N.js"
	},
	"/assets/index-CDYWzm2Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"574d9-hk6J5ptn1pXyBoalXeJ7l1o9cPg\"",
		"mtime": "2026-10-05T18:57:38.912Z",
		"size": 357593,
		"path": "../public/assets/index-CDYWzm2Y.js"
	},
	"/assets/schemes.index-DVGgsAOH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d0-znFueljjq8vRJzKe97izbNqUex4\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 464,
		"path": "../public/assets/schemes.index-DVGgsAOH.js"
	},
	"/assets/schemes._id-BTMxDQRq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"192a-a79LARaAaQl4O4XlMRJwZJwS9NQ\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 6442,
		"path": "../public/assets/schemes._id-BTMxDQRq.js"
	},
	"/assets/schemes-BrIJ0hCs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c17-X8MbtlhrStHvdHaPnf1EivFOpqo\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 85015,
		"path": "../public/assets/schemes-BrIJ0hCs.js"
	},
	"/assets/states-HUcRDfgu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f3b-yOP564LrD4DjRynbwBylMPu7RqU\"",
		"mtime": "2026-10-05T18:57:38.941Z",
		"size": 3899,
		"path": "../public/assets/states-HUcRDfgu.js"
	},
	"/assets/schemes._id-DYSaVmn6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16a-82+YaAKu1scBvrDLxQXcRZc5Oak\"",
		"mtime": "2026-10-05T18:57:38.939Z",
		"size": 362,
		"path": "../public/assets/schemes._id-DYSaVmn6.js"
	},
	"/assets/states.index-B2j1_SOV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"876-6zT5rD+twziypn301KQA5o6DwSE\"",
		"mtime": "2026-10-05T18:57:38.941Z",
		"size": 2166,
		"path": "../public/assets/states.index-B2j1_SOV.js"
	},
	"/assets/states.gujarat-BkR-lDEl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"903-8E+L7b0iqnRSK/tEA+sh5vAuQP8\"",
		"mtime": "2026-10-05T18:57:38.941Z",
		"size": 2307,
		"path": "../public/assets/states.gujarat-BkR-lDEl.js"
	},
	"/assets/useNavigate-C-Y4rKNu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-seFAmENZsFp/Fty4AOkCSURaQRo\"",
		"mtime": "2026-10-05T18:57:38.948Z",
		"size": 189,
		"path": "../public/assets/useNavigate-C-Y4rKNu.js"
	},
	"/assets/useI18n-D_oK9cET.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8fc-YJg1zMEBjQmrCZx3BmjKGgf77E4\"",
		"mtime": "2026-10-05T18:57:38.941Z",
		"size": 47356,
		"path": "../public/assets/useI18n-D_oK9cET.js"
	},
	"/assets/useRouter-BOAPZDg1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"229c-q+MRbm7Q8Y/gJEgHL0SVvRyYkQo\"",
		"mtime": "2026-10-05T18:57:38.948Z",
		"size": 8860,
		"path": "../public/assets/useRouter-BOAPZDg1.js"
	},
	"/assets/utils-4jUIYOBc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6bed-90NGITyc+kEKvxUkUtkYHgO1XH4\"",
		"mtime": "2026-10-05T18:57:38.949Z",
		"size": 27629,
		"path": "../public/assets/utils-4jUIYOBc.js"
	},
	"/assets/styles-BokJTyzr.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"144f1-CC1p5Qwm+g5iATH/8I/fEG0YUAs\"",
		"mtime": "2026-10-05T18:57:38.949Z",
		"size": 83185,
		"path": "../public/assets/styles-BokJTyzr.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_tYsGPs = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_tYsGPs
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
