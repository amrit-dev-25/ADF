// app/api/contact/route.js
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, phone, eventDate, message, hearAboutUs } = await request.json();

    if (!name || !phone || !eventDate || !hearAboutUs) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Wedding Inquiries <noreply@abhishekdhuparfilms.com>", // must be on your verified Resend domain
      to: ["contact@abhishekdhuparfilms.com"], // your actual Zoho inbox
      replyTo: undefined, // no email collected from the couple currently — see note below
      subject: `New inquiry: ${name}`,
      html: `
        <h2>New wedding inquiry</h2>
        <p><strong>Couple's name:</strong> ${name}</p>
        <p><strong>WhatsApp number:</strong> ${phone}</p>
        <p><strong>Wedding date:</strong> ${eventDate}</p>
        <p><strong>Event details:</strong> ${message || "—"}</p>
        <p><strong>Found us via:</strong> ${hearAboutUs}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}