"use client"

import { motion } from "framer-motion"
import { Sprout, PartyPopper, Mic2 } from "lucide-react" // import only the needed icons

export default function About() {

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Econauts
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-6">Who We Are</h3>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
           Discover how Econauts grew from a community spark into a national eco-conscious force. We build movements, not just models — rooted in Earth, science, and tradition.
          </p>
          <h3 className="text-2xl font-semibold text-primary mb-6">Meet Our Founders</h3>
          <p className="text-gray-600 text-base mb-8 leading-relaxed">
            OPS and Sairam — the vision architects behind Econauts — blend sustainability, activism, and design thinking to create grassroots green revolutions across India.
          </p>
          <h3 className="text-2xl font-semibold text-primary mb-6">Our Impact</h3>
          <p className="text-gray-600 text-base mb-8 leading-relaxed">
            From zero-waste fairs to plastic-free corridors and digital eco-habit apps, our data-backed actions speak loud. Track our collective impact in real-time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
