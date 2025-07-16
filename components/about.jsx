"use client"

import { motion } from "framer-motion"
import { Sprout, PartyPopper, Mic2 } from "lucide-react" // import only the needed icons

export default function About() {
  const offerings = [
    {
      title: "Eco Flea Markets",
      desc: "Experience a vibrant mix of local eco brands, pottery, upcycled fashion, organic food, and live performances — all in your society's backyard.",
      icon: <Sprout className="w-10 h-10 text-secondary mx-auto" />,
    },
    {
      title: "Green Event Planning",
      desc: "Whether it's a birthday or a wedding, we make your events sustainable, stylish, and stress-free with zero-waste solutions.",
      icon: <PartyPopper className="w-10 h-10 text-secondary mx-auto" />,
    },
    {
      title: "Eco Entertainment",
      desc: "Stand-up comedy, live music, pottery workshops, and more — all curated to spark joy and eco-awareness in your community.",
      icon: <Mic2 className="w-10 h-10 text-secondary mx-auto" />,
    },
  ]

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
            At <span className="font-semibold text-secondary">Econauts</span>, we believe that every celebration can be
            a step toward a cleaner planet. From eco flea markets in residential societies to sustainable weddings and
            birthdays, we create experiences that are fun, meaningful, and planet-friendly.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            We're building a community of conscious consumers and eco-friendly vendors who share our vision of
            sustainable living. Every event we organize is a step towards creating awareness about environmental
            responsibility while celebrating life's special moments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              className="bg-primary/10 border border-primary/20 p-8 rounded-lg hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="mb-4 text-center">{item.icon}</div>
              <h4 className="text-xl font-semibold text-primary mb-4 text-center">{item.title}</h4>
              <p className="text-gray-700 leading-relaxed text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
