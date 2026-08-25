import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary shadow-glow">
        <span className="size-3.5 rotate-45 rounded-sm bg-primary-foreground" />
      </span>
      <span
        className={
          size === "lg"
            ? "text-2xl font-extrabold tracking-tight text-foreground"
            : "text-xl font-extrabold tracking-tight text-foreground"
        }
      >
        {site.name}
      </span>
    </Link>
  );
}
