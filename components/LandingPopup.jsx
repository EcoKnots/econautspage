"use client"
import { useState } from "react"
import { X } from "lucide-react"

export default function LandingPopup() {
  const [showPopup, setShowPopup] = useState(true)

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      <div className="relative">

        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute -top-2 -right-2 bg-white rounded-full  shadow-lg hover:bg-gray-200
                     sm:-top-2 sm:-right-2 sm:p-1
                     md:-top-3 md:-right-3 md:p-1
                     lg:-top-4 lg:-right-4 lg:p-2"
        >
          <X className="w-3 h-3 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
        </button>

        {/* Ad Image */}
        <img
          src="/ecofair_image2.jpeg"
          alt="Ad Banner"
          className="shadow-xl max-h-[70vh] max-w-[50vw] w-auto h-auto object-contain
                     sm:max-h-[70vh] sm:max-w-[50vw]
                     md:max-h-[70vh] md:max-w-[50vw]
                     lg:max-h-[70vh] lg:max-w-[50vw]"
        />
      </div>
    </div>
  )
}
