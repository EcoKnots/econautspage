"use client"

import { motion } from "framer-motion"

import {
  Sprout,
  Tent,
  PartyPopper,
  Leaf,
  Recycle,
  Trees,
  Building,
  Wheat,
  Skull,
  ShoppingBag,
  Lightbulb,
  Handshake,
  Calculator,
  Megaphone,
  Globe,
  Sun,
  Paintbrush,
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
    title: "Eco-Living & Homes",
    desc: "Redesign your living with composting kits, plastic-free alternatives, eco-paints, greywater reuse, sattvic routines, and natural interiors.",
    icon: <Sprout className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Transform My Home"],
  },
  {
    title: "Eco Fairs",
    desc: "Our Green Eco Fairs are immersive sustainability carnivals. We curate a rich blend of eco-conscious vendors and inspiring exhibitors offering organic, recycled, toxic-free, and handmade alternatives across lifestyle, wellness, and food.",
    icon: <Tent className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Exhibit as Vendor", "Showcase as Exhibitor"],
  },
  {
    title: "Zero-Waste Events",
    desc: "From weddings to corporate summits, we create celebrations that leave only memories, not waste. Think reusable décor, composting stations, sattvic menus, and plastic-free setups — all designed for a low-impact, meaningful experience.",
    icon: <PartyPopper className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Plan My Eco Event"],
  },
  {
    title: "Green Eco Fairs",
    desc: "Our eco fairs are more than events — they’re immersive celebrations of sustainable living. Explore organic and recycled alternatives in food, fashion, wellness, and lifestyle, while enjoying workshops, installations, interactive corners, eco-gifts, and surprise performances.",
    icon: <Leaf className="w-10 h-10 text-secondary mx-auto" />,
  },
  {
    title: "Eco Celebrations Made Simple",
    desc: "Celebrate consciously with reusable décor, composting, pre-loved gifting, and live waste tracking that makes sustainability effortless.",
    icon: <Recycle className="w-10 h-10 text-secondary mx-auto" />,
  },
  {
    title: "Eco Corridors",
    desc: "Convert neighborhoods, parks, and institutions into green corridors with native trees, solar lighting, storytelling installations, and public compost loops.",
    icon: <Trees className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Design My Space"],
  },
  {
    title: "Green Infrastructure",
    desc: "Econauts builds sustainable spaces that are breathable, low-carbon, and future-ready. Using bamboo, fly-ash, solar systems, rainwater harvesting, bio-digesters, and energy-efficient design, we create eco-friendly solutions for homes, institutions, and public spaces.",
    icon: <Building className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Build Earth-Aligned Spaces"],
  },
  {
    title: "Sustainable Farming",
    desc: "Support rural and urban agriculture with organic kits, millet revival programs, rooftop gardens, permaculture, and agri training.",
    icon: <Wheat className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Start Eco Farming"],
  },
  {
    title: "Toxic-Free Earth",
    desc: "Lead clean-ups, map dumpsites, manage e-waste, and eliminate hazardous chemicals from your environment.",
    icon: <Skull className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Join the Clean Earth Mission"],
  },
  {
    title: "Eco Product Alternatives",
    desc: "Swap single-use plastics for verified green products — composters, cleaners, bags, decor — all rated and certified.",
    icon: <ShoppingBag className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Explore Eco Swaps"],
  },
  {
    title: "Consulting & Research",
    desc: "Get policy support, eco-certifications, carbon audits, and green behavior analytics customized to your ecosystem.",
    icon: <Lightbulb className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Consult With Us"],
  },
  {
    title: "CSR & NGO Partnerships",
    desc: "Co-create village outreach, school modules, and eco-events that drive social equity and environmental awareness.",
    icon: <Handshake className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Partner for Good"],
  },
  {
    title: "Carbon Offsetting",
    desc: "Neutralize your emissions through afforestation, offset credits, and regenerative ecosystem models.",
    icon: <Calculator className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Offset My Footprint"],
  },
  {
    title: "Eco-Recruitment",
    desc: "Apply for green jobs, list vacancies, or find volunteers aligned with sustainability and conscious careers.",
    icon: <Megaphone className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Join Green Careers"],
  },
  {
    title: "Net-Zero & Climate Solutions",
    desc: "Assess your climate footprint, build net-zero strategies, and earn rewards for measurable environmental action.",
    icon: <Globe className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Achieve Net-Zero With Us"],
  },
  {
    title: "Solar, Bio-Energy & SWT",
    desc: "Integrate rooftop solar, bio-toilets, street water treatment, and bio-fuel solutions into homes and institutions.",
    icon: <Sun className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Adopt Renewable Systems"],
  },
  {
    title: "Eco Renovation & Play Corridors",
    desc: "We transform homes, schools, and institutions with eco-paints, toxin-free interiors, rooftop solar, greywater reuse, and bio-energy systems. We also design eco-play areas using earth elements and recycled materials to encourage outdoor learning, creativity, and reduced screen time for children.",
    icon: <Paintbrush className="w-10 h-10 text-secondary mx-auto" />,
    cta: ["Renovate with Nature", "Build Play Corridors"],
  },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Why Choose Econauts?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a movement that celebrates sustainability while bringing communities together through meaningful
            experiences and conscious consumption.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
