import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Music2,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import { socials, type SocialKey } from "@/data/site";
import { cn } from "@/lib/utils";

const icons: Record<SocialKey, LucideIcon> = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  tiktok: Music2,
  whatsapp: MessageCircle,
  x: Twitter,
  github: Github,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {socials.map(({ key, label, href }) => {
        const Icon = icons[key];
        return (
          <li key={key}>
            <a
              href={href}
              target="_top"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15 hover:text-foreground"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
