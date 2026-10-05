import { strict as assert } from "node:assert";
import { test } from "node:test";

import { evaluateEligibility } from "./eligibility";
import type { Scheme } from "../types/scheme";

const scheme: Scheme = {
  id: "test-bank", name: "Test", level: "central", department: "Test", categories: [],
  benefitType: "cash", benefitSummary: "Test", overview: "Test", eligibilityText: [],
  criteria: [{ type: "condition", key: "bankAccount", mustBe: true, label: "Bank account" }],
  benefits: [], documents: [], applicationProcess: [], officialSourceUrl: "https://www.india.gov.in",
  officialSourceName: "Test", dataSource: { provider: "Test", kind: "curated_reference", note: "Test" },
};

test("an unanswered optional question remains unknown rather than becoming no", () => {
  const result = evaluateEligibility({ conditions: {} }, scheme);
  assert.equal(result.status, "more_info_required");
  assert.equal(result.missingInformation.length, 1);
  assert.equal(result.unmatchedCriteria.length, 0);
});

test("explicit yes and no answers are respected", () => {
  assert.equal(evaluateEligibility({ conditions: { bankAccount: true } }, scheme).status, "potentially_eligible");
  assert.equal(evaluateEligibility({ conditions: { bankAccount: false } }, scheme).status, "does_not_match");
});