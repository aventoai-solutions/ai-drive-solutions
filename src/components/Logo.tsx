import { Link } from "@tanstack/react-router";
import markAsset from "@/assets/avento-mark.png.asset.json";
import { site } from "@/data/site";

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
      <img
        src={markAsset.url}
        alt=""
        aria-hidden="true"
        width={40}
        height={40}
        className={size === "lg" ? "size-11 shrink-0" : "size-9 shrink-0"}
      />
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
