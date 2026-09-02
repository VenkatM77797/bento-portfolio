import { useState } from "react";
import { BentoCard, CardLabel } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

const LIMIT = 240;

export function AboutCard({ index = 0 }: { index?: number }) {
  const [expanded, setExpanded] = useState(false);
  const text = portfolio.personal.about;
  const isLong = text.length > LIMIT;
  const visible = expanded || !isLong ? text : `${text.slice(0, LIMIT).trimEnd()}…`;

  return (
    <BentoCard index={index} as="section" id="about" aria-labelledby="about-heading">
      <CardLabel>About</CardLabel>
      <h2 id="about-heading" className="mt-3 text-xl font-semibold">
        A bit about me
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{visible}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-auto pt-4 text-left font-mono text-xs text-brand underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </BentoCard>
  );
}
