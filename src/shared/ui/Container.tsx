import { type HTMLAttributes } from "react";

import { cn } from "@/shared/lib";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeStyles = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export const Container = ({
  className,
  size = "xl",
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto w-full px-4 md:px-6 lg:px-8", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

