import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/Layout";
import { SchemeCard } from "@/components/SchemeCard";
import { SCHEMES } from "@/data/schemes";
import { useI18n } from "@/hooks/useI18n";
import { useLocalState } from "@/hooks/useLocalState";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/saved")({
  head: () => seo("Saved Schemes", "Schemes you saved on this device. No account needed."),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const { saved } = useLocalState();
  const list = SCHEMES.filter((s) => saved.includes(s.id));
  return (
    <>
      <PageHeader title={t.saved.title} subtitle={t.saved.subtitle} />
      <div className="mx-auto max-w-6xl px-4 py-8">
        {list.length ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{list.map((s) => <SchemeCard key={s.id} scheme={s} />)}</div> : (
          <div className="py-12 text-center"><p className="text-muted-foreground">{t.saved.empty}</p><Link to="/schemes" className="mt-4 inline-block rounded-xl bg-primary px-5 py-3 text-primary-foreground">{t.hero.browse}</Link></div>
        )}
      </div>
    </>
  );
}
