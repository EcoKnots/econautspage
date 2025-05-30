"use client"

import { motion } from "framer-motion"
import Button from "@/components/Button"
import UpcomingEvents from "@/components/upcomingEvents"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* Background Spline */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://my.spline.design/glasscirclescopycopy-180c9586895ce0f08901474366d371ce/"
          className="w-full h-full absolute top-0 left-0"
          style={{
            pointerEvents: 'none',
            filter: 'brightness(1)',
          }}
        />
      </div>

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
                <h1 className="text-5xl text-white md:text-6xl font-bold leading-tight">
                  Celebrate Green. Live Clean.
                </h1>
                <p className="text-xl text-gray-300">
                  Econauts brings eco-friendly flea markets and sustainable events to your neighborhood.
                  Discover conscious living through community, creativity, and celebration.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button href="#contact" variant="primary" size="lg">
                  Book an Eco Event
                </Button>
                <Button href="#vendor" variant="secondary" size="lg">
                  Become a Vendor
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
