"use client"

import { motion } from "framer-motion"
import Button from "@/components/Button"
import UpcomingEvents from "@/components/upcomingEvents"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[url('/eco-bg.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-green-900/80"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex lg:justify-start justify-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Content Box */}
          <div className="lg:w-1/2 w-full h-full flex items-center justify-center lg:justify-start">
            <div className="max-w-[520px] w-full space-y-6 py-12 text-center lg:text-left">
              
              {/* Logo */}
              <div className="w-full flex justify-center lg:justify-start mt-6 sm:mt-0">
                <Image
                  src="/name_icon2.png"
                  alt="Logo"
                  width={450}
                  height={80}
                  className="object-contain w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[450px] h-auto"
                  priority
                />
              </div>

              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight">
                From Grey to Green. From Habit to Harmony
              </h2>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-lg text-gray-200">
                Transforming how we live, build, grow, and think — for a cleaner, wiser, sustainable tomorrow.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button href="#contact" variant="primary" size="lg">
                  Join the Movement
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <UpcomingEvents />
    </section>
  )
}
