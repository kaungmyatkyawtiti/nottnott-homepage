"use client"

import Logo from './Logo';
import Navbar from './Navbar';
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useEffect, useRef, useState } from "react"

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    const delta = current - previous;

    if (Math.abs(delta) < 8) return;

    if (delta > 0 && current > 150) setHidden(true);
    if (delta < 0) setHidden(false);
  })

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);

      document.documentElement.style.setProperty(
        "--header-height",
        hidden ? "0px" : `${height}px`
      );
    }
  }, [hidden]);

  return (
    <motion.header
      ref={headerRef}
      animate={{
        y: hidden ? -headerHeight : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed w-full backdrop-blur-lg z-100 bg-background/90 top-0"
    >
      <nav className="max-w-3xl mx-auto flex items-center justify-between px-4 py-2">
        <Logo />
        <Navbar />
      </nav>
    </motion.header>
  )
}

export default Header; 
