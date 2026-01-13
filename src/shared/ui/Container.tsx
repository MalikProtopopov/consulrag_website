import { type HTMLAttributes } from "react";

import { cn } from "@/shared/lib";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeStyles = {
  sm: "max-w-3xl", // 768px
  md: "max-w-5xl", // 1024px
  lg: "max-w-6xl", // 1152px
  xl: "max-w-[1280px]", // 1280px - F0 spec
};

export const Container = ({
  className,
  size = "xl",
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
