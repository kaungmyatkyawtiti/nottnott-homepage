import { ReactNode } from "react"
import AnimatedTemplate from "../template";

interface PageTransitionProps {
  children: ReactNode,
}

export default function WorkTemplate({ children }: PageTransitionProps) {
  return <AnimatedTemplate>{children}</AnimatedTemplate>;
}

