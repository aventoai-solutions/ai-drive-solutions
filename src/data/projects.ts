import realEstate from "@/assets/project-realestate.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import aiSupport from "@/assets/project-ai-support.jpg";
import dashboard from "@/assets/project-dashboard.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import dentist from "@/assets/project-dentist.jpg";

export type ProjectCategory =
  | "Web Development"
  | "AI Automation"
  | "E-commerce"
  | "Business Systems"
  | "UI/UX";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  industry: string;
  description: string;
  services: string[];
  technology: string[];
  image: string;
  imageAlt: string;
  /** Live site URL — replace with the real project link. Opens in a new tab. */
  projectURL: string;
  featured?: boolean;
};

/** Add new projects by appending an object here — every page picks them up. */
export const projects: Project[] = [
  {
    id: "prime-property",
    title: "Prime Property",
    category: "Web Development",
    industry: "Real Estate",
    description:
      "Modern real estate platform designed to showcase premium properties and generate qualified leads.",
    services: ["Website Development", "UI/UX", "Lead Generation", "CRM Integration"],
    technology: ["React", "Next.js", "CRM API"],
    image: realEstate,
    imageAlt: "Luxury real estate website shown on a laptop screen",
    projectURL: "https://luxury-real-estate-showcase-lemon.vercel.app/",
    featured: true,
  },
  {
    id: "modern-store",
    title: "Modern E-commerce Store",
    category: "E-commerce",
    industry: "Retail & Fashion",
    description:
      "High-converting online store built with a modern responsive shopping experience.",
    services: ["Shopify", "E-commerce", "Payment Integration", "UI/UX"],
    technology: ["Shopify", "Stripe", "Liquid"],
    image: ecommerce,
    imageAlt: "Minimalist dark e-commerce store interface with product grid",
    projectURL: "https://fashion-ecommerce-store-eight.vercel.app/",
    featured: true,
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    category: "AI Automation",
    industry: "Customer Experience",
    description:
      "AI-powered customer support system capable of responding to customers and collecting leads automatically.",
    services: ["AI Automation", "Chatbot", "CRM Integration", "WhatsApp Integration"],
    technology: ["OpenAI", "Python", "WhatsApp API"],
    image: aiSupport,
    imageAlt: "AI customer support chat interface with glowing accents",
    projectURL: "https://example.com",
    featured: true,
  },
  {
    id: "business-dashboard",
    title: "Business Dashboard",
    category: "Business Systems",
    industry: "Operations",
    description:
      "Custom dashboard for managing customers, analytics and daily business operations.",
    services: ["Business Systems", "Dashboard Development", "API Integrations"],
    technology: ["React", "Node.js", "PostgreSQL"],
    image: dashboard,
    imageAlt: "Dark admin dashboard with charts and KPI tiles",
    projectURL: "https://example.com",
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "UI/UX",
    industry: "Hospitality",
    description:
      "Modern restaurant website with menu display, reservations and location integration.",
    services: ["UI/UX Design", "Website Development", "Booking Integration"],
    technology: ["React", "Maps API", "Reservations"],
    image: restaurant,
    imageAlt: "Restaurant website with menu and reservation screens on a tablet",
    projectURL: "https://example.com",
  },
  {
    id: "dental-clinic",
    title: "Dental Clinic Website",
    category: "Web Development",
    industry: "Healthcare & Dental",
    description:
      "Modern dental clinic website with online appointment booking, treatment pages and patient enquiry automation.",
    services: ["Website Development", "Appointment Booking", "SEO Setup", "Lead Automation"],
    technology: ["Next.js", "Booking API", "GA4"],
    image: dentist,
    imageAlt: "Dental clinic website with appointment booking shown on a desktop monitor",
    projectURL: "https://example.com",
  },
];

export const projectFilters = [
  "All",
  "Web Development",
  "AI Automation",
  "E-commerce",
  "Business Systems",
  "UI/UX",
] as const;

export const featuredProjects = projects.filter((p) => p.featured);
