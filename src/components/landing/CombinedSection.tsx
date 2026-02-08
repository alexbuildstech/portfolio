import { Cpu, Terminal, Zap, Box, Database } from "lucide-react";
import { useRobotStore } from "@/hooks/useRobotStore";
import { motion } from "framer-motion";

const CombinedSection: React.FC = () => {
    const { setRobotExpression } = useRobotStore();
    
    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };
    
    return (
        <section className="relative w-full py-48 px-6 lg:px-24 border-t-8 border-foreground bg-background overflow-hidden">
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.03]" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 relative z-10">
                
                {/* Left: Capability Stack */}
                <div className="space-y-24 pointer-events-auto">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.8] text-foreground">
                            Engineering<br /><span className="text-accent">Stack</span>
                        </h2>
                        <div className="w-64 h-4 bg-foreground" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: Cpu, title: "Firmware", desc: "Klipper-tuned profiles, custom Arduino C++ logic, and low-latency bus protocols." },
                            { icon: Box, title: "CAD/Prototyping", desc: "Industrial PETG/ABS manufacturing. Precision tolerance testing for mechanical systems." },
                            { icon: Terminal, title: "Software", desc: "Async Python pipelines with OpenCV integration and real-time VLM reasoning." },
                            { icon: Database, title: "Systems", desc: "Full-stack robotics integration. From sensor fusion to mechanical actuation." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, delay: i * 0.05 }}
                                className="p-10 border-4 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 group cursor-crosshair relative shadow-[8px_8px_0_0_#eeeeee] hover:shadow-none"
                            >
                                <item.icon className="mb-8 text-accent group-hover:text-accent transition-colors" size={40} strokeWidth={3} />
                                <h3 className="text-xl font-black uppercase mb-4 tracking-tighter">{item.title}</h3>
                                <p className="text-[10px] font-bold leading-tight opacity-50 group-hover:opacity-100 uppercase tracking-widest">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Technical Focus & Narrative */}
                <div className="flex flex-col justify-center space-y-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <span className="text-xs font-mono font-black tracking-[0.5em] uppercase text-accent">BUILDER LOG 2026</span>
                        <p className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
                            "THE NUMBERS<br />DON'T LIE." 
                        </p>
                        <div className="space-y-8 border-l-8 border-foreground pl-12">
                            <p className="text-xl font-bold tracking-tight leading-tight uppercase">
                                Developing humanoid robotics from a bedroom lab. I'm 14, and I optimize for performance over optics.
                            </p>
                            <p className="text-lg font-bold tracking-tight opacity-60 uppercase leading-snug">
                                Every PID loop, torque curve, and millisecond of vision latency is a deliberate engineering choice. I build physical systems because they have no "undo" button.
                            </p>
                        </div>
                    </motion.div>

                    {/* Industrial Callout */}
                    <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="bg-foreground text-background p-12 flex flex-col gap-12 border-l-[24px] border-accent transition-all duration-300"
                    >
                        <div className="flex justify-between items-start">
                            <span className="text-6xl font-black uppercase tracking-tighter italic leading-none">V2.0</span>
                            <Zap className="text-accent" size={56} fill="currentColor" />
                        </div>
                        <div className="space-y-6 font-mono text-[10px] font-black uppercase tracking-widest opacity-60">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>LATENCY TARGET</span>
                                <span className="text-white">&lt;200MS</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>PRINT MATERIALS</span>
                                <span className="text-white">PETG / ABS / CF</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>LOGIC RUNTIME</span>
                                <span className="text-white">PYTHON 3.14 + GEMINI</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CombinedSection;
