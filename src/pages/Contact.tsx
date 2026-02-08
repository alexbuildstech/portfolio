import React from "react";
import { Github, Mail, ArrowUpRight, Zap } from "lucide-react";
import Navbar from "../components/layout/Navbar";

const Contact: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full pt-24 md:pt-40 pb-20 px-4 md:px-6 lg:px-24 bg-background overflow-x-hidden text-foreground">
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.02]" />
            <Navbar />

            <main className="max-w-7xl mx-auto flex flex-col items-start py-12 md:py-24 relative z-10">
                <header className="mb-12 md:mb-32">
                    <h1 className="text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-none mb-6">
                        System<br /><span className="text-accent italic">Inquiry</span>
                    </h1>
                    <p className="text-base md:text-3xl font-black tracking-tight max-w-xl opacity-90 uppercase leading-tight">
                        I'm open to technical discussion, hardware collaboration, and sponsor inquiries.
                    </p>
                </header>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                    <a 
                        href="mailto:alexazander3@gmail.com"
                        className="group p-8 md:p-16 border-4 md:border-[10px] border-foreground hover:bg-accent hover:text-white transition-all flex flex-col gap-8 md:gap-12 relative overflow-hidden shadow-[12px_12px_0_0_#eeeeee] md:shadow-[20px_20px_0_0_#eeeeee] hover:shadow-none"
                    >
                        <div className="flex justify-between items-start">
                            <Mail className="w-10 h-10 md:w-14 md:h-14" />
                            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" />
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            <span className="text-[9px] md:text-[10px] font-mono font-black uppercase tracking-widest opacity-40">Direct_Access</span>
                            <h2 className="text-xl md:text-5xl font-black uppercase tracking-tighter leading-none break-all">alexazander3@gmail.com</h2>
                        </div>
                        <p className="text-[10px] md:text-xs font-mono font-bold opacity-60 mt-2 md:mt-4 uppercase">
                            Target Response: &lt;24H // I read every message.
                        </p>
                    </a>

                    <a 
                        href="https://github.com/alexbuildstech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-8 md:p-16 border-4 md:border-[10px] border-foreground hover:bg-accent hover:text-white transition-all flex flex-col gap-8 md:gap-12 relative overflow-hidden shadow-[12px_12px_0_0_#eeeeee] md:shadow-[20px_20px_0_0_#eeeeee] hover:shadow-none"
                    >
                        <div className="flex justify-between items-start">
                            <Github className="w-10 h-10 md:w-14 md:h-14" />
                            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" />
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            <span className="text-[9px] md:text-[10px] font-mono font-black uppercase tracking-widest opacity-40">Source_Control</span>
                            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">alexbuildstech</h2>
                        </div>
                        <p className="text-[10px] md:text-xs font-mono font-bold opacity-60 mt-2 md:mt-4 uppercase">
                            Public Repository Access // GPL/MIT Compliance.
                        </p>
                    </a>
                </div>

                <div className="mt-16 md:mt-32 p-8 md:p-16 border-4 md:border-[10px] border-foreground w-full bg-muted relative shadow-[12px_12px_0_0_#0055ff] md:shadow-[16px_16px_0_0_#0055ff]">
                    <div className="flex items-center gap-6 md:gap-8 mb-12 md:mb-16">
                        <Zap className="text-accent w-8 h-8 md:w-12 md:h-12" fill="currentColor" />
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Technical Liaison</h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 text-sm font-black uppercase tracking-tight opacity-80">
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent font-mono text-xs">01</span>
                            <span>Humanoid Architecture & Actuation</span>
                        </li>
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent font-mono text-xs">02</span>
                            <span>Computer Vision (VLM/OpenCV)</span>
                        </li>
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent font-mono text-xs">03</span>
                            <span>Low-latency C++ / Python Pipelines</span>
                        </li>
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent font-mono text-xs">04</span>
                            <span>Mechanical Prototyping (FDM/CAD)</span>
                        </li>
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent font-mono text-xs">05</span>
                            <span>Open-Source Hardware Systems</span>
                        </li>
                        <li className="flex flex-col gap-2 md:gap-3">
                            <span className="text-accent font-mono text-xs">06</span>
                            <span>Material Sponsorship Support</span>
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
