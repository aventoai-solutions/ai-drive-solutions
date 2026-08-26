import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-border pb-10 pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mb-8 mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
            <SocialLinks />
          </div>

          <div>
            <h2 className="mb-6 text-sm font-bold text-foreground">Quick Links</h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-primary-glow">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-1">
            <div>
              <h2 className="mb-6 text-sm font-bold text-foreground">Services</h2>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      to="/services"
                      hash={service.id}
                      className="transition-colors hover:text-primary-glow"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-foreground">Contact</h2>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-primary-glow"
                  >
                    {site.email}
                  </a>
                </li>

                <li>{site.shortLocation}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-border pt-8 text-xs text-faint sm:flex-row">
          <p>
            © 2026 {site.legalName}. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/about" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/about" className="transition-colors hover:text-foreground">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
