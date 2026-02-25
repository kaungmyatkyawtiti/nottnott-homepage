"use client";

import { motion } from "motion/react"
import { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode,
}

export default function AnimatedTemplate({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}
