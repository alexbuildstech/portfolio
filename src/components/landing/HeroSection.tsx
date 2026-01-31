import React from "react";
import { motion } from "framer-motion";
import { Skeleton } from "../ui/Skeleton";
import { useRobotStore } from "@/hooks/useRobotStore";

const HeroSection: React.FC = () => {
  const { isRobotLoaded } = useRobotStore();

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center p-6 text-center pointer-events-none">
      <div className="space-y-8 max-w-5xl pointer-events-auto z-10 w-full">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-8 w-full"
        >
          {!isRobotLoaded ? (
            <>
              <Skeleton variant="text" className="h-24 md:h-32 w-2/3 mx-auto" />
              <Skeleton variant="text" className="h-8 md:h-10 w-1/2 mx-auto" />
            </>
          ) : (
            <>
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="text-6xl md:text-8xl font-bold text-foreground tracking-tighter leading-none"
              >
                ALEX
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl text-gray-400 font-bold tracking-tight max-w-2xl mx-auto"
              >
                Functional Robotics & Maker Projects
              </motion.p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
