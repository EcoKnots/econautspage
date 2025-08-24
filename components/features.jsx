"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Button from "./Button"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const features = [
    {
      title: "Our Vision",
      description: "A future Earth would approve of — plastic-free, breathable, toxin-free, and rooted in culture and ecology.",
      imageSrc: "https://images.unsplash.com/photos/top-view-mens-hands-holding-the-soil-with-little-plant-in-the-middle-sHrR2rBL2S0?auto=format&fit=crop&w=800&h=450&q=80",
      href: "#",
      cta: "Read Our Vision",
      reverse: false,
    },
    {
      title: "Mission Goals",
      description: "Promote sattvic living, enable climate-positive action, revive traditional knowledge, and foster eco-literacy.",
      imageSrc: "https://images.unsplash.com/photos/a-green-field-with-trees-and-rolling-hills-in-the-background-PpdOEIqI-ZU?auto=format&fit=crop&w=800&h=450&q=80",
      href: "#",
      cta: "Our Green Mission",
      reverse: true,
    },
    {
      title: "Research & Innovation",
      description: "Open-source kits, policy studies, eco-tech labs, and partnerships for climate and consumer behavior insights.",
      imageSrc: "https://images.unsplash.com/photos/solar-cell-panel-in-country-landscape-against-sunny-sky-and-mountain-backgrounds-solar-power-is-the-innovation-for-sustainability-of-world-energy-sustainable-resources-y1-KXk7KuoU?auto=format&fit=crop&w=800&h=450&q=80",
      href: "#",
      cta: "Explore Research",
      reverse: false,
    },
    {
      title: "Youth & Civic",
      description: "Eco clubs, public action tools, RTI resources, and audit templates for students and change-makers.",
      imageSrc: "https://images.unsplash.com/photos/people-gathering-in-a-event-CjMwAu4-OqY?auto=format&fit=crop&w=800&h=450&q=80",
      href: "#",
      cta: "Become an Eco Leader",
      reverse: true,
    },
  ]

  return (
    <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Vision, Education & Youth
        </motion.h2>

        <motion.div
          className="space-y-20 md:space-y-32"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col gap-12 md:gap-16 lg:items-center ${feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              <div className="lg:w-1/2 aspect-video rounded-2xl overflow-hidden">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`lg:w-1/2 ${feature.reverse ? "lg:pr-16" : "lg:pl-16"}`}>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                  {feature.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  {feature.description}
                </p>
                <Button href={feature.href} variant="primary" size="lg">
                  {feature.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}