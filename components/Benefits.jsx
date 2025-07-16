"use client"

import { motion } from "framer-motion"
import {
  Users,
  Store,
  Globe,
  Sparkles,
  Home,
  BookOpen,
} from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      title: "Community Building",
      description:
        "Connect with like-minded neighbors and build lasting relationships through shared values of sustainability.",
      icon: <Users className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Local Economy Support",
      description:
        "Every purchase supports local artisans, small businesses, and eco-friendly entrepreneurs in your area.",
      icon: <Store className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Environmental Impact",
      description:
        "Reduce carbon footprint by shopping locally and choosing sustainable, upcycled, and eco-friendly products.",
      icon: <Globe className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Unique Experiences",
      description:
        "Discover one-of-a-kind handmade items, organic treats, and participate in engaging workshops and activities.",
      icon: <Sparkles className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Convenient Location",
      description:
        "Enjoy eco-friendly shopping and entertainment right in your residential society - no travel required.",
      icon: <Home className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Educational Value",
      description:
        "Learn about sustainable living practices, eco-friendly alternatives, and environmental conservation.",
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Why Choose Econauts?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a movement that celebrates sustainability while bringing communities together through meaningful
            experiences and conscious consumption.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
