import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6"
      >
        <Logo />

        <ul className="hidden items-center gap-10 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-foreground after:w-full" }}
                className="relative py-1 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/about"
            hash="contact"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow sm:inline-block"
          >
            Start a Project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-xl border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background/95 md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-foreground" }}
                  className="block py-3.5 text-base font-medium text-muted-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                to="/about"
                hash="contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
