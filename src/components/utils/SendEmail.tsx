// app/send-email/action.ts
"use server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const number = formData.get("number") as string;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "curious.loop.us@gmail.com",
      subject: `New Message from ${name}`,
      text: `From: ${email}\nPhone Number: ${number}\nMessage: ${message}`,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to send email" };
  }
}