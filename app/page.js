"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FAQ from "@/components/faq"
import VendorSection from "@/components/vendor_section"
import Benefits from "@/components/Benefits"
import DigitalTools from "@/components/Digital"
import LandingPopup from "@/components/LandingPopup"  // ✅ Import popup

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* ✅ Popup always sits on top until closed */}
      {/* <LandingPopup /> */}

      <Header />
      <Hero />
      <About/>
      <Benefits/>
      <Features/>
      {/* <FAQ/> */}
      <DigitalTools/>
      <Contact/>
      <Footer/>
    </main>
  )
}
