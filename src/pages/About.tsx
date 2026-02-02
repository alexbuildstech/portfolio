import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import { Cpu, Terminal, Glasses, ZoomIn, Award, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ImageModal } from "@/components/ui/ImageModal";
import { AssistiveTechDiagramSVG } from "@/components/ui/TechnicalDiagrams";

const About: React.FC = () => {
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

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { ease: "easeOut" as const, duration: 0.8 } }
    };

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
                    <div className="flex flex-col gap-6">
                        <motion.div variants={item}>
                            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-4">
                                Projects
                            </h1>
                            <div className="h-1 w-full max-w-[200px] bg-primary rounded-full opacity-80" />
                        </motion.div>

                        <motion.div variants={item} className="max-w-md text-muted-foreground leading-relaxed">
                            <p>
                                Developing custom robotics platforms and high-precision hardware interfaces.
                                Optimized for low-latency control and robust physical performance.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div variants={item}>
                        <div className="flex items-center gap-4 mb-8 opacity-50">
                            <h2 className="text-xs font-semibold uppercase tracking-widest">
                                Featured Work
                            </h2>
                            <div className="h-[1px] flex-1 bg-border" />
                        </div>

                        <div className="space-y-6">
                            <ProjectCard
                                title="Nova AI Stack"
                                description="Independent AI stack for the InMoov platform. Uses an asynchronous vision-to-action pipeline for context-aware interaction."
                                techStack={["Python", "Groq LLM", "Gemini 2.0", "OpenCV", "Inverse Kinematics"]}
                                href="https://github.com/alexbuildstech/nova"
                                status="DEPLOYED"
                                className="w-full"
                                awards={[
                                    "1st Place - SciBlast 2.0",
                                    "Best Project (Current Relevance) - SciBlast 3.0",
                                    "1st Place - Hebron HS Science Odyssey 2025"
                                ]}
                                icon={<Cpu className="w-5 h-5 text-primary" />}
                                header={
                                    <div className="mt-4 p-6 bg-card rounded-xl flex gap-8 cursor-help transition-colors hover:bg-accent/5">
                                        <div className="flex flex-col gap-4 w-full">
                                            <div
                                                className="w-full h-48 overflow-hidden rounded-lg bg-background flex items-center justify-center border border-border cursor-zoom-in group/img relative"
                                                onClick={() => setActiveModal('nova')}
                                            >
                                                <img
                                                    src="assets/diagrams/nova_system_achitecture.png"
                                                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover/img:scale-105"
                                                    alt="Nova Architecture"
                                                />
                                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                                    <ZoomIn className="w-8 h-8 text-primary" />
                                                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-background/90 px-3 py-1 rounded-full">Click to View</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-8">
                                                <div className="space-y-1">
                                                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Kinematics</div>
                                                    <div className="text-sm font-semibold text-foreground">27 DOF Active</div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Vision</div>
                                                    <div className="text-sm font-semibold text-foreground">720p Wide-angle</div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Control</div>
                                                    <div className="text-sm font-semibold text-foreground">Dual Mega2560</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />

                            <ProjectCard
                                title="Vision Array Prototype"
                                description="Assistive navigation system exploring spatial memory. Features local-first persistence for rapid 3D object retrieval."
                                techStack={["Python", "Gemini API", "SQLite3", "CSRT Tracking", "Spatial Audio"]}
                                href="https://github.com/alexbuildstech/assistivetech"
                                status="RESEARCH"
                                className="w-full"
                                awards={["Best Project (Current Relevance) - SciBlast 3.0"]}
                                icon={<Glasses className="w-5 h-5 text-primary" />}
                                header={
                                    <div className="mt-4 p-6 bg-accent/5 rounded-xl flex flex-col gap-4 cursor-help hover:bg-accent/10 transition-colors">
                                        <div
                                            className="w-full h-48 overflow-hidden rounded-lg bg-muted flex items-center justify-center border border-border cursor-zoom-in group/img relative"
                                            onClick={() => setActiveModal('assistive')}
                                        >
                                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                                <ZoomIn className="w-8 h-8 text-primary" />
                                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-background/90 px-3 py-1 rounded-full">Click to View</span>
                                            </div>
                                            <AssistiveTechDiagramSVG className="w-full h-full p-4" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-bold text-primary uppercase tracking-wider">Spatial Brain</div>
                                                <div className="text-xs font-medium text-foreground">SQLite Persistence</div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-bold text-primary uppercase tracking-wider">3D Audio</div>
                                                <div className="text-xs font-medium text-foreground">HRTF Heuristics</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </motion.div>

                    {/* Honors Section */}
                    <motion.div variants={item} className="my-24">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-sm font-bold uppercase tracking-widest">
                                Honors & Recognition
                            </h2>
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="mb-6 group/photo relative">
                                <div className="relative overflow-hidden rounded-lg border border-border">
                                    <img
                                        src="/assets/images/science_fair_event.png"
                                        alt="Regional Science Fair Exhibit"
                                        className="w-full h-[450px] object-cover object-top transition-all duration-500 group-hover/photo:scale-105"
                                    />
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                    <p className="text-[10px] font-mono font-bold text-muted-foreground tracking-widest uppercase">
                                        Regional Science Fair Exhibit
                                    </p>
                                </div>
                            </div>
                            {[
                                { title: "1st Place - Hebron High School Odyssey 2025", desc: "Awarded for the Nova AI Stack's innovative approach to HRI and physical robotics.", icon: <Award className="w-5 h-5 text-primary" /> },
                                { title: "Best Project (Current Relevance) - SciBlast 3.0", desc: "Recognized for both Nova AI Stack and Assistive Tech's impact on adaptive technology.", icon: <Award className="w-5 h-5 text-primary" />, hasGif: true },
                                { title: "1st Place - SciBlast 2.0", desc: "Winner for initial Nova robotics prototype and control systems.", icon: <Award className="w-5 h-5 text-primary" /> }
                            ].map((honor, idx) => (
                                <div key={idx} className="flex items-center gap-6 p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group/honor">
                                    {(honor as { hasGif?: boolean }).hasGif ? (
                                        <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border border-primary/30 group-hover/honor:border-primary transition-all">
                                            <img
                                                src="/assets/images/sciblast_nomination.gif"
                                                className="w-full h-full object-cover"
                                                alt="Winning Moment"
                                            />
                                        </div>
                                    ) : (
                                        <div className="mt-1 p-3 rounded-xl bg-primary/5 border border-primary/10 group-hover/honor:border-primary/30 transition-colors">
                                            {honor.icon}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-lg font-bold text-foreground tracking-tight mb-1">
                                            {honor.title}
                                        </h4>
                                        <p className="text-xs text-primary font-medium uppercase tracking-wider leading-relaxed">
                                            {honor.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sponsors Section */}
                    <motion.div variants={item} className="pb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-sm font-bold uppercase tracking-widest">
                                Hardware Partners
                            </h2>
                            <div className="h-[1px] flex-1 bg-border" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                {
                                    name: "DFRobot",
                                    desc: "Hardware & Sensors",
                                    logo: "/dfrobot_logo.jpg",
                                    color: "hover:border-red-500/20",
                                    quote: "Your work perfectly reflects the spirit of what we aim to support. The level of professionalism and detail makes a real difference.",
                                    author: "Shirley, DFRobot"
                                },
                                {
                                    name: "Polymaker",
                                    desc: "Prototyping Materials",
                                    logo: "/polymaker_logo.jpg",
                                    color: "hover:border-cyan-500/20",
                                    quote: "It is quite impressive seeing this done at such a young age... an inspiration to others all over the world.",
                                    author: "Joel, Polymaker"
                                },
                                {
                                    name: "Radxa",
                                    desc: "SBC Performance",
                                    logo: "/radxa_logo.png",
                                    color: "hover:border-purple-500/20",
                                    quote: "Your achievements at such a young age are truly remarkable. We are deeply inspired by your passion.",
                                    author: "Kathy, Radxa"
                                }
                            ].map((sponsor) => (
                                <div
                                    key={sponsor.name}
                                    className={cn(
                                        "relative group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-48 flex items-center justify-center cursor-default",
                                        sponsor.color
                                    )}
                                >
                                    <div className="absolute inset-0 z-0 flex items-center justify-center p-8 transition-all duration-500 group-hover:scale-110 group-hover:opacity-5 group-hover:blur-md">
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="relative z-10 flex flex-col items-center gap-3 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 px-6">
                                        <div className="text-[10px] text-primary font-bold uppercase tracking-wider italic mb-1 flex items-center gap-2">
                                            <Quote size={10} className="fill-primary opacity-50" />
                                            Validation
                                        </div>
                                        <p className="text-[14px] text-foreground font-medium leading-relaxed">
                                            "{sponsor.quote}"
                                        </p>
                                        <div className="flex flex-col gap-0.5 mt-2">
                                            <h3 className="text-xs font-bold text-foreground tracking-tighter uppercase italic">
                                                {sponsor.name}
                                            </h3>
                                            <p className="text-[9px] text-muted-foreground font-mono font-bold uppercase tracking-widest">
                                                {sponsor.author}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
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
                    <div className="w-full bg-background p-8 rounded-xl">
                        <AssistiveTechDiagramSVG className="w-full h-auto" />
                    </div>
                )}
            </ImageModal>
        </div>
    );
};

export default About;
