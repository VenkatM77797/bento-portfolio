import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

export function HeroCard({ index = 0 }: { index?: number }) {
  const { personal, social } = portfolio;

  return (
    <BentoCard
      index={index}
      as="section"
      aria-labelledby="hero-heading"
      className="flex flex-col justify-between gap-8 p-7 sm:p-9"
    >
      <div
        className="grid-dots pointer-events-none absolute -top-16 -right-10 h-48 w-48 opacity-[0.18]"
        aria-hidden="true"
      />

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <CardLabel>{personal.tagline}</CardLabel>
          {personal.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-positive/30 bg-positive/10 px-2.5 py-1 text-[11px] font-medium">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="animate-status-pulse absolute inline-flex h-full w-full rounded-full bg-positive" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-positive" />
              </span>
              {personal.availabilityLabel}
            </span>
          )}
        </div>

        <h1
          id="hero-heading"
          className="mt-5 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl"
        >
          {personal.name}
          <span className="block text-brand-gradient">{personal.role}</span>
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {personal.bio}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {personal.email}
        </a>
        <a
          href={social.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-2.5 text-sm font-medium transition-colors hover:border-border-strong"
        >
          <Github className="h-4 w-4" aria-hidden="true" /> GitHub
        </a>
        <a
          href={social.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-2.5 text-sm font-medium transition-colors hover:border-border-strong"
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
        </a>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {personal.location}
        </span>
      </div>
    </BentoCard>
  );
}
