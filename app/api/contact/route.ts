import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_EMAIL || "m.r.business390@gmail.com";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    // If SMTP credentials are configured, send directly via Nodemailer
    if (smtpUser && smtpPass && smtpPass.trim().length > 0) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${name} (Portfolio)" <${smtpUser}>`,
        to: recipient,
        replyTo: email,
        subject: `[Portfolio Contact] ${subject || "New Inquiry"} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "General Inquiry"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0f; color: #f0f0f5; padding: 24px; border-radius: 12px; border: 1px solid #1e1e2e;">
            <div style="border-bottom: 2px solid #6366f1; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #ffffff; font-size: 20px;">New Message from Portfolio Website</h2>
              <p style="margin: 4px 0 0; color: #a0a0b5; font-size: 13px;">Received via mohamedramy.dev contact form</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #a0a0b5; width: 80px; font-weight: 600;">Name:</td>
                <td style="padding: 8px 0; color: #f0f0f5; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a0a0b5; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #22d3ee; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a0a0b5; font-weight: 600;">Subject:</td>
                <td style="padding: 8px 0; color: #f0f0f5;">${subject || "General Inquiry"}</td>
              </tr>
            </table>

            <div style="background-color: #16161f; border: 1px solid #1e1e2e; border-radius: 8px; padding: 16px; margin-top: 10px;">
              <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6366f1; margin-bottom: 8px; font-weight: 600;">Message Content</div>
              <div style="font-size: 14px; line-height: 1.6; color: #f0f0f5; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #1e1e2e; font-size: 12px; color: #6b6b80; text-align: center;">
              Reply directly to this email to respond to <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a>.
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({
        success: true,
        message: "Your message has been sent directly to Mohamed's email!",
      });
    }

    // When SMTP credentials are not yet set in .env.local, notify client to trigger pre-filled dispatch
    return NextResponse.json({
      success: false,
      needsClientDispatch: true,
      recipient,
      message: "Please configure SMTP_PASS in .env.local for automatic background sending.",
    });
  } catch (error: any) {
    console.error("Custom contact API error:", error);
    return NextResponse.json(
      {
        error: error?.message || "Failed to send email via SMTP.",
        needsClientDispatch: true,
      },
      { status: 500 }
    );
  }
}
