"use client"

import { motion } from "framer-motion"
import Button from "@/components/Button"
import UpcomingEvents from "@/components/upcomingEvents"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-green-900">
      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex lg:justify-start justify-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Content Box */}
          <div className="lg:w-1/2 lg:max-w-[640px] w-full h-full flex items-center justify-center">
            <div className="max-w-[520px] w-full space-y-8 py-12">
              
              {/* Heading */}
              <div className="space-y-6 text-left">
                {/* Logo */}
                <div className="w-[500px] h-[50px] flex items-center py-2">
                  <Image
                    src="/name_icon.png"
                    alt="Logo"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>

                <h2 className="text-2xl text-white md:text-3xl font-semibold leading-tight">
                  From Grey to Green. From Habit to Harmony
                </h2>
                <p className="text-xl text-gray-200">
                  Transforming how we live, build, grow, and think — for a cleaner, wiser, sustainable tomorrow.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button href="#contact" variant="primary" size="lg">
                  Join the Movement
                </Button>
                {/* <Button href="#vendor" variant="secondary" size="lg">
                  Become a Vendor
                </Button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <UpcomingEvents />
    </section>
  )
}
