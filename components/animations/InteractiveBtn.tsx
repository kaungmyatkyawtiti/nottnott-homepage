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
  ...props
}: InteractiveBtnProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        ease: "easeIn",
        duration: 0.2
      }}
      className={cn(
        "btn-primary",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
