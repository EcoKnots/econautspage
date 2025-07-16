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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About/>
      <Benefits/>
      <Features/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </main>
  )
}

