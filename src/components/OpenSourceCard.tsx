import { ArrowUpRight, GitFork, Star } from "lucide-react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

export function OpenSourceCard({ index = 0 }: { index?: number }) {
  const { openSource, social } = portfolio;

  return (
    <BentoCard index={index} as="section" aria-labelledby="oss-heading">
      <div className="flex items-center gap-2">
        <GitFork className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
        <CardLabel>Open source</CardLabel>
      </div>
      <h2 id="oss-heading" className="mt-3 text-xl font-semibold">
        Things I maintain
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{openSource.message}</p>

      <ul className="mt-4 space-y-2">
        {openSource.repos.map((repo) => (
          <li key={repo.name}>
            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group block rounded-xl border border-border bg-card-elevated p-3 transition-colors hover:border-border-strong"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                <span className="truncate font-mono text-sm">{repo.name}</span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                  <Star className="h-3 w-3" aria-hidden="true" />
                  {repo.stars.toLocaleString()}
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {repo.description}
              </p>
              <span className="label-mono mt-2 inline-flex items-center gap-1">
                {repo.language}
                <ArrowUpRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={social.github}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-brand hover:underline"
      >
        See all repositories
        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
      </a>
    </BentoCard>
  );
}
