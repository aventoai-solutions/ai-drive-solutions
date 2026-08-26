/**
 * Single source of truth for brand + contact details.
 * Edit these values to rebrand the entire website.
 */
export const site = {
  name: "Avento AI",
  legalName: "Avento AI Solutions",

  tagline: "We Build Intelligent Digital Solutions That Help Businesses Grow",
  positioning: "AI Automation · Web Development · Business Systems · Digital Solutions",
  description:
    "From high-performance websites to AI-powered automation and custom business systems, we help companies automate, scale and build better digital experiences.",
  email: "hello@aventoai.agency",
  phone: "+971 4 555 0192",
  phoneHref: "+97145550192",
  whatsappNumber: "97145550192",
  whatsappMessage:
    "Hi, I'm interested in your digital services and would like to discuss a project.",
  location: "Business Bay, Dubai, United Arab Emirates",
  shortLocation: "Dubai, UAE",
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "About Us", to: "/about" },
] as const;

export type SocialKey =
  | "instagram"
  | "linkedin"
  | "facebook"
  | "tiktok"
  | "whatsapp"
  | "x"
  | "github";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "instagram", label: "Instagram", href: "https://instagram.com" },
  { key: "facebook", label: "Facebook", href: "https://facebook.com" },
  { key: "github", label: "GitHub", href: "https://github.com/aventoai-solutions" },
];

export const technologies = [
  "OpenAI",
  "ChatGPT",
  "Shopify",
  "WordPress",
  "React",
  "Next.js",
  "Python",
  "Stripe",
  "WhatsApp",
  "Google",
  "Meta",
  "APIs",
];
