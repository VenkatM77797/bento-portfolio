import { Briefcase, MapPin } from "lucide-react";
import { useState } from "react";
import { BentoCard } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

export function ProfileCard({ index = 0 }: { index?: number }) {
  const { personal } = portfolio;
  const [failed, setFailed] = useState(false);
  const initials = personal.name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("");

  return (
    <BentoCard index={index} className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-muted">
        {personal.avatar && !failed ? (
          <img
            src={personal.avatar}
            alt={`Portrait of ${personal.name}`}
            width={640}
            height={640}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center font-display text-4xl font-bold text-muted-foreground">
            {initials}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-lg font-semibold">{personal.name}</h2>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{personal.bio}</p>
      </div>

      <dl className="mt-auto space-y-2 border-t border-border pt-4 text-sm">
        <div className="flex items-center gap-2">
          <Briefcase className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <dt className="sr-only">Current role</dt>
          <dd className="min-w-0 truncate">{personal.role}</dd>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <dt className="sr-only">Location</dt>
          <dd className="min-w-0 truncate">{personal.location}</dd>
        </div>
        <div className="flex items-baseline gap-2">
          <dt className="label-mono">Experience</dt>
          <dd className="font-mono text-sm">{personal.yearsOfExperience} yrs</dd>
        </div>
      </dl>
    </BentoCard>
  );
}
