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
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-violet p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 size-96 animate-float rounded-full bg-primary-foreground/15 blur-[100px]" />
          <h2 className="relative z-10 text-balance text-3xl font-extrabold text-primary-foreground sm:text-5xl">
            {title}
          </h2>
          <p className="relative z-10 mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {text}
          </p>
          <div className="relative z-10 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/about"
              hash="contact"
              className="rounded-2xl bg-primary-foreground px-8 py-4 text-base font-bold text-background shadow-card transition-transform hover:scale-[1.03]"
            >
              {primaryLabel}
            </Link>
            <Link
              to="/about"
              hash="contact"
              className="rounded-2xl border border-primary-foreground/40 px-8 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
