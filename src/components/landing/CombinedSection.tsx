import React from "react";
import { motion } from "framer-motion";
import { StickyNote } from "../ui/StickyNote";

const CombinedSection: React.FC = () => {
    return (
        <section
            id="combined-content"
            className="relative min-h-screen flex flex-col items-center justify-start bg-black py-24 px-6 sm:px-12 md:px-24 overflow-hidden"
        >
            {/* Massive Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-7xl mb-32 relative"
            >
                <div className="flex flex-col md:flex-row items-end gap-12">
                    <div>
                        <span className="font-mono text-[10px] tracking-[0.5em] text-primary/60 uppercase block mb-4">
                            // CAPABILITIES
                        </span>
                        <h2 className="text-[12vw] sm:text-[14vw] leading-[0.8] font-bold text-white uppercase tracking-tighter font-satoshi">
                            <span className="whitespace-nowrap">WHAT I</span><br />
                            <span className="text-primary">BUILD</span>
                        </h2>
                    </div>

                    {/* Sticky Note - Restored & Larger */}
                    <motion.div
                        className="mb-12 md:mb-24 z-20"
                        initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotate: -5, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        <StickyNote color="cyan" rotation={-5}>
                            Core focus: <br />
                            <span className="font-bold">Humanoid robotics</span> and <span className="font-bold">embedded systems</span>.
                        </StickyNote>
                    </motion.div>
                </div>
            </motion.div>

            {/* Content Grid */}
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                {/* Left: Skills */}
                <div className="space-y-16">
                    {/* Hardware Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border-l-4 border-primary pl-8 py-4"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-primary font-mono text-[10px] tracking-widest uppercase">/ HARDWARE</span>
                            <span className="text-[9px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20">ACTIVE</span>
                        </div>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white uppercase mb-6 font-sans">
                            Physical<br />Systems
                        </h3>
                        <p className="text-white/60 font-mono text-sm leading-relaxed mb-6 max-w-md">
                            Design and fabrication of functional robotics components using industrial-grade techniques.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-[11px] font-mono text-white/40">
                            <div className="flex items-center gap-2"><span className="text-primary">&gt;</span> 3D Printing</div>
                            <div className="flex items-center gap-2"><span className="text-primary">&gt;</span> CAD (Fusion 360)</div>
                            <div className="flex items-center gap-2"><span className="text-primary">&gt;</span> Assembly</div>
                            <div className="flex items-center gap-2"><span className="text-primary">&gt;</span> Prototyping</div>
                        </div>
                    </motion.div>

                    {/* Software Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="border-l-4 border-cyan-400 pl-8 py-4"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase">/ SOFTWARE</span>
                            <span className="text-[9px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 border border-cyan-400/20">IN_BUILD</span>
                        </div>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white uppercase mb-6 font-sans">
                            Locomotion<br />Logic
                        </h3>
                        <p className="text-white/60 font-mono text-sm leading-relaxed mb-6 max-w-md">
                            Real-time backend control systems that make hardware move with precision.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-[11px] font-mono text-white/40">
                            <div><span className="text-cyan-400/60 text-[9px] block mb-1">LANGUAGE</span>Python / C++</div>
                            <div><span className="text-cyan-400/60 text-[9px] block mb-1">HARDWARE</span>Arduino / RPi</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Empty for now or static image? User said remove spline model. */}
                {/* Removing the robot container entirely since it was mainly for the robot. */}
            </div>
        </section>
    );
};

export default CombinedSection;
