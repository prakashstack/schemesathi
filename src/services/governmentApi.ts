import { ApiError, fetchJson } from "./http";

/**
 * data.gov.in Open Government Data (OGD) Platform — catalogue API.
 * Verified: responds with `Access-Control-Allow-Origin: *`, so the browser can call it directly.
 * The key below is the public sample key published by data.gov.in for open access.
 * Override with VITE_PUBLIC_DATAGOV_API_KEY (a public, non-secret key from data.gov.in).
 */
const BASE = import.meta.env["VITE_PUBLIC_DATAGOV_API_URL"] || "https://api.data.gov.in";
const KEY = import.meta.env["VITE_PUBLIC_DATAGOV_API_KEY"] || "579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b";

export interface OgdDataset {
  id: string;
  title: string;
  description: string;
  orgs: string[];
  orgType: string;
  sectors: string[];
  updated?: string | undefined;
  url: string;
}

interface OgdRaw {
  status?: string;
  total?: number;
  records?: Array<{
    index_name: string;
    title?: string;
    desc?: string;
    org?: string[];
    org_type?: string;
    sector?: string[];
    updated_date?: string;
    updated?: number;
  }>;
}

export async function searchOgdDatasets(query: string, opts: { limit?: number; orgType?: "Central" | "State" } = {}) {
  const p = new URLSearchParams({ format: "json", offset: "0", limit: String(opts.limit ?? 8), "api-key": KEY });
  p.set("filters[source]", "data.gov.in");
  if (query.trim()) p.set("filters[title]", query.trim());
  if (opts.orgType) p.set("filters[org_type]", opts.orgType);
  p.set("sort[updated]", "desc");
  const d = await fetchJson<OgdRaw>(`${BASE}/lists?${p.toString()}`);
  if (!d || d.status !== "ok" || !Array.isArray(d.records)) throw new ApiError("invalid");
  const items: OgdDataset[] = d.records.map((r) => ({
    id: r.index_name,
    title: r.title ?? "Untitled dataset",
    description: r.desc ?? "",
    orgs: r.org ?? [],
    orgType: r.org_type ?? "",
    sectors: r.sector ?? [],
    updated: r.updated_date || (r.updated ? new Date(r.updated * 1000).toISOString() : undefined),
    url: `https://www.data.gov.in/resource/${r.index_name}`,
  }));
  return { total: d.total ?? items.length, items };
}
