import { createFileRoute, notFound } from "@tanstack/react-router";

import { PageHeader } from "@/components/Layout";
import { SchemeBrowser } from "@/components/SchemeBrowser";
import { getCategory } from "@/data/categories";
import { SCHEMES } from "@/data/schemes";
import { useI18n } from "@/hooks/useI18n";

export const Route = createFileRoute("/categories/$id")({
  loader: ({ params }) => {
    const cat = getCategory(params.id);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => {
    const n = loaderData?.cat.id ?? "Category";
    const title = `${n.charAt(0).toUpperCase() + n.slice(1)} Schemes | SchemeSathi`;
    const d = `Government schemes in the ${n} category, with eligibility criteria and official links.`;
    return { meta: [{ title }, { name: "description", content: d }, { property: "og:title", content: title }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] };
  },
  component: Page,
});

function Page() {
  const { cat } = Route.useLoaderData();
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={`${cat.emoji} ${t.categories[cat.id]}`} subtitle={t.categories.subtitle} />
      <div className="mx-auto max-w-6xl px-4 py-8"><SchemeBrowser key={cat.id} base={SCHEMES.filter((s) => s.categories.includes(cat.id))} liveQuery={cat.keywords[0]} /></div>
    </>
  );
}
