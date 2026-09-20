import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({ className, variant = "primary", size = "md", children, ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF]",
        "disabled:opacity-50 disabled:pointer-events-none",
        variant === "primary" && "bg-[#007BFF] text-white hover:bg-[#0063CC] active:bg-[#0056B3]",
        variant === "outline" && "border border-[#E2E8F0] bg-white text-[#0A192F] hover:border-[#007BFF] hover:text-[#007BFF]",
        variant === "ghost" && "text-[#0A192F] hover:bg-[#F4F5F7]",
        size === "sm" && "h-9 px-4 text-[13px] rounded-[2px]",
        size === "md" && "h-11 px-6 text-[13px] rounded-[2px]",
        size === "lg" && "h-[48px] px-8 text-sm rounded-[2px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
