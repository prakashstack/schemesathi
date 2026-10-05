import { Link } from "@tanstack/react-router";
import { Bookmark, Languages, Menu, ShieldCheck, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { LANGUAGES, useI18n } from "@/hooks/useI18n";

export function Layout({ children }: { children: ReactNode }) {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/schemes", label: t.nav.schemes },
    { to: "/categories", label: t.nav.categories },
    { to: "/central", label: t.nav.central },
    { to: "/states/gujarat", label: t.nav.gujarat },
    { to: "/states", label: t.nav.states },
  ] as const;
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
        {t.common.skipToContent}
      </a>
      <div className="tricolor-bar h-1 no-print" aria-hidden />
      <header className="no-print sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
          <Link to="/" className="flex items-center gap-2" aria-label="SchemeSathi home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg">स</span>
            <span className="font-display text-xl font-semibold">SchemeSathi</span>
          </Link>
          <nav aria-label="Main" className="ml-6 hidden gap-1 lg:flex">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground" activeProps={{ className: "text-foreground bg-secondary font-medium" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <label className="flex items-center gap-1 rounded-md border bg-card px-2 py-1.5 text-sm">
              <Languages className="h-4 w-4 text-muted-foreground" aria-hidden />
              <span className="sr-only">{t.common.language}</span>
              <select value={lang} onChange={(e) => setLang(e.target.value as typeof lang)} className="bg-transparent outline-none">
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </label>
            <Link to="/saved" className="hidden items-center gap-1 rounded-md px-3 py-2 text-sm hover:bg-secondary sm:flex">
              <Bookmark className="h-4 w-4" aria-hidden /> {t.nav.saved}
            </Link>
            <button className="rounded-md p-2 hover:bg-secondary lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav aria-label="Mobile" className="border-t px-4 py-2 lg:hidden">
            {[...links, { to: "/saved" as const, label: t.nav.saved }, { to: "/privacy" as const, label: t.nav.privacy }].map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-base hover:bg-secondary">
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main id="main" className="flex-1">{children}</main>
      <footer className="no-print mt-16 border-t bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold">SchemeSathi</p>
            <p className="mt-2 text-sm text-muted-foreground">{t.trust.body}</p>
            <p className="mt-3 flex gap-2 text-sm font-medium"><ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden />{t.trust.disclaimer}</p>
          </div>
          <div>
            <p className="font-semibold">{t.footer.about}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t.footer.aboutBody}</p>
            <Link to="/privacy" className="mt-3 inline-block text-sm text-primary underline">{t.nav.privacy}</Link>
          </div>
          <div>
            <p className="font-semibold">{t.footer.links}</p>
            <ul className="mt-2 space-y-1 text-sm">
              {[["https://www.myscheme.gov.in", "myScheme (Govt. of India)"], ["https://www.india.gov.in", "National Portal of India"], ["https://www.data.gov.in", "Open Government Data (data.gov.in)"], ["https://www.digitalgujarat.gov.in", "Digital Gujarat"], ["https://gujaratindia.gov.in", "Government of Gujarat"]].map(([h, l]) => (
                <li key={h}><a href={h} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <p className="border-t py-4 text-center text-xs text-muted-foreground">{t.footer.madeFor}</p>
      </footer>
    </div>
  );
}

export function PageHeader({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="hero-gradient border-b">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h1 className="font-display text-3xl font-semibold md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
