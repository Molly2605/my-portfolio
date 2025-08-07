// src/app/api/send/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, subject, message } = await req.json();

  if (!email || !subject || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // tu email
      pass: process.env.EMAIL_PASS, // tu password o App Password de Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `[PORTFOLIO] ${subject}`,
      text: `Email: ${email}\n\nMensaje:\n${message}`,
    });

    return new Response(JSON.stringify({ message: "Email sent" }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}