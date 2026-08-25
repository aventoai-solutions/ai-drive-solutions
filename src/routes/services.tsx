import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import servicesAutomation from "@/assets/services-automation.jpg";
import servicesWeb from "@/assets/services-web.jpg";
import servicesSystems from "@/assets/services-systems.jpg";
import servicesDigital from "@/assets/hero-dashboard.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { serviceDetails } from "@/data/services";

const title = "Services — AI Automation, Web Development & Business Systems | Nexus AI";
const description =
  "AI chatbots, WhatsApp automation, conversion-focused websites, custom CRMs, dashboards and complete digital setup for modern businesses.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

const images = [servicesAutomation, servicesWeb, servicesSystems, servicesDigital];
const imageAlts = [
  "Abstract visualization of automated data pipelines and AI infrastructure",
  "Collection of responsive website screens floating in dark space",
  "Custom CRM dashboard and customer portal interfaces",
  "AI analytics dashboard with predictive insights",
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-full -translate-x-1/2 rounded-full bg-violet/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-up text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Technology Solutions Built for{" "}
            <span className="gradient-text">Modern Businesses</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We combine AI, software development and digital strategy to help companies work smarter
            and grow faster.
          </p>
        </div>
      </section>

      {serviceDetails.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={
            index % 2 === 1
              ? "scroll-mt-24 border-y border-border bg-foreground/[0.02] px-5 py-20 sm:px-6 sm:py-28"
              : "scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
          }
        >
          <div className="mx-auto max-w-7xl">
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <SectionHeading
                  eyebrow={service.eyebrow}
                  title={service.title}
                  description={service.description}
                />
                <Reveal delay={80}>
                  <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal delay={120} className="group relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary to-violet opacity-20 blur transition duration-1000 group-hover:opacity-40"
                />
                <img
                  src={images[index]}
                  alt={imageAlts[index]}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="relative w-full rounded-3xl border border-border object-cover shadow-card"
                />
              </Reveal>
            </div>

            {service.useCase && (
              <Reveal className="mt-16">
                <div className="glass rounded-3xl p-7 sm:p-10">
                  <h3 className="text-lg font-bold text-foreground">{service.useCase.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    A real estate company receives a website enquiry. Without anyone lifting a
                    finger, the AI system:
                  </p>
                  <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {service.useCase.steps.map((step, i) => (
                      <li
                        key={step}
                        className="rounded-2xl border border-border bg-surface/70 p-4 text-sm text-foreground"
                      >
                        <span className="mb-1.5 block text-xs font-bold text-primary-glow">
                          0{i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="mt-10">
                    <WorkflowDiagram />
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      ))}

      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Not Sure What Your Business Needs?
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
            Tell us your challenge and we will recommend the right solution.
          </p>
          <Link
            to="/about"
            hash="contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Talk to Our Team <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
