import { GraduationCap, MapPin } from "lucide-react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

export function EducationCard({ index = 0 }: { index?: number }) {
  return (
    <BentoCard
      index={index}
      as="section"
      id="education"
      aria-labelledby="education-heading"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <GraduationCap
          className="h-3.5 w-3.5 text-cool"
          aria-hidden="true"
        />
        <CardLabel>Education</CardLabel>
      </div>

      <h2 id="education-heading" className="sr-only">
        Education
      </h2>

      {/* Education List */}
      <ul className="mt-5 space-y-5">
        {portfolio.education.map((entry) => (
          <li
            key={`${entry.school}-${entry.year}`}
            className="border-b border-border pb-5 last:border-0 last:pb-0"
          >
            {/* University + Year */}
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <h3 className="text-sm font-semibold leading-snug">
                {entry.school}
              </h3>

              <span className="font-mono text-[11px] text-muted-foreground">
                {entry.year}
              </span>
            </div>

            {/* Degree */}
            <p className="mt-1.5 text-sm text-muted-foreground">
              {entry.degree} · {entry.field}
            </p>

            {/* Location */}
            <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span>{entry.location}</span>
            </div>

            {/* Coursework */}
            {entry.coursework.length > 0 && (
              <div className="mt-3">
                <p className="label-mono mb-2 text-[10px] text-muted-foreground">
                  Relevant Coursework
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {entry.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md border border-border bg-muted/40 px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}