"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

/* ── Easing ── */
const expo: [number, number, number, number] = [0.16, 1, 0.3, 1];
const quartOut: [number, number, number, number] = [0.25, 1, 0.5, 1];

/* ── Reusable Variants ── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: expo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: quartOut },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: expo },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: expo },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: expo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerWide: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

/* ── Wrapper Components ── */

interface AnimateProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  once = true,
}: AnimateProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={fadeUp}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  once = true,
}: AnimateProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            delay,
            ease: quartOut,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  className,
  from = "left",
  delay = 0,
  once = true,
}: AnimateProps & { from?: "left" | "right" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={from === "left" ? slideFromLeft : slideFromRight}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  once = true,
}: AnimateProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, scale: 0.92 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.7,
            delay,
            ease: expo,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  wide = false,
  once = true,
}: AnimateProps & { wide?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={wide ? staggerWide : staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Horizontal Reveal Line ── */
export function RevealLine({
  className = "",
  color = "bg-crane-accent",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1, ease: expo }}
      className={`h-0.5 ${color} ${className}`}
    />
  );
}

/* ── Text reveal word-by-word ── */
export function TextReveal({
  text,
  className = "",
  tag: Tag = "h2",
}: {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.04 } },
        }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: expo,
                  },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
