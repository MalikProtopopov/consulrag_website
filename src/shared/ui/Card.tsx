import { type HTMLAttributes } from "react";

import { cn } from "@/shared/lib";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered";
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
        "rounded-xl p-6",
        variant === "default" && "bg-bg-secondary",
        variant === "bordered" && "bg-bg-secondary border border-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

