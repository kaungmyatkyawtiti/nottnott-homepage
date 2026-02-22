"use client";

import Link from "next/link";
import { RiArrowRightSLine } from "@remixicon/react";
import { ReactNode } from "react"
import Image from "next/image";
import { useBoundStore } from "@/lib/useBoundStore";

export const Title = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-1">
    <Link
      href="/works"
      className="text-secondary hover:underline font-medium"
    >
      Works
    </Link>
    <RiArrowRightSLine size={16} />

    <h3
      className="inline-flex items-center gap-2 font-mplus text-[19px] font-semibold mb-1"
    >
      {children}
    </h3>
  </div>
)

interface WorkImageProps {
  image: string;
  title: string;
}

export const WorkImage = ({
  image,
  title,
}: WorkImageProps) => {
  const { openModal } = useBoundStore();

  return (
    <div
      className="mb-4 w-full overflow-hidden"
      onClick={() => openModal(image, title)}
    >
      <Image
        src={image}
        alt={title}
        width={800}
        height={800}
        loading="eager"
        className="h-auto w-full object-cover rounded-lg"
      />
    </div>
  );
};

export const Meta = ({ children }: { children: ReactNode }) => (
  <span className="uppercase mr-2 rounded-sm bg-green-200 text-black/80 px-1 py-0.5 text-xs font-semibold dark:text-green-200 dark:bg-green-200/15">
    {children}
  </span>
)

export const Badge = ({ children }: { children: ReactNode }) => (
  <span className="rounded-sm bg-blue-50 px-1 py-0.5 text-xs text-black dark:bg-[#404043] dark:text-white">
    {children}
  </span>
)
