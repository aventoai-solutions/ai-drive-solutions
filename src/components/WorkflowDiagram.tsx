import {
  BellRing,
  BrainCircuit,
  Database,
  MessageCircle,
  MousePointerClick,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    icon: MousePointerClick,
    label: "Lead Captured",
    text: "A form, DM or ad enquiry is captured instantly with full source tracking — nothing sits in an inbox.",
    meta: "Website · Instagram · Meta Ads",
  },
  {
    step: "02",
    icon: BrainCircuit,
    label: "AI Qualification",
    text: "AI reads the message, answers common questions and scores the lead by budget, intent and service.",
    meta: "Replies in under 10 seconds",
    active: true,
  },
  {
    step: "03",
    icon: Database,
    label: "CRM Sync",
    text: "Clean, de-duplicated records are pushed to your CRM or sheet with the right owner and pipeline stage.",
    meta: "HubSpot · Zoho · Sheets",
  },
  {
    step: "04",
    icon: MessageCircle,
    label: "Automated Follow-Up",
    text: "WhatsApp and email sequences nurture the lead until they reply or a meeting is booked.",
    meta: "3-step nurture + booking link",
  },
  {
    step: "05",
    icon: BellRing,
    label: "Sales Notification",
    text: "Your team is alerted only when a lead is genuinely ready, with the full conversation attached.",
    meta: "Slack · Email · WhatsApp",
  },
];

const outcomes = [
  { value: "< 10s", label: "First response time" },
  { value: "24/7", label: "Always-on qualification" },
  { value: "0", label: "Leads left unanswered" },
];

export function WorkflowDiagram() {
  return (
    <div className="space-y-8">
      <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.step} delay={i * 80} className="h-full">
            <div
              className={cn(
                "group relative flex h-full flex-col rounded-3xl border p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/40",
                s.active
                  ? "border-primary/40 bg-primary/[0.07] shadow-glow"
                  : "border-border bg-surface/60",
              )}
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary-glow">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-bold tracking-[0.18em] text-faint">{s.step}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.label}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <p className="mt-5 border-t border-border/70 pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-glow">
                {s.meta}
              </p>
            </div>
          </Reveal>
        ))}

        <Reveal as="li" delay={steps.length * 80} className="h-full">
          <div className="flex h-full flex-col justify-center gap-5 rounded-3xl border border-border bg-foreground/[0.03] p-6">
            {outcomes.map((o) => (
              <div key={o.label}>
                <p className="text-2xl font-extrabold tracking-tight text-foreground">{o.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {o.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </ol>
    </div>
  );
}
