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
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const combinedOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const combinedY = useTransform(scrollYProgress, [0.15, 0.35], [50, 0]);

  return (
    <div ref={containerRef} className="relative w-full z-10 pointer-events-none">
      {/* Navbar - Interactive */}
      <div className="pointer-events-auto">
        <Navbar />
      </div>

      <main className="w-full flex flex-col items-center">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="w-full sticky top-0 h-screen overflow-hidden">
          <HeroSection />
        </motion.div>

        <motion.div style={{ opacity: combinedOpacity, y: combinedY }} className="w-full relative">
          <CombinedSection />
        </motion.div>
      </main>
    </div>
  )
}

export default LandingPage
