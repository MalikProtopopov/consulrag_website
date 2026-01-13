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

              {/* Platform badges */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {/* Telegram */}
                  <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-9 h-9 rounded-full bg-[#26A5E4] border-2 border-bg-primary flex items-center justify-center relative"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </motion.div>
                  {/* Globe/Web */}
                  <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-9 h-9 rounded-full bg-[#10B981] border-2 border-bg-primary flex items-center justify-center relative"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </motion.div>
                  {/* API/Code */}
                  <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-9 h-9 rounded-full bg-[#8B5CF6] border-2 border-bg-primary flex items-center justify-center relative"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </motion.div>
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
