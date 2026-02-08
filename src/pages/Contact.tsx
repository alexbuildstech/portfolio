import React from "react";
import MatrixRain from "../components/effects/MatrixRain";
import Navbar from "../components/layout/Navbar";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    return (
        <main className="relative min-h-screen bg-black flex flex-col items-center justify-center p-8 sm:p-24 overflow-hidden selection:bg-primary/30">
            {/* Background Layer - Terminal Rain */}
            <MatrixRain opacity={0.15} speed={0.8} color="#00ffff" />

            {/* Navbar */}
            <Navbar />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-3xl flex flex-col items-center space-y-24">
                <div className="space-y-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="tech-box px-8 py-4 bg-black/50"
                    >
                        <span className="text-primary font-mono text-[10px] tracking-widest uppercase block mb-2 opacity-60">/ Connection_Port</span>
                        <h1
                            className="text-[12vw] sm:text-[15vw] leading-[0.8] font-bold text-white uppercase tracking-tighter"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            OUT<span className="text-primary">REACH</span>
                        </h1>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                    {/* Phone Section */}
                    <div className="tech-box flex flex-col items-center md:items-start space-y-4 group hover:border-primary/50 transition-colors">
                        <span className="text-primary/40 font-mono text-[9px] uppercase tracking-widest">// Tel</span>
                        <a
                            href="tel:+919265763478"
                            className="text-xl font-mono text-white hover:text-primary transition-colors tracking-tight"
                        >
                            +91 9265763478
                        </a>
                    </div>

                    {/* Email Section */}
                    <div className="tech-box flex flex-col items-center md:items-start space-y-4 group hover:border-primary/50 transition-colors">
                        <span className="text-primary/40 font-mono text-[9px] uppercase tracking-widest">// Email</span>
                        <a
                            href="mailto:alexazander3@gmail.com"
                            className="text-lg font-mono text-white hover:text-primary transition-colors tracking-tight"
                        >
                            alexazander3@gmail.com
                        </a>
                    </div>
                </div>

                <div className="font-mono text-[8px] text-primary/20 uppercase tracking-[0.6em]">
                    Terminal_Active // 2024
                </div>
            </div>
        </main>
    );
};

export default Contact;
