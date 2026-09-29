import { Award, ExternalLink } from "lucide-react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

export function CertificationsCard({ index = 0 }: { index?: number }) {
  return (
    <BentoCard
      index={index}
      as="section"
      aria-labelledby="certifications-heading"
      className="flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <Award
          className="h-3.5 w-3.5 text-cool"
          aria-hidden="true"
        />
        <CardLabel>Certifications</CardLabel>
      </div>

      <h2 id="certifications-heading" className="sr-only">
        Certifications
      </h2>

      {/* Certification List */}
      <div className="mt-4 space-y-3">
        {portfolio.certifications.map((certification) => (
          <a
            key={certification.name}
            href={certification.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card-elevated p-3 transition-colors hover:border-border-strong"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-snug">
                {certification.name}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {certification.issuer} · {certification.year}
              </p>
            </div>

            <ExternalLink
              className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </BentoCard>
  );
}
