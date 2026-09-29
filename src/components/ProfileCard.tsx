import { ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";
import { BentoCard } from "@/components/BentoCard";
import { portfolio } from "@/data/portfolio";

export function ProfileCard({ index = 0 }: { index?: number }) {
  const { personal, social } = portfolio;
  const [failed, setFailed] = useState(false);

  const initials = personal.name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("");

  return (
    <BentoCard index={index} className="group flex flex-col p-3">
      {/* Portrait */}
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl bg-muted">
        {personal.avatar && !failed ? (
          <img
            src={personal.avatar}
            alt={`Portrait of ${personal.name}`}
            onError={() => setFailed(true)}
            className="h-full min-h-[310px] w-full object-cover
                       transition-transform duration-700
                       group-hover:scale-[1.025]"
          />
        ) : (
          <div className="grid min-h-[310px] h-full place-items-center">
            <span className="font-display text-5xl font-bold text-muted-foreground">
              {initials}
            </span>
          </div>
        )}

        {/* subtle gradient for text readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />

        {/* Location directly on image */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white/90">
          <MapPin className="h-3.5 w-3.5" />
          {personal.location}
        </div>
      </div>

      {/* Identity */}
      <div className="flex items-end justify-between gap-4 px-1 pb-1 pt-4">
        <div>
          <p className="label-mono mb-1 text-muted-foreground">
            Software Developer
          </p>

          <h2 className="text-xl font-semibold tracking-tight">
            {personal.name}
          </h2>
        </div>

        <a
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="View LinkedIn profile"
          className="grid h-10 w-10 shrink-0 place-items-center
                     rounded-full border border-border
                     transition-all duration-200
                     hover:bg-foreground hover:text-background"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </BentoCard>
  );
}
