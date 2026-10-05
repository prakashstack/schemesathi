/** UI configuration: Indian States and Union Territories. */
export interface StateInfo {
  code: string;
  name: string;
  type: "state" | "ut";
  slug: string;
  /** Official state portal (publicly known government domain). */
  portalUrl?: string;
}

export const STATES: StateInfo[] = [
  { code: "GJ", name: "Gujarat", type: "state", slug: "gujarat", portalUrl: "https://gujaratindia.gov.in" },
  { code: "AP", name: "Andhra Pradesh", type: "state", slug: "andhra-pradesh", portalUrl: "https://www.ap.gov.in" },
  { code: "AR", name: "Arunachal Pradesh", type: "state", slug: "arunachal-pradesh", portalUrl: "https://arunachalpradesh.gov.in" },
  { code: "AS", name: "Assam", type: "state", slug: "assam", portalUrl: "https://assam.gov.in" },
  { code: "BR", name: "Bihar", type: "state", slug: "bihar", portalUrl: "https://state.bihar.gov.in" },
  { code: "CG", name: "Chhattisgarh", type: "state", slug: "chhattisgarh", portalUrl: "https://cgstate.gov.in" },
  { code: "GA", name: "Goa", type: "state", slug: "goa", portalUrl: "https://www.goa.gov.in" },
  { code: "HR", name: "Haryana", type: "state", slug: "haryana", portalUrl: "https://haryana.gov.in" },
  { code: "HP", name: "Himachal Pradesh", type: "state", slug: "himachal-pradesh", portalUrl: "https://himachal.nic.in" },
  { code: "JH", name: "Jharkhand", type: "state", slug: "jharkhand", portalUrl: "https://www.jharkhand.gov.in" },
  { code: "KA", name: "Karnataka", type: "state", slug: "karnataka", portalUrl: "https://www.karnataka.gov.in" },
  { code: "KL", name: "Kerala", type: "state", slug: "kerala", portalUrl: "https://kerala.gov.in" },
  { code: "MP", name: "Madhya Pradesh", type: "state", slug: "madhya-pradesh", portalUrl: "https://mp.gov.in" },
  { code: "MH", name: "Maharashtra", type: "state", slug: "maharashtra", portalUrl: "https://www.maharashtra.gov.in" },
  { code: "MN", name: "Manipur", type: "state", slug: "manipur", portalUrl: "https://manipur.gov.in" },
  { code: "ML", name: "Meghalaya", type: "state", slug: "meghalaya", portalUrl: "https://meghalaya.gov.in" },
  { code: "MZ", name: "Mizoram", type: "state", slug: "mizoram", portalUrl: "https://mizoram.gov.in" },
  { code: "NL", name: "Nagaland", type: "state", slug: "nagaland", portalUrl: "https://nagaland.gov.in" },
  { code: "OD", name: "Odisha", type: "state", slug: "odisha", portalUrl: "https://odisha.gov.in" },
  { code: "PB", name: "Punjab", type: "state", slug: "punjab", portalUrl: "https://punjab.gov.in" },
  { code: "RJ", name: "Rajasthan", type: "state", slug: "rajasthan", portalUrl: "https://rajasthan.gov.in" },
  { code: "SK", name: "Sikkim", type: "state", slug: "sikkim", portalUrl: "https://sikkim.gov.in" },
  { code: "TN", name: "Tamil Nadu", type: "state", slug: "tamil-nadu", portalUrl: "https://www.tn.gov.in" },
  { code: "TS", name: "Telangana", type: "state", slug: "telangana", portalUrl: "https://www.telangana.gov.in" },
  { code: "TR", name: "Tripura", type: "state", slug: "tripura", portalUrl: "https://tripura.gov.in" },
  { code: "UP", name: "Uttar Pradesh", type: "state", slug: "uttar-pradesh", portalUrl: "https://up.gov.in" },
  { code: "UK", name: "Uttarakhand", type: "state", slug: "uttarakhand", portalUrl: "https://uk.gov.in" },
  { code: "WB", name: "West Bengal", type: "state", slug: "west-bengal", portalUrl: "https://wb.gov.in" },
  { code: "AN", name: "Andaman and Nicobar Islands", type: "ut", slug: "andaman-nicobar", portalUrl: "https://www.andaman.gov.in" },
  { code: "CH", name: "Chandigarh", type: "ut", slug: "chandigarh", portalUrl: "https://chandigarh.gov.in" },
  { code: "DN", name: "Dadra and Nagar Haveli and Daman and Diu", type: "ut", slug: "dnh-dd", portalUrl: "https://ddd.gov.in" },
  { code: "DL", name: "Delhi", type: "ut", slug: "delhi", portalUrl: "https://delhi.gov.in" },
  { code: "JK", name: "Jammu and Kashmir", type: "ut", slug: "jammu-kashmir", portalUrl: "https://jk.gov.in" },
  { code: "LA", name: "Ladakh", type: "ut", slug: "ladakh", portalUrl: "https://ladakh.gov.in" },
  { code: "LD", name: "Lakshadweep", type: "ut", slug: "lakshadweep", portalUrl: "https://lakshadweep.gov.in" },
  { code: "PY", name: "Puducherry", type: "ut", slug: "puducherry", portalUrl: "https://www.py.gov.in" },
];

export const getStateByCode = (code?: string) => STATES.find((s) => s.code === code);
export const getStateBySlug = (slug: string) => STATES.find((s) => s.slug === slug);

/** Maps India Post circle/state names to codes (used by PIN lookup). */
export const getStateByName = (name: string) => {
  const n = name.trim().toLowerCase();
  return STATES.find((s) => s.name.toLowerCase() === n);
};

export const GUJARAT_DISTRICTS = [
  "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad",
  "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar",
  "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal",
  "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad",
];
