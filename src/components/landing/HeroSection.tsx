import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative w-full h-screen flex flex-col items-start justify-center px-6 lg:px-24 pointer-events-none overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      <motion.div 
        style={{ opacity }}
        className="max-w-7xl w-full pointer-events-auto z-10 flex flex-col items-start"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono font-black tracking-[0.4em] uppercase text-accent bg-accent/5 px-4 py-1 border border-accent/20">
              EST. 2012 // PROTOCOL v2.0.26
            </span>
            <div className="h-[1px] w-24 bg-accent/30" />
          </div>

          <div className="relative mb-16">
            <motion.h1 
              style={{ y: y1 }}
              className="text-[14vw] md:text-[11vw] font-black uppercase tracking-tighter leading-[0.75] text-foreground"
            >
              ALEX PAUL
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-12 w-full items-end">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-foreground">
                Building robots that <span className="text-accent">actually move.</span>
              </h2>
              <p className="text-lg md:text-xl font-bold tracking-tight opacity-70 max-w-xl uppercase leading-snug">
                Custom humanoid systems, low-latency firmware, and computer vision built for the physical world. 
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="p-8 border-4 border-foreground bg-foreground text-background flex flex-col gap-6 shadow-[12px_12px_0_0_#0055ff]"
            >
              <div className="flex justify-between items-center border-b border-background/20 pb-4">
                <span className="text-[10px] font-mono font-black tracking-widest opacity-60">SYSTEM STATUS</span>
                <span className="text-[10px] font-mono font-black text-accent">ACTIVE BUILD</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                  <span>Current Age</span>
                  <span>14 Years</span>
                </div>
                <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                  <span>Location</span>
                  <span>India</span>
                </div>
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-accent">
                  <span>Focus</span>
                  <span>Robotics // AI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Visual background hook */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
         <div className="grid grid-cols-4 gap-4">
            {[...Array(16)].map((_, i) => (
                <div key={i} className="w-24 h-24 border-2 border-foreground" />
            ))}
         </div>
      </div>
    </section>
  )
}

export default HeroSection;
