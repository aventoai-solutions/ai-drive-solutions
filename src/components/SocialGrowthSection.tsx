import { BarChart3, Check, Instagram, MessageCircle, Sparkles, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import phones from "@/assets/social-media-phones.jpg";
import uiux from "@/assets/work-uiux.jpg";
import automation from "@/assets/work-automation.jpg";

const socialPoints = [
  {
    icon: Instagram,
    title: "Content & Page Management",
    text: "Daily posts, reels, stories and branded creatives — planned, designed and published for you.",
  },
  {
    icon: Users,
    title: "Audience Growth",
    text: "Hashtag, SEO and engagement strategy that grows real, local, buying-intent followers.",
  },
  {
    icon: MessageCircle,
    title: "DM & Comment Handling",
    text: "Every enquiry answered fast with AI-assisted replies, then routed straight to your sales team.",
  },
  {
    icon: BarChart3,
    title: "Lead Generation & Ads",
    text: "Meta and Instagram ad funnels with tracked leads flowing directly into your CRM or WhatsApp.",
  },
];

const stats = [
  { value: "3x", label: "Avg. engagement lift" },
  { value: "24/7", label: "DM response cover" },
  { value: "100%", label: "Leads tracked" },
];

const capabilities = [
  {
    image: uiux,
    alt: "UI/UX design system with wireframes, colour palette and component library",
    eyebrow: "UI/UX Design",
    title: "Interfaces designed around conversion",
    text: "We map the customer journey, then design clean, accessible screens with a real design system — colour tokens, typography scale and reusable components — so your product looks premium and scales without redesigns.",
    items: [
      "Wireframes & user flows",
      "Design systems & style guides",
      "Website & app UI design",
      "Mobile-first responsive layouts",
      "Prototypes & handoff files",
      "Conversion & usability audits",
    ],
  },
  {
    image: automation,
    alt: "AI automation workflow connecting website, chatbot, WhatsApp and CRM",
    eyebrow: "AI Automation",
    title: "Workflows that qualify and follow up for you",
    text: "We connect your website, social channels, WhatsApp and CRM into one automated flow: the AI replies instantly, qualifies the lead, scores it, saves it and notifies the right person — no manual work in between.",
    items: [
      "AI chatbots & assistants",
      "WhatsApp & Instagram automation",
      "Lead scoring & qualification",
      "CRM & email automation",
      "Automated follow-up sequences",
      "API & workflow integrations",
    ],
  },
];

export function SocialGrowthSection() {
  return (
    <>
      {/* Social media handling */}
      <section className="relative px-5 py-20 sm:px-6 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] [background:radial-gradient(55%_55%_at_70%_10%,color-mix(in_oklab,var(--violet)_14%,transparent)_0%,transparent_70%)]"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">
              Social Media Handling
            </p>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              We help you <span className="gradient-text">grow your social media</span> and turn it
              into leads
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Beyond websites, we run and grow business social accounts end to end — content,
              engagement, ads and automated DM handling — so your pages don't just look good, they
              generate enquiries every day.
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {socialPoints.map(({ icon: Icon, title, text }) => (
                <li key={title} className="glass rounded-3xl p-5">
                  <span className="mb-4 flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary-glow">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dt className="text-2xl font-extrabold text-foreground sm:text-3xl">{value}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.14em] text-faint">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_40%,color-mix(in_oklab,var(--primary)_28%,transparent)_0%,transparent_70%)] blur-2xl"
              />
              <img
                src={phones}
                alt="Two phones showing a social media analytics dashboard and a leads inbox"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full rounded-[2rem] border border-border object-cover shadow-card"
              />
              <div className="glass absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl px-4 py-3 sm:left-8">
                <Sparkles className="size-4 shrink-0 text-primary-glow" aria-hidden="true" />
                <p className="text-xs font-semibold text-foreground">
                  AI-assisted replies to every DM
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* UI/UX + AI automation work */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="More Of What We Do"
            title="Design and automation work behind the projects"
            description="Every build we ship is backed by the same two disciplines — considered interface design and automation that removes manual work."
          />

          <div className="mt-16 space-y-16 sm:space-y-24">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.eyebrow}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                    <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
                      <img
                        src={cap.image}
                        alt={cap.alt}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">
                      {cap.eyebrow}
                    </p>
                    <h3 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                      {cap.title}
                    </h3>
                    <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
                      {cap.text}
                    </p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {cap.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-primary-glow"
                            aria-hidden="true"
                          />
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
