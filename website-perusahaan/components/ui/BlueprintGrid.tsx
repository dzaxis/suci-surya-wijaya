import { cn } from "@/lib/utils";

export function BlueprintGrid({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 pointer-events-none",
        dark ? "blueprint-grid-dark opacity-40" : "blueprint-grid opacity-60",
        className
      )}
    />
  );
}

export function TechnicalCorners({ className }: { className?: string }) {
  return (
    <>
      <span className={cn("absolute top-0 left-0 w-4 h-4 border-l border-t border-[#007BFF]/30", className)} />
      <span className={cn("absolute top-0 right-0 w-4 h-4 border-r border-t border-[#007BFF]/30", className)} />
      <span className={cn("absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[#007BFF]/30", className)} />
      <span className={cn("absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[#007BFF]/30", className)} />
    </>
  );
}
