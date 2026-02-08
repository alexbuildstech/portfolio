import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import { Cpu, User, Settings, Database, Terminal, Info, Clock } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useRobotStore } from "@/hooks/useRobotStore";
import { NovaDiagramSVG, AssistiveTechDiagramSVG } from "@/components/ui/TechnicalDiagrams";

const About: React.FC = () => {
    const { setIsRobotLoaded } = useRobotStore();

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsRobotLoaded(true);
    }, [setIsRobotLoaded]);

    return (
        <div className="relative min-h-screen w-full pt-24 md:pt-40 pb-20 px-4 md:px-6 lg:px-24 bg-background overflow-x-hidden text-foreground uppercase tracking-tight">
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.02]" />
            <Navbar />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section 1: The Persona */}
                <header className="mb-24 md:mb-48 flex flex-col gap-8 md:gap-12">
                    <div>
                        <h1 className="text-[14vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-6 md:mb-8">
                            Physical<br /><span className="text-accent">Execution</span>
                        </h1>
                        <div className="max-w-xl text-lg md:text-2xl font-black tracking-tight opacity-90 leading-none uppercase text-accent">
                            I build robots and look for collaborators to push the limits of humanoid autonomy.
                        </div>
                    </div>
                    
                    <div className="max-w-3xl space-y-8 md:space-y-12 p-8 md:p-16 border-4 md:border-[12px] border-foreground bg-card shadow-[16px_16px_0_0_#0055ff] md:shadow-[32px_32px_0_0_#0055ff] lg:ml-auto font-mono uppercase tracking-tight">
                        <h2 className="text-2xl md:text-4xl font-black flex items-center gap-4 md:gap-6">
                            <Clock className="text-accent w-8 h-8 md:w-12 md:h-12" /> The Progression
                        </h2>
                        <div className="space-y-6 md:space-y-8 text-sm md:text-base font-bold leading-relaxed opacity-80">
                            <p>
                                I build physical systems because code is only interesting when it has consequences in the real world.
                            </p>
                            <p>
                                My work has moved from mechanical prototypes to humanoid robotics, focusing on low-latency firmware and computer vision for real-time interaction.
                            </p>
                            <p>
                                Currently developing humanoid actuation systems and spatial memory engines for indoor environmental awareness.
                            </p>
                        </div>
                    </div>
                </header>

                {/* Section 2: Projects */}
                <section className="mb-24 md:mb-48">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 border-b-4 md:border-b-8 border-foreground pb-6 md:pb-8 gap-4 uppercase tracking-tighter font-black">
                        <h2 className="text-5xl md:text-8xl">
                            Active<br />Stacks
                        </h2>
                        <span className="text-[10px] font-mono opacity-30 tracking-[0.4em] mb-2 uppercase">Current Research</span>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                        {/* Nova AI Stack */}
                        <div className="space-y-12">
                            <ProjectCard
                                title="Nova AI Stack"
                                description="A layer to sync cloud LLMs with humanoid frames so the robot responds to speech and follows gazes in real-time, not after a 5-second delay."
                                techStack={["Python", "Groq", "Gemini 2.0", "OpenCV", "PID"]}
                                href="https://github.com/alexbuildstech/nova"
                                status="ACTIVE BUILD"
                                icon={<Cpu className="w-6 h-6 md:w-8 md:h-8" />}
                                imageSrc="./nova_technical_v2.png"
                                header={
                                    <div className="w-full bg-white border-2 md:border-4 border-foreground p-2 md:p-4 overflow-hidden">
                                        <NovaDiagramSVG className="w-full h-auto" />
                                    </div>
                                }
                            />
                            <div className="p-8 border-4 border-foreground bg-accent/5 space-y-8 font-mono uppercase text-[11px] font-bold tracking-widest leading-relaxed">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-accent"><Info size={16} /> Technical Notes</div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <span className="opacity-40 block mb-1">Hardware Limit</span>
                                            <span>MG996R Servo Saturation & Jitter</span>
                                        </div>
                                        <div>
                                            <span className="opacity-40 block mb-1">Decision</span>
                                            <span>PID Trajectory Control for Smooth Motion</span>
                                        </div>
                                        <div>
                                            <span className="opacity-40 block mb-1">Rejected</span>
                                            <span>Ollama (High local latency on SBC)</span>
                                        </div>
                                        <div>
                                            <span className="opacity-40 block mb-1">Note</span>
                                            <span>Requires fast cloud API for real-time response</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vision Array */}
                        <div className="space-y-12">
                            <ProjectCard
                                title="Vision Array"
                                description="Testing if local SQLite memory can reduce the cost and lag of repeated AI object scans in familiar indoor spaces."
                                techStack={["Python", "SQLite3", "HRTF Audio", "Gemini Pro", "CSRT"]}
                                href="https://github.com/alexbuildstech/assistivetech"
                                status="R&D STAGE"
                                icon={<Settings className="w-6 h-6 md:w-8 md:h-8" />}
                                imageSrc="./assistive_tech_diagram.png"
                                header={
                                    <div className="p-6 md:p-10 border-2 md:border-4 border-foreground bg-muted text-foreground">
                                        <div className="grid grid-cols-2 gap-6 md:gap-10 font-mono text-[9px] md:text-[11px] font-black uppercase">
                                            <div className="space-y-1 md:space-y-2">
                                                <div className="opacity-30">DATABASE</div>
                                                <div className="text-xs md:text-sm border-l-2 md:border-l-4 border-accent pl-2 md:pl-3">SQLite Local</div>
                                            </div>
                                            <div className="space-y-1 md:space-y-2">
                                                <div className="opacity-30">SPATIAL</div>
                                                <div className="text-xs md:text-sm border-l-2 md:border-l-4 border-accent pl-2 md:pl-3">3D HRTF Audio</div>
                                            </div>
                                            <div className="space-y-1 md:space-y-2">
                                                <div className="opacity-30">TRACKING</div>
                                                <div className="text-xs md:text-sm border-l-2 md:border-l-4 border-accent pl-2 md:pl-3">Multi-CSRT</div>
                                            </div>
                                            <div className="space-y-1 md:space-y-2">
                                                <div className="opacity-30">RUNTIME</div>
                                                <div className="text-xs md:text-sm border-l-2 md:border-l-4 border-accent pl-2 md:pl-3">Event-Driven</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                            <div className="p-8 border-4 border-foreground bg-accent/5 space-y-8 font-mono uppercase text-[11px] font-bold tracking-widest leading-relaxed">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-accent"><Info size={16} /> Technical Notes</div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <span className="opacity-40 block mb-1">Decision</span>
                                            <span>Local SQLite for object history caching</span>
                                        </div>
                                        <div>
                                            <span className="opacity-40 block mb-1">Rejected</span>
                                            <span>Continuous VLM streaming (Too much data)</span>
                                        </div>
                                        <div>
                                            <span className="opacity-40 block mb-1">Limit</span>
                                            <span>Tracker drift happens without global SLAM</span>
                                        </div>
                                        <div>
                                            <span className="opacity-40 block mb-1">Note</span>
                                            <span>Works best in repeatable indoor environments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Specs */}
                <section className="border-t-4 md:border-t-8 border-foreground pt-16 md:pt-32 mb-24 md:mb-48">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest mb-12 md:mb-24 opacity-30 italic font-mono">
                        Hardware Stack // Laboratory Specs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="p-8 md:p-12 border-4 border-foreground space-y-6 md:space-y-8 bg-card hover:shadow-[16px_16px_0_0_#0055ff] transition-all group relative">
                            <Box className="text-accent w-10 h-10 md:w-12 md:h-12" />
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Production</h3>
                            <ul className="space-y-3 md:space-y-4 font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-widest opacity-60">
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> Anycubic Kobra 2 Neo</li>
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> Klipper-Tuned Firmware</li>
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> Polymaker Industrial PETG</li>
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> Structural Load Testing</li>
                            </ul>
                        </div>
                        <div className="p-8 md:p-12 border-4 border-foreground space-y-6 md:space-y-8 bg-card hover:shadow-[16px_16px_0_0_#0055ff] transition-all group relative">
                            <Database className="text-accent w-10 h-10 md:w-12 md:h-12" />
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Compute</h3>
                            <ul className="space-y-3 md:space-y-4 font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-widest opacity-60">
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> Arduino Mega 2560</li>
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> Radxa Rock 5C (Primary)</li>
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> NVIDIA Jetson Nano</li>
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> Serial Bus Orchestration</li>
                            </ul>
                        </div>
                        <div className="p-8 md:p-12 border-4 border-foreground space-y-6 md:space-y-8 bg-card hover:shadow-[16px_16px_0_0_#0055ff] transition-all group relative">
                            <Terminal className="text-accent w-10 h-10 md:w-12 md:h-12" />
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Logic</h3>
                            <ul className="space-y-3 md:space-y-4 font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-widest opacity-60">
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> Python 3.12+ (Async)</li>
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> OpenCV SSD Detection</li>
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> Gemini 2.0 Flash VLM</li>
                                <li className="flex items-center gap-2 md:gap-3"><span>•</span> Inverse Kinematics</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
