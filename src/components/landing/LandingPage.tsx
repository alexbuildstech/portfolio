import React, { useRef } from "react"
import HeroSection from "./HeroSection"
import CombinedSection from "./CombinedSection"
import Navbar from "../layout/Navbar"

const LandingPage: React.FC = () => {
  return (
    <div className="relative w-full z-10">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <CombinedSection />
      </main>
    </div>
  )
}

export default LandingPage
