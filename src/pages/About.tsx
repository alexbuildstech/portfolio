import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import { ScrambledTitle } from "../components/effects/TextScramble";
import TimelineItem from "../components/ui/TimelineItem";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import Robot3D from "../components/ui/Robot3D";

const About: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-matrix-black overflow-y-auto">
            {/* Background Animation (Fixed) */}
            <div className="fixed inset-0 z-0">
                <BackgroundGradientAnimation containerClassName="h-full w-full" />
            </div>

            {/* Robot Background (Floating Layer - Left Side) */}
            <div className="fixed inset-0 z-10 pointer-events-none opacity-30 lg:opacity-50 overflow-hidden">
                <Robot3D
                    className="scale-[0.5] sm:scale-[0.7] lg:scale-110 -translate-x-[30%] lg:-translate-x-[30%] translate-y-[10%]"
                />
            </div>

            {/* Content Container (Layered above background) */}
            <div className="relative z-20 w-full">
                {/* Navbar (Highest Layer) */}
                <div className="relative z-50 w-full pointer-events-auto">
                    <Navbar />
                </div>

                <main className="relative flex flex-col items-center p-6 pt-32 pointer-events-none overflow-x-hidden">
                    {/* Inner Content (pass-through events except for children) */}
                    <div className="w-full flex flex-col items-center">

                        {/* Header Content */}
                        <div className="relative w-full max-w-4xl mb-16 flex flex-col items-start px-4 sm:px-8 pointer-events-auto">
                            <ScrambledTitle
                                phrases={["ABOUT ME", "MY JOURNEY", "BUILDING..."]}
                                phraseDuration={3000}
                                className="text-4xl sm:text-6xl font-bold text-hero-title font-mono uppercase tracking-[0.1em] mb-4"
                            />
                            <p className="text-matrix-dim text-lg font-mono max-w-xl border-l-2 border-matrix-glow/50 pl-4 py-1 bg-black/40 backdrop-blur-sm">
                                I build things that bridge the gap between software and building.
                            </p>
                        </div>

                        {/* Timeline Section */}
                        <div className="relative w-full max-w-3xl px-4 sm:px-8 pb-32 pointer-events-auto">
                            <div className="bg-black/70 backdrop-blur-xl border border-matrix-glow/10 rounded-xl p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
                                <h2 className="text-xl font-mono text-matrix-glow uppercase tracking-widest mb-10 pl-2 flex items-center gap-3">
                                    <span className="w-2 h-2 bg-matrix-glow rounded-full animate-pulse"></span>
                                    Project Timeline
                                </h2>

                                <div className="flex flex-col">
                                    <TimelineItem
                                        title="Nova - Open Source Humanoid"
                                        subtitle="AI Robot Software for InMoov"
                                        date="Robotics / AI"
                                        tags={["Python", "LLM", "Computer Vision", "Robotics", "InMoov"]}
                                        description={
                                            <div className="space-y-4">
                                                <p className="text-matrix-dim leading-relaxed">
                                                    Built a fully functional humanoid robot based on the open-source InMoov project.
                                                    I customized and 3D printed every component, assembling the entire chassis and mechanical systems myself.
                                                </p>
                                                <div className="pt-2 space-y-3">
                                                    <p className="text-xs font-mono uppercase text-matrix-dim/60 tracking-widest">Shared Sponsors</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="px-3 py-1 bg-matrix-glow/5 text-matrix-glow text-[10px] uppercase font-mono rounded border border-matrix-glow/20">DFRobot</span>
                                                        <span className="px-3 py-1 bg-matrix-glow/5 text-matrix-glow text-[10px] uppercase font-mono rounded border border-matrix-glow/20">Polymaker</span>
                                                        <span className="px-3 py-1 bg-matrix-glow/5 text-matrix-glow text-[10px] uppercase font-mono rounded border border-matrix-glow/20">Radxa</span>
                                                    </div>
                                                </div>
                                                <ul className="list-disc list-inside text-matrix-dim/80 pl-2 space-y-2 pt-2 text-sm">
                                                    <li>Won <span className="text-matrix-glow font-bold">1st Place</span> in SciBlast 2.0.</li>
                                                </ul>
                                                <div className="pt-4">
                                                    <a href="https://github.com/alexbuildstech/nova" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-matrix-glow/10 border border-matrix-glow/40 text-matrix-glow hover:bg-matrix-glow/20 hover:text-white hover:border-matrix-glow px-5 py-2.5 rounded text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]">
                                                        EXPLORE NOVA ON GITHUB <span>{`->`}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        }
                                    />

                                    <TimelineItem
                                        title="AI Assistive Navigation"
                                        subtitle="Spatial Audio & Memory for the Visually Impaired"
                                        date="IoT / Edge AI"
                                        isLast={true}
                                        tags={["Gemini API", "OpenCV", "Whisper", "Edge-TTS", "3D Audio"]}
                                        description={
                                            <div className="space-y-4">
                                                <p className="text-matrix-dim leading-relaxed">
                                                    A smart glasses prototype designed to help visually impaired individuals navigate their environment using <strong>binaural audio</strong>.
                                                    The device translates visual data into sound, using raising beeps and volume changes to indicate object proximity.
                                                </p>
                                                <div className="bg-matrix-glow/5 p-4 rounded border-l-2 border-matrix-glow/40 mt-3 backdrop-blur-sm">
                                                    <p className="text-xs font-mono uppercase text-matrix-glow/80 mb-2 tracking-widest">AI Agent Integration</p>
                                                    <p className="italic text-sm text-matrix-dim/90">
                                                        Features integrated Large Language Models (LLM) and Vision Language Models (VLM), enabling users to ask questions like
                                                        <span className="text-white"> "What do you see?"</span> and receive descriptions of their surroundings.
                                                    </p>
                                                </div>
                                                <div className="pt-2 space-y-3">
                                                    <p className="text-xs font-mono uppercase text-matrix-dim/60 tracking-widest">Shared Sponsors</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="px-3 py-1 bg-matrix-glow/5 text-matrix-glow text-[10px] uppercase font-mono rounded border border-matrix-glow/20">DFRobot</span>
                                                        <span className="px-3 py-1 bg-matrix-glow/5 text-matrix-glow text-[10px] uppercase font-mono rounded border border-matrix-glow/20">Polymaker</span>
                                                        <span className="px-3 py-1 bg-matrix-glow/5 text-matrix-glow text-[10px] uppercase font-mono rounded border border-matrix-glow/20">Radxa</span>
                                                    </div>
                                                </div>
                                                <ul className="list-disc list-inside text-matrix-dim/80 pl-2 space-y-2 pt-2 text-sm">
                                                    <li>Won <span className="text-matrix-glow font-bold">Best Relevance Category</span> in SciBlast 3.0.</li>
                                                </ul>
                                                <div className="pt-4">
                                                    <a href="https://github.com/alexbuildstech/assistivetech" target="_blank" rel="noreferrer" className="text-matrix-glow hover:text-white underline underline-offset-8 decoration-matrix-glow/30 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-200">
                                                        VIEW ON GITHUB <span>{`->`}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator (fixed) */}
                    <div className="fixed bottom-8 right-8 z-50 hidden lg:block pointer-events-none">
                        <div className="text-[10px] font-mono text-matrix-dim/60 [writing-mode:vertical-rl] tracking-[0.5em] uppercase animate-pulse">
                            SCROLL FOR HISTORY
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default About;
