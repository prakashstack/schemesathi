import { createFileRoute, Link } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { useMemo, useState } from "react";

import { PageHeader } from "@/components/Layout";
import { SchemeCard } from "@/components/SchemeCard";
import { SCHEMES } from "@/data/schemes";
import { useI18n } from "@/hooks/useI18n";
import { useLocalState } from "@/hooks/useLocalState";
import { seo } from "@/lib/seo";
import { evaluateEligibility, isApplicableRegion } from "@/utils/eligibility";
import type { EligibilityStatus } from "@/types/scheme";

export const Route = createFileRoute("/results")({
  head: () => seo("Schemes You May Be Eligible For", "Your personalised list of government schemes, with an explanation of which published criteria you match."),
  component: Results,
});

function Results() {
  const { t } = useI18n();
  const { profile, setProfile } = useLocalState();
  const [tab, setTab] = useState<EligibilityStatus>("potentially_eligible");
  const evald = useMemo(() => (profile ? SCHEMES.filter((s) => isApplicableRegion(profile, s)).map((s) => ({ s, r: evaluateEligibility(profile, s) })) : []), [profile]);

  if (!profile) return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="text-lg">{t.results.noProfile}</p>
      <Link to="/eligibility" className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground">{t.results.start}</Link>
    </div>
  );

  const groups: { k: EligibilityStatus; l: string }[] = [
    { k: "potentially_eligible", l: t.results.eligible }, { k: "more_info_required", l: t.results.moreInfo }, { k: "does_not_match", l: t.results.noMatch },
  ];
  const shown = evald.filter((x) => x.r.status === tab).sort((a, b) => b.r.matchedCriteria.length - a.r.matchedCriteria.length);

  return (
    <>
      <PageHeader title={t.results.title} subtitle={t.results.subtitle}>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <Link to="/eligibility" className="rounded-lg border bg-card px-4 py-2">{t.results.edit}</Link>
          <button onClick={() => setProfile(null)} className="rounded-lg px-4 py-2 text-muted-foreground underline">{t.results.clear}</button>
        </div>
      </PageHeader>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex gap-3 rounded-xl border border-warning/40 bg-warning-soft p-4 text-sm"><Info className="h-5 w-5 shrink-0" /><p><strong>{t.results.important}:</strong> {t.results.eligibleHelp} {t.trust.final}</p></div>
        <div role="tablist" className="mt-6 flex flex-wrap gap-2">
          {groups.map((g) => (
            <button key={g.k} role="tab" aria-selected={tab === g.k} onClick={() => setTab(g.k)} className={`rounded-full border px-4 py-2 text-sm ${tab === g.k ? "border-primary bg-primary text-primary-foreground" : "bg-card"}`}>
              {g.l} ({evald.filter((x) => x.r.status === g.k).length})
            </button>
          ))}
        </div>
        <div role="tabpanel" className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.length ? shown.map(({ s, r }) => <SchemeCard key={s.id} scheme={s} result={r} />) : <p className="text-muted-foreground">{t.results.empty}</p>}
        </div>
      </div>
    </>
  );
}
