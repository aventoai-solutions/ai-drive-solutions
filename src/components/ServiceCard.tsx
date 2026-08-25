import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { accentClasses, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service }: { service: Service }) {
  const accent = accentClasses[service.accent];
  const Icon = service.icon;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-3xl border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-card sm:p-8",
        accent.border,
      )}
    >
      <span
        className={cn(
          "mb-6 flex size-12 items-center justify-center rounded-xl transition-colors",
          accent.bg,
          accent.ring,
        )}
      >
        <Icon
          className={cn("size-5 transition-colors group-hover:text-primary-foreground", accent.text)}
          aria-hidden="true"
        />
      </span>

      <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

      <ul className="mb-7 flex flex-wrap gap-2">
        {service.items.slice(0, 5).map((item) => (
          <li
            key={item}
            className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>

      <Link
        to="/services"
        hash={service.id}
        className={cn(
          "mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors",
          accent.text,
        )}
      >
        {service.cta}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
