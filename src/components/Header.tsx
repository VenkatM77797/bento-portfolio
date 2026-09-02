import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks, portfolio } from "@/data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);
  const { personal, social } = portfolio;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
            {personal.name.charAt(0)}
          </span>
          <span className="truncate font-display text-base font-semibold">{personal.name}</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
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

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-card/95 px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-2 border-t border-border pt-3">
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm"
              >
                <Github className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
