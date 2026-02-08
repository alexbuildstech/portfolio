import React from "react";
import { motion } from "framer-motion";
import { useRobotStore } from "@/hooks/useRobotStore";

const HeroSection: React.FC = () => {
  const { isRobotLoaded } = useRobotStore();

  return (
    <section className="relative w-full h-screen flex flex-col items-start justify-center px-6 lg:px-24 pointer-events-none">
      <div className="max-w-7xl w-full pointer-events-auto z-10 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <span className="text-xs font-black tracking-[0.3em] uppercase mb-4 opacity-60">
            India // 14 Year Old Builder
          </span>
          <h1 className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-[0.8] uppercase mb-8">
            ALEX<br />PAUL
          </h1>
          <p className="text-xl md:text-2xl font-bold tracking-tight max-w-xl opacity-80 leading-tight">
            Developing custom robotics platforms and hardware interfaces. 
            Focused on the engineering process, from motor torque to sensor tuning.
          </p>
          
          <div className="mt-12 flex gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40 mb-1">Primary Tools</span>
              <span className="text-sm font-bold uppercase">Python / C++ / Klipper</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40 mb-1">Hardware</span>
              <span className="text-sm font-bold uppercase">Arduino / FDM 3D Printing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection;
