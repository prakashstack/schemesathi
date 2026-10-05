import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./useI18n-DWodu3YF.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, k as ArrowRight, m as Lock, p as MapPin } from "../_libs/lucide-react.mjs";
import { i as getStateByName, n as STATES, t as GUJARAT_DISTRICTS } from "./states-oj0p1m8w.mjs";
import { n as fetchJson, t as ApiError } from "./http-eACfPK5o.mjs";
import { n as useLocalState } from "./useLocalState-BMomn0ZY.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as EDUCATION_ORDER } from "./scheme-ChG0iCxM.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/eligibility-BaxVIpPc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
async function lookupPincode(pin) {
	if (!/^\d{6}$/.test(pin)) throw new ApiError("invalid");
	const po = (await fetchJson(`https://api.postalpincode.in/pincode/${pin}`))?.[0]?.PostOffice?.[0];
	if (!po) throw new ApiError("empty");
	return {
		district: po.District,
		stateCode: getStateByName(po.State)?.code,
		stateName: po.State
	};
}
var TOTAL = 3;
function Choice({ name, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": name,
		className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			type: "button",
			role: "radio",
			"aria-checked": value === o.v,
			onClick: () => onChange(o.v),
			className: cn("h-auto min-h-12 justify-start whitespace-normal rounded-lg px-4 py-3 text-left text-sm transition", value === o.v ? "border-primary bg-primary-soft font-medium text-primary ring-1 ring-primary" : "bg-card hover:border-primary/50"),
			children: o.l
		}, o.v))
	});
}
function Field({ label, children, id, help }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: id,
				className: "block font-medium",
				children: label
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: label
			}),
			children,
			help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: help
			})
		]
	});
}
function Wizard() {
	const { t } = useI18n();
	const nav = useNavigate();
	const { profile, setProfile } = useLocalState();
	const [step, setStep] = (0, import_react.useState)(0);
	const [p, setP] = (0, import_react.useState)({ conditions: {} });
	const [pin, setPin] = (0, import_react.useState)("");
	const [pinMsg, setPinMsg] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (profile) setP(profile);
	}, [profile]);
	const up = (patch) => setP((x) => ({
		...x,
		...patch
	}));
	const opts = (o) => Object.keys(o).map((v) => ({
		v,
		l: o[v]
	}));
	const inp = "w-full rounded-xl border bg-card px-4 py-3";
	const doPin = async () => {
		setPinMsg(t.common.loading);
		try {
			const r = await lookupPincode(pin);
			up({
				stateCode: r.stateCode ?? p.stateCode,
				district: r.district
			});
			setPinMsg(`✓ ${r.district}, ${r.stateName}`);
		} catch (e) {
			setPinMsg(t.errors[e instanceof ApiError ? e.kind : "unavailable"]);
		}
	};
	const groups = [
		{
			title: t.wizard.conditionGroups.work,
			keys: [
				"farmer",
				"landOwner",
				"entrepreneur",
				"streetVendor",
				"artisan"
			]
		},
		{
			title: t.wizard.conditionGroups.family,
			keys: [
				"disability",
				"seniorInFamily",
				"children",
				"girlChildUnder10",
				...p.gender === "female" && p.maritalStatus !== "single" ? ["widow"] : [],
				"veteran",
				...p.maritalStatus === "married" ? ["interCasteMarriage"] : []
			]
		},
		{
			title: t.wizard.conditionGroups.home,
			keys: [
				"noPuccaHouse",
				"bplCard",
				"bankAccount"
			]
		}
	];
	const sections = [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.wizard.age,
					id: "age",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "age",
						type: "number",
						inputMode: "numeric",
						min: 0,
						max: 120,
						className: inp,
						value: p.age ?? "",
						onChange: (e) => up({ age: e.target.value ? Number(e.target.value) : void 0 })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.wizard.gender,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
						name: t.wizard.gender,
						value: p.gender,
						options: opts(t.gender),
						onChange: (gender) => up({ gender })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.wizard.marital,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
						name: t.wizard.marital,
						value: p.maritalStatus,
						options: opts(t.marital),
						onChange: (maritalStatus) => up({ maritalStatus })
					})
				})
			]
		}, 0),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
					label: t.wizard.pincode,
					id: "pin",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "pin",
							inputMode: "numeric",
							maxLength: 6,
							className: cn(inp, "min-w-0"),
							value: pin,
							onChange: (e) => setPin(e.target.value.replace(/\D/g, ""))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							type: "button",
							onClick: doPin,
							disabled: pin.length !== 6,
							className: "h-auto shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), t.wizard.pinLookup]
						})]
					}), pinMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						"aria-live": "polite",
						children: pinMsg
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.wizard.state,
					id: "state",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "state",
						className: inp,
						value: p.stateCode ?? "",
						onChange: (e) => up({
							stateCode: e.target.value || void 0,
							district: void 0
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: t.wizard.select
						}), STATES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s.code,
							children: s.name
						}, s.code))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.wizard.district,
					id: "district",
					children: p.stateCode === "GJ" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "district",
						className: inp,
						value: p.district ?? "",
						onChange: (e) => up({ district: e.target.value || void 0 }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: t.wizard.select
						}), GUJARAT_DISTRICTS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d }, d))]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "district",
						className: inp,
						value: p.district ?? "",
						onChange: (e) => up({ district: e.target.value || void 0 })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.wizard.area,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
						name: t.wizard.area,
						value: p.area,
						options: opts(t.area),
						onChange: (area) => up({ area })
					})
				})
			]
		}, 1),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: t.wizard.category,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				name: t.wizard.category,
				value: p.category,
				options: opts(t.category),
				onChange: (category) => up({ category })
			})
		}, 2),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
				label: t.wizard.income,
				id: "income",
				help: t.wizard.incomeHelp,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "income",
					type: "number",
					inputMode: "numeric",
					min: 0,
					step: 1e3,
					className: inp,
					value: p.annualIncome ?? "",
					onChange: (e) => up({ annualIncome: e.target.value ? Number(e.target.value) : void 0 })
				}), p.annualIncome != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-medium",
					children: ["₹", p.annualIncome.toLocaleString("en-IN")]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t.wizard.taxPayer,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					name: t.wizard.taxPayer,
					value: p.conditions.incomeTaxPayer == null ? void 0 : p.conditions.incomeTaxPayer ? "y" : "n",
					options: [{
						v: "y",
						l: t.wizard.yes
					}, {
						v: "n",
						l: t.wizard.no
					}],
					onChange: (v) => up({ conditions: {
						...p.conditions,
						incomeTaxPayer: v === "y"
					} })
				})
			})]
		}, 3),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t.wizard.employment,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					name: t.wizard.employment,
					value: p.employment,
					options: opts(t.employment),
					onChange: (employment) => up({
						employment,
						isStudent: employment === "student" ? true : p.isStudent
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t.wizard.occupation,
				id: "occ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "occ",
					className: inp,
					value: p.occupationText ?? "",
					onChange: (e) => up({ occupationText: e.target.value })
				})
			})]
		}, 4),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t.wizard.education,
				id: "edu",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "edu",
					className: inp,
					value: p.education ?? "",
					onChange: (e) => up({ education: e.target.value || void 0 }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: t.wizard.select
					}), EDUCATION_ORDER.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: k,
						children: t.education[k]
					}, k))]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t.wizard.isStudent,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					name: t.wizard.isStudent,
					value: p.isStudent == null ? void 0 : p.isStudent ? "y" : "n",
					options: [{
						v: "y",
						l: t.wizard.yes
					}, {
						v: "n",
						l: t.wizard.no
					}],
					onChange: (v) => up({ isStudent: v === "y" })
				})
			})]
		}, 5)
	];
	const steps = [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				sections[0],
				sections[1],
				sections[2]
			]
		}, "about"),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				sections[3],
				sections[4],
				sections[5]
			]
		}, "work"),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y",
			children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group py-4 first:pt-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "cursor-pointer py-2 font-medium text-primary",
					children: group.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-6",
					children: group.keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t.conditions[k],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							name: t.conditions[k],
							value: p.conditions[k] == null ? "unknown" : p.conditions[k] ? "y" : "n",
							options: [
								{
									v: "y",
									l: t.wizard.yes
								},
								{
									v: "n",
									l: t.wizard.no
								},
								{
									v: "unknown",
									l: t.wizard.notSure
								}
							],
							onChange: (v) => {
								const conditions = { ...p.conditions };
								if (v === "unknown") delete conditions[k];
								else conditions[k] = v === "y";
								up({ conditions });
							}
						})
					}, k))
				})]
			}, group.title))
		}, "optional")
	];
	const finish = () => {
		setProfile(p);
		nav({ to: "/results" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold",
				children: t.wizard.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-between gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						tabIndex: -1,
						id: "step-heading",
						className: "font-medium",
						children: t.wizard.steps[step]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-muted-foreground",
						children: t.wizard.step.replace("{n}", String(step + 1)).replace("{total}", String(TOTAL))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-2 overflow-hidden rounded-full bg-muted",
					role: "progressbar",
					"aria-valuenow": step + 1,
					"aria-valuemin": 1,
					"aria-valuemax": TOTAL,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-primary transition-all",
						style: { width: `${(step + 1) / TOTAL * 100}%` }
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					if (step < 2) {
						setStep(step + 1);
						document.getElementById("step-heading")?.focus();
					} else finish();
				},
				className: "mt-8 space-y-6 border-t pt-6",
				children: [steps[step], /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						type: "button",
						disabled: step === 0,
						onClick: () => {
							setStep(step - 1);
							document.getElementById("step-heading")?.focus();
						},
						className: "h-auto px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), t.wizard.back]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						className: "h-auto whitespace-normal px-4 py-3",
						children: [step < 2 ? t.wizard.next : t.wizard.finish, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), t.wizard.privacyNote]
			})
		]
	});
}
//#endregion
export { Wizard as component };
