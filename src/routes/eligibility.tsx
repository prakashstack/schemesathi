import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Lock, MapPin } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { GUJARAT_DISTRICTS, STATES } from "@/data/states";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/hooks/useI18n";
import { useLocalState } from "@/hooks/useLocalState";
import { cn } from "@/lib/utils";
import { lookupPincode } from "@/services/locationApi";
import { ApiError } from "@/services/http";
import type { Area, Category, ConditionKey, EducationLevel, Employment, Gender, MaritalStatus, UserProfile } from "@/types/scheme";
import { EDUCATION_ORDER } from "@/types/scheme";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/eligibility")({
  head: () => seo("Check My Eligibility", "Answer a few simple questions to see government schemes you may be eligible for. Processed entirely in your browser."),
  component: Wizard,
});

const TOTAL = 3;

function Choice<T extends string>({ name, value, options, onChange }: { name: string; value?: T | undefined; options: { v: T; l: string }[]; onChange: (v: T) => void }) {
  return (
    <div role="radiogroup" aria-label={name} className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {options.map((o) => (
        <Button variant="outline" type="button" role="radio" aria-checked={value === o.v} key={o.v} onClick={() => onChange(o.v)}
          className={cn("h-auto min-h-12 justify-start whitespace-normal rounded-lg px-4 py-3 text-left text-sm transition", value === o.v ? "border-primary bg-primary-soft font-medium text-primary ring-1 ring-primary" : "bg-card hover:border-primary/50")}>
          {o.l}
        </Button>
      ))}
    </div>
  );
}

function Field({ label, children, id, help }: { label: string; children: ReactNode; id?: string; help?: string }) {
  return (
    <div className="space-y-2">
      {id ? <label htmlFor={id} className="block font-medium">{label}</label> : <p className="font-medium">{label}</p>}
      {children}
      {help && <p className="text-xs text-muted-foreground">{help}</p>}
    </div>
  );
}

