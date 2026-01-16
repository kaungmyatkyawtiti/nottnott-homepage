"use server";

import { Resend } from 'resend';
import { ContactFormInputs } from "@/components/ContactForm";
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: ContactFormInputs) => {
  console.log("send", formData);
  const { name, email, letter } = formData;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.RESEND_TO_EMAIL!],
      replyTo: email,
      subject: `New contact message from ${name}`,
      react: EmailTemplate({
        name,
        email,
        message: letter,
      }),
    });

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: "Failed to send email",
    };
  }
}
