import React, { useState } from "react";
import { Github, Mail, ArrowRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full pt-32 px-6 lg:px-24">
            <Navbar />

            <main className="max-w-7xl mx-auto flex flex-col items-start py-24">
                <header className="mb-24">
                    <h1 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-8">
                        Connect // <br /><span className="opacity-40 text-stroke">Direct</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-bold tracking-tight max-w-xl opacity-70">
                        Available for technical discussion, robotics collaboration, or questions about my open-source projects.
                    </p>
                </header>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <a 
                        href="mailto:alexazander3@gmail.com"
                        className="group p-12 border-2 border-foreground hover:bg-foreground hover:text-background transition-all flex flex-col gap-12"
                    >
                        <div className="flex justify-between items-start">
                            <Mail size={40} />
                            <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0" />
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-black uppercase tracking-widest opacity-40">Direct Mail</span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">alexazander3@gmail.com</h2>
                        </div>
                    </a>

                    <a 
                        href="https://github.com/alexbuildstech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-12 border-2 border-foreground hover:bg-foreground hover:text-background transition-all flex flex-col gap-12"
                    >
                        <div className="flex justify-between items-start">
                            <Github size={40} />
                            <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0" />
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-black uppercase tracking-widest opacity-40">Source Control</span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">alexbuildstech</h2>
                        </div>
                    </a>
                </div>

                <footer className="mt-48 w-full border-t-2 border-foreground pt-8 flex justify-between items-center opacity-40">
                    <span className="text-[10px] font-black uppercase tracking-widest">BUILDER PROTOCOL v2.0.26</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-right">IST // ASIA/CALCUTTA</span>
                </footer>
            </main>
        </div>
    );
};

export default Contact;