function Wizard() {
  const { t } = useI18n();
  const nav = useNavigate();
  const { profile, setProfile } = useLocalState();
  const [step, setStep] = useState(0);
  const [p, setP] = useState<UserProfile>({ conditions: {} });
  const [pin, setPin] = useState("");
  const [pinMsg, setPinMsg] = useState("");
  useEffect(() => { if (profile) setP(profile); }, [profile]);
  const up = (patch: Partial<UserProfile>) => setP((x) => ({ ...x, ...patch }));
  const opts = <K extends string>(o: Record<K, string>) => (Object.keys(o) as K[]).map((v) => ({ v, l: o[v] }));
  const inp = "w-full rounded-xl border bg-card px-4 py-3";

  const doPin = async () => {
    setPinMsg(t.common.loading);
    try {
      const r = await lookupPincode(pin);
      up({ stateCode: r.stateCode ?? p.stateCode, district: r.district });
      setPinMsg(`✓ ${r.district}, ${r.stateName}`);
    } catch (e) {
      setPinMsg(t.errors[e instanceof ApiError ? e.kind : "unavailable"]);
    }
  };

  const groups: { title: string; keys: ConditionKey[] }[] = [
    { title: t.wizard.conditionGroups.work, keys: ["farmer", "landOwner", "entrepreneur", "streetVendor", "artisan"] },
    { title: t.wizard.conditionGroups.family, keys: ["disability", "seniorInFamily", "children", "girlChildUnder10", ...(p.gender === "female" && p.maritalStatus !== "single" ? (["widow"] as ConditionKey[]) : []), "veteran", ...(p.maritalStatus === "married" ? (["interCasteMarriage"] as ConditionKey[]) : [])] },
    { title: t.wizard.conditionGroups.home, keys: ["noPuccaHouse", "bplCard", "bankAccount"] },
  ];

  const sections = [
    <div key={0} className="space-y-6">
      <Field label={t.wizard.age} id="age"><input id="age" type="number" inputMode="numeric" min={0} max={120} className={inp} value={p.age ?? ""} onChange={(e) => up({ age: e.target.value ? Number(e.target.value) : undefined })} /></Field>
      <Field label={t.wizard.gender}><Choice name={t.wizard.gender} value={p.gender} options={opts<Gender>(t.gender)} onChange={(gender) => up({ gender })} /></Field>
      <Field label={t.wizard.marital}><Choice name={t.wizard.marital} value={p.maritalStatus} options={opts<MaritalStatus>(t.marital)} onChange={(maritalStatus) => up({ maritalStatus })} /></Field>
    </div>,
    <div key={1} className="space-y-6">
      <Field label={t.wizard.pincode} id="pin">
        <div className="flex gap-2"><input id="pin" inputMode="numeric" maxLength={6} className={cn(inp, "min-w-0")} value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))} /><Button variant="outline" type="button" onClick={doPin} disabled={pin.length !== 6} className="h-auto shrink-0"><MapPin className="h-4 w-4" />{t.wizard.pinLookup}</Button></div>
        {pinMsg && <p className="text-sm text-muted-foreground" aria-live="polite">{pinMsg}</p>}
      </Field>
      <Field label={t.wizard.state} id="state"><select id="state" className={inp} value={p.stateCode ?? ""} onChange={(e) => up({ stateCode: e.target.value || undefined, district: undefined })}><option value="">{t.wizard.select}</option>{STATES.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}</select></Field>
      <Field label={t.wizard.district} id="district">
        {p.stateCode === "GJ" ? (
          <select id="district" className={inp} value={p.district ?? ""} onChange={(e) => up({ district: e.target.value || undefined })}><option value="">{t.wizard.select}</option>{GUJARAT_DISTRICTS.map((d) => <option key={d}>{d}</option>)}</select>
        ) : <input id="district" className={inp} value={p.district ?? ""} onChange={(e) => up({ district: e.target.value || undefined })} />}
      </Field>
      <Field label={t.wizard.area}><Choice name={t.wizard.area} value={p.area} options={opts<Area>(t.area)} onChange={(area) => up({ area })} /></Field>
    </div>,
    <Field key={2} label={t.wizard.category}><Choice name={t.wizard.category} value={p.category} options={opts<Category>(t.category)} onChange={(category) => up({ category })} /></Field>,
    <div key={3} className="space-y-6">
      <Field label={t.wizard.income} id="income" help={t.wizard.incomeHelp}><input id="income" type="number" inputMode="numeric" min={0} step={1000} className={inp} value={p.annualIncome ?? ""} onChange={(e) => up({ annualIncome: e.target.value ? Number(e.target.value) : undefined })} />{p.annualIncome != null && <p className="text-sm font-medium">₹{p.annualIncome.toLocaleString("en-IN")}</p>}</Field>
      <Field label={t.wizard.taxPayer}><Choice name={t.wizard.taxPayer} value={p.conditions.incomeTaxPayer == null ? undefined : p.conditions.incomeTaxPayer ? "y" : "n"} options={[{ v: "y", l: t.wizard.yes }, { v: "n", l: t.wizard.no }]} onChange={(v) => up({ conditions: { ...p.conditions, incomeTaxPayer: v === "y" } })} /></Field>
    </div>,
    <div key={4} className="space-y-6">
      <Field label={t.wizard.employment}><Choice name={t.wizard.employment} value={p.employment} options={opts<Employment>(t.employment)} onChange={(employment) => up({ employment, isStudent: employment === "student" ? true : p.isStudent })} /></Field>
      <Field label={t.wizard.occupation} id="occ"><input id="occ" className={inp} value={p.occupationText ?? ""} onChange={(e) => up({ occupationText: e.target.value })} /></Field>
    </div>,
    <div key={5} className="space-y-6">
      <Field label={t.wizard.education} id="edu"><select id="edu" className={inp} value={p.education ?? ""} onChange={(e) => up({ education: (e.target.value || undefined) as EducationLevel | undefined })}><option value="">{t.wizard.select}</option>{EDUCATION_ORDER.map((k) => <option key={k} value={k}>{t.education[k]}</option>)}</select></Field>
      <Field label={t.wizard.isStudent}><Choice name={t.wizard.isStudent} value={p.isStudent == null ? undefined : p.isStudent ? "y" : "n"} options={[{ v: "y", l: t.wizard.yes }, { v: "n", l: t.wizard.no }]} onChange={(v) => up({ isStudent: v === "y" })} /></Field>
    </div>,
  ];

  const steps = [
    <div key="about" className="space-y-8">{sections[0]}{sections[1]}{sections[2]}</div>,
    <div key="work" className="space-y-8">{sections[3]}{sections[4]}{sections[5]}</div>,
    <div key="optional" className="divide-y">
      {groups.map((group) => (
        <details key={group.title} className="group py-4 first:pt-0">
          <summary className="cursor-pointer py-2 font-medium text-primary">{group.title}</summary>
          <div className="mt-4 space-y-6">
            {group.keys.map((k) => (
              <Field key={k} label={t.conditions[k]}>
                <Choice name={t.conditions[k]} value={p.conditions[k] == null ? "unknown" : p.conditions[k] ? "y" : "n"}
                  options={[{ v: "y", l: t.wizard.yes }, { v: "n", l: t.wizard.no }, { v: "unknown", l: t.wizard.notSure }]}
                  onChange={(v) => {
                    const conditions = { ...p.conditions };
                    if (v === "unknown") delete conditions[k];
                    else conditions[k] = v === "y";
                    up({ conditions });
                  }} />
              </Field>
            ))}
          </div>
        </details>
      ))}
    </div>,
  ];

  const finish = () => { setProfile(p); nav({ to: "/results" }); };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
      <h1 className="font-display text-3xl font-semibold">{t.wizard.title}</h1>
      <div className="mt-6">
        <div className="flex flex-wrap justify-between gap-2 text-sm"><h2 tabIndex={-1} id="step-heading" className="font-medium">{t.wizard.steps[step]}</h2><span className="shrink-0 text-muted-foreground">{t.wizard.step.replace("{n}", String(step + 1)).replace("{total}", String(TOTAL))}</span></div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={TOTAL}><div className="h-full bg-primary transition-all" style={{ width: `${((step + 1) / TOTAL) * 100}%` }} /></div>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (step < TOTAL - 1) { setStep(step + 1); document.getElementById("step-heading")?.focus(); } else finish(); }} className="mt-8 space-y-6 border-t pt-6">
        {steps[step]}
        <div className="mt-8 flex justify-between gap-3">
          <Button variant="outline" type="button" disabled={step === 0} onClick={() => { setStep(step - 1); document.getElementById("step-heading")?.focus(); }} className="h-auto px-4 py-3"><ArrowLeft className="h-4 w-4" />{t.wizard.back}</Button>
          <Button type="submit" className="h-auto whitespace-normal px-4 py-3">{step < TOTAL - 1 ? t.wizard.next : t.wizard.finish}<ArrowRight className="h-4 w-4" /></Button>
        </div>
      </form>
      <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" />{t.wizard.privacyNote}</p>
    </div>
  );
}
