import { Link } from "@tanstack/react-router";
import { AlertCircle, Bookmark, BookmarkCheck, CheckCircle2, ExternalLink, HelpCircle, XCircle } from "lucide-react";

import { getStateByCode } from "@/data/states";
import { useI18n } from "@/hooks/useI18n";
import { useLocalState } from "@/hooks/useLocalState";
import { cn } from "@/lib/utils";
import type { EligibilityResult, EligibilityStatus, Scheme } from "@/types/scheme";

export function StatusBadge({ status }: { status: EligibilityStatus }) {
  const { t } = useI18n();
  const map = {
    potentially_eligible: { c: "bg-success-soft text-success", I: CheckCircle2, l: t.results.eligible },
    more_info_required: { c: "bg-warning-soft text-warning-foreground", I: HelpCircle, l: t.results.moreInfo },
    does_not_match: { c: "bg-destructive-soft text-destructive", I: XCircle, l: t.results.noMatch },
  }[status];
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold", map.c)}>
      <map.I className="h-3.5 w-3.5" aria-hidden /> {map.l}
    </span>
  );
}

export function EligibilityExplain({ result }: { result: EligibilityResult }) {
  const { t } = useI18n();
  return (
    <div className="space-y-3 text-sm">
      {result.matchedCriteria.length > 0 && (
        <div>
          <p className="font-medium">{t.results.why}</p>
          <ul className="mt-1 space-y-1">
            {result.matchedCriteria.map((r) => (
              <li key={r.label} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />{r.label}</li>
            ))}
          </ul>
        </div>
      )}
      {result.unmatchedCriteria.length > 0 && (
        <div>
          <p className="font-medium">{t.results.unmatched}</p>
          <ul className="mt-1 space-y-1">
            {result.unmatchedCriteria.map((r) => (
              <li key={r.label} className="flex gap-2"><XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden /><span>{r.label}{r.detail && <span className="block text-xs text-muted-foreground">{r.detail}</span>}</span></li>
            ))}
          </ul>
        </div>
      )}
      {result.missingInformation.length > 0 && (
        <div>
          <p className="font-medium">{t.results.missing}</p>
          <ul className="mt-1 space-y-1">
            {result.missingInformation.map((r) => (
              <li key={r.label} className="flex gap-2"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden />{r.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function SchemeCard({ scheme, result }: { scheme: Scheme; result?: EligibilityResult }) {
  const { t } = useI18n();
  const { isSaved, toggleSaved } = useLocalState();
  const saved = isSaved(scheme.id);
  return (
    <article className="animate-rise flex flex-col rounded-2xl border bg-card p-5 shadow-card transition hover:shadow-lift">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className={cn("rounded-full px-2.5 py-1 font-medium", scheme.level === "central" ? "bg-primary-soft text-primary" : "bg-saffron-soft text-foreground")}>
          {scheme.level === "central" ? t.scheme.central : `${t.scheme.state} · ${getStateByCode(scheme.stateCode)?.name ?? ""}`}
        </span>
        {result && <StatusBadge status={result.status} />}
        <button onClick={() => toggleSaved(scheme.id)} className="ml-auto rounded-md p-1.5 text-muted-foreground hover:bg-secondary hover:text-primary" aria-pressed={saved} aria-label={saved ? t.scheme.saved : t.scheme.save}>
          {saved ? <BookmarkCheck className="h-5 w-5 text-primary" /> : <Bookmark className="h-5 w-5" />}
        </button>
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
        <Link to="/schemes/$id" params={{ id: scheme.id }} className="hover:text-primary">{scheme.name}</Link>
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">{scheme.department}</p>
      <p className="mt-3 text-sm"><span className="font-medium">{t.scheme.benefit}: </span>{scheme.benefitSummary}</p>
      {result && <div className="mt-4 rounded-xl bg-muted p-3"><EligibilityExplain result={result} /></div>}
      <p className="mt-3 text-xs text-muted-foreground">
        {t.scheme.source}: <a href={scheme.officialSourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{scheme.officialSourceName}</a>
        {" · "}{scheme.criteriaVerifiedOn ? `${t.scheme.verifiedOn} ${scheme.criteriaVerifiedOn}` : t.scheme.noLastUpdated}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 pt-1">
        <Link to="/schemes/$id" params={{ id: scheme.id }} className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">{t.scheme.details}</Link>
        <a href={scheme.officialSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm hover:bg-secondary">{t.scheme.official}<ExternalLink className="h-3.5 w-3.5" aria-hidden /></a>
        {scheme.applyUrl && <a href={scheme.applyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-success/40 px-3 py-2 text-sm text-success hover:bg-success-soft">{t.scheme.apply}<ExternalLink className="h-3.5 w-3.5" aria-hidden /></a>}
      </div>
    </article>
  );
}
