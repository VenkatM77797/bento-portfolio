import { BentoCard, CardLabel } from "@/components/BentoCard";
import { TechBadge } from "@/components/TechBadge";
import { portfolio } from "@/data/portfolio";

export function SkillsCard({ index = 0 }: { index?: number }) {
  return (
    <BentoCard index={index} as="section" aria-labelledby="skills-heading">
      <CardLabel>Stack</CardLabel>
      <h2 id="skills-heading" className="mt-3 text-xl font-semibold">
        Skills &amp; tooling
      </h2>

      <div className="mt-5 space-y-4">
        {portfolio.skills.map((group) => (
          <div key={group.label}>
            <h3 className="label-mono">{group.label}</h3>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item}>
                  <TechBadge>{item}</TechBadge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
