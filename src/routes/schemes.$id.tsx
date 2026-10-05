import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck, ExternalLink, Printer, Share2 } from "lucide-react";
import { useState, type ReactNode } from "react";

import { LiveDatasets } from "@/components/LiveDatasets";
import { EligibilityExplain, StatusBadge } from "@/components/SchemeCard";
import { getSchemeById } from "@/data/schemes";
import { getStateByCode } from "@/data/states";
import { useI18n } from "@/hooks/useI18n";
import { useLocalState } from "@/hooks/useLocalState";
import { evaluateEligibility } from "@/utils/eligibility";

export const Route = createFileRoute("/schemes/$id")({
  loader: ({ params }) => {
    const scheme = getSchemeById(params.id);
    if (!scheme) throw notFound();
    return { scheme };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Scheme not found | SchemeSathi" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.scheme;
    const title = `${s.name} | SchemeSathi`;
    return { meta: [{ title }, { name: "description", content: s.benefitSummary }, { property: "og:title", content: title }, { property: "og:description", content: s.benefitSummary }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" }] };
  },
  notFoundComponent: () => <div className="mx-auto max-w-xl px-4 py-20 text-center"><p>Scheme not found.</p><Link to="/schemes" className="mt-4 inline-block text-primary underline">Browse schemes</Link></div>,
  component: Detail,
});

function Sec({ title, children }: { title: string; children: ReactNode }) {
  return <section className="rounded-2xl border bg-card p-5 md:p-6"><h2 className="font-display text-xl font-semibold">{title}</h2><div className="mt-3 text-sm leading-relaxed">{children}</div></section>;
}
const List = ({ items }: { items: string[] }) => <ul className="list-disc space-y-1.5 pl-5">{items.map((i) => <li key={i}>{i}</li>)}</ul>;

function Detail() {
  const { scheme: s } = Route.useLoaderData();
  const { t } = useI18n();
  const { profile, isSaved, toggleSaved } = useLocalState();
  const [copied, setCopied] = useState(false);
  const saved = isSaved(s.id);
  const result = profile ? evaluateEligibility(profile, s) : null;
  const provider = s.level === "central" ? "Government of India" : `Government of ${getStateByCode(s.stateCode)?.name}`;

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) { try { await navigator.share({ title: s.name, text: s.benefitSummary, url }); return; } catch { /* cancelled */ } }
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* ignore */ }
  };
  const btn = "inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-2 text-sm hover:bg-secondary";

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link to="/schemes" className="no-print text-sm text-primary">← {t.common.back}</Link>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">{s.level === "central" ? t.scheme.central : `${t.scheme.state} · ${getStateByCode(s.stateCode)?.name}`}</p>
      <h1 className="mt-2 font-display text-3xl font-semibold md:text-4xl">{s.name}</h1>
      <p className="mt-2 text-muted-foreground">{s.department}{s.ministry && ` · ${s.ministry}`}</p>
      <p className="mt-4 rounded-xl bg-success-soft p-4 font-medium">{s.benefitSummary}</p>
      <div className="no-print mt-5 flex flex-wrap gap-2">
        {s.applyUrl && <a href={s.applyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">{s.applyLabel ?? t.scheme.apply}<ExternalLink className="h-3.5 w-3.5" /></a>}
        <a href={s.officialSourceUrl} target="_blank" rel="noopener noreferrer" className={btn}>{t.scheme.official}<ExternalLink className="h-3.5 w-3.5" /></a>
        <button onClick={() => toggleSaved(s.id)} aria-pressed={saved} className={btn}>{saved ? <BookmarkCheck className="h-4 w-4 text-primary" /> : <Bookmark className="h-4 w-4" />}{saved ? t.scheme.saved : t.scheme.save}</button>
        <button onClick={share} className={btn}><Share2 className="h-4 w-4" />{copied ? t.scheme.copied : t.scheme.share}</button>
        <button onClick={() => window.print()} className={btn}><Printer className="h-4 w-4" />{t.scheme.print}</button>
      </div>

      <div className="mt-8 space-y-5">
        {result && <section className="rounded-2xl border-2 border-primary/30 bg-card p-5"><StatusBadge status={result.status} /><div className="mt-3"><EligibilityExplain result={result} /></div><p className="mt-3 text-xs text-muted-foreground">{t.trust.final}</p></section>}
        <Sec title={t.scheme.overview}><p>{s.overview}</p></Sec>
        <Sec title={t.scheme.eligibility}><List items={s.eligibilityText} /></Sec>
        <Sec title={t.scheme.benefits}><List items={s.benefits} /></Sec>
        <Sec title={t.scheme.documents}><List items={s.documents} /></Sec>
        <Sec title={t.scheme.process}><ol className="list-decimal space-y-1.5 pl-5">{s.applicationProcess.map((x) => <li key={x}>{x}</li>)}</ol></Sec>
        <Sec title={t.scheme.dates}><p>{s.importantDates ?? t.scheme.noDates}</p></Sec>
        <Sec title={t.scheme.dataSource}>
          <dl className="grid gap-3 sm:grid-cols-2">
            <div><dt className="text-muted-foreground">{t.scheme.department}</dt><dd className="font-medium">{s.department}</dd></div>
            <div><dt className="text-muted-foreground">{t.scheme.dataSource}</dt><dd className="font-medium">{provider}</dd></div>
            <div><dt className="text-muted-foreground">{t.scheme.source}</dt><dd><a href={s.officialSourceUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">{s.officialSourceName}</a></dd></div>
            {s.applyUrl && <div><dt className="text-muted-foreground">{t.scheme.application}</dt><dd><a href={s.applyUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">{s.applyLabel ?? s.applyUrl}</a></dd></div>}
            <div><dt className="text-muted-foreground">{t.scheme.dataKind}</dt><dd className="font-medium">{t.scheme.curated}</dd></div>
            <div><dt className="text-muted-foreground">{t.scheme.lastUpdated}</dt><dd className="font-medium">{s.sourceLastUpdated ?? t.scheme.noLastUpdated}{s.criteriaVerifiedOn && <span className="block text-xs font-normal text-muted-foreground">{t.scheme.verifiedOn} {s.criteriaVerifiedOn}</span>}</dd></div>
          </dl>
        </Sec>
        <div className="no-print"><LiveDatasets query={s.shortName ?? (s.name.split(/[(—-]/)[0] ?? s.name).trim()} title={t.scheme.related} help={t.scheme.relatedHelp} limit={5} /></div>
      </div>
    </div>
  );
}
