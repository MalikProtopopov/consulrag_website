"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

// Animation variants
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const scaleHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

// FadeIn component - fades in + slides up when in viewport
interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  ...props
}: FadeInProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUpVariants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// FadeInOnLoad - fades in immediately on page load (for Hero)
export const FadeInOnLoad = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
  ...props
}: FadeInProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// StaggerContainer - parent container for staggered animations
interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.15,
  ...props
}: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// StaggerItem - child element with staggered animation
interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className, ...props }: StaggerItemProps) => {
  return (
    <motion.div variants={staggerItemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
};

// HoverScale - scales up on hover with shadow
interface HoverScaleProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export const HoverScale = ({
  children,
  className,
  scale = 1.03,
  ...props
}: HoverScaleProps) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { scale: 1 },
        hover: {
          scale,
          transition: { duration: 0.2, ease: "easeInOut" },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Combined StaggerItem with HoverScale
export const StaggerHoverItem = ({
  children,
  className,
  scale = 1.03,
  ...props
}: HoverScaleProps) => {
  return (
    <motion.div
      variants={staggerItemVariants}
      whileHover={{
        scale,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Accordion animation for FAQ
interface AccordionContentProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

export const AccordionContent = ({
  children,
  isOpen,
  className,
}: AccordionContentProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`overflow-hidden ${className || ""}`}
    >
      {children}
    </motion.div>
  );
};

// Pulse animation for badges
export const PulseBadge = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

