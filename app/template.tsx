"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
      }}
    >
      {children}
    </motion.div>
  )
}
