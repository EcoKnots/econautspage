"use client"

import { motion } from "framer-motion"
import Button from "./Button"

export default function DigitalTools() {
const digitalTools = [
  {
    title: "Vendor Payments",
    description: "Onboard quickly, raise invoices, track milestones, and get paid securely through our integrated payment system.",
    imageSrc: "https://source.unsplash.com/800x450/?vendor,payments,eco",
    cta: ["Read More"],
  },
  {
    title: "Eco Commerce",
    description: "Discover and shop eco-friendly products — from reusable kitchenware and natural cleaners to slow fashion and seed kits. Every brand is verified for real sustainability.",
    imageSrc: "https://source.unsplash.com/800x450/?eco,commerce,sustainable",
    cta: ["Read More"],
  },
  {
    title: "Client Payments",
    description: "Simple, transparent payments for green services, product orders, or event bookings. GST-ready invoices and receipts included.",
    imageSrc: "https://source.unsplash.com/800x450/?client,payments,billing",
    cta: ["Read More"],
  },
  {
    title: "Eco Dashboards",
    description: "Track your community’s impact in real time — from waste saved to energy reductions — all via QR-powered dashboards.",
    imageSrc: "https://source.unsplash.com/800x450/?eco,dashboard,sustainability",
    cta: ["Read More"],
  },
  {
    title: "Social & Analytics",
    description: "Integrated social feeds, automated blogs, WhatsApp updates, and analytics with Meta + Google tracking baked in.",
    imageSrc: "https://source.unsplash.com/800x450/?social,media,analytics",
    cta: ["Read More"],
  },
]


  return (
    <section id="digital-tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Digital Tools That Power Sustainability</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your sustainability journey with our integrated digital solutions, from seamless payments to impactful analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {digitalTools.map((tool, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-video">
                <img
                  src={tool.imageSrc}
                  alt={tool.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-primary mb-4">{tool.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                <div className="mt-auto flex flex-wrap gap-4 justify-center">
                  {tool.cta.map((buttonText, btnIndex) => (
                    <Button key={btnIndex} href="#" variant="primary" size="md">
                      {buttonText}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}