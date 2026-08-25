import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const steps = [
  { step: "01", label: "Website Lead" },
  { step: "02", label: "AI Qualification", active: true },
  { step: "03", label: "CRM" },
  { step: "04", label: "WhatsApp Follow-Up" },
  { step: "05", label: "Sales Notification" },
];

export function WorkflowDiagram() {
  return (
    <div className="relative">
      <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px flow-line lg:block" />
      <ul className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.step} delay={i * 90}>
            <div
              className={cn(
                "h-full rounded-2xl border p-4 text-center backdrop-blur-md transition-all hover:-translate-y-1 sm:p-5",
                s.active
                  ? "border-primary/40 bg-primary/10 shadow-glow"
                  : "border-border bg-surface/70",
              )}
            >
              <span className="mb-2 block text-xs font-bold text-primary-glow">{s.step}</span>
              <span
                className={cn(
                  "text-sm text-foreground",
                  s.active ? "font-semibold" : "font-medium",
                )}
              >
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
