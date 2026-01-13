"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import { Button, Container } from "@/shared/ui";
import { ROUTES } from "@/shared/config";

const metrics = [
  { value: "5", suffix: " мин", label: "до запуска", countTo: 5 },
  { value: "24/7", suffix: "", label: "Работает всегда", countTo: null },
  { value: "0", suffix: "", label: "Строк кода", countTo: 0 },
];

// Animated counter component
const AnimatedCounter = ({ 
  value, 
  suffix, 
  countTo, 
  delay 
}: { 
  value: string; 
  suffix: string; 
  countTo: number | null; 
  delay: number;
}) => {
  const [displayValue, setDisplayValue] = useState(countTo !== null ? "0" : value);
  
  useEffect(() => {
    if (countTo === null) return;
    
    const timeout = setTimeout(() => {
      const controls = animate(0, countTo, {
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1],
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest).toString());
        },
      });
      
      return () => controls.stop();
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [countTo, delay]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const AnimatedHeadline = ({ text }: { text: string }) => {
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block"
          style={{
            color: char === "." ? "var(--color-brand-primary)" : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main content - 8 columns */}
          <div className="lg:col-span-8">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-brand-primary" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                AI Avatar Platform
              </span>
            </motion.div>

            {/* Main headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.9] tracking-tight text-text-primary mb-6">
              <AnimatedHeadline text="AI-консультант." />
              <br />
              <span className="text-text-secondary">За 5 минут.</span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg lg:text-xl text-text-secondary max-w-xl leading-relaxed mb-8"
            >
              Загрузите документы, настройте аватара, опубликуйте в Telegram.
              Работает на вашей базе знаний, не галлюцинирует.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href={ROUTES.REQUEST}>
                <Button size="lg" className="group w-full sm:w-auto">
                  Получить демо
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/#pricing">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Смотреть тарифы
                </Button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-text-muted"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                Без кредитной карты
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                Российские сервера
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                5 минут до результата
              </div>
            </motion.div>
          </div>

          {/* Sidebar - 4 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="lg:border-l lg:border-border lg:pl-10">
              {/* Metrics */}
              <div className="space-y-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.7 + index * 0.15,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    whileHover={{ x: 4 }}
                    className="group cursor-default"
                  >
                    <motion.div 
                      className="font-mono text-3xl lg:text-4xl font-bold text-text-primary mb-1 relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.15 }}
                        className="inline-block"
                      >
                        <AnimatedCounter 
                          value={metric.value} 
                          suffix={metric.suffix} 
                          countTo={metric.countTo}
                          delay={0.8 + index * 0.2}
                        />
                      </motion.span>
                      {/* Accent line on hover */}
                      <motion.div 
                        className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-0 bg-brand-primary rounded-full"
                        initial={{ height: 0 }}
                        whileHover={{ height: "60%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                    <motion.div 
                      className="text-sm text-text-muted group-hover:text-text-secondary transition-colors duration-200"
                    >
                      {metric.label}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-border" />

              {/* Platform badge */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["bg-blue-500", "bg-green-500", "bg-purple-500"].map(
                    (color, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${color} border-2 border-bg-primary flex items-center justify-center text-white text-xs font-medium`}
                      >
                        {["T", "W", "A"][i]}
                      </div>
                    )
                  )}
                </div>
                <div className="text-sm text-text-secondary">
                  Telegram, Web, API
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
