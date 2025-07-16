"use client"
import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import Button from "@/components/Button"
import { sendEmail } from "@/lib/sendEmail"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
  const formRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    const formData = new FormData(formRef.current)
    const result = await sendEmail(formData)

    setStatus(result)
    setIsSubmitting(false)

    if (result.success && formRef.current) {
      formRef.current.reset()
    }
  }

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Let's Celebrate Sustainably.</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to host an event or become an Econauts vendor?
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div>
              <select
                name="type"
                required
                className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">I'm interested in...</option>
                <option value="Event Planning">Booking an eco-friendly event</option>
                <option value="Vendor Partnership">Becoming a vendor</option>
                <option value="General Inquiry">General inquiry</option>
              </select>
            </div>

            <div>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Tell us more about your needs..."
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Get in Touch"}
            </Button>

            {status && (
              <div
                className={`text-center p-4 rounded-lg ${
                  status.success
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-4">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:official.econauts@gmail.com?subject=Econauts Inquiry"
                className="text-primary hover:text-secondary transition-colors font-medium"
                rel="noopener noreferrer"
              >
                official.econauts@gmail.com
              </a>
              <span className="hidden sm:block text-gray-300">|</span>
              <span className="text-gray-600">Response within 24 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
