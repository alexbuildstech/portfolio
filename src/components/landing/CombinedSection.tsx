import { Cpu, Terminal, Zap, Box, Database } from "lucide-react";
import { useRobotStore } from "@/hooks/useRobotStore";
import { motion } from "framer-motion";

const CombinedSection: React.FC = () => {
    const { setRobotExpression } = useRobotStore();
    
    return (
        <section className="relative w-full py-16 md:py-48 px-4 md:px-6 lg:px-24 border-t-8 border-foreground bg-background overflow-hidden">
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.03]" />
            
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 relative z-10">
                
                {/* Left: Capability Stack */}
                <div className="space-y-12 md:space-y-24 pointer-events-auto">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-7xl xl:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.8] text-foreground">
                            Engineering<br /><span className="text-accent">Stack</span>
                        </h2>
                        <div className="w-32 md:w-64 h-2 md:h-4 bg-foreground" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {[
                            { icon: Cpu, title: "Firmware", desc: "Low-latency protocols so robot movement matches intent without mechanical lag." },
                            { icon: Box, title: "Prototyping", desc: "Industrial PETG frames that handle the high torque of powerful servos." },
                            { icon: Terminal, title: "Logic", desc: "Async Python loops to process vision and voice so the robot can respond in real-time." },
                            { icon: Database, title: "Persistence", desc: "Local memory systems so robots remember their environment instead of re-scanning." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="p-6 md:p-8 border-4 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 group cursor-crosshair relative shadow-[6px_6px_0_0_#eeeeee] hover:shadow-none"
                            >
                                <item.icon className="mb-6 text-accent w-8 h-8 md:w-10 md:h-10 transition-colors group-hover:text-accent-foreground" strokeWidth={3} />
                                <h3 className="text-base md:text-xl font-black uppercase mb-4 tracking-tighter">{item.title}</h3>
                                <p className="text-[10px] font-mono font-bold leading-tight opacity-60 group-hover:opacity-100 uppercase tracking-widest">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Technical Notes */}
                <div className="flex flex-col justify-center space-y-12 md:space-y-16 mt-12 lg:mt-0">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 p-8 md:p-12 border-4 border-foreground bg-accent/5"
                    >
                        <h3 className="text-xs font-mono font-black tracking-[0.5em] uppercase text-accent">HARDWARE NOTES</h3>
                        <ul className="space-y-6">
                            <li className="space-y-2">
                                <span className="text-sm font-black uppercase tracking-tighter">01. Speed &gt; Quality</span>
                                <p className="text-[11px] font-mono font-bold opacity-60 uppercase leading-relaxed">
                                    Used Edge-TTS instead of WaveNet to keep the response loop under 500ms. Speed is more important than sounding human.
                                </p>
                            </li>
                            <li className="space-y-2 border-t-2 border-foreground/10 pt-6">
                                <span className="text-sm font-black uppercase tracking-tighter">02. State Management</span>
                                <p className="text-[11px] font-mono font-bold opacity-60 uppercase leading-relaxed">
                                    Using local SQLite to cache object locations. Cloud re-querying is too slow for repeatable indoor tasks.
                                </p>
                            </li>
                            <li className="space-y-2 border-t-2 border-foreground/10 pt-6">
                                <span className="text-sm font-black uppercase tracking-tighter">03. Physical Limits</span>
                                <p className="text-[11px] font-mono font-bold opacity-60 uppercase leading-relaxed">
                                    Software speed is limited by physical servo response. Software gains only go as far as the hardware allows.
                                </p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Build Specs */}
                    <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="bg-foreground text-background p-8 md:p-12 flex flex-col gap-8 md:gap-12 border-l-[12px] md:border-l-[24px] border-accent transition-all duration-300 shadow-[16px_16px_0_0_#0055ff]"
                    >
                        <div className="flex justify-between items-start">
                            <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">v2.0.26</span>
                            <Zap className="text-accent w-10 h-10 md:w-14 md:h-14" fill="currentColor" />
                        </div>
                        <div className="space-y-4 md:space-y-6 font-mono text-[10px] font-black uppercase tracking-widest opacity-60">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>LOOP TARGET</span>
                                <span className="text-white">&lt;200MS INTERNAL</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>STACK RUNTIME</span>
                                <span className="text-white">PYTHON 3.12 / C++</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>LOGIC LAYER</span>
                                <span className="text-white">GEMINI 2.0 FLASH</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CombinedSection;
