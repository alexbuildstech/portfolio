import React from "react"
import HeroSection from "./HeroSection"
import CombinedSection from "./CombinedSection"
import Navbar from "../layout/Navbar"

/**
 * Main Landing Page component.
 * Composed of modular sections that can be easily extended.
 */
const LandingPage: React.FC = () => {
  return (
    <div className="crt-overlay">
      <div className="scanline-effect"></div>
      <main className="w-full">
        <Navbar />

        {/* Hero Section - Animated raining letters */}
        <HeroSection />

        {/* Combined Skills and Interactive Section */}
        <CombinedSection />
      </main>
    </div>
  )
}

export default LandingPage
