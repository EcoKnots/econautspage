// components/UpcomingEvents.jsx
"use client"

import { motion } from "framer-motion"
import Button from "@/components/Button"

export default function UpcomingEvents() {
  return (
    <section className="bg-primary/10 py-16 px-4 sm:px-6 lg:px-8">
    <div className="absolute inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white py-2 px-4">
      <div className="flex items-center justify-between w-full overflow-hidden">

        {/* Marquee Text */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div
            className="flex whitespace-nowrap text-black text-sm md:text-base font-medium gap-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
          >
            <span>Upcoming Event: Join us for EcoFest 2025 on 28th sep in ASBL lakeside khajaguda </span>
            <span>Upcoming Event: Join us for EcoFest 2025 on 28th sep in ASBL lakeside khajaguda </span>
            <span>Upcoming Event: Join us for EcoFest 2025 on 18th oct in Ramky Towers</span>
            <span>Upcoming Event: Join us for EcoFest 2025 on 18th oct in Ramky Towers</span>
          </motion.div>
        </div>

        {/* Button */}
        <div className="flex-shrink-0 ml-4">
  <a
    href="https://drive.google.com/uc?export=download&id=1_HXQT9dQw6VdAy8hsXd2D3xNIUpPzoNq"
    download="EcoFestDetails.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="primary" size="sm">
      View Details
    </Button>
  </a>
</div>

      </div>
    </div>

    </section>
  )
}
