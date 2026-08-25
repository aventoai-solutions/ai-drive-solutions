import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col">
      <div className="relative mb-6 overflow-hidden rounded-3xl border border-border bg-surface transition-colors group-hover:border-primary/40">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={800}
          height={1000}
          className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-glow">
            {project.category} • {project.industry}
          </p>
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        </div>
        <a
          href={project.projectURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} project`}
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary"
        >
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.services.map((s) => (
          <li
            key={s}
            className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {s}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-faint">
        {project.technology.join(" · ")}
      </p>

      <a
        href={project.projectURL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary-glow"
      >
        View Project
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </article>
  );
}
