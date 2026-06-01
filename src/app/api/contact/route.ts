import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: "muhammadyoqubjonov7@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0D1120;color:#F0F4FF;padding:32px;border-radius:16px;border:1px solid rgba(79,142,247,0.2)">
          <h2 style="color:#4F8EF7;margin-bottom:24px">New message from portfolio</h2>
          <p><strong style="color:#8B96B5">Name:</strong> <span>${name}</span></p>
          <p><strong style="color:#8B96B5">Email:</strong> <span>${email}</span></p>
          <p><strong style="color:#8B96B5">Subject:</strong> <span>${subject}</span></p>
          <div style="margin-top:16px;padding:16px;background:rgba(79,142,247,0.05);border-radius:8px;border:1px solid rgba(79,142,247,0.1)">
            <strong style="color:#8B96B5">Message:</strong>
            <p style="margin-top:8px;line-height:1.6">${message}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#4B5678">Sent from muhammadyoqubjonov.vercel.app</p>
        </div>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
