"use client";

import {
  RiMenu2Fill,
  RiCloseLine,
  RiGithubFill,
} from "@remixicon/react";
import Link from "next/link";
import { useRef, useState } from "react";
import cn from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useDismiss } from "@/hooks/useDismiss";
import { NAV_LINKS } from "@/constants";
import ModeToggle from "./ModeToggle";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleClose = () => setIsOpen(false);

  useDismiss(containerRef, handleClose);

  return (
    <>
      <ul
        className="hidden md:flex items-center gap-2.5"
      >
        {NAV_LINKS.map(link => {
          const isActive =
            pathname === link.href ||
            pathname.startsWith(`${link.href}/`)

          return (
            <Link
              key={link.href}
              href={link.href}
            >
              <li
                className={cn(
                  "relative hover:underline p-1.5 px-2.5 focus:outline-none text-[15px]",
                  isActive && "bg-brand-foreground"
                )}
              >
                {link.name}
              </li>
            </Link>
          )
        })}
        <Link
          href="https://github.com/kaungmyatkyawtiti?tab=repositories"
          target="_blank"
        >
          <li className="flex items-center gap-1 hover:underline text-[15px]">
            <RiGithubFill size={20} />
            Source
          </li>
        </Link>
      </ul>

      <div
        className="flex items-center gap-3 relative"
        ref={containerRef}
      >
        <ModeToggle />

        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "p-2 md:hidden rounded-md bg-stone-600 hover:opacity-85 text-white",
            isOpen && "bg-destructive"
          )}
          whileTap={{ y: 1 }}
        >
          {isOpen ? (
            <RiCloseLine size={20} />
          ) : (
            <RiMenu2Fill size={20} />
          )}
        </motion.button>

        <AnimatePresence initial={false} mode="popLayout">
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute md:hidden right-0 top-12 z-50 w-50 rounded-md border bg-stone-100 dark:bg-stone-700 shadow-md"
            >
              <ul className="py-1 font-medium">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleClose}
                  >
                    <li className="block px-4 py-2 hover:bg-input hover:underline text-[15px]">
                      {link.name}
                    </li>
                  </Link>
                ))}
                <li className="border-t my-1" />
                <Link
                  href="https://github.com"
                  target="_blank"
                >
                  <li className="block px-4 py-2 hover:bg-input hover:underline text-[15px]">
                    View Source
                  </li>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
