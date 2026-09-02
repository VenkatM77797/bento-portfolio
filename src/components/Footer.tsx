import { Github } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto grid max-w-6xl gap-3 px-4 sm:flex sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {year} {portfolio.personal.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground">Built with React + TypeScript</p>
        <a
          href={portfolio.template.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="h-3.5 w-3.5" aria-hidden="true" />
          {portfolio.template.name} template
        </a>
      </div>
    </footer>
  );
}
