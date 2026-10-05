import { t as EDUCATION_ORDER } from "./scheme-ChG0iCxM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/eligibility-CV24TfxT.js
var inr = (n) => "₹" + n.toLocaleString("en-IN");
function check(c, p) {
	switch (c.type) {
		case "age":
			if (p.age == null) return { o: "missing" };
			return {
				o: (c.min == null || p.age >= c.min) && (c.max == null || p.age <= c.max) ? "match" : "nomatch",
				detail: `Your age: ${p.age}`
			};
		case "gender":
			if (!p.gender) return { o: "missing" };
			return { o: c.values.includes(p.gender) ? "match" : "nomatch" };
		case "maritalStatus":
			if (!p.maritalStatus) return { o: "missing" };
			return { o: c.values.includes(p.maritalStatus) ? "match" : "nomatch" };
		case "category":
			if (!p.category) return { o: "missing" };
			return { o: c.values.includes(p.category) ? "match" : "nomatch" };
		case "state":
			if (!p.stateCode) return { o: "missing" };
			return { o: c.values.includes(p.stateCode) ? "match" : "nomatch" };
		case "area":
			if (!p.area) return { o: "missing" };
			return { o: c.values.includes(p.area) ? "match" : "nomatch" };
		case "income":
			if (p.annualIncome == null) return { o: "missing" };
			return {
				o: p.annualIncome <= c.max ? "match" : "nomatch",
				detail: `Your income: ${inr(p.annualIncome)} · limit ${inr(c.max)}`
			};
		case "employment":
			if (!p.employment) return { o: "missing" };
			return { o: c.values.includes(p.employment) ? "match" : "nomatch" };
		case "education": {
			if (!p.education) return { o: "missing" };
			const i = EDUCATION_ORDER.indexOf(p.education);
			return { o: (c.min == null || i >= EDUCATION_ORDER.indexOf(c.min)) && (c.max == null || i <= EDUCATION_ORDER.indexOf(c.max)) ? "match" : "nomatch" };
		}
		case "student":
			if (p.isStudent == null) return { o: "missing" };
			return { o: p.isStudent === c.value ? "match" : "nomatch" };
		case "condition": {
			let v = p.conditions[c.key];
			if (c.key === "farmer" || c.key === "landOwner") v = v ?? (p.employment === "farmer" ? true : void 0);
			if (c.key === "entrepreneur") v = v ?? (p.employment === "business_owner" || p.employment === "self_employed" ? true : void 0);
			if (c.key === "widow") v = v ?? (p.maritalStatus === "widowed" && p.gender === "female" ? true : void 0);
			if (v == null) return { o: "missing" };
			return { o: v === c.mustBe ? "match" : "nomatch" };
		}
	}
}
/** Client-side eligibility evaluation against a scheme's published criteria. Never a guarantee. */
function evaluateEligibility(profile, scheme) {
	const matched = [];
	const unmatched = [];
	const missing = [];
	for (const c of scheme.criteria) {
		const { o, detail } = check(c, profile);
		const r = {
			criterion: c,
			label: c.label,
			detail
		};
		(o === "match" ? matched : o === "nomatch" ? unmatched : missing).push(r);
	}
	return {
		status: unmatched.length ? "does_not_match" : missing.length ? "more_info_required" : "potentially_eligible",
		matchedCriteria: matched,
		unmatchedCriteria: unmatched,
		missingInformation: missing
	};
}
/** State schemes only apply to residents; central schemes apply to all. */
function isApplicableRegion(profile, scheme) {
	return scheme.level === "central" || !profile.stateCode || scheme.stateCode === profile.stateCode;
}
//#endregion
export { isApplicableRegion as n, evaluateEligibility as t };
