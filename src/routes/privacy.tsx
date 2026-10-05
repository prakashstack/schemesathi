import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { PageHeader } from "@/components/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo("Privacy", "SchemeSathi needs no login and processes your eligibility answers entirely in your browser."),
  component: Page,
});

const points = [
  ["No login required", "There are no accounts, passwords or OTPs. Anyone can use SchemeSathi immediately."],
  ["No backend account or server storage", "SchemeSathi has no server of its own and no database. Your answers are never sent to us."],
  ["Eligibility is processed in your browser", "Your age, location, category, income and other answers are compared with published scheme criteria by code running on your own device."],
  ["No Aadhaar, PAN or identity documents", "We never ask for Aadhaar, PAN, bank account numbers or any identity document."],
  ["Saved preferences stay on this device", "Your language, saved schemes and last eligibility answers are kept in your browser's localStorage so you can come back later. Use \"Clear my answers\" on the results page or clear your browser data to remove them."],
  ["Public data sources", "Live dataset search calls the Government of India open-data API (data.gov.in) directly from your browser with only your search words. The optional PIN code lookup calls the public India Post PIN API with only the PIN you type."],
];

function Page() {
  return (
    <>
      <PageHeader title="Privacy" subtitle="Simple and privacy-friendly by design." />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-8">
        {points.map(([h, d]) => (
          <div key={h} className="flex gap-3 rounded-2xl border bg-card p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" /><div><h2 className="font-semibold">{h}</h2><p className="mt-1 text-sm text-muted-foreground">{d}</p></div></div>
        ))}
        <p className="pt-4 text-sm text-muted-foreground">SchemeSathi is not affiliated with or operated by the Government of India or any State Government.</p>
      </div>
    </>
  );
}
