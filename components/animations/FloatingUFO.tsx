"use client";

import { motion } from "motion/react";

export default function FloatingUFO() {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <svg className="mx-auto h-32 w-32" viewBox="0 0 100 100">
        <ellipse cx="50" cy="40" rx="30" ry="10" fill="#4F46E5" />
        <circle cx="50" cy="35" r="20" fill="#818CF8" />
        <ellipse cx="50" cy="30" rx="10" ry="5" fill="#C7D2FE" />

        {/* Beam */}
        <motion.path
          d="M40 40 L30 80 L70 80 L60 40"
          fill="rgba(79,70,229,0.6)"
          animate={{ opacity: [0.3, 0.6, 0.3], scaleY: [0.8, 1.1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  )
}

