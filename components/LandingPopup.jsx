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
          className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-200
                     sm:-top-2 sm:-right-2 sm:p-1
                     md:-top-3 md:-right-3 md:p-2
                     lg:-top-4 lg:-right-4 lg:p-2"
        >
          <X className="w-3 h-3 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
        </button>

        {/* Ad Image */}
        <img
          src="/ecofair_image.jpg"
          alt="Ad Banner"
          className="shadow-xl max-h-[80vh] max-w-[95vw] w-auto h-auto object-contain
                     sm:max-h-[85vh]
                     md:max-h-[90vh]
                     lg:max-h-[95vh]"
        />
      </div>
    </div>
  )
}
