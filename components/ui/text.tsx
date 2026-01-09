import cn from "@/lib/utils";
import { ReactNode } from "react"

interface SubTitleProps {
  className?: string;
  children: ReactNode;
}

export function SubTitle({
  className,
  children
}: SubTitleProps) {
  return (
    <h2
      className={cn("relative mb-4 inline-block text-xl font-semibold font-mplus", className)}
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-1 w-full bg-secondary" />
    </h2>
  )
}
