"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
      question: "What is ecoknots?",
      answer: "Consectetur fugiat elit velit enim labore fugiat sit in tempor ut."
    },
    {
      question: "Is it ecoknots",
      answer: "Est nisi nulla incididunt sit mollit ipsum reprehenderit dolor dolor duis commodo incididunt enim incididunt."
    },
    {
      question: "why is eco knots",
      answer: "Proident occaecat pariatur nulla amet culpa qui ullamco dolore."
    }
  ]

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FAQ
        </motion.h2>
        
        <div className="grid gap-4 max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="rounded-lg bg-primary-dark overflow-hidden"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex justify-between items-center p-6 hover:bg-primary transition-colors"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? (
                    <Plus className="text-secondary" size={24} color="#ffffff"/>
                  ) : (
                    <Plus className="text-secondary" size={24} color="#ffffff"/>
                  )}
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-300">
                  {item.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}