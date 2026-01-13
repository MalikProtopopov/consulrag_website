import { type HTMLAttributes } from "react";

import { cn } from "@/shared/lib";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated" | "interactive";
}

export const Card = ({
  className,
  variant = "default",
  children,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-200",
        variant === "default" && "bg-bg-card border border-border",
        variant === "bordered" && "bg-bg-card border border-border",
        variant === "elevated" &&
          "bg-bg-card border border-border shadow-lg shadow-black/5",
        variant === "interactive" &&
          "bg-bg-card border border-border hover:border-border-hover hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
