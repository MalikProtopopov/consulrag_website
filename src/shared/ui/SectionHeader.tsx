"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader = ({
  number,
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`mb-16 lg:mb-20 ${className}`}
    >
      {/* Section label with line */}
      <div className="flex items-center gap-4 mb-6 lg:mb-8">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          {number} — {label}
        </span>
        <div className="h-px flex-1 max-w-[80px] bg-border" />
      </div>

      {/* Title */}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-text-primary">
        {title}
      </h2>

      {/* Optional description */}
      {description && (
        <p className="text-base lg:text-lg max-w-2xl leading-relaxed text-text-secondary mt-4 lg:mt-6">
          {description}
        </p>
      )}
    </motion.div>
  );
};

