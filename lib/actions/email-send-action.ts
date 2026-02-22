"use server";

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import { ContactFormInputs } from '@/types';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailAction = async (formData: ContactFormInputs) => {
  const { name, email, letter } = formData;

  try {
    await resend.emails.send({
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
  } catch (error) {
    throw error;
  }
}
