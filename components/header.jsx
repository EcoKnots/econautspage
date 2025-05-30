"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="absolute w-full top-0 z-50 backdrop-blur-sm pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center pointer-events-auto">
            <Link href="/" className="text-white font-bold text-xl">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 pointer-events-auto">
            <Link href="#about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="#faq" className="text-white hover:text-gray-300 transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300 transition-colors">
              Contact us
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden pointer-events-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden pointer-events-auto"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-2 space-y-2">
            <Link
              href="#about"
              className="block py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#faq"
              className="block py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}