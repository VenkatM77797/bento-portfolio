import { BentoCard, CardLabel } from "@/components/BentoCard";
import { TechBadge } from "@/components/TechBadge";
import { portfolio } from "@/data/portfolio";

export function ExperienceCard({ index = 0 }: { index?: number }) {
  return (
    <BentoCard index={index} as="section" id="experience" aria-labelledby="experience-heading">
      <CardLabel>Experience</CardLabel>
      <h2 id="experience-heading" className="mt-3 text-xl font-semibold">
        Where I&apos;ve worked
      </h2>

      <ol className="mt-5 space-y-5">
        {portfolio.experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className="relative pl-5">
            <span
              className="absolute top-1.5 left-0 h-2 w-2 rounded-full bg-brand ring-4 ring-brand-soft"
              aria-hidden="true"
            />
            <span
              className="absolute top-5 bottom-[-1.25rem] left-[3.5px] w-px bg-border last:hidden"
              aria-hidden="true"
            />
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-2">
              <h3 className="truncate text-sm font-semibold">{job.role}</h3>
              <span className="font-mono text-[11px] text-muted-foreground">
                {job.start} — {job.end}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-brand">{job.company}</p>
            <p className="label-mono mt-1">{job.location}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.description}</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {job.tech.map((tech) => (
                <li key={tech}>
                  <TechBadge>{tech}</TechBadge>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </BentoCard>
  );
}
