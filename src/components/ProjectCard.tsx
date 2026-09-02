import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { TechBadge } from "@/components/TechBadge";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function ProjectImage({ project, className }: { project: Project; className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-muted",
        className,
      )}
    >
      {project.image && !failed ? (
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          width={1280}
          height={800}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      ) : (
        <div className="grid-dots grid h-full w-full place-items-center">
          <span className="label-mono">{project.title}</span>
        </div>
      )}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Live demo
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card-elevated px-3.5 py-2 text-xs font-medium transition-colors hover:border-border-strong"
        >
          <Github className="h-3.5 w-3.5" aria-hidden="true" />
          Source
        </a>
      )}
    </div>
  );
}

export function FeaturedProjectCard({
  project,
  index = 0,
  className,
}: {
  project: Project;
  index?: number;
  className?: string;
}) {
  return (
    <BentoCard
      index={index}
      as="article"
      className={cn("group flex flex-col gap-5", className)}
    >
      <ProjectImage project={project} className="aspect-16/9 w-full" />
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <CardLabel>Featured project</CardLabel>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li key={tech}>
              <TechBadge>{tech}</TechBadge>
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-1">
          <ProjectLinks project={project} />
        </div>
      </div>
    </BentoCard>
  );
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <BentoCard index={index} as="article" className="group flex flex-col gap-4">
      <ProjectImage project={project} className="aspect-16/10 w-full" />
      <div className="flex flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold">{project.title}</h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li key={tech}>
              <TechBadge>{tech}</TechBadge>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </BentoCard>
  );
}
