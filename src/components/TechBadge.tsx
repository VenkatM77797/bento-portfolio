import { cn } from "@/lib/utils";

export function TechBadge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "cool";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none",
        tone === "neutral" && "border-border bg-muted text-muted-foreground",
        tone === "brand" && "border-brand/30 bg-brand-soft text-foreground",
        tone === "cool" && "border-cool/30 bg-cool-soft text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
