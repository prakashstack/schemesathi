import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ClipboardList, Landmark, LockKeyhole, ScanSearch, ShieldCheck, Sparkles } from "lucide-react";

import { SchemeCard } from "@/components/SchemeCard";
import { CATEGORIES } from "@/data/categories";
import { SCHEMES } from "@/data/schemes";
import { useI18n } from "@/hooks/useI18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Find Government Schemes You May Be Eligible For", "Check eligibility for Central and Gujarat government schemes in your browser. Independent, free, no login required."),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  const featured = ["pm-mudra-yojana", "gj-mysy", "pmay-urban-2"].map((id) => SCHEMES.find((s) => s.id === id)!).filter(Boolean);
  return (
    <>
      <section className="hero-gradient relative overflow-hidden border-b">
        <div className="civic-pattern absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground"><ShieldCheck className="h-3.5 w-3.5 text-primary" />{t.trust.title}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">{t.hero.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/eligibility" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-lift hover:bg-primary/90">{t.hero.check}<ArrowRight className="h-4 w-4" /></Link>
            <Link to="/schemes" className="inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3.5 font-medium hover:bg-secondary">{t.hero.browse}</Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {[[Landmark, t.hero.pill1], [BadgeCheck, t.hero.pill2], [LockKeyhole, t.hero.pill3]].map(([I, l], i) => { const Icon = I as typeof Landmark; return <li key={i} className="flex items-center gap-2"><Icon className="h-4 w-4 text-success" />{l as string}</li>; })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">{t.how.title}</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {[[ClipboardList, t.how.s1, t.how.s1d], [ScanSearch, t.how.s2, t.how.s2d], [Sparkles, t.how.s3, t.how.s3d]].map(([I, h, d], i) => { const Icon = I as typeof Landmark; return (
            <li key={i} className="rounded-2xl border bg-card p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary"><Icon className="h-5 w-5" /></span>
              <p className="mt-4 font-semibold">{i + 1}. {h as string}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
            </li>); })}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between"><h2 className="font-display text-2xl font-semibold">{t.categories.title}</h2><Link to="/categories" className="text-sm text-primary">{t.common.viewAll} →</Link></div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {CATEGORIES.map((c) => (
            <Link key={c.id} to="/categories/$id" params={{ id: c.id }} className="flex flex-col items-center gap-2 rounded-xl border bg-card p-4 text-center text-sm hover:border-primary hover:shadow-card">
              <span className="text-2xl" aria-hidden>{c.emoji}</span>{t.categories[c.id]}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-display text-2xl font-semibold">{t.nav.schemes}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">{featured.map((s) => <SchemeCard key={s.id} scheme={s} />)}</div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border-l-4 border-primary bg-primary-soft p-6 md:p-8">
          <h2 className="font-display text-xl font-semibold">{t.trust.title}</h2>
          <p className="mt-2">{t.trust.body}</p>
          <p className="mt-2 font-medium">{t.trust.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
