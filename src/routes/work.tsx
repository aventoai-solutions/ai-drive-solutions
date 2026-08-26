import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CtaSection } from "@/components/CtaSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projectFilters, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const title = "Our Work — Websites, Stores & AI Automation Projects | Avento AI";
const description =
  "Explore websites, digital platforms and automation solutions we have created for real estate, e-commerce, hospitality, healthcare and corporate clients.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState<string>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="relative px-5 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] [background:radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--primary)_16%,transparent)_0%,transparent_70%)]"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-up text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Explore websites, digital platforms and automation solutions we have created.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="mb-14 flex flex-wrap justify-center gap-3"
          >
            {projectFilters.map((option) => (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={filter === option}
                onClick={() => setFilter(option)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                  filter === option
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "border border-border text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
                )}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {visible.map((project, i) => (
              <Reveal key={project.id} delay={i * 70} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="text-center text-sm text-muted-foreground">
              No projects in this category yet — new work is added regularly.
            </p>
          )}
        </div>
      </section>

      <CtaSection
        title="Want Results Like These?"
        text="Tell us what you are building and we will show you exactly how we would approach it."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
