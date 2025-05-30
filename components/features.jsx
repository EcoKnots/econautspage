"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
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

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto grid gap-y-20 md:gap-y-32"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Easy Feature */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col gap-12 md:gap-16 lg:flex-row lg:items-center"
        >
          <div className="lg:w-1/2 aspect-video bg-gray-800 rounded-2xl overflow-hidden">
            {/* Replace div below with your Image component */}
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">
              RED
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Officia culpa eiusmod esse elit officia nulla reprehenderit aliquip.
            </p>
            <Button 
              href="#" 
              variant="primary" 
              size="lg"
            >
              Read More
            </Button>
          </div>
        </motion.div>

        {/* Fast Feature */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col gap-12 md:gap-16 lg:flex-row-reverse lg:items-center"
        >
          <div className="lg:w-1/2 aspect-video bg-gray-800 rounded-2xl overflow-hidden">
            {/* Replace div below with your Image component */}
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          </div>
          <div className="lg:w-1/2 lg:pr-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Blue
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Sit quis consectetur minim sit quis aliquip et ut est consectetur pariatur sunt eu.
            </p>
            <Button 
              href="#" 
              variant="primary" 
              size="lg"
            >
              Read More
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}