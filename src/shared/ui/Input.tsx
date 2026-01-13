import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/shared/lib";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full h-11 rounded-lg border bg-bg-card px-4 text-text-primary placeholder:text-text-muted transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary",
            error
              ? "border-error focus:ring-error focus:border-error"
              : "border-border hover:border-border-hover",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-error">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
