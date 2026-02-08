import React from "react";
import { Github, Mail, ArrowUpRight, Zap } from "lucide-react";
import Navbar from "../components/layout/Navbar";

const Contact: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full pt-24 md:pt-40 pb-20 px-4 md:px-6 lg:px-24 bg-background overflow-x-hidden text-foreground uppercase tracking-tight">
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.02]" />
            <Navbar />

            <main className="max-w-7xl mx-auto flex flex-col items-start py-12 md:py-24 relative z-10">
                <header className="mb-12 md:mb-32">
                    <span className="text-xs font-mono font-black tracking-[0.5em] text-accent mb-4 block">OPEN CHANNELS</span>
                    <h1 className="text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-tight mb-6">
                        Let's<br /><span className="text-accent italic">Build</span>
                    </h1>
                    <p className="text-base md:text-3xl font-black tracking-tight max-w-xl opacity-90 uppercase leading-tight">
                        Open to technical discussion, mentorship, hardware collaboration, and sponsors.
                    </p>
                </header>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                    <a 
                        href="mailto:alexazander3@gmail.com"
                        className="group p-8 md:p-16 border-4 md:border-[10px] border-foreground hover:bg-foreground hover:text-background transition-all flex flex-col gap-8 md:gap-12 relative overflow-hidden shadow-[12px_12px_0_0_#eeeeee] md:shadow-[20px_20px_0_0_#eeeeee] hover:shadow-none"
                    >
                        <div className="flex justify-between items-start">
                            <Mail className="w-10 h-10 md:w-14 md:h-14 transition-colors group-hover:text-accent" />
                            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" />
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            <span className="text-[9px] md:text-[10px] font-mono font-black uppercase tracking-widest opacity-40">Direct_Access</span>
                            <h2 className="text-xl md:text-5xl font-black uppercase tracking-tighter leading-none break-all">alexazander3@gmail.com</h2>
                        </div>
                        <p className="text-[10px] md:text-xs font-mono font-bold opacity-60 mt-2 md:mt-4 uppercase">
                            I read every technical email. Usually response in &lt;24H.
                        </p>
                    </a>

                    <a 
                        href="https://github.com/alexbuildstech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-8 md:p-16 border-4 md:border-[10px] border-foreground hover:bg-foreground hover:text-background transition-all flex flex-col gap-8 md:gap-12 relative overflow-hidden shadow-[12px_12px_0_0_#eeeeee] md:shadow-[20px_20px_0_0_#eeeeee] hover:shadow-none"
                    >
                        <div className="flex justify-between items-start">
                            <Github className="w-10 h-10 md:w-14 md:h-14 transition-colors group-hover:text-accent" />
                            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" />
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            <span className="text-[9px] md:text-[10px] font-mono font-black uppercase tracking-widest opacity-40">Source_Control</span>
                            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">alexbuildstech</h2>
                        </div>
                        <p className="text-[10px] md:text-xs font-mono font-bold opacity-60 mt-2 md:mt-4 uppercase">
                            Build history and experimental prototypes // GPL v3.0.
                        </p>
                    </a>
                </div>

                <div className="mt-16 md:mt-32 p-8 md:p-16 border-4 md:border-[10px] border-foreground w-full bg-accent/5 relative">
                    <div className="flex items-center gap-6 md:gap-8 mb-12 md:mb-16">
                        <Zap className="text-accent w-8 h-8 md:w-12 md:h-12" fill="currentColor" />
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Technical Verticals</h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 text-sm font-black uppercase tracking-tight opacity-80 font-mono">
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent text-xs">01</span>
                            <span>Humanoid Architecture</span>
                        </li>
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent text-xs">02</span>
                            <span>Computer Vision</span>
                        </li>
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent text-xs">03</span>
                            <span>Low-latency C++</span>
                        </li>
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent text-xs">04</span>
                            <span>Mechanical FDM CAD</span>
                        </li>
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent text-xs">05</span>
                            <span>Open-Source Hardware</span>
                        </li>
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent text-xs">06</span>
                            <span>Project Sponsorship</span>
                        </li>
                    </ul>
                </div>

                <footer className="mt-32 md:mt-64 w-full border-t-4 md:border-t-[10px] border-foreground pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 opacity-40 font-mono text-[9px] md:text-[11px] font-black uppercase tracking-widest">
                    <span>Alex Paul // Builder Protocol v2.0.26</span>
                    <span className="md:text-right">Asia/Calcutta // 12.9716° N, 77.5946° E</span>
                </footer>
            </main>
            
            {/* Background Stamp */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.01] select-none whitespace-nowrap z-0">
                <h2 className="text-[30vw] font-black leading-none">INQUIRY</h2>
            </div>
        </div>
    );
};

export default Contact;
