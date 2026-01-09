"use client";

import {
  RiMenu2Fill,
  RiCloseLine,
  RiGithubFill,
} from "@remixicon/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ThemedToggleBtn from "./ThemedToggleBtn";
import cn from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const links = [
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Works",
      href: "/works"
    },
    {
      name: "Posts",
      href: "/posts"
    },
    {
      name: "Uses",
      href: "/uses"
    },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* center */}
      <div className="hidden md:flex items-center gap-2">
        {
          links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:underline p-2",
                (pathname === link.href || pathname.startsWith(link.href + "/")) &&
                "bg-teal-400 dark:bg-teal-500"
              )}
            >
              {link.name}
            </Link>
          ))
        }
        <Link
          href="https://github.com/kaungmyatkyawtiti?tab=repositories"
          target="_blank"
          className="flex items-center gap-1 hover:underline"
        >
          <RiGithubFill size={20} />
          Source
        </Link>
      </div>

      {/* right side */}
      <div
        className="flex items-center gap-3 relative"
        ref={containerRef}
      >
        <ThemedToggleBtn />

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden rounded-md p-2 hover:bg-input border border-border"
        >
          {
            isOpen ? (
              <RiCloseLine size={20} />
            ) : (
              <RiMenu2Fill size={20} />
            )
          }
        </button>

        {isOpen && (
          <div className="absolute md:hidden right-0 top-12 z-50 w-50 rounded-md border bg-white dark:bg-[#303746] shadow-md">
            <ul className="py-1 font-medium">
              {
                links.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <li
                      className="block px-4 py-2 hover:bg-input hover:underline"
                    >
                      {link.name}
                    </li>
                  </Link>
                ))
              }
              <li className="border-t my-1" />
              <li>
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-input hover:underline"
                >
                  View Source
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
