import { Award, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

export function CertificationsCard({ index = 0 }: { index?: number }) {
  const [showAll, setShowAll] = useState(false);

  const visibleCertifications = showAll
    ? portfolio.certifications
    : portfolio.certifications.slice(0, 5);

  const hasMore = portfolio.certifications.length > 2;

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

      {/* Certifications */}
      <div className="mt-4 space-y-3">
        {visibleCertifications.map((certification) => {
          const content = (
            <>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-snug">
                  {certification.name}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {certification.issuer} · {certification.year}
                </p>
              </div>

              {certification.url && (
                <ExternalLink
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                  aria-hidden="true"
                />
              )}
            </>
          );

          return certification.url ? (
            <a
              key={certification.name}
              href={certification.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card-elevated p-3 transition-colors hover:border-border-strong"
            >
              {content}
            </a>
          ) : (
            <div
              key={certification.name}
              className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card-elevated p-3"
            >
              {content}
            </div>
          );
        })}
      </div>

      {/* See More */}
      {hasMore && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          aria-expanded={showAll}
          className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {showAll ? (
            <>
              Show less
              <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              See more
              <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      )}
    </BentoCard>
  );
}
