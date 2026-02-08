"use client";

import { useTheme } from "next-themes";
import { RiMoonClearLine, RiSunLine } from "@remixicon/react";
import { AnimatePresence, motion } from "motion/react";

export default function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleSwitch = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={resolvedTheme}
        style={{ display: 'inline-block' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button
          onClick={handleSwitch}
          type="button"
          className="themed-btn"
        >
          <RiMoonClearLine size={20} className="dark:hidden" />
          <RiSunLine size={20} className="hidden dark:block" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
};
