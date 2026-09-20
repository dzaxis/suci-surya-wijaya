import { cn } from "@/lib/utils";

export function SectionTitle({
  label,
  title,
  subtitle,
  light = false,
  align = "left",
}: {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "text-center", "max-w-3xl", align === "center" && "mx-auto")}>
      <div className="flex items-center gap-3 mb-3">
        {align === "center" && <span className="h-[1px] flex-1 max-w-[32px] bg-[#007BFF] hidden sm:block" />}
        <p className="tech-label !text-[11px]">{label}</p>
        <span className={cn("h-[1px] w-8 bg-[#007BFF]", align === "center" && "hidden sm:block")} />
      </div>
      <h2
        className={cn(
          "text-[28px] sm:text-[36px] font-bold leading-[1.1] tracking-tight",
          light ? "text-white" : "text-[#0A192F]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-[15px] leading-relaxed", light ? "text-white/70" : "text-[#475569]")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
