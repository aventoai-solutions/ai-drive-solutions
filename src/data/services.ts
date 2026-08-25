import type { LucideIcon } from "lucide-react";
import { Bot, Code2, LayoutDashboard, Sparkles } from "lucide-react";

export type ServiceAccent = "primary" | "violet" | "emerald" | "amber";

export type Service = {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: ServiceAccent;
  description: string;
  items: string[];
  cta: string;
};

export const services: Service[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    icon: Bot,
    accent: "primary",
    description:
      "Build intelligent automation systems that reduce manual work, improve customer communication and help businesses operate more efficiently.",
    items: [
      "AI Chatbots",
      "WhatsApp Automation",
      "Customer Support Automation",
      "Lead Automation",
      "Email Automation",
      "CRM Automation",
      "Appointment Automation",
      "AI Business Assistants",
    ],
    cta: "Explore AI Solutions",
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: Code2,
    accent: "violet",
    description:
      "Design and develop fast, modern and conversion-focused websites for businesses and brands.",
    items: [
      "Business Websites",
      "E-commerce Websites",
      "Shopify Stores",
      "Landing Pages",
      "Real Estate Websites",
      "Portfolio Websites",
      "Website Redesign",
      "Responsive Development",
    ],
    cta: "Explore Web Development",
  },
  {
    id: "business-systems",
    title: "Business Systems",
    icon: LayoutDashboard,
    accent: "emerald",
    description:
      "Build custom digital systems that help businesses manage customers, operations, data and internal workflows.",
    items: [
      "CRM Systems",
      "Admin Dashboards",
      "Booking Systems",
      "Customer Portals",
      "Inventory Systems",
      "Custom Web Applications",
      "API Integrations",
      "Payment Systems",
    ],
    cta: "Explore Business Systems",
  },
  {
    id: "digital-solutions",
    title: "Digital Solutions",
    icon: Sparkles,
    accent: "amber",
    description:
      "Complete digital services that help businesses build and improve their online presence.",
    items: [
      "UI/UX Design",
      "Shopify Setup",
      "SEO Setup",
      "Google Business Setup",
      "Business Email",
      "Domain Setup",
      "Analytics Integration",
      "Technical Support",
    ],
    cta: "Explore Digital Solutions",
  },
];

export const accentClasses: Record<
  ServiceAccent,
  { text: string; bg: string; border: string; ring: string }
> = {
  primary: {
    text: "text-primary-glow",
    bg: "bg-primary/10",
    border: "hover:border-primary/50",
    ring: "group-hover:bg-primary",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/10",
    border: "hover:border-violet/50",
    ring: "group-hover:bg-violet",
  },
  emerald: {
    text: "text-emerald",
    bg: "bg-emerald/10",
    border: "hover:border-emerald/50",
    ring: "group-hover:bg-emerald",
  },
  amber: {
    text: "text-amber",
    bg: "bg-amber/10",
    border: "hover:border-amber/50",
    ring: "group-hover:bg-amber",
  },
};

export const serviceDetails = [
  {
    id: "ai-automation",
    eyebrow: "01 — AI Automation",
    title: "Automation that works while you sleep",
    description:
      "We connect your website, CRM, WhatsApp, email and business tools into intelligent workflows that qualify leads, answer customers and keep your team focused on closing.",
    items: [
      "AI Chatbots",
      "WhatsApp Chatbots",
      "Website Chatbots",
      "Lead Qualification",
      "Automated Follow-Ups",
      "CRM Automation",
      "Email Automation",
      "Appointment Booking",
      "Customer Support Automation",
      "AI Assistants",
      "Workflow Automation",
      "API Automation",
    ],
    useCase: {
      title: "Real business use case — real estate enquiry",
      steps: [
        "Responds to the customer instantly",
        "Collects their requirements",
        "Qualifies the lead",
        "Saves the lead into the CRM",
        "Sends a WhatsApp follow-up",
        "Notifies the sales agent",
      ],
    },
  },
  {
    id: "web-development",
    eyebrow: "02 — Web Development",
    title: "Websites engineered to convert",
    description:
      "Fast, accessible and conversion-led websites and stores — designed around your customer journey and built on modern, scalable technology.",
    items: [
      "Business Websites",
      "Corporate Websites",
      "Real Estate Websites",
      "E-commerce Stores",
      "Shopify Development",
      "Landing Pages",
      "Portfolio Websites",
      "Web Applications",
      "Website Redesign",
      "Responsive Development",
      "Website Maintenance",
      "SEO-Friendly Development",
    ],
  },
  {
    id: "business-systems",
    eyebrow: "03 — Business Systems",
    title: "Custom systems for how you actually operate",
    description:
      "Dashboards, portals and internal tools that replace spreadsheets and manual processes with reliable, permission-aware software.",
    items: [
      "Custom CRM Systems",
      "Admin Dashboards",
      "Booking Platforms",
      "Inventory Systems",
      "Customer Portals",
      "Employee Portals",
      "Payment Systems",
      "API Integrations",
      "Internal Business Tools",
      "Custom Web Applications",
    ],
  },
  {
    id: "digital-solutions",
    eyebrow: "04 — Digital Solutions",
    title: "Everything else your digital presence needs",
    description:
      "Design, setup, tracking and ongoing support — the practical work that makes a launch successful and keeps it performing.",
    items: [
      "UI/UX Design",
      "Shopify Setup",
      "E-commerce Setup",
      "Payment Gateway Integration",
      "Google Business Setup",
      "Domain Setup",
      "Professional Business Email",
      "Google Analytics",
      "Meta Pixel",
      "SEO Setup",
      "Website Maintenance",
      "Technical Support",
    ],
  },
];
