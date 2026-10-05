import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

import { CATEGORIES } from "@/data/categories";
import { SCHEMES } from "@/data/schemes";
import { STATES } from "@/data/states";
import { useI18n } from "@/hooks/useI18n";
import { searchSchemesSync } from "@/services/schemeApi";
import type { BenefitType, Category, Criterion, Gender, Scheme, SchemeCategoryId } from "@/types/scheme";

import { LiveDatasets } from "./LiveDatasets";
import { SchemeCard } from "./SchemeCard";

interface F { level: "" | "central" | "state"; state: string; social: "" | Category; gender: "" | Gender; age: string; income: string; cat: "" | SchemeCategoryId; benefit: "" | BenefitType }
const EMPTY: F = { level: "", state: "", social: "", gender: "", age: "", income: "", cat: "", benefit: "" };

const crit = <T extends Criterion["type"]>(s: Scheme, t: T) => s.criteria.find((c) => c.type === t) as Extract<Criterion, { type: T }> | undefined;

export function SchemeBrowser({ base = SCHEMES, initialQuery = "", initialCat = "", liveQuery, hideLive }: { base?: Scheme[]; initialQuery?: string; initialCat?: SchemeCategoryId | ""; liveQuery?: string | undefined; hideLive?: boolean }) {
  const { t, f } = useI18n();
  const [q, setQ] = useState(initialQuery);
  const [submitted, setSubmitted] = useState(initialQuery);
  const [fl, setFl] = useState<F>({ ...EMPTY, cat: initialCat });
  const [showF, setShowF] = useState(false);

  const list = useMemo(() => {
    return searchSchemesSync(q, base).filter((s) => {
      if (fl.level && s.level !== fl.level) return false;
      if (fl.state && s.level === "state" && s.stateCode !== fl.state) return false;
      if (fl.cat && !s.categories.includes(fl.cat)) return false;
      if (fl.benefit && s.benefitType !== fl.benefit) return false;
      const c = crit(s, "category"); if (fl.social && c && !c.values.includes(fl.social)) return false;
      const g = crit(s, "gender"); if (fl.gender && g && !g.values.includes(fl.gender)) return false;
      const a = crit(s, "age"); const age = Number(fl.age); if (fl.age && a && ((a.min != null && age < a.min) || (a.max != null && age > a.max))) return false;
      const i = crit(s, "income"); if (fl.income && i && Number(fl.income) > i.max) return false;
      return true;
    });
  }, [q, base, fl]);

  const sel = "w-full rounded-lg border bg-card px-3 py-2 text-sm";
  const set = (k: keyof F) => (e: { target: { value: string } }) => setFl({ ...fl, [k]: e.target.value });

  return (
    <div className="space-y-6">
      <form role="search" onSubmit={(e) => { e.preventDefault(); setSubmitted(q); }} className="flex gap-2">
        <label className="relative flex-1">
          <span className="sr-only">{t.search.button}</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.search.placeholder} className="w-full rounded-xl border bg-card py-3 pl-10 pr-3 text-sm shadow-card" />
        </label>
        <button className="rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground">{t.search.button}</button>
        <button type="button" onClick={() => setShowF(!showF)} aria-expanded={showF} className="inline-flex items-center gap-1 rounded-xl border bg-card px-3 text-sm"><SlidersHorizontal className="h-4 w-4" /><span className="hidden sm:inline">{t.search.filters}</span></button>
      </form>
      {showF && (
        <div className="grid gap-3 rounded-2xl border bg-card p-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="text-xs font-medium">{t.filters.level}<select className={sel} value={fl.level} onChange={set("level")}><option value="">{t.search.all}</option><option value="central">{t.scheme.central}</option><option value="state">{t.scheme.state}</option></select></label>
          <label className="text-xs font-medium">{t.filters.state}<select className={sel} value={fl.state} onChange={set("state")}><option value="">{t.search.all}</option>{STATES.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}</select></label>
          <label className="text-xs font-medium">{t.filters.category}<select className={sel} value={fl.social} onChange={set("social")}><option value="">{t.search.all}</option>{(Object.keys(t.category) as Category[]).map((k) => <option key={k} value={k}>{t.category[k]}</option>)}</select></label>
          <label className="text-xs font-medium">{t.filters.gender}<select className={sel} value={fl.gender} onChange={set("gender")}><option value="">{t.search.all}</option>{(Object.keys(t.gender) as Gender[]).map((k) => <option key={k} value={k}>{t.gender[k]}</option>)}</select></label>
          <label className="text-xs font-medium">{t.filters.age}<input type="number" min={0} className={sel} value={fl.age} onChange={set("age")} /></label>
          <label className="text-xs font-medium">{t.filters.income}<input type="number" min={0} className={sel} value={fl.income} onChange={set("income")} /></label>
          <label className="text-xs font-medium">{t.filters.schemeCategory}<select className={sel} value={fl.cat} onChange={set("cat")}><option value="">{t.search.all}</option>{CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.emoji} {t.categories[c.id]}</option>)}</select></label>
          <label className="text-xs font-medium">{t.filters.benefitType}<select className={sel} value={fl.benefit} onChange={set("benefit")}><option value="">{t.search.all}</option>{(Object.keys(t.benefitType) as BenefitType[]).map((k) => <option key={k} value={k}>{t.benefitType[k]}</option>)}</select></label>
          <button onClick={() => setFl(EMPTY)} className="text-left text-sm text-primary underline sm:col-span-2 lg:col-span-4">{t.search.clearFilters}</button>
        </div>
      )}
      <p className="text-sm text-muted-foreground" aria-live="polite">{f(t.search.results, { n: list.length })}</p>
      {list.length === 0 ? <p className="rounded-xl border bg-card p-6 text-center text-muted-foreground">{t.search.noResults}</p> : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{list.map((s) => <SchemeCard key={s.id} scheme={s} />)}</div>
      )}
      {!hideLive && <LiveDatasets query={submitted.trim() || liveQuery || "scheme"} />}
    </div>
  );
}
