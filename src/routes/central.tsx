import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/Layout";
import { SchemeBrowser } from "@/components/SchemeBrowser";
import { SCHEMES } from "@/data/schemes";
import { useI18n } from "@/hooks/useI18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/central")({
  head: () => seo("Central Government Schemes", "Schemes run by Government of India ministries — loans, housing, health cover, scholarships, pensions and more."),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t.central.title} subtitle={t.central.subtitle} />
      <div className="mx-auto max-w-6xl px-4 py-8"><SchemeBrowser base={SCHEMES.filter((s) => s.level === "central")} liveQuery="scheme" /></div>
    </>
  );
}
