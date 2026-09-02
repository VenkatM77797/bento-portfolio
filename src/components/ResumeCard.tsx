import { Download, FileText } from "lucide-react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

export function ResumeCard({ index = 0 }: { index?: number }) {
  const { resume, name } = portfolio.personal;

  // No resume configured → the card is hidden instead of showing a dead button.
  if (!resume) return null;

  return (
    <BentoCard index={index} as="section" aria-labelledby="resume-heading" className="flex flex-col">
      <div className="flex items-center gap-2">
        <FileText className="h-3.5 w-3.5 text-cool" aria-hidden="true" />
        <CardLabel>Resume</CardLabel>
      </div>
      <h2 id="resume-heading" className="mt-3 text-lg font-semibold">
        The one-page version
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Full history, skills and references in a single PDF.
      </p>
      <a
        href={resume}
        download
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-2.5 pt-2.5 text-sm font-medium transition-colors hover:border-border-strong"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Download résumé
        <span className="sr-only"> of {name} (PDF)</span>
      </a>
    </BentoCard>
  );
}
