import React, { useState } from "react";
import { useRobotStore } from "../hooks/useRobotStore";
import { Github, Linkedin, Mail, ArrowRight, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import Navbar from "../components/layout/Navbar";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    const { setActiveInput, isRobotLoaded } = useRobotStore();
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');

        // Simulating a professional server response
        setTimeout(() => {
            setFormStatus('success');
        }, 2000);
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item: any = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { ease: [0.19, 1, 0.22, 1], duration: 0.8 } }
    };

    return (
        <div className="relative min-h-screen w-full pt-32 px-6">
            <Navbar />

            <motion.main
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start"
            >
                {!isRobotLoaded ? (
                    <>
                        {/* Left Column Skeleton */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <Skeleton className="w-48 h-6 rounded-full" />
                                <Skeleton className="w-full h-32 md:h-48" />
                                <Skeleton variant="text" lines={2} className="max-w-md" />
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <Skeleton className="w-32 h-4" />
                                    <Skeleton className="w-64 h-12" />
                                </div>
                                <div className="space-y-4">
                                    <Skeleton className="w-32 h-4" />
                                    <Skeleton className="w-48 h-12 rounded-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column Skeleton */}
                        <div>
                            <Skeleton className="w-full h-[500px] rounded-3xl" />
                        </div>
                    </>
                ) : (
                    <>
                        {/* Left Column: Info */}
                        <motion.div variants={item} className="space-y-12">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                    Open for Opportunities
                                </div>

                                <h1 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight leading-[1.1]">
                                    Let's <br />
                                    <span className="text-gray-400">Tech-Talk.</span>
                                </h1>

                                <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                                    Always down to chat about robotics, open-source projects, or potential collaborations.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Primary Channel</h3>
                                    <a href="mailto:alexand3@gmail.com" className="text-3xl md:text-4xl font-black text-foreground hover:text-accent transition-all block tracking-tighter hover:-translate-y-1">
                                        alexand3@gmail.com
                                    </a>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Source Control</h3>
                                    <div className="flex items-center gap-4">
                                        <a
                                            href="https://github.com/alexbuildstech"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-3 hover:bg-gray-100 transition-all shadow-lg hover:shadow-accent/20 relative overflow-hidden group/github"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/github:animate-[shimmer_1.5s_infinite]" />
                                            <Github size={20} />
                                            <span>VIEW GITHUB</span>
                                        </a>
                                        <p className="text-xs text-gray-400 font-mono uppercase tracking-tighter">
                                            // Building in Public
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Availability Panel */}
                        <motion.div variants={item}>
                            <div className="glass-panel rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden bg-white/40 border border-white/20">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

                                <div className="space-y-10 relative z-10">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-4 italic tracking-tight uppercase">Current Vibe</h3>
                                        <div className="p-4 bg-accent/5 rounded-2xl border border-accent/10">
                                            <div className="flex items-center gap-3 text-accent font-bold mb-2">
                                                <div className="w-2 h-2 rounded-full bg-accent" />
                                                STATUS: BUILDING
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                                Active on new robotics projects. If you have questions about my builds or want to collab on something cool, hit me up!
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Response Time</div>
                                            <div className="font-bold text-foreground">~24 Hours</div>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Timezone</div>
                                            <div className="font-bold text-foreground">IST (UTC +5:30)</div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest text-center">
                                            Direct Outreach Only // No Form Data Persistence via Github Pages
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </motion.main>
        </div>
    );
};

export default Contact;
