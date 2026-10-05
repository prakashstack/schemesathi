import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/Layout";
import { CATEGORIES } from "@/data/categories";
import { SCHEMES } from "@/data/schemes";
import { useI18n } from "@/hooks/useI18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/categories/")({
  head: () => seo("Scheme Categories", "Browse government schemes by category — employment, education, housing, healthcare, scholarships, loans and more."),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t.categories.title} subtitle={t.categories.subtitle} />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-3 lg:grid-cols-4">
        {CATEGORIES.map((c) => (
          <Link key={c.id} to="/categories/$id" params={{ id: c.id }} className="rounded-2xl border bg-card p-5 shadow-card hover:border-primary hover:shadow-lift">
            <span className="text-3xl" aria-hidden>{c.emoji}</span>
            <p className="mt-3 font-semibold">{t.categories[c.id]}</p>
            <p className="text-sm text-muted-foreground">{SCHEMES.filter((s) => s.categories.includes(c.id)).length} {t.common.schemes}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
