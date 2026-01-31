import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import { Cpu, Terminal, Layers, Info, History, Code2, Glasses } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ImageModal } from "@/components/ui/ImageModal";
import { NovaDiagramSVG, AssistiveTechDiagramSVG } from "@/components/ui/TechnicalDiagrams";
import { useRobotStore } from "@/hooks/useRobotStore";
import { Skeleton } from "@/components/ui/Skeleton";

const About: React.FC = () => {
    const { setRobotExpression, isRobotLoaded } = useRobotStore();
    const [activeModal, setActiveModal] = React.useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item: any = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { ease: [0.19, 1, 0.22, 1], duration: 0.8 } }
    };

    const sponsors = [
        { name: "DFRobot", desc: "Heavy Duty Robotics Hardware", logo: "dfrobot_logo.jpg", color: "hover:bg-orange-50" },
        { name: "Polymaker", desc: "Industrial Grade Polymers", logo: "polymaker_logo.jpg", color: "hover:bg-cyan-50" },
        { name: "Radxa", desc: "Low Latency Compute Boards", logo: "radxa_logo.png", color: "hover:bg-green-50" },
    ];

    return (
        <div className="relative min-h-screen w-full pt-32 pb-20 px-6">
            <Navbar />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr,0.6fr] gap-12">
                <motion.main
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-20"
                >
                    {!isRobotLoaded ? (
                        <div className="flex flex-col gap-20">
                            <div className="flex flex-col gap-6">
                                <Skeleton className="w-1/2 h-24 md:h-32" />
                                <Skeleton variant="text" lines={2} className="max-w-md" />
                            </div>
                            <div className="space-y-12">
                                <Skeleton className="w-48 h-4 rounded-full" />
                                <Skeleton className="w-full h-[400px] rounded-2xl" />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col gap-6">
                                <motion.div variants={item}>
                                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-4">
                                        System<br />Architecture
                                    </h1>
                                    <div className="h-1 w-full max-w-[200px] bg-accent rounded-full opacity-80" />
                                </motion.div>

                                <motion.div variants={item} className="max-w-md text-gray-600 font-medium leading-relaxed">
                                    <p>
                                        Developing custom robotics platforms and high-precision hardware interfaces.
                                        Optimized for low-latency control and robust physical performance.
                                    </p>
                                </motion.div>
                            </div>

                            <motion.div variants={item}>
                                <div className="flex items-center gap-4 mb-8 opacity-50">
                                    <h2 className="text-xs font-semibold uppercase tracking-widest">
                                        Deployment History
                                    </h2>
                                    <div className="h-[1px] flex-1 bg-gray-300" />
                                </div>

                                <div className="space-y-6">
                                    <ProjectCard
                                        title="Nova AI Stack"
                                        description="Independent AI stack for the InMoov platform. Uses an asynchronous vision-to-action pipeline (Gemini 2.0) for context-aware interaction."
                                        techStack={["Python", "Groq LLM", "Gemini 2.0", "OpenCV", "Inverse Kinematics"]}
                                        href="https://github.com/alexbuildstech/nova"
                                        status="DEPLOYED"
                                        className="w-full"
                                        icon={<Cpu className="w-5 h-5 text-accent" />}
                                        header={
                                            <div
                                                className="mt-4 p-6 bg-card rounded-xl flex gap-8 cursor-help transition-colors hover:bg-accent/5"
                                                onMouseEnter={() => setRobotExpression('active')}
                                                onMouseLeave={() => setRobotExpression('neutral')}
                                            >
                                                <div className="flex flex-col gap-4 w-full">
                                                    <div
                                                        className="w-full h-48 overflow-hidden rounded-lg bg-white flex items-center justify-center border border-gray-100 cursor-zoom-in group/img relative"
                                                        onClick={() => setActiveModal('nova')}
                                                    >
                                                        <img
                                                            src="assets/diagrams/nova_system_achitecture.png"
                                                            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover/img:scale-110"
                                                            alt="Nova Architecture"
                                                        />
                                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                                            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Enlarge Full Diagram</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-8">
                                                        <div className="space-y-1">
                                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Kinematics</div>
                                                            <div className="text-sm font-semibold text-foreground">27 DOF Active</div>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Vision</div>
                                                            <div className="text-sm font-semibold text-foreground">720p Wide-angle</div>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Control</div>
                                                            <div className="text-sm font-semibold text-foreground">Dual Mega2560</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    />

                                    <ProjectCard
                                        title="Vision Array Prototype"
                                        description="Assistive navigation system exploring spatial memory. Features local-first persistence (SQLite) for rapid 3D object retrieval."
                                        techStack={["Python", "Gemini API", "SQLite3", "CSRT Tracking", "Spatial Audio"]}
                                        href="https://github.com/alexbuildstech/assistivetech"
                                        status="RESEARCH"
                                        className="w-full"
                                        icon={<Glasses className="w-5 h-5 text-accent" />}
                                        header={
                                            <div
                                                className="mt-4 p-6 bg-accent/5 rounded-xl flex flex-col gap-4 cursor-help hover:bg-accent/10 transition-colors"
                                                onMouseEnter={() => setRobotExpression('thinking')}
                                                onMouseLeave={() => setRobotExpression('neutral')}
                                            >
                                                <div
                                                    className="w-full h-48 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 cursor-zoom-in group/img relative"
                                                    onClick={() => setActiveModal('assistive')}
                                                >
                                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                                        <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Enlarge Diagram</span>
                                                    </div>
                                                    <AssistiveTechDiagramSVG className="w-full h-full p-4" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1">
                                                        <div className="text-[10px] font-bold text-accent uppercase tracking-wider">Spatial Brain</div>
                                                        <div className="text-xs font-medium text-foreground">SQLite Persistence</div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-[10px] font-bold text-accent uppercase tracking-wider">3D Audio</div>
                                                        <div className="text-xs font-medium text-foreground">HRTF Heuristics</div>
                                                    </div>
                                                    <div className="col-span-2 pt-4 border-t border-accent/10 mt-2">
                                                        <div className="text-[11px] font-bold text-accent uppercase tracking-wider mb-2">Technical Constraint Log</div>
                                                        <div className="text-[12px] text-gray-600 leading-relaxed space-y-2">
                                                            <p className="flex items-start gap-2">
                                                                <span className="text-accent mt-1">•</span>
                                                                <span>Tracking: CSRT loss on fast rotational motion (unresolved)</span>
                                                            </p>
                                                            <p className="flex items-start gap-2">
                                                                <span className="text-accent mt-1">•</span>
                                                                <span>Latency: High (~2s round-trip via Cloud API dependency)</span>
                                                            </p>
                                                            <p className="flex items-start gap-2">
                                                                <span className="text-accent mt-1">•</span>
                                                                <span>Memory: Brittle NL understanding in high-noise lab environments</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>
                            </motion.div>


                            <motion.div variants={item} className="pt-10">
                                <div className="flex items-center gap-4 mb-8 opacity-50">
                                    <h2 className="text-xs font-semibold uppercase tracking-widest">
                                        Project Support
                                    </h2>
                                    <div className="h-[1px] flex-1 bg-gray-300" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {sponsors.map((sponsor) => (
                                        <div
                                            key={sponsor.name}
                                            className={cn(
                                                "relative group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-32 flex items-center justify-center cursor-default",
                                                sponsor.color
                                            )}
                                        >
                                            {/* Full Color Logo (Default State) */}
                                            <div className="absolute inset-0 z-0 flex items-center justify-center p-6 transition-all duration-500 group-hover:scale-110 group-hover:opacity-10 group-hover:blur-sm">
                                                <img
                                                    src={sponsor.logo}
                                                    alt={sponsor.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            {/* Text Overlay (Reveal on Hover) */}
                                            <div className="relative z-10 flex flex-col items-center gap-1 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                                <h3 className="text-xl font-black text-accent tracking-tighter uppercase italic">
                                                    {sponsor.name}
                                                </h3>
                                                <p className="text-[10px] text-gray-600 font-mono font-bold uppercase tracking-widest px-4">
                                                    {sponsor.desc}
                                                </p>
                                            </div>

                                            {/* Hover Border Accent */}
                                            <div className="absolute inset-x-0 bottom-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </>
                    )}
                </motion.main>

                <div className="hidden lg:block h-full w-full" />
            </div>

            <ImageModal
                isOpen={!!activeModal}
                onClose={() => setActiveModal(null)}
                title={activeModal === 'nova' ? "Nova AI Stack - System Architecture" : "Assistive Tech - Spatial Audio Pipeline"}
            >
                {activeModal === 'nova' ? (
                    <img
                        src="assets/diagrams/nova_system_achitecture.png"
                        className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
                        alt="Nova High-Res Diagram"
                    />
                ) : (
                    <div className="w-full bg-white p-8 rounded-xl">
                        <AssistiveTechDiagramSVG className="w-full h-auto" />
                    </div>
                )}
            </ImageModal>
        </div>
    );
};

export default About;
