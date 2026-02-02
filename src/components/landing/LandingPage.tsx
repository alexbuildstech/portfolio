import React, { useRef } from "react"
import HeroSection from "./HeroSection"
import CombinedSection from "./CombinedSection"
import Navbar from "../layout/Navbar"
import { motion, useScroll, useTransform } from "framer-motion"

const LandingPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative w-full z-10">
      <Navbar />

      <main className="w-full flex flex-col items-center">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }} 
          className="w-full sticky top-0 h-screen"
        >
          <HeroSection />
        </motion.div>

        <div className="w-full relative bg-background">
          <CombinedSection />
        </div>
      </main>
    </div>
  )
}

export default LandingPage
