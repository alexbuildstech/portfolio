import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import { Cpu, Box, User, Settings, Database, Terminal } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useRobotStore } from "@/hooks/useRobotStore";

const About: React.FC = () => {
    const { setIsRobotLoaded } = useRobotStore();

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsRobotLoaded(true);
    }, [setIsRobotLoaded]);

    return (
        <div className="relative min-h-screen w-full pt-32 pb-20 px-6 lg:px-24 bg-background overflow-x-hidden">
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.02]" />
            <Navbar />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section 1: The Persona */}
                <header className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <h1 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            Physical<br /><span className="text-accent">Execution</span>
                        </h1>
                        <div className="max-w-md text-2xl font-black tracking-tight opacity-90 leading-none uppercase">
                            Alex Paul. 14. India. Engineering depth over surface-level motivation.
                        </div>
                    </div>
                    
                    <div className="space-y-12 p-16 border-[12px] border-foreground bg-card shadow-[32px_32px_0_0_#0055ff]">
                        <h2 className="text-4xl font-black uppercase tracking-tight flex items-center gap-6">
                            <User className="text-accent" size={48} /> The Story
                        </h2>
                        <div className="space-y-8 text-base font-bold leading-relaxed uppercase tracking-tight opacity-80">
                            <p>
                                I build physical intelligence because code is only interesting when it has consequences in the real world.
                            </p>
                            <p>
                                I spend my time in the weeds—tuning PID loops, optimizing inverse kinematics, and engineering computer vision pipelines for edge compute. No fluff. Just hardware that works.
                            </p>
                            <p>
                                Currently developing humanoid actuation systems and spatial memory engines for assistive tech.
                            </p>
                        </div>
                    </div>
                </header>

                {/* Section 2: Projects */}
                <section className="mb-48">
                    <div className="flex items-end justify-between mb-24 border-b-8 border-foreground pb-8">
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                            Technical<br />Stacks
                        </h2>
                        <span className="text-xs font-mono font-black opacity-30 tracking-[0.5em] mb-2 uppercase">LATEST_DEPLOYS</span>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <ProjectCard
                            title="Nova AI Stack"
                            description="An independent autonomous stack for expressive humanoids. Implements an asynchronous vision-to-action pipeline using Gemini 2.0 and specialized NLU patterns for context-aware interaction."
                            techStack={["Python", "Groq LLM", "Gemini 2.0", "OpenCV", "Kinematics"]}
                            href="https://github.com/alexbuildstech/nova"
                            status="ACTIVE_BUILD"
                            icon={<Cpu size={32} />}
                            imageSrc="/nova_technical_v2.png"
                            header={
                                <div className="my-10 p-10 border-4 border-foreground bg-muted space-y-8">
                                    <div className="grid grid-cols-2 gap-10 font-mono text-[11px] font-black uppercase">
                                        <div className="space-y-2">
                                            <div className="opacity-30">ACTUATION</div>
                                            <div className="text-sm border-l-4 border-accent pl-3">27 DOF Active</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="opacity-30">VISION</div>
                                            <div className="text-sm border-l-4 border-accent pl-3">720p Real-time</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="opacity-30">COMPUTE</div>
                                            <div className="text-sm border-l-4 border-accent pl-3">Radxa / Jetson</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="opacity-30">LATENCY</div>
                                            <div className="text-sm border-l-4 border-accent pl-3">&lt;180ms Pipeline</div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />

                        <ProjectCard
                            title="Vision Array"
                            description="Assistive navigation system exploring spatial memory. Features local-first object persistence (SQLite) and 3D audio heuristics (HRTF) for environment guidance."
                            techStack={["Python", "SQLite3", "CSRT", "Spatial Audio", "Gemini Pro"]}
                            href="https://github.com/alexbuildstech/assistivetech"
                            status="R&D_STAGE"
                            icon={<Settings size={32} />}
                            imageSrc="/assistive_tech_diagram.png"
                            header={
                                <div className="my-10 p-10 border-4 border-foreground bg-muted space-y-8">
                                    <div className="grid grid-cols-2 gap-10 font-mono text-[11px] font-black uppercase">
                                        <div className="space-y-2">
                                            <div className="opacity-30">DATABASE</div>
                                            <div className="text-sm border-l-4 border-accent pl-3">SQLite Local</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="opacity-30">SPATIAL</div>
                                            <div className="text-sm border-l-4 border-accent pl-3">3D HRTF Audio</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="opacity-30">TRACKING</div>
                                            <div className="text-sm border-l-4 border-accent pl-3">Multi-CSRT</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="opacity-30">RUNTIME</div>
                                            <div className="text-sm border-l-4 border-accent pl-3">Event-Driven</div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </section>

                {/* Section 3: Hardware Inventory */}
                <section className="border-t-8 border-foreground pt-32 mb-48">
                    <h2 className="text-4xl font-black uppercase tracking-widest mb-24 opacity-30 italic">
                        Inventory // Laboratory Specs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-12 border-4 border-foreground space-y-8 bg-card hover:shadow-[16px_16px_0_0_#0055ff] transition-all group relative">
                            <Box size={48} className="text-accent" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter">Production</h3>
                            <ul className="space-y-4 font-mono text-[11px] font-bold uppercase tracking-widest opacity-60">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> Anycubic Kobra 2 Neo</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> Klipper-Tuned Firmware</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> Polymaker Industrial</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> Structural Testing</li>
                            </ul>
                        </div>
                        <div className="p-12 border-4 border-foreground space-y-8 bg-card hover:shadow-[16px_16px_0_0_#0055ff] transition-all group relative">
                            <Database size={48} className="text-accent" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter">Compute</h3>
                            <ul className="space-y-4 font-mono text-[11px] font-bold uppercase tracking-widest opacity-60">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> Arduino Mega / Uno</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> Radxa Boards</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> NVIDIA Jetson Nano</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> Multi-Bus Control</li>
                            </ul>
                        </div>
                        <div className="p-12 border-4 border-foreground space-y-8 bg-card hover:shadow-[16px_16px_0_0_#0055ff] transition-all group relative">
                            <Terminal size={48} className="text-accent" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter">Logic</h3>
                            <ul className="space-y-4 font-mono text-[11px] font-bold uppercase tracking-widest opacity-60">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> Python 3.14</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> OpenCV / Mediapipe</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> VLM Integration</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent" /> Kinematics Solvers</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            
            <div className="fixed bottom-20 left-10 pointer-events-none opacity-[0.02] select-none z-0">
                <h2 className="text-[25vw] font-black leading-none">PROTOCOL</h2>
            </div>
        </div>
    );
};

export default About;
