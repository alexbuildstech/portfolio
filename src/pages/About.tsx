import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import { Cpu, Terminal, Layers, Info, History, Code2, Glasses, Box } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useRobotStore } from "@/hooks/useRobotStore";

const About: React.FC = () => {
    const { setRobotExpression } = useRobotStore();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen w-full pt-32 pb-20 px-6 lg:px-24">
            <Navbar />

            <div className="max-w-7xl mx-auto">
                <header className="mb-24">
                    <h1 className="text-[10vw] md:text-[6vw] font-black uppercase tracking-tighter leading-[0.8] mb-8">
                        Technical<br />Architecture
                    </h1>
                    <div className="max-w-2xl text-xl font-bold tracking-tight opacity-70">
                        A focused look into the systems and hardware stacks I'm building. 
                        No fluff—just functional logic and physical execution.
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
                    <ProjectCard
                        title="Nova AI Stack"
                        description="Independent AI stack for expressive humanoid interaction. Implements an asynchronous vision-to-action pipeline using Gemini 2.0 and specialized NLU patterns."
                        techStack={["Python", "Groq", "Gemini 2.0", "OpenCV", "Kinematics"]}
                        href="https://github.com/alexbuildstech/nova"
                        status="ACTIVE"
                        icon={<Cpu size={24} />}
                        header={
                            <div className="my-6 p-6 border-2 border-foreground group-hover/card:border-background transition-colors">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-[10px] font-black uppercase opacity-40 mb-1">Actuation</div>
                                        <div className="text-sm font-black uppercase tracking-tight">27 DOF Control</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase opacity-40 mb-1">Vision</div>
                                        <div className="text-sm font-black uppercase tracking-tight">720p Real-time</div>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    <ProjectCard
                        title="Vision Array"
                        description="Assistive navigation system exploring spatial memory and 3D audio heuristics. Designed for low-latency obstacle awareness and object retrieval."
                        techStack={["Python", "SQLite3", "CSRT", "Spatial Audio"]}
                        href="https://github.com/alexbuildstech/assistivetech"
                        status="RESEARCH"
                        icon={<Glasses size={24} />}
                        header={
                            <div className="my-6 p-6 border-2 border-foreground group-hover/card:border-background transition-colors">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-[10px] font-black uppercase opacity-40 mb-1">Mapping</div>
                                        <div className="text-sm font-black uppercase tracking-tight">Grid Heuristics</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase opacity-40 mb-1">Audio</div>
                                        <div className="text-sm font-black uppercase tracking-tight">HRTF Spatialization</div>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>

                <section className="border-t-2 border-foreground pt-16">
                    <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-12 opacity-40">Hardware Inventory</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-bold uppercase tracking-tight">
                        <div className="p-8 border-2 border-foreground space-y-4">
                            <Box size={24} className="opacity-40" />
                            <h3 className="font-black">Production</h3>
                            <ul className="space-y-2 opacity-70">
                                <li>Anycubic Kobra 2 Neo</li>
                                <li>Klipper Firmware</li>
                                <li>Polymaker Industrial Materials</li>
                            </ul>
                        </div>
                        <div className="p-8 border-2 border-foreground space-y-4">
                            <Cpu size={24} className="opacity-40" />
                            <h3 className="font-black">Compute</h3>
                            <ul className="space-y-2 opacity-70">
                                <li>Arduino Uno / Mega</li>
                                <li>Radxa Boards (Inactive)</li>
                                <li>Low-Latency Bus Control</li>
                            </ul>
                        </div>
                        <div className="p-8 border-2 border-foreground space-y-4">
                            <Terminal size={24} className="opacity-40" />
                            <h3 className="font-black">Logic</h3>
                            <ul className="space-y-2 opacity-70">
                                <li>Pythonic System Control</li>
                                <li>NLU Integration</li>
                                <li>Motion Profiles</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
