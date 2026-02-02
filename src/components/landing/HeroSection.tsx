import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-8 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tighter leading-none">
            Alex
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-tight max-w-2xl">
            14-year-old robotics & hardware developer
          </p>
          
          <p className="text-base text-muted-foreground/80 max-w-lg">
            Building functional robots and maker projects. From CAD modeling to circuit design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
