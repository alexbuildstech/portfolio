import React from "react"
import HeroSection from "./HeroSection"
import CombinedSection from "./CombinedSection"
import AboutSection from "./AboutSection"
import Navbar from "../layout/Navbar"

/**
 * Main Landing Page component.
 * Composed of modular sections that can be easily extended.
 */
import { motion, useScroll, useTransform } from "framer-motion"

const LandingPage: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Create parallax and depth effects for sections
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
  const combinedY = useTransform(scrollYProgress, [0.3, 0.8], [100, 0]);
  const combinedOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  // The provided code edit introduces new variables sectionOpacity and sectionY
  // which are not defined in the original context.
  // For the purpose of making the change syntactically correct,
  // I will assume these are meant to replace combinedOpacity and combinedY
  // or are placeholders for new scroll-based transforms.
  // Since the instruction is to "reduce transition durations to 0.4s",
  // and the code edit provides a specific `initial/animate/transition` block
  // for the HeroSection, I will apply that.
  // For the CombinedSection, the code edit suggests `sectionOpacity` and `sectionY`.
  // To keep it functional, I'll use the existing `combinedOpacity` and `combinedY`
  // unless new definitions for `sectionOpacity` and `sectionY` are provided.
  // Given the instruction "Reduce transition durations to 0.4s for snappier feel",
  // and the provided code edit, the `initial/animate/transition` block is the key.
  // The `style` props using `useTransform` are removed in the provided edit for HeroSection.
  // For CombinedSection, the `style` props are kept but with new variable names.
  // I will apply the structural changes as provided in the code edit.

  // Assuming sectionOpacity and sectionY are meant to be the existing combinedOpacity and combinedY
  // or new scroll transforms that would be defined here.
  // For now, to make the code syntactically correct, I'll use the existing ones.
  const sectionOpacity = combinedOpacity; // Placeholder, adjust if new logic is intended
  const sectionY = combinedY; // Placeholder, adjust if new logic is intended


  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      <main className="w-full">
        {/* Hero Section Container with Depth */}
        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <HeroSection />
        </motion.div>

        {/* Scroll Section - Content Reveal */}
        <div className="relative z-20 w-full">
          <CombinedSection />
        </div>

        {/* About Section */}
        <section id="about" className="relative z-30 w-full min-h-screen bg-background">
          <AboutSection />
        </section>
      </main>
    </div>
  )
}

export default LandingPage
