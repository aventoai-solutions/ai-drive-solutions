import { useEffect, useState } from "react";
import {
  BellRing,
  CalendarCheck,
  Check,
  Database,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sources = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Meta Ads" },
  { icon: Globe, label: "Website" },
];

const pipeline = [
  { icon: Sparkles, label: "AI qualifying lead…", meta: "Analysing intent" },
  { icon: Check, label: "Qualified lead", meta: "Score 92 / 100" },
  { icon: Database, label: "Added to CRM", meta: "Owner assigned" },
  { icon: MessageCircle, label: "WhatsApp follow-up sent", meta: "Delivered · 2s" },
  { icon: Mail, label: "Email sequence started", meta: "3-step nurture" },
  { icon: CalendarCheck, label: "Appointment booked", meta: "Tomorrow, 11:00" },
  { icon: BellRing, label: "Sales team notified", meta: "Qualified lead ready" },
];

const enquiries = [
  { name: "New enquiry", text: "Hi! I saw your reel — what are your prices?", tag: "Instagram DM" },
  { name: "New enquiry", text: "Do you handle bookings for clinics?", tag: "Website form" },
  { name: "New enquiry", text: "Can you send a quote for 3 units?", tag: "Meta lead ad" },
];

const TOTAL = pipeline.length + 1; // +1 for the incoming-lead step

export function LeadFlowVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % TOTAL), 1600);
    return () => clearInterval(id);
  }, []);

  const cycle = Math.floor(step / TOTAL);
  const enquiry = enquiries[cycle % enquiries.length] ?? enquiries[0]!;

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_40%,color-mix(in_oklab,var(--primary)_24%,transparent)_0%,transparent_72%)] blur-2xl"
      />

      {/* Sources */}
      <ul className="mb-6 flex flex-wrap justify-center gap-2.5">
        {sources.map(({ icon: Icon, label }, i) => (
          <li
            key={label}
            className={cn(
              "glass flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-semibold transition-all duration-500",
              step === 0 && i === cycle % sources.length
                ? "border-primary/60 text-foreground shadow-glow"
                : "text-muted-foreground",
            )}
          >
            <Icon className="size-3.5 shrink-0 text-primary-glow" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-6">
        {/* Phone */}
        <div className="relative w-[210px] shrink-0 rounded-[2.2rem] border border-border bg-surface p-2 shadow-card">
          <div className="relative overflow-hidden rounded-[1.8rem] bg-background">
            <div className="flex items-center justify-between px-4 pt-3 text-[9px] font-semibold text-faint">
              <span>9:41</span>
              <span className="h-3.5 w-14 rounded-full bg-foreground/10" />
              <span>100%</span>
            </div>

            <div className="px-3 pb-4 pt-3">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-primary-glow">
                Leads Inbox
              </p>

              <div
                key={`${enquiry.tag}-${cycle}`}
                className="animate-fade-in rounded-2xl border border-primary/40 bg-primary/10 p-3"
              >
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="truncate text-[10px] font-bold text-foreground">
                    {enquiry.name}
                  </span>
                  <span className="shrink-0 text-[8px] uppercase tracking-wider text-primary-glow">
                    {enquiry.tag}
                  </span>
                </div>
                <p className="text-[10px] leading-relaxed text-muted-foreground">{enquiry.text}</p>
              </div>

              <div className="mt-3 space-y-2">
                {[0, 1, 2].map((n) => (
                  <div key={n} className="rounded-2xl border border-border bg-surface/60 p-3">
                    <div className="mb-1.5 h-1.5 w-16 rounded-full bg-foreground/15" />
                    <div className="h-1.5 w-full rounded-full bg-foreground/10" />
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-border bg-surface/70 px-3 py-2">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                <span className="text-[9px] font-semibold text-muted-foreground">
                  AI replying automatically
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline */}
        <ol className="relative w-full min-w-0 space-y-2.5">
          {pipeline.map(({ icon: Icon, label, meta }, i) => {
            const active = step === i + 1;
            const done = step > i + 1;
            return (
              <li
                key={label}
                className={cn(
                  "glass flex items-center gap-3 rounded-2xl px-3.5 py-3 transition-all duration-500",
                  active
                    ? "border-primary/60 shadow-glow"
                    : "border-border opacity-70",
                )}
              >
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-xl transition-colors",
                    active || done
                      ? "bg-primary/15 text-primary-glow"
                      : "bg-foreground/5 text-muted-foreground",
                  )}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[12px] font-bold text-foreground">
                    {label}
                  </span>
                  <span className="block truncate text-[10px] text-muted-foreground">{meta}</span>
                </span>
                <span
                  className={cn(
                    "size-4 shrink-0 rounded-full border transition-all duration-500",
                    active
                      ? "animate-pulse border-primary bg-primary/40"
                      : done
                        ? "border-primary/60 bg-primary/60"
                        : "border-border",
                  )}
                  aria-hidden="true"
                />
              </li>
            );
          })}
        </ol>
      </div>

      <p className="mt-6 text-balance text-center text-[10px] uppercase tracking-[0.14em] text-faint">
        Social enquiry → AI qualification → CRM → follow-up → sales notified
      </p>
    </div>
  );
}
