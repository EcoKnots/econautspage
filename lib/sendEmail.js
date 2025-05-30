"use server"
import { Resend } from "resend"

const resend = new Resend('re_9XZNz5Lv_LfJDpVUJtrPFZi3Ly35oJefW')

export async function sendEmail(formData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  try {
    const res = await resend.emails.send({
      from: 'Contact Form <noreply@yourdomain.com>',
      to: 'anirudh.kannan321@gmail.com',
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })
    return { success: true }
  } catch (err) {
    console.error(err)
    return { success: false, error: err }
  }
}
