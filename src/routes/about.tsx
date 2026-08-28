import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  Eye,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";

const title = "About Us — Building Smarter Digital Businesses | Avento AI";
const description =
  "We are a Dubai-based technology agency helping businesses use AI, software and modern digital solutions to improve how they operate and grow.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We continuously explore modern technology and AI.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    text: "We focus on building reliable and professional solutions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Clear communication throughout every project.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    text: "Our goal is not just to deliver a project but to help our clients grow.",
  },
];

/** Free audit offer — what the client receives. */
const auditItems = [
  "Speed, mobile and SEO health check of your current website",
  "Where enquiries are being lost in your current flow",
  "2–3 automations that would save your team the most hours",
  "A simple roadmap with priority, effort and expected impact",
];

const industries = [
  { icon: Building2, name: "Real Estate" },
  { icon: Stethoscope, name: "Clinics & Dental" },
  { icon: UtensilsCrossed, name: "Restaurants & Cafés" },
  { icon: ShoppingBag, name: "E-commerce & Retail" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: GraduationCap, name: "Education & Coaching" },
];



function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-full -translate-x-1/2 rounded-full bg-violet/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-up text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Building Smarter <span className="gradient-text">Digital Businesses</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We are a technology-focused digital agency helping businesses use AI, software and modern
            digital solutions to improve how they operate and grow.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-foreground/[0.02] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading eyebrow="Our mission" title="Our Mission" />
          <Reveal delay={80} className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Our mission is to make advanced technology accessible to businesses of every size.
            </p>
            <p>
              We help companies move away from outdated manual processes and create faster, smarter
              and more scalable digital systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="What we believe" title="What We Believe" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="glass h-full rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <value.icon className="mb-5 size-6 text-primary-glow" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-foreground/[0.02] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">
              Free growth audit
            </p>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Get a free audit of your website and lead flow
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Before you spend anything, we review what you already have and show you exactly where
              customers drop off and which parts of your business can be automated. No obligation, no
              sales pressure.
            </p>

            <ul className="mt-8 space-y-3">
              {auditItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary-glow" aria-hidden="true" />
                  <span className="min-w-0 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Request my free audit
            </a>
            <p className="mt-3 text-xs text-faint">Delivered within 48 hours — usually the same day.</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass rounded-3xl p-7 sm:p-9">
              <h3 className="text-lg font-bold text-foreground">Industries we work with</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We already understand how these businesses win customers, so we start with proven
                flows instead of guessing.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {industries.map(({ icon: Icon, name }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-foreground/[0.03] px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    <Icon className="size-4 shrink-0 text-primary-glow" aria-hidden="true" />
                    <span className="min-w-0">{name}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                Not on the list? We have built systems for niche businesses too — tell us what you do
                and we will map it out.
              </p>
            </div>
          </Reveal>
        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's Build Something Great Together"
              description="Tell us about your project and we will get back to you with a clear recommendation and next steps."
            />
            <Reveal delay={80} className="mt-9 space-y-4 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary-glow"
              >
                <Mail className="size-4 text-primary-glow" aria-hidden="true" />
                {site.email}
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-primary-glow" aria-hidden="true" />
                Dubai, UAE
              </p>
            </Reveal>
            <Reveal delay={140}>
              <SocialLinks className="mt-8" />
            </Reveal>
          </div>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
