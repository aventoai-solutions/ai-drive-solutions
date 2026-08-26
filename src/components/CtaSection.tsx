import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

type Props = {
  title: string;
  text: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function CtaSection({
  title,
  text,
  primaryLabel = "Start Your Project",
  secondaryLabel = "Contact Us",
}: Props) {
  return (
    <section className="px-5 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="glass relative overflow-hidden rounded-3xl border border-border/70 p-8 sm:p-12 lg:p-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 0% 0%, color-mix(in oklab, var(--color-primary) 14%, transparent), transparent 60%)",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                Next step
              </span>
              <h2 className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {text}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
              <Link
                to="/about"
                hash="contact"
                className="rounded-xl bg-primary px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {primaryLabel}
              </Link>
              <Link
                to="/about"
                hash="contact"
                className="rounded-xl border border-border/80 px-7 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-foreground/5"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
