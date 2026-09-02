import { Hammer } from "lucide-react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { TechBadge } from "@/components/TechBadge";
import { portfolio } from "@/data/portfolio";

export function CurrentlyBuildingCard({ index = 0 }: { index?: number }) {
  const project = portfolio.currentlyBuilding;

  return (
    <BentoCard index={index} as="section" aria-labelledby="building-heading">
      <div className="flex items-center gap-2">
        <Hammer className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
        <CardLabel>Currently building</CardLabel>
      </div>

      <h2 id="building-heading" className="mt-3 text-xl font-semibold">
        {project.name}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <li key={tech}>
            <TechBadge tone="brand">{tech}</TechBadge>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs font-medium">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="animate-status-pulse absolute inline-flex h-full w-full rounded-full bg-brand" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            {project.status}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{project.progress}%</span>
        </div>
        <div
          className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuenow={project.progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${project.name} progress`}
        >
          <div
            className="h-full rounded-full bg-brand transition-[width] duration-700"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
    </BentoCard>
  );
}
