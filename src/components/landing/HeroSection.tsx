import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import MatrixRain from "../effects/MatrixRain";
import Robot3D from "../ui/Robot3D";
import FloatingPart from "../effects/FloatingPart";

interface HeroSectionProps {
  className?: string;
}

const FOCUS_PHRASES = [
  "HUMANOID_ROBOTICS",
  "EMBEDDED_SOFTWARE",
  "3D_FABRICATION",
  "SYSTEM_CONTROL"
];

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();

  // Parallax effects for hero elements
  const nameY = useTransform(scrollY, [0, 500], [0, 150]);
  const nameOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const subtitleY = useTransform(scrollY, [0, 500], [0, 100]);

  // Robot scroll-linked transforms
  const robotZ = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % FOCUS_PHRASES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative h-screen flex items-center justify-center overflow-hidden bg-black ${className}`}>
      {/* Background - Subtle Matrix Rain */}
      <div className="absolute inset-0 z-0 opacity-10">
        <MatrixRain opacity={0.15} speed={0.5} />
      </div>

      {/* Grid overlay for tech feel */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '150px 150px'
        }}
      />

      {/* Hero Content - Massive Bold Typography */}
      <div className="relative z-20 w-full flex flex-col items-center px-4">

        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] tracking-[0.5em] text-primary/60 uppercase">
            // STATUS: SYSTEM_ACTIVE
          </span>
        </motion.div>

        {/* MASSIVE NAME */}
        <motion.h1
          style={{ y: nameY, opacity: nameOpacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[12vw] sm:text-[15vw] leading-[0.85] font-bold text-white uppercase tracking-tighter text-center font-satoshi"
        >
          <span>ALEX</span>
          <br />
          <span className="text-primary">PAUL</span>
        </motion.h1>

        {/* Rotating Focus - Technical Labels */}
        <motion.div
          style={{ y: subtitleY }}
          className="mt-12 h-16 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-[2px] bg-primary" />
              <span className="font-satoshi text-lg sm:text-2xl tracking-widest text-white/80">
                {FOCUS_PHRASES[index]}
              </span>
              <div className="w-8 h-[2px] bg-primary" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="font-mono text-[9px] tracking-widest text-primary/40 uppercase">Initiate Protocol</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
