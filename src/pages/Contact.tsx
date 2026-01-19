import React from "react";
import MatrixRain from "../components/effects/MatrixRain";
import Navbar from "../components/layout/Navbar";
import { ScrambledTitle } from "../components/effects/TextScramble";

const Contact: React.FC = () => {
    return (
        <main className="relative min-h-screen bg-matrix-black flex flex-col items-center justify-center p-6 overflow-hidden">
            {/* Background */}
            <MatrixRain opacity={0.2} speed={1} />

            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className="relative z-10 w-full max-w-2xl bg-black/60 backdrop-blur-xl border border-matrix-glow/20 p-8 sm:p-12 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center space-y-10 group hover:border-matrix-glow/40 transition-all duration-500">
                <ScrambledTitle
                    phrases={["CONTACT ME"]}
                    phraseDuration={2000}
                    className="text-4xl sm:text-5xl font-bold text-hero-title font-mono uppercase tracking-[0.2em] text-center"
                />

                <div className="space-y-8 w-full">
                    {/* Phone */}
                    <div className="flex flex-col items-center space-y-2 group/item">
                        <span className="text-matrix-dim font-mono text-xs uppercase tracking-widest group-hover/item:text-matrix-glow transition-colors duration-300">Phone</span>
                        <a
                            href="tel:+919265763478"
                            className="text-2xl sm:text-3xl font-bold text-matrix-glow hover:text-white transition-all duration-300 font-mono tracking-wider hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                        >
                            +91 9265763478
                        </a>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center space-y-2 group/item">
                        <span className="text-matrix-dim font-mono text-xs uppercase tracking-widest group-hover/item:text-matrix-glow transition-colors duration-300">Email</span>
                        <a
                            href="mailto:alexazander3@gmail.com"
                            className="text-xl sm:text-2xl font-bold text-matrix-glow hover:text-white transition-all duration-300 font-mono tracking-wider hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                        >
                            alexazander3@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
