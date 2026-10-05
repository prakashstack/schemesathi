import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/Layout";
import { SchemeBrowser } from "@/components/SchemeBrowser";
import { useI18n } from "@/hooks/useI18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/schemes/")({
  validateSearch: (s: Record<string, unknown>): { q?: string } => (typeof s["q"] === "string" ? { q: s["q"] } : {}),
  head: () => seo("Browse Government Schemes", "Search and filter Central and Gujarat government schemes, plus live official datasets from data.gov.in."),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const { q } = Route.useSearch();
  return (
    <>
      <PageHeader title={t.nav.schemes} subtitle={t.hero.subtitle} />
      <div className="mx-auto max-w-6xl px-4 py-8"><SchemeBrowser initialQuery={q ?? ""} /></div>
    </>
  );
}
