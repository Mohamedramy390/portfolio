import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Direct email dispatch to Mohamed Ramy (m.r.business390@gmail.com)
    const response = await fetch(
      "https://formsubmit.co/ajax/m.r.business390@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://mohamedramy.dev",
          Referer: "https://mohamedramy.dev",
        },
        body: JSON.stringify({
          _subject: `Portfolio Contact: ${subject || "New Inquiry from " + name}`,
          name,
          email,
          subject: subject || "Portfolio Contact",
          message,
          _template: "table",
          _captcha: "false",
        }),
      }
    );

    const data = await response.json();

    // If FormSubmit succeeded or is waiting for initial 1-time activation
    return NextResponse.json({
      success: true,
      message: "Message dispatched directly to Mohamed's inbox!",
      data,
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Failed to dispatch email. Please reach out via WhatsApp or email directly." },
      { status: 500 }
    );
  }
}
