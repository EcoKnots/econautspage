"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>

        {/* Main Content */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">Who We Are</h3>
          <p className="text-gray-700 text-lg mb-12 leading-relaxed">
            At <span className="font-semibold text-secondary">Econauts</span>, we believe that every celebration can be a step toward a cleaner planet.
            From eco flea markets in residential societies to sustainable weddings and birthdays,
            we create experiences that are fun, meaningful, and planet-friendly.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Eco Flea Markets",
              desc: "Experience a vibrant mix of local eco brands, pottery, upcycled fashion, organic food, and live performances — all in your society’s backyard.",
            },
            {
              title: "Green Event Planning",
              desc: "Whether it’s a birthday or a wedding, we make your events sustainable, stylish, and stress-free.",
            },
            {
              title: "Eco Entertainment",
              desc: "Stand-up comedy, live music, pottery workshops, and more — all curated to spark joy and eco-awareness.",
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-primary/10 border border-primary/20 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h4 className="text-xl font-semibold text-primary mb-2">{item.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
