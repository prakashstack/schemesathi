import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Star } from "lucide-react";

import { PageHeader } from "@/components/Layout";
import { STATES } from "@/data/states";
import { useI18n } from "@/hooks/useI18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/states/")({
  head: () => seo("States & Union Territories", "Browse government schemes by Indian state and union territory, starting with Gujarat."),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t.states.title} subtitle={t.states.subtitle} />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Link to="/states/gujarat" className="flex items-center justify-between rounded-2xl border-2 border-primary bg-primary-soft p-6 hover:shadow-lift">
          <div><p className="flex items-center gap-2 text-xs font-semibold uppercase text-primary"><Star className="h-3.5 w-3.5" />Featured</p><p className="mt-1 font-display text-2xl font-semibold">{t.states.gujaratTitle}</p><p className="text-sm text-muted-foreground">{t.states.gujaratSub}</p></div>
          <span className="text-primary">→</span>
        </Link>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STATES.filter((s) => s.code !== "GJ").map((s) => (
            <li key={s.code} className="rounded-xl border bg-card p-4">
              <p className="font-medium">{s.name} <span className="text-xs text-muted-foreground">{s.type === "ut" ? "UT" : ""}</span></p>
              <p className="mt-1 text-xs text-muted-foreground">{t.states.noApi}</p>
              {s.portalUrl && <a href={s.portalUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-primary">{t.states.portal}<ExternalLink className="h-3 w-3" /></a>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
