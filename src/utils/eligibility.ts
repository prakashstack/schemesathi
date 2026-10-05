import { EDUCATION_ORDER, type Criterion, type CriterionResult, type EligibilityResult, type Scheme, type UserProfile } from "@/types/scheme";

type Outcome = "match" | "nomatch" | "missing";

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

function check(c: Criterion, p: UserProfile): { o: Outcome; detail?: string } {
  switch (c.type) {
    case "age": {
      if (p.age == null) return { o: "missing" };
      const ok = (c.min == null || p.age >= c.min) && (c.max == null || p.age <= c.max);
      return { o: ok ? "match" : "nomatch", detail: `Your age: ${p.age}` };
    }
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
      return { o: p.annualIncome <= c.max ? "match" : "nomatch", detail: `Your income: ${inr(p.annualIncome)} · limit ${inr(c.max)}` };
    case "employment":
      if (!p.employment) return { o: "missing" };
      return { o: c.values.includes(p.employment) ? "match" : "nomatch" };
    case "education": {
      if (!p.education) return { o: "missing" };
      const i = EDUCATION_ORDER.indexOf(p.education);
      const ok = (c.min == null || i >= EDUCATION_ORDER.indexOf(c.min)) && (c.max == null || i <= EDUCATION_ORDER.indexOf(c.max));
      return { o: ok ? "match" : "nomatch" };
    }
    case "student":
      if (p.isStudent == null) return { o: "missing" };
      return { o: p.isStudent === c.value ? "match" : "nomatch" };
    case "condition": {
      let v = p.conditions[c.key];
      if (c.key === "farmer" || c.key === "landOwner") v = v ?? (p.employment === "farmer" ? true : undefined);
      if (c.key === "entrepreneur") v = v ?? (p.employment === "business_owner" || p.employment === "self_employed" ? true : undefined);
      if (c.key === "widow") v = v ?? (p.maritalStatus === "widowed" && p.gender === "female" ? true : undefined);
      if (v == null) {
        // Unticked optional "must be false" conditions are treated as unknown.
        return { o: "missing" };
      }
      return { o: v === c.mustBe ? "match" : "nomatch" };
    }
  }
}

/** Client-side eligibility evaluation against a scheme's published criteria. Never a guarantee. */
export function evaluateEligibility(profile: UserProfile, scheme: Scheme): EligibilityResult {
  const matched: CriterionResult[] = [];
  const unmatched: CriterionResult[] = [];
  const missing: CriterionResult[] = [];
  for (const c of scheme.criteria) {
    const { o, detail } = check(c, profile);
    const r = { criterion: c, label: c.label, detail };
    (o === "match" ? matched : o === "nomatch" ? unmatched : missing).push(r);
  }
  const status = unmatched.length ? "does_not_match" : missing.length ? "more_info_required" : "potentially_eligible";
  return { status, matchedCriteria: matched, unmatchedCriteria: unmatched, missingInformation: missing };
}

/** State schemes only apply to residents; central schemes apply to all. */
export function isApplicableRegion(profile: UserProfile, scheme: Scheme) {
  return scheme.level === "central" || !profile.stateCode || scheme.stateCode === profile.stateCode;
}
