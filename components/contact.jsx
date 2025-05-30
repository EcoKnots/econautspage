"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Button from "@/components/Button"
import {sendEmail} from "@/lib/sendEmail"

export default function Contact() {
    const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const res = await sendEmail(form)

    if (res.success) {
      setStatus("Message sent!")
    } else {
      setStatus("Failed to send. Try again.")
    }
  }
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center">
            Contact Us
          </h2>
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Name Field */}
              <div className="w-full md:w-1/2">
                <label className="block text-black mb-2">Name</label>
                <input name="name"
                  type="text"
                  className="w-full p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary focus:outline-none focus:border-secondary"
                  placeholder="Peter parker"
                />
              </div>

              {/* Email Field */}
              <div className="w-full md:w-1/2">
                <label className="block text-black mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary focus:outline-none focus:border-secondary"
                  placeholder="abc@gmail.com"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-black mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary focus:outline-none focus:border-secondary"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Full-width Submit Button */}
            <div className="w-full">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full" // Added full width class
              >
                Submit
              </Button>
               {status && <p className="text-center mt-4">{status}</p>}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}