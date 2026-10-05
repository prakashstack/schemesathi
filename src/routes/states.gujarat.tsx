import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

import { PageHeader } from "@/components/Layout";
import { LiveDatasets } from "@/components/LiveDatasets";
import { SchemeCard } from "@/components/SchemeCard";
import { GUJARAT_CATEGORIES } from "@/data/categories";
import { SCHEMES } from "@/data/schemes";
import { useI18n } from "@/hooks/useI18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/states/gujarat")({
  head: () => seo("Gujarat Government Schemes", "Gujarat state schemes for SC welfare, education, scholarships, business, startups, housing, healthcare and social welfare."),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const [cat, setCat] = useState<string>("");
  const gj = SCHEMES.filter((s) => s.stateCode === "GJ");
  const def = GUJARAT_CATEGORIES.find((c) => c.id === cat);
  const list = !cat ? gj : gj.filter((s) => (cat === "sc_welfare" ? s.criteria.some((c) => c.type === "category" && c.values.includes("sc")) : s.categories.includes(cat as never)));
  return (
    <>
      <PageHeader title={t.states.gujaratTitle} subtitle={t.states.gujaratSub}>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {[["https://www.digitalgujarat.gov.in", "Digital Gujarat"], ["https://esamajkalyan.gujarat.gov.in", "e-Samaj Kalyan"], ["https://gujaratindia.gov.in", "gujaratindia.gov.in"]].map(([h, l]) => <a key={h} href={h} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border bg-card px-3 py-1.5">{l}<ExternalLink className="h-3 w-3" /></a>)}
        </div>
      </PageHeader>
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <div className="flex flex-wrap gap-2" role="group" aria-label={t.filters.schemeCategory}>
          <button onClick={() => setCat("")} aria-pressed={!cat} className={`rounded-full border px-4 py-2 text-sm ${!cat ? "bg-primary text-primary-foreground" : "bg-card"}`}>{t.search.all} ({gj.length})</button>
          {GUJARAT_CATEGORIES.map((c) => <button key={c.id} onClick={() => setCat(c.id)} aria-pressed={cat === c.id} className={`rounded-full border px-4 py-2 text-sm ${cat === c.id ? "bg-primary text-primary-foreground" : "bg-card"}`}>{c.label}</button>)}
        </div>
        {list.length ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{list.map((s) => <SchemeCard key={s.id} scheme={s} />)}</div> : (
          <div className="rounded-xl border border-warning/40 bg-warning-soft p-5 text-sm">{t.states.noApi} <a href="https://www.digitalgujarat.gov.in" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">Digital Gujarat</a></div>
        )}
        <LiveDatasets query={`Gujarat${def && def.id !== "sc_welfare" ? "" : ""}`} limit={6} />
      </div>
    </>
  );
}
