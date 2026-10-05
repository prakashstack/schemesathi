export type Gender = "male" | "female" | "other";
export type MaritalStatus = "single" | "married" | "widowed" | "divorced" | "separated";
export type Category = "general" | "sc" | "st" | "obc" | "ews" | "other";
export type Area = "rural" | "urban";
export type Employment =
  | "student"
  | "employed"
  | "unemployed"
  | "self_employed"
  | "business_owner"
  | "farmer"
  | "homemaker"
  | "retired"
  | "other";
export type EducationLevel =
  | "none"
  | "below_10"
  | "class_10"
  | "class_12"
  | "diploma"
  | "graduate"
  | "postgraduate"
  | "doctorate";

export const EDUCATION_ORDER: EducationLevel[] = [
  "none",
  "below_10",
  "class_10",
  "class_12",
  "diploma",
  "graduate",
  "postgraduate",
  "doctorate",
];

/** Additional yes/no conditions asked in the last wizard step. */
export type ConditionKey =
  | "disability"
  | "farmer"
  | "entrepreneur"
  | "seniorInFamily"
  | "children"
  | "girlChildUnder10"
  | "widow"
  | "veteran"
  | "streetVendor"
  | "artisan"
  | "noPuccaHouse"
  | "bplCard"
  | "incomeTaxPayer"
  | "interCasteMarriage"
  | "bankAccount"
  | "landOwner";

export interface UserProfile {
  age?: number | undefined;
  gender?: Gender | undefined;
  maritalStatus?: MaritalStatus | undefined;
  stateCode?: string | undefined;
  district?: string | undefined;
  area?: Area | undefined;
  category?: Category | undefined;
  annualIncome?: number | undefined;
  employment?: Employment | undefined;
  occupationText?: string | undefined;
  education?: EducationLevel | undefined;
  isStudent?: boolean | undefined;
  conditions: Partial<Record<ConditionKey, boolean>>;
}

export type Criterion =
  | { type: "age"; min?: number; max?: number; label: string }
  | { type: "gender"; values: Gender[]; label: string }
  | { type: "maritalStatus"; values: MaritalStatus[]; label: string }
  | { type: "category"; values: Category[]; label: string }
  | { type: "state"; values: string[]; label: string }
  | { type: "area"; values: Area[]; label: string }
  | { type: "income"; max: number; label: string }
  | { type: "employment"; values: Employment[]; label: string }
  | { type: "education"; min?: EducationLevel; max?: EducationLevel; label: string }
  | { type: "student"; value: boolean; label: string }
  | { type: "condition"; key: ConditionKey; mustBe: boolean; label: string };

export type GovernmentLevel = "central" | "state";

export type SchemeCategoryId =
  | "employment"
  | "business"
  | "startup"
  | "education"
  | "housing"
  | "healthcare"
  | "agriculture"
  | "women"
  | "children"
  | "disability"
  | "senior"
  | "financial"
  | "skill"
  | "scholarship"
  | "loan"
  | "subsidy"
  | "social_welfare"
  | "insurance"
  | "pension";

export type BenefitType = "cash" | "loan" | "subsidy" | "insurance" | "pension" | "scholarship" | "in_kind" | "training";

export interface Scheme {
  id: string;
  name: string;
  shortName?: string;
  level: GovernmentLevel;
  /** ISO-like state code, e.g. "GJ". Undefined for central schemes. */
  stateCode?: string;
  department: string;
  ministry?: string;
  categories: SchemeCategoryId[];
  benefitType: BenefitType;
  benefitSummary: string;
  overview: string;
  eligibilityText: string[];
  criteria: Criterion[];
  benefits: string[];
  documents: string[];
  applicationProcess: string[];
  importantDates?: string;
  officialSourceUrl: string;
  officialSourceName: string;
  applyUrl?: string;
  applyLabel?: string;
  /** Date the published criteria were checked against the official portal, ISO yyyy-mm-dd. */
  criteriaVerifiedOn?: string;
  /** Last-updated date provided by the data source, if any. */
  sourceLastUpdated?: string;
  dataSource: { provider: string; kind: "curated_reference" | "public_api"; note: string };
}

export type EligibilityStatus = "potentially_eligible" | "more_info_required" | "does_not_match";

export interface CriterionResult {
  criterion: Criterion;
  label: string;
  detail?: string | undefined;
}

export interface EligibilityResult {
  status: EligibilityStatus;
  matchedCriteria: CriterionResult[];
  unmatchedCriteria: CriterionResult[];
  missingInformation: CriterionResult[];
}
