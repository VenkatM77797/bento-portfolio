import { GraduationCap } from "lucide-react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

export function EducationCard({ index = 0 }: { index?: number }) {
  return (
    <BentoCard index={index} as="section" aria-labelledby="education-heading">
      <div className="flex items-center gap-2">
        <GraduationCap className="h-3.5 w-3.5 text-cool" aria-hidden="true" />
        <CardLabel>Education</CardLabel>
      </div>
      <h2 id="education-heading" className="sr-only">
        Education
      </h2>

      <ul className="mt-4 space-y-4">
        {portfolio.education.map((entry) => (
          <li key={`${entry.school}-${entry.year}`} className="border-b border-border pb-4 last:border-0 last:pb-0">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-2">
              <h3 className="truncate text-sm font-semibold">{entry.school}</h3>
              <span className="font-mono text-[11px] text-muted-foreground">{entry.year}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {entry.degree} · {entry.field}
            </p>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
