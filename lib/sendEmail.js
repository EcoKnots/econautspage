"use server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY) // ⚠️ Replace this with a secure environment variable in production

export async function sendEmail(formData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const type = formData.get("type")
  const message = formData.get("message")

  try {
    await resend.emails.send({
      from: 'Contact Form <noreply@yourdomain.com>',
      to: 'anirudh.kannan321@gmail.com',
      subject: `New ${type} Inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return { success: true, message: "Your message was sent successfully!" }
  } catch (err) {
    console.error("Email sending failed:", err)
    return { success: false, message: "Something went wrong. Please try again later." }
  }
}
