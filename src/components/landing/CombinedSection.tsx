import React from "react";
import MatrixRain from "../effects/MatrixRain";
import { ScrambledTitle } from "../effects/TextScramble";
import Robot3D from "../ui/Robot3D";

const CombinedSection: React.FC = () => {
    return (
        <section
            id="combined-content"
            className="relative min-h-screen flex flex-col md:flex-row items-stretch justify-center bg-matrix-black border-t border-matrix-dim/20 overflow-hidden"
        >
            {/* Matrix Rain Background (Lowest Layer) */}
            <MatrixRain opacity={0.4} className="z-0" />

            {/* Right Side: Interactive Robot (Background on mobile, Right side on Desktop) */}
            <div className="absolute md:relative inset-0 md:inset-auto w-full md:w-1/2 h-full md:h-screen z-10 flex items-center justify-center opacity-60 md:opacity-100">
                <Robot3D
                    className="scale-[0.6] sm:scale-[0.8] lg:scale-100"
                />
            </div>

            {/* Left Side: Text Content (Higher Layer, but pass-through) */}
            <div
                className="relative z-20 w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 py-12 md:py-0 space-y-12 md:space-y-16 pointer-events-none"
            >
                {/* Mission / Core Section */}
                <div className="space-y-4 group pointer-events-auto">
                    <ScrambledTitle
                        phrases={["THE VISION", "01 // CORE"]}
                        phraseDuration={2000}
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-hero-title font-mono uppercase tracking-widest h-7 md:h-9 group-hover:text-matrix-glow transition-colors duration-300 cursor-default"
                    />
                    <div className="text-matrix-dim text-sm sm:text-base leading-relaxed space-y-4 max-w-lg font-sans bg-black/60 backdrop-blur-md p-5 rounded-lg border border-matrix-glow/10 md:bg-transparent md:p-0 md:border-none">
                        <div className="space-y-3">
                            <p className="hover:text-matrix-glow transition-colors duration-200">
                                I build physical robots and the software that makes them useful.
                                <br />
                                <span className="text-matrix-glow/80 font-mono text-sm">Mostly in Python.</span>
                            </p>

                            <p className="hover:text-matrix-glow/80 transition-colors duration-200 border-l border-matrix-glow/30 pl-3 italic text-sm">
                                I design parts, 3D print them, wire the electronics, and write the code that controls them.
                                I care about how things behave and how they feel to use—not just whether they technically work.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="font-mono text-xs uppercase tracking-widest text-matrix-glow">What I actually work with:</p>
                            <ul className="list-none space-y-1.5 pl-1 border-l border-matrix-glow/20 ml-1">
                                <li className="pl-3 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default font-mono text-xs">3D-printed robot bodies and mechanisms</li>
                                <li className="pl-3 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default font-mono text-xs">Microcontrollers and control electronics</li>
                                <li className="pl-3 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default font-mono text-xs">Computer vision for perception</li>
                                <li className="pl-3 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default font-mono text-xs">Language and vision models for interaction</li>
                            </ul>
                        </div>

                        <div className="space-y-3 pt-2">
                            <p className="text-xs text-matrix-dim/80 hover:text-matrix-glow transition-colors duration-200">
                                My projects are built on open-source hardware, and I release my own work as open source too.
                            </p>

                            <div className="bg-matrix-glow/5 p-3 rounded border border-matrix-glow/10">
                                <p className="text-sm hover:text-matrix-glow transition-colors duration-200">
                                    I don’t learn by watching tutorials.
                                    <br />
                                    I learn by building something, breaking it, figuring out why, and fixing it.
                                </p>
                            </div>

                            <p className="text-matrix-glow font-mono text-[10px] uppercase tracking-[0.3em] animate-pulse">Everything on this site is work I’ve actually done.</p>
                        </div>
                    </div>
                </div>

                {/* Robotics & Code Section */}
                <div className="space-y-4 group pointer-events-auto">
                    <ScrambledTitle
                        phrases={["ROBOTICS & CODE"]}
                        phraseDuration={1500}
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-matrix-glow font-mono uppercase tracking-widest h-7 md:h-9 group-hover:text-white transition-colors duration-300 cursor-default"
                    />
                    <div className="text-matrix-dim text-sm sm:text-base leading-relaxed space-y-4 max-w-lg font-sans bg-black/60 backdrop-blur-md p-5 rounded-lg border border-matrix-glow/10 md:bg-transparent md:p-0 md:border-none shadow-[0_0_30px_rgba(0,255,0,0.05)]">
                        <p className="text-white/90 font-medium">I build robots that move, see, and respond.</p>

                        <div className="space-y-2">
                            <p className="font-mono text-xs uppercase tracking-tight text-matrix-glow/80">That means:</p>
                            <ul className="list-none space-y-1.5 pl-1 border-l border-matrix-glow/20 ml-1">
                                <li className="pl-3 hover:bg-matrix-glow/5 hover:translate-x-1 transition-all duration-200 cursor-default font-mono text-xs">Designing and printing parts</li>
                                <li className="pl-3 hover:bg-matrix-glow/5 hover:translate-x-1 transition-all duration-200 cursor-default font-mono text-xs">Building and wiring electronics</li>
                                <li className="pl-3 hover:bg-matrix-glow/5 hover:translate-x-1 transition-all duration-200 cursor-default font-mono text-xs">Writing Python for control and logic</li>
                                <li className="pl-3 hover:bg-matrix-glow/5 hover:translate-x-1 transition-all duration-200 cursor-default font-mono text-xs">Using vision systems so robots can understand their surroundings</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CombinedSection;

