import Image from "next/image"
import Link from "next/link"
import {
  RiArrowRightLine,
  RiMailLine,
} from "@remixicon/react"
import { SubTitle } from "@/components/ui/text"
import InteractiveBtn from "@/components/animations/InteractiveBtn";
import { BIO_TIMELINES, SOCIAL_LINKS } from "@/constants";
import { SocialLink } from "@/types";
import GrowingBorder from "@/components/animations/GrowingBorder";

export default function HomePage() {
  return (
    <main title="Home" className="page-container space-y-10">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-start gap-5">
        <div className="flex-1">
          <h1 className="text-4xl font-bold font-mplus">Kaung Myat Kyaw</h1>
          <p className="mt-1">
            Junior Web Developer ( Artist / Developer / Designer )
          </p>
        </div>

        <div className="flex-center">
          <GrowingBorder className="rounded-full p-0.5">
            <Image
              src="/images/nott-nott.jpg"
              alt="Profile image"
              width={100}
              height={100}
              className="overflow-hidden rounded-full"
              loading="eager"
            />
          </GrowingBorder>
        </div>
      </section>

      {/* About */}
      <section>
        <SubTitle>About</SubTitle>

        <p className="para">
          Hi, I’m Kaung Myat Kyaw, a junior full-stack developer focused on JavaScript and TypeScript.
          I primarily work with Next.js and Express.js, building practical web applications with clean, maintainable code.
          I enjoy learning by doing, solving real-world problems, and continuously improving my skills through hands-on projects.
          I’m especially interested in modern frontend patterns, APIs, and creating user-friendly experiences that scale as I grow as a developer.
        </p>

        <Link
          href="/works"
          className="mt-6 flex-center"
        >
          <InteractiveBtn>
            My portfolio
            <RiArrowRightLine size={20} />
          </InteractiveBtn>
        </Link>
      </section>

      {/* Bio */}
      <section>
        <SubTitle>Bio</SubTitle>

        <ul className="space-y-2">
          {
            BIO_TIMELINES.map(bt => (
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
      <section>
        <SubTitle>I ♥</SubTitle>

        <p className="para">
          Art and drawing, sketching,{" "}
          <span className="text-secondary">
            watching TV shows and movies,
          </span>
          {" "} programming and experimenting with new creative concepts.
        </p>
      </section>

      {/* Social */}
      <section>
        <SubTitle>On Social</SubTitle>

        <ul className="space-y-1">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.href}>
              <SocialLinkItem social={social} />
            </li>
          ))}
        </ul>
      </section>

      {/* Newsletter */}
      <section>
        <SubTitle>Newsletter</SubTitle>

        <p className="para">
          Learning, experimenting, and building—follow my coding journey as a junior developer.
          Whether you have a question or just want to message me, my inbox is always open!
        </p>

        <Link
          href="/contact"
          className="flex-center mt-6"
        >
          <InteractiveBtn>
            <RiMailLine size={20} />
            Newsletter Here
          </InteractiveBtn>
        </Link>
      </section>
    </main>
  )
}

/* Social Item */
function SocialLinkItem({ social }: { social: SocialLink }) {
  return (
    <Link
      href={social.href}
      target="_blank"
      className="inline-flex items-center gap-2 rounded-md p-2 text-primary hover:bg-accent"
    >
      <social.icon size={20} />
      <span className="font-semibold">{social.label}</span>
    </Link>
  )
}
