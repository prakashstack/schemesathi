import { useQuery } from "@tanstack/react-query";
import { Database, ExternalLink, RefreshCw, WifiOff } from "lucide-react";

import { useI18n } from "@/hooks/useI18n";
import { searchOgdDatasets } from "@/services/governmentApi";
import { ApiError } from "@/services/http";

export function ApiErrorBox({ error, onRetry, officialUrl }: { error: unknown; onRetry?: () => void; officialUrl?: string }) {
  const { t } = useI18n();
  const kind = error instanceof ApiError ? error.kind : "unavailable";
  return (
    <div role="alert" className="rounded-xl border border-warning/40 bg-warning-soft p-4 text-sm">
      <p className="flex gap-2"><WifiOff className="h-4 w-4 shrink-0" aria-hidden />{t.errors[kind]}</p>
      <div className="mt-3 flex gap-3">
        {onRetry && <button onClick={onRetry} className="inline-flex items-center gap-1 font-medium text-primary"><RefreshCw className="h-3.5 w-3.5" />{t.errors.retry}</button>}
        {officialUrl && <a href={officialUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">{t.scheme.officialPortal}</a>}
      </div>
    </div>
  );
}

export function LiveDatasets({ query, title, help, limit = 6 }: { query: string; title?: string; help?: string; limit?: number }) {
  const { t } = useI18n();
  const q = useQuery({ queryKey: ["ogd", query, limit], queryFn: () => searchOgdDatasets(query, { limit }), enabled: !!query.trim(), retry: 1, staleTime: 5 * 60_000 });
  if (!query.trim()) return null;
  return (
    <section aria-labelledby="live-h" className="rounded-2xl border bg-card p-5">
      <h2 id="live-h" className="flex items-center gap-2 font-display text-lg font-semibold"><Database className="h-5 w-5 text-primary" aria-hidden />{title ?? t.search.liveTitle}</h2>
      <p className="mt-1 text-xs text-muted-foreground">{help ?? t.search.liveHelp} · {t.scheme.dataKind}: {t.scheme.publicApi} (api.data.gov.in)</p>
      <div className="mt-4" aria-live="polite">
        {q.isLoading && <ul className="space-y-2">{[0, 1, 2].map((i) => <li key={i} className="h-14 animate-pulse rounded-lg bg-muted" />)}</ul>}
        {q.isError && <ApiErrorBox error={q.error} onRetry={() => q.refetch()} officialUrl="https://www.data.gov.in" />}
        {q.data && q.data.items.length === 0 && <p className="text-sm text-muted-foreground">{t.errors.empty}</p>}
        {q.data && q.data.items.length > 0 && (
          <ul className="divide-y">
            {q.data.items.map((d) => (
              <li key={d.id} className="py-3">
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="group flex gap-2 text-sm font-medium hover:text-primary">
                  <span className="flex-1">{d.title}</span><ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
                </a>
                <p className="mt-1 text-xs text-muted-foreground">
                  {d.orgs.slice(0, 2).join(" · ")}{d.orgType && ` · ${d.orgType}`} · {t.scheme.lastUpdated}: {d.updated ? new Date(d.updated).toLocaleDateString("en-IN") : t.scheme.noLastUpdated}
                </p>
              </li>
            ))}
          </ul>
        )}
        {q.data && <p className="mt-2 text-xs text-muted-foreground">{q.data.total.toLocaleString("en-IN")} datasets on data.gov.in</p>}
      </div>
    </section>
  );
}
