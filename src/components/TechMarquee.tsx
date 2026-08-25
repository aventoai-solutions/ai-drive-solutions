import { technologies } from "@/data/site";

export function TechMarquee() {
  return (
    <section
      aria-label="Technologies we work with"
      className="overflow-hidden border-y border-border bg-foreground/[0.02] py-10"
    >
      <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.22em] text-faint">
        Technologies &amp; platforms we build with
      </p>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            aria-hidden={dup === 1 || undefined}
            className="flex items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
          >
            {technologies.map((tech) => (
              <li
                key={tech}
                className="text-lg font-bold tracking-tight text-muted-foreground/70 sm:text-xl"
              >
                {tech}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
