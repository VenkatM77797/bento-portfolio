import { ArrowUpRight, Github } from "lucide-react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

const LEVELS = ["bg-muted", "bg-brand/25", "bg-brand/45", "bg-brand/70", "bg-brand"];

export function GithubCard({ index = 0 }: { index?: number }) {
  const { github, social } = portfolio;

  return (
    <BentoCard index={index} as="section" aria-labelledby="github-heading">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <CardLabel>GitHub</CardLabel>
          <h2 id="github-heading" className="mt-2 truncate font-mono text-base">
            @{github.username}
          </h2>
        </div>
        <Github className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
        {[
          { label: "Repos", value: github.repos },
          { label: "Followers", value: github.followers },
          { label: "Commits", value: github.contributionsLastYear },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border bg-card-elevated py-2.5">
            <dt className="label-mono text-[10px]">{stat.label}</dt>
            <dd className="mt-1 font-display text-lg font-semibold">
              {stat.value.toLocaleString()}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-5">
        <CardLabel className="mb-2">Activity</CardLabel>
        <ul
          className="grid grid-flow-col grid-rows-4 gap-1"
          aria-label="Illustrative contribution activity"
        >
          {github.activity.map((level, i) => (
            <li
              key={i}
              className={`h-2.5 w-full rounded-[3px] ${LEVELS[Math.min(level, 4)]}`}
              aria-hidden="true"
            />
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-5">
        <a
          href={social.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card-elevated px-4 py-2.5 text-sm font-medium transition-colors hover:border-border-strong"
        >
          View GitHub
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </BentoCard>
  );
}
