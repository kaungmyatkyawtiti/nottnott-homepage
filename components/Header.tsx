"use client";

import { useState } from 'react'
import Link from 'next/link'
import { RiGiftFill, RiMenu2Fill, RiXtzLine } from '@remixicon/react'
import Logo from './Logo';
import ThemedToggleBtn from './ThemedToggleBtn';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky w-full backdrop-blur-[15px] z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 items-center">
          {/* <LinkItem href="/works" path={path}> */}
          {/*   Works */}
          {/* </LinkItem> */}
          {/* <LinkItem href="https://store.craftz.dog/" path={path}> */}
          {/*   Wallpapers */}
          {/* </LinkItem> */}
          {/* <LinkItem href="/posts" path={path}> */}
          {/*   Posts */}
          {/* </LinkItem> */}
          {/* <LinkItem href="https://uses.craftz.dog/">Uses</LinkItem> */}
          {/* <LinkItem */}
          {/*   href="https://github.com/craftzdog/craftzdog-homepage" */}
          {/*   target="_blank" */}
          {/* > */}
          {/*   <div className="flex items-center gap-1"> */}
          {/*     <RiGiftFill /> */}
          {/*     Source */}
          {/*   </div> */}
          {/* </LinkItem> */}
          <Link href={"/"}>Hello</Link>
        </div>

        {/* Right side: Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-2">
          <ThemedToggleBtn />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? <RiXtzLine size={24} /> : <RiMenu2Fill size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {/* <LinkItem href="/" path={path}> */}
          {/*   About */}
          {/* </LinkItem> */}
          {/* <LinkItem href="/works" path={path}> */}
          {/*   Works */}
          {/* </LinkItem> */}
          {/* <LinkItem href="https://store.craftz.dog/" path={path}> */}
          {/*   Wallpapers */}
          {/* </LinkItem> */}
          {/* <LinkItem href="/posts" path={path}> */}
          {/*   Posts */}
          {/* </LinkItem> */}
          {/* <LinkItem href="https://uses.craftz.dog/">Uses</LinkItem> */}
          <Link
            href="/"
            target="_blank"
            className="block px-3 py-2 rounded hover:bg-teal-400 hover:text-gray-900 transition"
          >
            View Source
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header; 
