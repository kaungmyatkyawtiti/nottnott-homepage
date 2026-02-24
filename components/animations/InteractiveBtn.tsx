"use client";

import cn from "@/lib/utils";
import { HTMLMotionProps, motion } from "motion/react";
import { ReactNode } from "react";

interface InteractiveBtnProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
}

export default function InteractiveBtn({
  className,
  children,
  whileHover,
  whileTap,
  transition,
  ...props
}: InteractiveBtnProps) {
  return (
    <motion.button
      whileHover={whileHover ?? { scale: 1.1, y: -4 }}
      whileTap={whileTap ?? { scale: 0.95, y: 1 }}
      transition={transition ?? {
        type: "spring",
        stiffness: 400,
        damping: 15
      }}
      className={cn("btn-primary", className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
