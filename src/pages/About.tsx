import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import { Cpu, Box, User, Settings, Database, Terminal, Award, Trophy } from "lucide-react";
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
        <div className="relative min-h-screen w-full pt-32 pb-20 px-6 lg:px-24 bg-background overflow-x-hidden text-foreground">
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.02]" />
            <Navbar />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section 1: The Persona */}
                <header className="mb-48 flex flex-col gap-12">
                    <div>
                        <h1 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-8">
                            Physical<br /><span className="text-accent">Execution</span>
                        </h1>
                        <div className="max-w-md text-2xl font-black tracking-tight opacity-90 leading-none uppercase text-accent">
                            Alex Paul. 14. India. Engineering depth over surface-level motivation.
                        </div>
                    </div>
                    
                    <div className="max-w-3xl space-y-12 p-12 md:p-16 border-[12px] border-foreground bg-card shadow-[16px_16px_0_0_#0055ff] md:shadow-[32px_32px_0_0_#0055ff] lg:ml-auto">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-6">
                            <User className="text-accent" size={48} /> The Story
                        </h2>
                        <div className="space-y-8 text-sm md:text-base font-bold leading-relaxed uppercase tracking-tight opacity-80">
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

                {/* Section 1.5: Achievements */}
                <section className="mb-48">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 border-b-8 border-foreground pb-4 inline-block">
                        Achievements // Records
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "SciBlast 3.0", award: "Winner", project: "Assistive Tech" },
                            { title: "SciBlast 2.0", award: "Winner", project: "Nova Animatronics" },
                            { title: "Sci Odyssey", award: "Winner", project: "Nova Humanoid" },
                            { title: "Sci Odyssey", award: "Winner", project: "Robot Dog Prototype" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border-4 border-foreground bg-card shadow-[8px_8px_0_0_#0055ff] flex flex-col gap-4">
                                <Trophy className="text-accent" size={32} />
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black uppercase tracking-tighter leading-none">{item.title}</h3>
                                    <p className="text-xs font-mono font-bold text-accent uppercase tracking-widest">{item.award}</p>
                                </div>
                                <p className="text-sm font-bold uppercase opacity-60 leading-tight">
                                    Project: {item.project}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Projects */}
                <section className="mb-48">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b-8 border-foreground pb-8 gap-4">
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                            Technical<br />Stacks
                        </h2>
                        <span className="text-xs font-mono font-black opacity-30 tracking-[0.5em] mb-2 uppercase text-foreground">LATEST DEPLOYS</span>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <ProjectCard
                            title="Nova AI Stack"
                            description="An independent autonomous stack for expressive humanoids. Implements an asynchronous vision-to-action pipeline using Gemini 2.0 and specialized NLU patterns for context-aware interaction."
                            techStack={["Python", "Groq LLM", "Gemini 2.0", "OpenCV", "Kinematics"]}
                            href="https://github.com/alexbuildstech/nova"
                            status="ACTIVE BUILD"
                            icon={<Cpu size={32} />}
                            imageSrc="./nova_technical_v2.png"
                            header={
                                <div className="space-y-8">
                                    <div className="w-full bg-white border-4 border-foreground p-4 overflow-hidden">
                                        <NovaDiagramSVG className="w-full h-auto" />
                                    </div>
                                    <div className="p-10 border-4 border-foreground bg-muted text-foreground">
                                        <div className="grid grid-cols-2 gap-10 font-mono text-[11px] font-black uppercase">
                                            <div className="space-y-2">
                                                <div className="opacity-30">ACTUATION</div>
                                                <div className="text-sm border-l-4 border-accent pl-3 text-foreground">27 DOF Active</div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="opacity-30">VISION</div>
                                                <div className="text-sm border-l-4 border-accent pl-3 text-foreground">720p Real-time</div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="opacity-30">COMPUTE</div>
                                                <div className="text-sm border-l-4 border-accent pl-3 text-foreground">Radxa / Jetson</div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="opacity-30">LATENCY</div>
                                                <div className="text-sm border-l-4 border-accent pl-3 text-foreground">&lt;180ms Pipeline</div>
                                            </div>
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
                            status="R&D STAGE"
                            icon={<Settings size={32} />}
                            imageSrc="./assistive_tech_diagram.png"
                            header={
                                <div className="p-10 border-4 border-foreground bg-muted text-foreground">
                                    <div className="grid grid-cols-2 gap-10 font-mono text-[11px] font-black uppercase">
                                        <div className="space-y-2">
                                            <div className="opacity-30">DATABASE</div>
                                            <div className="text-sm border-l-4 border-accent pl-3 text-foreground">SQLite Local</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="opacity-30">SPATIAL</div>
                                            <div className="text-sm border-l-4 border-accent pl-3 text-foreground">3D HRTF Audio</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="opacity-30">TRACKING</div>
                                            <div className="text-sm border-l-4 border-accent pl-3 text-foreground">Multi-CSRT</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="opacity-30">RUNTIME</div>
                                            <div className="text-sm border-l-4 border-accent pl-3 text-foreground">Event-Driven</div>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-foreground">
                        <div className="p-12 border-4 border-foreground space-y-8 bg-card hover:shadow-[16px_16px_0_0_#0055ff] transition-all group relative">
                            <Box size={48} className="text-accent" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-foreground">Production</h3>
                            <ul className="space-y-4 font-mono text-[11px] font-bold uppercase tracking-widest opacity-60 text-foreground">
                                <li className="flex items-center gap-3"><span>•</span> Anycubic Kobra 2 Neo</li>
                                <li className="flex items-center gap-3"><span>•</span> Klipper-Tuned Firmware</li>
                                <li className="flex items-center gap-3"><span>•</span> Polymaker Industrial</li>
                                <li className="flex items-center gap-3"><span>•</span> Structural Testing</li>
                            </ul>
                        </div>
                        <div className="p-12 border-4 border-foreground space-y-8 bg-card hover:shadow-[16px_16px_0_0_#0055ff] transition-all group relative text-foreground">
                            <Database size={48} className="text-accent" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-foreground">Compute</h3>
                            <ul className="space-y-4 font-mono text-[11px] font-bold uppercase tracking-widest opacity-60 text-foreground">
                                <li className="flex items-center gap-3"><span>•</span> Arduino Mega / Uno</li>
                                <li className="flex items-center gap-3"><span>•</span> Radxa Boards</li>
                                <li className="flex items-center gap-3"><span>•</span> NVIDIA Jetson Nano</li>
                                <li className="flex items-center gap-3"><span>•</span> Multi-Bus Control</li>
                            </ul>
                        </div>
                        <div className="p-12 border-4 border-foreground space-y-8 bg-card hover:shadow-[16px_16px_0_0_#0055ff] transition-all group relative text-foreground">
                            <Terminal size={48} className="text-accent" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-foreground">Logic</h3>
                            <ul className="space-y-4 font-mono text-[11px] font-bold uppercase tracking-widest opacity-60 text-foreground">
                                <li className="flex items-center gap-3"><span>•</span> Python 3.14</li>
                                <li className="flex items-center gap-3"><span>•</span> OpenCV / Mediapipe</li>
                                <li className="flex items-center gap-3"><span>•</span> VLM Integration</li>
                                <li className="flex items-center gap-3"><span>•</span> Kinematics Solvers</li>
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
