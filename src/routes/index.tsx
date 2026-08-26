import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Gauge,
  LifeBuoy,
  Rocket,
  Settings2,
  Smartphone,
  Sparkles,
  Wand2,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { CtaSection } from "@/components/CtaSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TechMarquee } from "@/components/TechMarquee";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";

const title = "Avento AI — AI Automation & Web Development Agency in Dubai";
const description =
  "We build AI-powered automation, high-performance websites and custom business systems that help modern businesses save time, generate leads and scale.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const reasons = [
  {
    icon: Sparkles,
    title: "AI-First Approach",
    text: "We use modern AI technologies to create smarter business solutions.",
  },
  {
    icon: Wand2,
    title: "Custom Solutions",
    text: "Every business is different, so we build around your specific needs.",
  },
  {
    icon: Settings2,
    title: "Modern Technology",
    text: "We use modern development technologies and scalable systems.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    text: "Everything we build works perfectly across phones, tablets and desktop.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    text: "Fast loading, clean development and optimized experiences.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    text: "We help businesses improve and scale their digital systems.",
  },
];

const process = [
  { step: "01", title: "Discover", text: "We understand your business, goals and challenges." },
  { step: "02", title: "Strategy", text: "We design the right digital or automation solution." },
  { step: "03", title: "Build", text: "Our team develops, tests and optimizes the solution." },
  {
    step: "04",
    title: "Launch & Scale",
    text: "We launch the system and help you improve and scale.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-full -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="animate-fade-up">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-glow">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-glow opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary-glow" />
                </span>
                AI-Powered Digital Transformation
              </p>
              <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Build Smarter.{" "}
                <span className="gradient-text">Automate Faster.</span> Grow Bigger.
              </h1>
              <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                We create AI-powered automation, high-performance websites and intelligent digital
                systems that help modern businesses scale.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/about"
                  hash="contact"
                  className="rounded-xl bg-primary px-8 py-4 text-center text-base font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105"
                >
                  Start a Project
                </Link>
                <Link
                  to="/work"
                  className="rounded-xl border border-border bg-foreground/5 px-8 py-4 text-center text-base font-bold text-foreground transition-colors hover:bg-foreground/10"
                >
                  View Our Work
                </Link>
              </div>
              <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-xs uppercase tracking-[0.18em] text-faint">
                <div>
                  <dt className="sr-only">Core services</dt>
                  <dd>4 core service lines</dd>
                </div>
                <div>
                  <dt className="sr-only">Location</dt>
                  <dd>{site.shortLocation}</dd>
                </div>
                <div>
                  <dt className="sr-only">Support</dt>
                  <dd>Long-term support</dd>
                </div>
              </dl>
            </div>

            <div className="group relative">
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-violet opacity-25 blur transition duration-1000 group-hover:opacity-45"
              />
              <img
                src={heroDashboard}
                alt="AI business intelligence dashboard with live analytics and predictive insights"
                width={1200}
                height={912}
                className="relative w-full rounded-2xl border border-border shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      <TechMarquee />

      {/* WHAT WE DO */}
      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="What we do"
            title="Four ways we help businesses grow"
            description="End-to-end technology solutions designed to remove manual work, win more customers and give your business a competitive edge."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 80} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-y border-border bg-foreground/[0.02] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Why choose us"
            title="Built to be trusted, engineered to scale"
            description="From focused launches to AED 50,000+ systems, every project ships with the same discipline: clear communication, clean engineering and measurable outcomes."
          />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 70}>
                <reason.icon className="mb-4 size-5 text-primary-glow" aria-hidden="true" />
                <h3 className="text-base font-bold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How we work" title="A clear four-step process" />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 90}>
                <div className="glass h-full rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <span className="text-sm font-bold text-primary-glow">{item.step}</span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-y border-border bg-foreground/[0.02] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Featured projects"
              description="A glimpse into the websites, stores and automation systems we have engineered."
            />
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-glow"
            >
              View all work <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 100} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATION SHOWCASE */}
      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="AI automation"
            title="Turn Manual Work Into Automated Systems"
            description="Our automation solutions connect your website, CRM, WhatsApp, email and business tools into intelligent workflows."
          />
          <div className="mt-14">
            <WorkflowDiagram />
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/services"
              hash="ai-automation"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-glow"
            >
              See how automation works <Rocket className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Have an Idea? Let's Build It."
        text="Whether you need a new website, AI automation or a complete digital system, we can help bring your idea to life."
      />
    </>
  );
}
