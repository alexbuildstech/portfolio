import { Cpu, Terminal, Zap, Box, Layers, ArrowUpRight } from "lucide-react";
import { useRobotStore } from "@/hooks/useRobotStore";
import { motion } from "framer-motion";

const CombinedSection: React.FC = () => {
    const { setRobotExpression } = useRobotStore();
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };
    
    return (
        <section className="relative w-full py-48 px-6 lg:px-24 border-t-4 border-foreground bg-background overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)', size: '100px 100px', backgroundSize: '100px 100px' }} 
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 relative z-10">
                
                {/* Left: Capability Matrix */}
                <div className="space-y-24 pointer-events-auto">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.8]">
                            Capability<br />Matrix
                        </h2>
                        <div className="w-48 h-4 bg-foreground" />
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        <motion.div 
                            variants={cardVariants}
                            onMouseEnter={() => setRobotExpression('active')}
                            className="p-10 border-4 border-foreground hover:bg-foreground hover:text-background transition-all duration-500 group cursor-crosshair relative"
                        >
                            <Cpu className="mb-8" size={48} strokeWidth={2.5} />
                            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Firmware</h3>
                            <p className="text-sm font-bold leading-tight opacity-60 group-hover:opacity-100 uppercase tracking-tight">
                                Klipper-tuned motion control and custom C++ Arduino logic for mechanical synchronization.
                            </p>
                            <ArrowUpRight className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                        </motion.div>

                        <motion.div 
                            variants={cardVariants}
                            className="p-10 border-4 border-foreground hover:bg-foreground hover:text-background transition-all duration-500 group cursor-crosshair relative md:mt-12"
                        >
                            <Box className="mb-8" size={48} strokeWidth={2.5} />
                            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Prototyping</h3>
                            <p className="text-sm font-bold leading-tight opacity-60 group-hover:opacity-100 uppercase tracking-tight">
                                High-speed FDM production. PID tuned, pressure advanced, and input shaped for structural integrity.
                            </p>
                            <ArrowUpRight className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                        </motion.div>

                        <motion.div 
                            variants={cardVariants}
                            onMouseEnter={() => setRobotExpression('thinking')}
                            className="p-10 border-4 border-foreground hover:bg-foreground hover:text-background transition-all duration-500 group cursor-crosshair relative"
                        >
                            <Terminal className="mb-8" size={48} strokeWidth={2.5} />
                            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Software</h3>
                            <p className="text-sm font-bold leading-tight opacity-60 group-hover:opacity-100 uppercase tracking-tight">
                                Python-driven stacks integrating computer vision (OpenCV) and real-time inference.
                            </p>
                            <ArrowUpRight className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                        </motion.div>

                        <motion.div 
                            variants={cardVariants}
                            className="p-10 border-4 border-foreground hover:bg-foreground hover:text-background transition-all duration-500 group cursor-crosshair relative md:mt-12"
                        >
                            <Zap className="mb-8" size={48} strokeWidth={2.5} />
                            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Systems</h3>
                            <p className="text-sm font-bold leading-tight opacity-60 group-hover:opacity-100 uppercase tracking-tight">
                                Heavy focus on autonomous reasoning. No surface-level fluff—just functional logic and execution.
                            </p>
                            <ArrowUpRight className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right: Technical Focus */}
                <div className="flex flex-col justify-center space-y-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <span className="text-xs font-black tracking-[0.5em] uppercase opacity-40">The Builder Standard</span>
                        <p className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase italic">
                            "You know your numbers." 
                        </p>
                        <p className="text-xl font-bold tracking-tight leading-tight opacity-70 border-l-8 border-foreground pl-8">
                            Bringing digital models into physical space through rigorous debugging and precise hardware tuning. Every DOF accounted for.
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        <div className="flex flex-col gap-6">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                                className="flex justify-between items-end border-b-4 border-foreground pb-4"
                            >
                                <span className="text-sm font-black uppercase tracking-widest">Global Partnerships</span>
                                <span className="text-xs font-bold opacity-40 uppercase tracking-widest">POLYMAKER // DFROBOT</span>
                            </motion.div>
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.2 }}
                                className="flex justify-between items-end border-b-4 border-foreground pb-4"
                            >
                                <span className="text-sm font-black uppercase tracking-widest">Active R&D</span>
                                <span className="text-xs font-bold opacity-40 uppercase tracking-widest">NOVA HUMANOID STACK</span>
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* Visual Callout */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-foreground text-background p-12 flex flex-col gap-8 transition-transform duration-500"
                    >
                        <span className="text-5xl font-black uppercase tracking-tighter italic">2026.PROTO</span>
                        <p className="text-xs font-black tracking-widest uppercase opacity-60">
                            Currently pushing the limits of real-time vision-to-actuation pipelines on edge compute.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CombinedSection;
