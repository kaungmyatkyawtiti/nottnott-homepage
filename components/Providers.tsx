"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
