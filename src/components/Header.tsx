import { Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks, portfolio } from "@/data/portfolio";
import { HamburgerMenu } from "@/components/ui/HamburgerMenu";
import { StaggeredMobileMenu } from "@/components/ui/StaggeredMobileMenu";

export function Header() {
  const [open, setOpen] = useState(false);
  const { personal, social } = portfolio;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
              {personal.name.charAt(0)}
            </span>

            <span className="truncate font-display text-base font-semibold">
              {personal.name}
            </span>
          </a>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Desktop navigation */}
            <nav aria-label="Main" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <span className="mx-1 hidden h-5 w-px bg-border md:block" aria-hidden="true" />

            {/* Social links */}
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>

            <ThemeToggle />

            {/* Mobile hamburger */}
            <div
              className="relative z-[60] inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <HamburgerMenu
                open={open}
                onChange={setOpen}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Animated mobile navigation */}
      <StaggeredMobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
