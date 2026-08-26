import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Eye,
  Lightbulb,
  LifeBuoy,
  LineChart,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  RefreshCw,
  ShieldCheck,
  Timer,
  TrendingUp,
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

/** Client-facing commitments shown instead of a team grid. */
const commitments = [
  {
    icon: Timer,
    title: "Fast delivery",
    text: "Most websites go live in 2–3 weeks, automation systems in 1–2 weeks.",
  },
  {
    icon: MessagesSquare,
    title: "Direct communication",
    text: "You talk to the people building it — WhatsApp updates, no account managers.",
  },
  {
    icon: BadgeCheck,
    title: "Fixed, clear pricing",
    text: "Scope and price agreed before we start. No surprise invoices later.",
  },
  {
    icon: RefreshCw,
    title: "Free revisions",
    text: "We keep refining until the design and flows genuinely work for you.",
  },
  {
    icon: LineChart,
    title: "Built to convert",
    text: "Every page is engineered around enquiries, bookings and sales — not just looks.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    text: "30 days of free support, plus optional ongoing care and growth plans.",
  },
];

const proof = [
  { value: "2–3", label: "Weeks to launch" },
  { value: "30 days", label: "Free post-launch support" },
  { value: "100%", label: "Fixed-price projects" },
  { value: "24h", label: "Reply time on requests" },
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
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why work with us"
            title="What you get when you hire Avento AI"
            description="No agency runaround. Clear pricing, fast delivery and systems built to bring you real enquiries — with support long after launch."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="glass h-full rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <span className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary-glow">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 lg:grid-cols-4">
              {proof.map(({ value, label }) => (
                <div key={label}>
                  <dt className="text-3xl font-extrabold text-foreground sm:text-4xl">{value}</dt>
                  <dd className="mt-2 text-[11px] uppercase tracking-[0.16em] text-faint">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
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
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary-glow"
              >
                <Phone className="size-4 text-primary-glow" aria-hidden="true" />
                {site.phone}
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-primary-glow" aria-hidden="true" />
                {site.location}
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
