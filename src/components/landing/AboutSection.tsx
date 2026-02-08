import React from "react";
import TimelineItem from "../ui/TimelineItem";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { motion } from "framer-motion";
import { StickyNote } from "../ui/StickyNote";

const AboutSection: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full bg-background overflow-hidden selection:bg-primary/30 py-32">
            {/* Background Animation (Muted & Deep) - Changed to fixed for performance */}
            <div className="fixed inset-0 z-0 opacity-10 grayscale pointer-events-none">
                <BackgroundGradientAnimation containerClassName="h-full w-full" interactive={false} />
            </div>

            <main className="relative flex flex-col items-center p-8 pointer-events-none z-10">
                <div className="w-full max-w-6xl flex flex-col items-center">

                    {/* Technical Log Header */}
                    <div className="relative w-full max-w-4xl mb-48 flex flex-col items-start px-4 sm:px-8 border-none pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="text-primary font-mono text-[10px] tracking-widest uppercase opacity-60">/ SRC: BUILD_ARCHIVE</span>
                            <div className="w-8 h-[1px] bg-primary/20"></div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-[6vw] sm:text-[8vw] leading-[0.9] font-bold text-white uppercase tracking-tighter mb-12 font-satoshi"
                        >
                            TECHNICAL<br />
                            <span className="text-primary">PROFILE</span>
                        </motion.h1>

                        {/* Sticky Note Annotation - Restored for About */}
                        <div className="absolute top-0 right-0 md:-right-24 rotate-6 z-50 hidden md:block">
                            <StickyNote color="yellow" rotation={6} className="w-80 md:w-96 text-2xl">
                                <p className="leading-tight">
                                    Check out the <br />
                                    <span className="font-bold">Nova prototype</span> <br />
                                    below! It's finally moving.
                                </p>
                                <div className="mt-2 text-base opacity-60 text-right">- Alex</div>
                            </StickyNote>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-foreground/80 text-lg md:text-xl font-mono max-w-2xl border-l-2 border-primary pl-8 py-2 leading-relaxed"
                        >
                            Building robots and embedded software from my workspace.
                        </motion.p>

                        {/* Philosophy / Approach Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-sans">ENGINEERING PHILOSOPHY</h3>
                                <p className="text-white/60 font-mono text-sm leading-relaxed">
                                    I believe in "first principles" thinking—stripping a problem down to its core mathematical and physical truths. My work bridges the gap between high-level AI reasoning and low-level hardware control, ensuring that intelligent systems are grounded in physical reality.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-sans">CORE FOCUS</h3>
                                <ul className="text-white/60 font-mono text-sm space-y-2">
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary">&gt;</span> Latency Optimization
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary">&gt;</span> Edge Inference
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary">&gt;</span> Human-Robot Interaction
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Project Feed */}
                    <div className="relative w-full max-w-4xl px-4 sm:px-8 pb-32 pointer-events-auto">
                        <div className="space-y-24">
                            <div className="flex items-center gap-6 mb-16 opacity-30">
                                <span className="font-mono text-[10px] tracking-widest">[ PROJECT_FEED ]</span>
                                <span className="flex-grow h-[1px] bg-foreground/10"></span>
                            </div>

                            <div className="flex flex-col space-y-32">
                                <TimelineItem
                                    title={<span className="font-sans text-3xl">Nova Humanoid</span>}
                                    subtitle="Hardware Build & Control"
                                    date="2023 // VER_1.0"
                                    tags={["CAD", "PYTHON", "3D_PRINT"]}
                                    description={
                                        <div className="space-y-6 text-foreground font-mono leading-relaxed text-sm">
                                            <p className="opacity-80">
                                                Constructed a full-scale humanoid chassis focusing on articulated joint torque and low-latency motor control.
                                            </p>
                                            <div className="pt-4 space-y-4">
                                                <span className="text-primary/50 text-[10px] uppercase font-bold tracking-widest">Supported by:</span>
                                                <div className="flex flex-wrap gap-8 opacity-60">
                                                    <span className="text-[11px]">DFRobot</span>
                                                    <span className="text-[11px]">Polymaker</span>
                                                    <span className="text-[11px]">Radxa</span>
                                                </div>
                                            </div>
                                            <div className="pt-8">
                                                <a href="https://github.com/alexbuildstech/nova" target="_blank" rel="noreferrer" className="tech-box inline-flex items-center gap-4 text-[10px] uppercase tracking-widest text-primary hover:bg-primary/5 transition-colors">
                                                    ACCESS_REPOSITORY_LOG [&gt;]
                                                </a>
                                            </div>
                                        </div>
                                    }
                                />

                                <TimelineItem
                                    title={<span className="font-sans text-3xl">Assistive Tech</span>}
                                    subtitle="Spatial Navigation"
                                    date="2024 // PROTOTYPE"
                                    isLast={true}
                                    tags={["VISION", "RPi", "AUDIO"]}
                                    description={
                                        <div className="space-y-6 text-foreground font-mono leading-relaxed text-sm">
                                            <p className="opacity-80">
                                                Converting visual depth data into spatial audio for navigation. Built on edge hardware with optimized inference models.
                                            </p>
                                            <div className="pt-8">
                                                <a href="https://github.com/alexbuildstech/assistivetech" target="_blank" rel="noreferrer" className="tech-box inline-flex items-center gap-4 text-[10px] uppercase tracking-widest text-primary hover:bg-primary/5 transition-colors">
                                                    SOURCE_CODE [&gt;]
                                                </a>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutSection;
