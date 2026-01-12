import Link from "next/link";
import Image from "next/image";
import { Work } from "@/types";

interface GridItemProps {
  description: string;
  thumbnail: string;
  onClick: () => void
}

export function GridItem({
  description,
  thumbnail,
  onClick,
}: GridItemProps) {
  return (
    <div
      className="w-full text-center cursor-pointer group"
      onClick={onClick}
    >
      <Image
        src={thumbnail}
        alt={description}
        width={500}
        height={300}
        loading="eager"
        className="rounded-xl"
      />
      <p className="text-[15px] font-light mt-2 leading-relaxed text-foreground/85 group-hover:text-foreground">
        {description}
      </p>
    </div>
  );
}

interface WorkGridItemProps {
  work: Work;
}

export function WorkGridItem({ work }: WorkGridItemProps) {
  return (
    <div className="w-full text-center">
      <Link
        href={`/works/${work.link}`}
        scroll={false}
        className="group block cursor-pointer"
      >
        <Image
          src={work.thumbnail}
          alt={work.title}
          width={500}
          height={300}
          loading="eager"
          className="rounded-xl"
        />
        <h3 className="mt-2 text-xl font-medium group-hover:underline">
          {work.title}
        </h3>
        <p className="text-sm font-light text-foreground/85 leading-relaxed">
          {work.description}
        </p>
      </Link>
    </div>
  );
}
