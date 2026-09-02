import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index for the entrance animation. */
  index?: number;
  as?: "div" | "section" | "article" | "aside";
  interactive?: boolean;
  id?: string;
  "aria-labelledby"?: string;
};

export function BentoCard({
  children,
  className,
  index = 0,
  as: Tag = "div",
  interactive = true,
  ...rest
}: BentoCardProps) {
  return (
    <Tag
      {...rest}
      style={{ animationDelay: `${Math.min(index, 12) * 60}ms` }}
      className={cn(
        "animate-bento-in bento-surface relative flex h-full flex-col overflow-hidden rounded-2xl border border-border p-6",
        interactive && "bento-hover",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardLabel({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("label-mono", className)}>{children}</p>;
}
