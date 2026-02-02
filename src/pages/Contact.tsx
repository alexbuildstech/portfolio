import React, { useState } from "react";
import { Github, Mail } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
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

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { ease: "easeOut" as const, duration: 0.8 } }
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
                {/* Left Column: Info */}
                <motion.div variants={item} className="space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Open for Opportunities
                        </div>

                        <h1 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight leading-tight">
                            Let's <br />
                            <span className="text-muted-foreground">Connect.</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                            Always down to chat about robotics, open-source projects, or potential collaborations.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email</h3>
                            <a href="mailto:alexazander3@gmail.com" className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors block">
                                alexazander3@gmail.com
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">GitHub</h3>
                            <a
                                href="https://github.com/alexbuildstech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                <Github size={20} />
                                <span>View Projects</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Status Panel */}
                <motion.div variants={item}>
                    <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">Current Status</h3>
                                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                                    <div className="flex items-center gap-3 text-primary font-bold mb-2">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        BUILDING
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Active on new robotics projects. If you have questions about my builds or want to collaborate, reach out!
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border border-border bg-muted/50">
                                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Response Time</div>
                                    <div className="font-bold text-foreground">~24 Hours</div>
                                </div>
                                <div className="p-4 rounded-xl border border-border bg-muted/50">
                                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Timezone</div>
                                    <div className="font-bold text-foreground">IST (UTC +5:30)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.main>
        </div>
    );
};

export default Contact;
