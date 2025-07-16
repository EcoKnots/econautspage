"use client"

import { motion } from "framer-motion"
import Button from "@/components/Button"

export default function VendorSection() {
  return (
    <section id="vendor" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Join Our Vendor Community</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Are you an eco-friendly business owner, artisan, or entrepreneur? Partner with us to reach conscious
            consumers in residential communities across the city.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 5 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Perfect for:</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Sustainable fashion and upcycled clothing brands</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Organic food producers and healthy snack makers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Handmade pottery, crafts, and home decor artisans</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Natural skincare and wellness product creators</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Zero-waste lifestyle and eco-friendly solution providers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Local musicians, entertainers, and workshop facilitators</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border border-primary/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 5 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-8 text-center">
              Send us an email with details about your business and products. We'll get back to you within 24 hours to
              discuss partnership opportunities.
            </p>
            <div className="text-center">
              <Button
                href="mailto:anirudh.kannan321@gmail.com?subject=Vendor Partnership Inquiry&body=Hi Econauts team,%0D%0A%0D%0AI'm interested in becoming a vendor for your eco-friendly events. Here are my business details:%0D%0A%0D%0ABusiness Name:%0D%0AProducts/Services:%0D%0AContact Information:%0D%0AWebsite/Social Media:%0D%0A%0D%0ALooking forward to hearing from you!"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Email Us to Become a Vendor
              </Button>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              Click to open your email client with a pre-filled message
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
