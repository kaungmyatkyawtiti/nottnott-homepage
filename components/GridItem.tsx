import Link from "next/link";
import Image from "next/image";
import { Art, Work } from "@/types";

interface ArtGridItemProps {
  art: Art;
  onClick: () => void
}

export function ArtGridItem({
  art,
  onClick,
}: ArtGridItemProps) {
  return (
    <div
      className="w-full text-center cursor-pointer group"
      onClick={onClick}
    >
      <Image
        src={art.thumbnail}
        alt={art.title}
        width={500}
        height={300}
        loading="eager"
        className="rounded-xl"
      />
      <p className="text-[15px] font-light mt-2 leading-relaxed text-foreground/85 group-hover:text-foreground">
        {art.title} <span className="text-secondary/90 group-hover:text-secondary">({art.year})</span>
      </p>
    </div>
  );
}

interface WorkGridItemProps {
  work: Work;
}

export function WorkGridItem({ work }: WorkGridItemProps) {
  return (
    <Link
      href={`/works/${work.link}`}
      scroll={false}
    >
      <div className="w-full text-center group block cursor-pointer rounded-xl">
        <Image
          src={work.thumbnail}
          alt={work.title}
          width={500}
          height={300}
          loading="eager"
          className="rounded-xl"
        />
        <h3 className="mt-2 text-lg font-semibold group-hover:underline mb-1">
          {work.title}
        </h3>
        <p className="text-sm font-light text-foreground/85 leading-relaxed">
          {work.description}
        </p>
      </div>
    </Link>
  );
}
