import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolio, projectFilters } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const FILTERS = ["All", ...projectFilters];

export function ProjectsSection() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? portfolio.projects
        : portfolio.projects.filter((project) => project.tech.includes(active)),
    [active],
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
    >
      <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
        <div>
          <p className="label-mono">Selected work</p>
          <h2 id="projects-heading" className="mt-2 text-2xl font-semibold sm:text-3xl">
            Projects
          </h2>
        </div>

        <div
          role="group"
          aria-label="Filter projects by technology"
          className="flex flex-wrap gap-1.5"
        >
          {FILTERS.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-3.5 py-2 font-mono text-xs transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  isActive
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {visible.length > 0 ? (
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <li key={project.slug} className="min-w-0">
              <ProjectCard project={project} index={i} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          No projects match <span className="font-mono">{active}</span> yet.
        </p>
      )}
    </section>
  );
}
