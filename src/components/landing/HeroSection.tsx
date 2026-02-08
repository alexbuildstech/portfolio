import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative w-full min-h-[auto] md:min-h-screen flex flex-col items-start justify-center px-4 md:px-6 lg:px-24 pt-20 pb-12 md:pt-0 md:pb-0 pointer-events-none overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      <motion.div 
        style={{ opacity }}
        className="max-w-7xl w-full pointer-events-auto z-10 flex flex-col items-start"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start w-full"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-[10px] md:text-xs font-mono font-black tracking-[0.4em] uppercase text-accent bg-accent/5 px-4 py-1 border border-accent/20">
              BUILDER LOG // v2.0.26
            </span>
            <div className="hidden md:block h-[1px] w-24 bg-accent/30" />
          </div>

          <div className="relative mb-8 md:mb-16 w-full">
            <motion.h1 
              style={{ y: y1 }}
              className="text-[16vw] md:text-[11vw] font-black uppercase tracking-tighter leading-[0.75] text-foreground break-words relative z-20"
            >
              ALEX PAUL
            </motion.h1>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[1fr,400px] gap-8 md:gap-12 w-full items-start lg:items-end relative z-30">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 md:space-y-8"
            >
              <h2 className="text-3xl md:text-5xl xl:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-foreground">
                I build experimental robotics and AI focused on <span className="text-accent italic text-stroke">real-world interaction.</span>
              </h2>
              <p className="text-base md:text-xl font-bold tracking-tight opacity-70 max-w-xl uppercase leading-snug">
                I build physical systems that handle uncontrolled variables—like lighting variance and network jitter—optimizing for low-latency firmware over vanity demos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full max-w-md p-6 md:p-8 border-4 border-foreground bg-foreground text-background flex flex-col gap-6 shadow-[8px_8px_0_0_#0055ff] md:shadow-[12px_12px_0_0_#0055ff]"
            >
              <div className="space-y-2 font-mono">
                <div className="flex justify-between text-[10px] md:text-xs font-black uppercase tracking-widest">
                  <span className="opacity-40">Focus</span>
                  <span>Humanoid Autonomy</span>
                </div>
                <div className="flex justify-between text-[10px] md:text-xs font-black uppercase tracking-widest">
                  <span className="opacity-40">Age</span>
                  <span>14 Years</span>
                </div>
                <div className="flex justify-between text-[10px] md:text-xs font-black uppercase tracking-widest text-accent">
                  <span className="opacity-40">Method</span>
                  <span>Physical Execution</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Visual background hook */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] hidden xl:block z-0">
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
