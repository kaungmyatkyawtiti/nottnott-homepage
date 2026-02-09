"use client";

import cn from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { ReactNode } from "react";

const sliderVariants: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 10,
      ease: "linear"
    },
  },
};

interface SlideTextProps {
  className?: string;
  children: ReactNode;
}

export default function SlideText({
  className,
  children
}: SlideTextProps) {
  return (
    <motion.p
      variants={sliderVariants}
      initial="initial"
      animate="animate"
      className={cn(className)}
    >
      {children}
    </motion.p>
  )
}

