import Link from "next/link";
import Image from "next/image";

interface GridItemProps {
  description: string;
  href: string;
  thumbnail: string;
}

export function GridItem({
  description,
  href,
  thumbnail,
}: GridItemProps) {
  return (
    <div className="w-full text-center">
      <Link
        href={href}
        target="_blank"
        className="group block cursor-pointer"
      >
        <Image
          src={thumbnail}
          alt={description}
          width={500}
          height={300}
          loading="eager"
          className="rounded-xl"
        />
        <p className="text-[15px] font-light mt-2">
          {description}
        </p>
      </Link>
    </div>
  );
}

interface WorkGridItemProps {
  id: string;
  title: string;
  thumbnail: string;
  category?: string;
  children?: React.ReactNode;
}

export function WorkGridItem({
  id,
  title,
  thumbnail,
  category = "works",
  children,
}: WorkGridItemProps) {
  return (
    <div className="w-full text-center">
      <Link
        href={`/${category}/${id}`}
        scroll={false}
        className="group block cursor-pointer"
      >
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={300}
          loading="eager"
          className="rounded-xl"
        />
        <h3 className="mt-2 text-xl font-medium group-hover:underline">
          {title}
        </h3>
        {children && (
          <p className="text-sm font-light text-foreground/85">
            {children}
          </p>
        )}
      </Link>
    </div>
  );
}
