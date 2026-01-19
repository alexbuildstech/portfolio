import React, { useEffect } from "react";
import MatrixRain from "../components/effects/MatrixRain";
import Navbar from "../components/layout/Navbar";
import { ScrambledTitle } from "../components/effects/TextScramble";
import TimelineItem from "../components/ui/TimelineItem";
import { cn } from "@/lib/utils";

const About: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative min-h-screen bg-matrix-black flex flex-col items-center p-6 overflow-x-hidden">
            {/* Background */}
            <MatrixRain opacity={0.15} speed={0.5} />

            {/* Navbar */}
            <Navbar />

            {/* Header Content */}
            <div className="relative z-10 w-full max-w-4xl mt-24 mb-16 flex flex-col items-start px-4 sm:px-8">
                <ScrambledTitle
                    phrases={["ABOUT ME", "MY JOURNEY", "BUILDING..."]}
                    phraseDuration={3000}
                    className="text-4xl sm:text-6xl font-bold text-hero-title font-mono uppercase tracking-[0.1em] mb-4"
                />
                <p className="text-matrix-dim text-lg font-mono max-w-xl border-l-2 border-matrix-glow/50 pl-4 py-1">
                    I build things that bridge the gap between software and building.
                </p>
            </div>

            {/* Timeline Section */}
            <div className="relative z-10 w-full max-w-3xl px-4 sm:px-8 pb-32">
                <div className="bg-black/40 backdrop-blur-sm border border-matrix-glow/10 rounded-xl p-6 sm:p-10 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
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
                                <div className="space-y-2">
                                    <p>
                                        Built a fully functional humanoid robot based on the open-source InMoov project.
                                        I customized and 3D printed every component, assembling the entire chassis and mechanical systems myself.
                                    </p>
                                    <div className="pt-2 space-y-2">
                                        <p className="text-xs font-mono uppercase text-matrix-dim/80">Shared Sponsors</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-white/5 text-white text-xs rounded border border-white/10">DFRobot</span>
                                            <span className="px-2 py-1 bg-white/5 text-white text-xs rounded border border-white/10">Polymaker</span>
                                            <span className="px-2 py-1 bg-white/5 text-white text-xs rounded border border-white/10">Radxa</span>
                                        </div>
                                    </div>
                                    <ul className="list-disc list-inside text-matrix-dim/80 pl-2 space-y-1 pt-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                        <li>Won <span className="text-white font-bold">1st Place</span> in SciBlast 2.0.</li>
                                    </ul>
                                    <div className="pt-2">
                                        <a href="https://github.com/alexbuildstech/nova" target="_blank" rel="noreferrer" className="inline-block bg-matrix-glow/10 border border-matrix-glow/50 text-matrix-glow hover:bg-matrix-glow/20 hover:text-white hover:border-matrix-glow px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                                            View Nova on GitHub {`->`}
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
                                <div className="space-y-2">
                                    <p>
                                        A smart glasses prototype designed to help visually impaired individuals navigate their environment using <strong>binaural audio</strong>.
                                        The device translates visual data into sound, using raising beeps and volume changes to indicate object proximity.
                                    </p>
                                    <div className="bg-matrix-dim/5 p-3 rounded border-l-2 border-matrix-glow/40 mt-3">
                                        <p className="text-xs font-mono uppercase text-matrix-glow/70 mb-1">AI Agent Integration</p>
                                        <p className="italic">
                                            Features integrated Large Language Models (LLM) and Vision Language Models (VLM), enabling users to ask questions like
                                            <span className="text-white"> "What do you see?"</span> and receive descriptions of their surroundings.
                                        </p>
                                    </div>
                                    <div className="pt-2 space-y-2">
                                        <p className="text-xs font-mono uppercase text-matrix-dim/80">Shared Sponsors</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-white/5 text-white text-xs rounded border border-white/10">DFRobot</span>
                                            <span className="px-2 py-1 bg-white/5 text-white text-xs rounded border border-white/10">Polymaker</span>
                                            <span className="px-2 py-1 bg-white/5 text-white text-xs rounded border border-white/10">Radxa</span>
                                        </div>
                                    </div>
                                    <ul className="list-disc list-inside text-matrix-dim/80 pl-2 space-y-1 pt-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                        <li>Won <span className="text-white font-bold">Best Relevance Category</span> in SciBlast 3.0.</li>
                                    </ul>
                                    <div className="pt-2">
                                        <a href="https://github.com/alexbuildstech/assistivetech" target="_blank" rel="noreferrer" className="text-matrix-glow hover:text-white underline underline-offset-4 decoration-matrix-glow/30 text-xs font-mono uppercase tracking-wider transition-colors duration-200">
                                            View on GitHub {`->`}
                                        </a>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator (optional) */}
            <div className="fixed bottom-8 right-8 z-20 hidden lg:block">
                <div className="text-[10px] font-mono text-matrix-dim/40 [writing-mode:vertical-rl] tracking-widest uppercase">
                    Scroll for history
                </div>
            </div>
        </main>
    );
};

export default About;
