import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRobotStore } from "@/hooks/useRobotStore";

const HeroSection: React.FC = () => {
  const { isRobotLoaded } = useRobotStore();
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative w-full h-screen flex flex-col items-start justify-center px-6 lg:px-24 pointer-events-none overflow-hidden">
      <motion.div 
        style={{ opacity }}
        className="max-w-7xl w-full pointer-events-auto z-10 flex flex-col items-start"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <div className="overflow-hidden mb-4">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block text-xs font-black tracking-[0.4em] uppercase opacity-60"
            >
              India // Builder Protocol v2.0.26
            </motion.span>
          </div>

          <div className="relative">
            <motion.h1 
              style={{ y: y1 }}
              className="text-[15vw] md:text-[10vw] font-black tracking-tighter leading-[0.75] uppercase mb-8 mix-blend-difference"
            >
              ALEX<br />PAUL
            </motion.h1>
            
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
               className="h-4 bg-foreground mb-12"
            />
          </div>

          <motion.div 
            style={{ y: y2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-2xl md:text-4xl font-bold tracking-tight opacity-90 leading-[1.1] uppercase italic">
              Architecting Physical Intelligence.
            </p>
            <p className="mt-6 text-lg md:text-xl font-medium tracking-tight opacity-60 max-w-lg">
              Developing autonomous humanoid stacks and low-latency hardware interfaces. 
              Engineering depth over surface-level motivation.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 flex gap-12 border-l-4 border-foreground pl-8"
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40 mb-2">Core Stack</span>
              <span className="text-sm font-black uppercase tracking-wider">Python / C++ / Klipper / OpenCV</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40 mb-2">Production</span>
              <span className="text-sm font-black uppercase tracking-wider">Custom Arduino / FDM / PID-Tuned</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none opacity-[0.03]">
        <h2 className="text-[40vw] font-black leading-none">BUILD</h2>
      </div>
    </section>
  )
}

export default HeroSection;
