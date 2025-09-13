"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-white text-sm">
            © ecoknots Inc. 2025
          </div>
          
          <div className="flex gap-6">
            <Link
              href="https://www.instagram.com/we.are.econauts/?next=%2F"
              target="_blank"
              className="text-white hover:text-primary transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="mailto:official@econauts.in?subject=Econauts%20Inquiry"
              className="text-white hover:text-primary transition-colors"
            >
              Email
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}