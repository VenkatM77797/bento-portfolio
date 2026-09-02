import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

export function ContactCard({ index = 0 }: { index?: number }) {
  const { personal, social } = portfolio;

  return (
    <BentoCard
      index={index}
      as="section"
      id="contact"
      aria-labelledby="contact-heading"
      className="p-7 sm:p-10"
    >
      <div
        className="grid-dots pointer-events-none absolute -bottom-12 -left-8 h-48 w-56 opacity-[0.16]"
        aria-hidden="true"
      />
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <CardLabel>Contact</CardLabel>
          <h2 id="contact-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Have an interesting project or opportunity? I read every message and usually reply within
            a day.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <a
            href={`mailto:${personal.email}?subject=Hello%20${encodeURIComponent(personal.shortName)}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get in touch
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-3 text-sm font-medium transition-colors hover:border-border-strong"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-3 text-sm font-medium transition-colors hover:border-border-strong"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </BentoCard>
  );
}
