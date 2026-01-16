import ContactForm from "@/components/ContactForm";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import Link from "next/link";

export default function Page() {
  return (
    <main
      title="Works"
      className="mx-auto max-w-3xl px-4 py-8"
    >

      <h2 className="work-title mb-4">Contact Me</h2>
      <p className="para">
        I am currently available for freelance work and full-time positions.
        Feel free to reach out.
      </p>

      <ContactForm />

      <div className="">
        <h3 className="mb-5 font-semibold uppercase tracking-wide text-secondary font-mplus">
          Other ways to Contact me
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2.5">
            <RiPhoneLine size={20} className="opacity-70" />
            <span className="hover:underline">09 787 484 437</span>
            <span className="font-[550]">OR</span>
            <span className="hover:underline">09 685 470 077</span>
          </div>

          <div className="flex items-center gap-3">
            <RiMapPinLine size={20} className="opacity-70" />
            <span>Insein, Yangon, Myanmar</span>
          </div>

          <div className="flex items-center gap-3">
            <RiMailLine size={20} className="opacity-70" />
            <Link
              href="mailto:your@email.com"
              className="hover:underline"
            >
              kmktiti2003@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
