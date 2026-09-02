import type { ReactNode } from "react";
import { AboutCard } from "@/components/AboutCard";
import { ContactCard } from "@/components/ContactCard";
import { CurrentlyBuildingCard } from "@/components/CurrentlyBuildingCard";
import { EducationCard } from "@/components/EducationCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { GithubCard } from "@/components/GithubCard";
import { HeroCard } from "@/components/HeroCard";
import { OpenSourceCard } from "@/components/OpenSourceCard";
import { ProfileCard } from "@/components/ProfileCard";
import { FeaturedProjectCard } from "@/components/ProjectCard";
import { ResumeCard } from "@/components/ResumeCard";
import { SkillsCard } from "@/components/SkillsCard";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Grid cell: controls how much space a card takes at each breakpoint. */
function Cell({ span, children }: { span: string; children: ReactNode }) {
  return <div className={cn("min-w-0", span)}>{children}</div>;
}

export function BentoGrid() {
  const featured = portfolio.projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-4 sm:px-6 sm:pt-14">
      {/*
        Mobile  → single column, hierarchy preserved.
        Tablet  → 2 columns, cards reflow.
        Desktop → 6-column bento with mixed widths.
      */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Cell span="md:col-span-2 lg:col-span-4">
          <HeroCard index={0} />
        </Cell>
        <Cell span="lg:col-span-2">
          <ProfileCard index={1} />
        </Cell>

        <Cell span="lg:col-span-2">
          <GithubCard index={2} />
        </Cell>
        <Cell span="lg:col-span-2">
          <SkillsCard index={3} />
        </Cell>
        <Cell span="md:col-span-2 lg:col-span-2">
          <CurrentlyBuildingCard index={4} />
        </Cell>

        <Cell span="md:col-span-2 lg:col-span-3">
          {featured[0] && <FeaturedProjectCard project={featured[0]} index={5} />}
        </Cell>
        <Cell span="md:col-span-2 lg:col-span-3">
          <ExperienceCard index={6} />
        </Cell>

        <Cell span="md:col-span-2 lg:col-span-3">
          <AboutCard index={7} />
        </Cell>
        <Cell span="lg:col-span-3">
          <OpenSourceCard index={8} />
        </Cell>
        <Cell span="lg:col-span-3">
          <EducationCard index={9} />
        </Cell>
        <Cell span="lg:col-span-3">
          <ResumeCard index={10} />
        </Cell>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <ContactCard index={0} />
    </div>
  );
}
