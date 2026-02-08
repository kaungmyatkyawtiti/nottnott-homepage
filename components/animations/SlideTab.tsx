"use client";

import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";
import { motion } from "motion/react";
import cn from "@/lib/utils";

export interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface TabProps {
  children: ReactNode;
  isActive: boolean;
  setPosition: Dispatch<SetStateAction<Position>>;
  setActiveTabRef?: Dispatch<SetStateAction<HTMLLIElement | null>>;
}

export const Tab = ({
  children,
  setPosition,
  setActiveTabRef,
  isActive
}: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isActive && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        left: ref.current.offsetLeft,
        width,
        opacity: 1,
      });
      setActiveTabRef?.(ref.current);
    }
  }, [isActive, setPosition, setActiveTabRef]);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className={cn("relative p-1.5 px-2.5 focus:outline-none text-[15px] cursor-pointer capitalize", isActive && "tab-active")}
    >
      {children}
    </li>
  )
}

interface CursorProps {
  position: Position;
}

export const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="absolute -z-10 h-9.5 rounded-md bg-brand-foreground"
    />
  );
};
