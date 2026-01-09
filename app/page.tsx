import Image from "next/image"
import Link from "next/link"
import {
  RiGithubFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiArrowRightLine,
  RiMailLine,
  RiFacebookBoxFill,
} from "@remixicon/react"
import { SubTitle } from "@/components/ui/text"

const bioTimelines = [
  {
    year: 2003,
    description: "Born in Kyonpyaw, Ayeyarwady Region, Myanmar.",
  },
  {
    year: 2019,
    description: "Completed Grade 10, and then continued outside formal schooling during the COVID-19 era.",
  },
  {
    year: 2023,
    description: "Trained in web development at Fairway Technology.",
  },
  {
    year: "2025–Present",
    description: "Working as a freelancer.",
  },
];

const socialLinks = [
  {
    href: "https://github.com/kaungmyatkyawtiti",
    icon: <RiGithubFill size={20} />,
    label: "@kaungmyatkyawtiti",
  },
  {
    href: "https://twitter.com/inkdrop_app",
    icon: <RiFacebookBoxFill size={20} />,
    label: "@NottNott",
  },
  {
    href: "https://x.com",
    icon: <RiTwitterXFill size={20} />,
    label: "@kmktitit2003@gmail.com",
  },
  {
    href: "https://instagram.com",
    icon: <RiInstagramFill size={20} />,
    label: "@nottnott2003",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* Intro */}
      <div className="mb-6 rounded-lg bg-white/45 p-3 text-center backdrop-blur-md dark:bg-white/10">
        Hello, I&apos;m an indie app developer based in Myanmar!
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        <div className="flex-1">
          <h1 className="text-4xl font-bold font-mplus">Kaung Myat Kyaw</h1>
          <p className="mt-1">
            Junior Web Developer ( Artist / Developer / Designer )
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/globe.svg"
            alt="Profile image"
            width={100}
            height={100}
            className="overflow-hidden rounded-full border border-white"
            loading="eager"
          />
        </div>
      </div>

      {/* Work */}
      <section className="mt-8">
        <SubTitle>Work</SubTitle>
        <p className="leading-relaxed text-foreground/85">
          Hi, I’m Kaung Myat Kyaw, a junior full-stack developer focused on JavaScript and TypeScript.
          I primarily work with Next.js and Express.js, building practical web applications with clean, maintainable code.
          I enjoy learning by doing, solving real-world problems, and continuously improving my skills through hands-on projects.
          I’m especially interested in modern frontend patterns, APIs, and creating user-friendly experiences that scale as I grow as a developer
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/works"
            className="btn-primary"
          >
            My portfolio
            <RiArrowRightLine size={20} />
          </Link>
        </div>
      </section>

      {/* Bio */}
      <section className="mt-8">
        <SubTitle>Bio</SubTitle>

        <ul className="space-y-2">
          {
            bioTimelines.map(bt => (
              <li
                key={`${bt.year}-${bt.description}`}
                className="flex gap-4"
              >
                <span className="font-bold">{bt.year}</span>
                <span className="text-foreground/85">{bt.description}</span>
              </li>
            ))
          }
        </ul>
      </section>

      {/* I Love */}
      <section className="mt-8">
        <SubTitle>I ♥</SubTitle>
        <p className="text-foreground/85">
          Art and drawing, sketching,{" "}
          <span className="text-secondary">
            watching TV shows and movies,
          </span>
          {" "} and experimenting with new creative concepts.
        </p>
      </section>

      {/* Social */}
      <section className="mt-8">
        <SubTitle>On Social</SubTitle>

        <ul className="space-y-1">
          {socialLinks.map((social) => (
            <li key={social.href}>
              <SocialLink
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Newsletter */}
      <section className="mt-8">
        <SubTitle>Newsletter</SubTitle>
        <p className="text-foreground/85">
          Learning, experimenting, and building—follow my coding journey as a junior developer.
        </p>

        <div className="mt-6 text-center">
          <Link
            href="https://www.devas.life/"
            className="btn-primary"
          >
            <RiMailLine size={20} />
            Join my newsletter here
          </Link>
        </div>
      </section>
    </main>
  )
}

/* Helper */
function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-center gap-2 rounded-md p-2 text-primary hover:bg-accent"
    >
      {icon}
      <span className="font-semibold">{label}</span>
    </Link>
  )
}
