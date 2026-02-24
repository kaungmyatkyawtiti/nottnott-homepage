import { SubTitle } from "@/components/ui/text";
import { CONTACT_INFOS } from "@/constants";
import { ContactInfo } from "@/types";
import { Metadata } from "next";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main title="Contact" className="page-container space-y-10">
      <SubTitle>Contact Me</SubTitle>
      <p className="para">
        I am currently available for freelance work and full-time positions.
        Feel free to reach out.
      </p>

      <ContactForm />

      <section
        className="space-y-6"
      >
        <h3 className="font-semibold uppercase tracking-wide text-secondary font-mplus">
          Other ways to Contact me
        </h3>

        <div className="space-y-5">
          {
            CONTACT_INFOS.map((info, ind) =>
              <ContactItem
                key={ind}
                info={info}
              />
            )
          }
        </div>
      </section>
    </main>
  )
}

interface ContactItemProps {
  info: ContactInfo;
}

const ContactItem = ({ info }: ContactItemProps) => (
  <div className="flex items-center gap-4">

    <div className="bg-accent p-3 rounded-sm text-primary">
      <info.icon size={22} />
    </div>

    <div className="flex flex-col gap-0.5">
      <span className="font-semibold font-mplus">
        {info.label}
      </span>
      <span className="text-foreground/90 font-medium hover:text-secondary hover:underline">
        {info.value}
      </span>
    </div>
  </div>
);

