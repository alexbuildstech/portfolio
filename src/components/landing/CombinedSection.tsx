import { Cpu, Terminal, Zap, Box, Layers, MousePointer2 } from "lucide-react";
import { useRobotStore } from "@/hooks/useRobotStore";

const CombinedSection: React.FC = () => {
    const { setRobotExpression } = useRobotStore();
    
    return (
        <section className="relative w-full py-32 px-6 lg:px-24 border-t border-border bg-card">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                
                {/* Left: Capability Matrix */}
                <div className="space-y-16 pointer-events-auto">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                            Capability<br />Matrix
                        </h2>
                        <div className="w-24 h-2 bg-foreground" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors group cursor-crosshair">
                            <Cpu className="mb-4" size={32} />
                            <h3 className="text-xl font-black uppercase mb-2">Firmware</h3>
                            <p className="text-sm font-bold leading-tight opacity-70 group-hover:opacity-100">
                                Klipper-tuned motion control and custom Arduino logic for mechanical systems.
                            </p>
                        </div>
                        <div className="p-8 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors group cursor-crosshair">
                            <Box className="mb-4" size={32} />
                            <h3 className="text-xl font-black uppercase mb-2">Prototyping</h3>
                            <p className="text-sm font-bold leading-tight opacity-70 group-hover:opacity-100">
                                High-speed FDM production with Anycubic Kobra 2 Neo. PID tuned and pressure advanced.
                            </p>
                        </div>
                        <div className="p-8 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors group cursor-crosshair">
                            <Terminal className="mb-4" size={32} />
                            <h3 className="text-xl font-black uppercase mb-2">Software</h3>
                            <p className="text-sm font-bold leading-tight opacity-70 group-hover:opacity-100">
                                Python-driven stacks integrating computer vision and real-time LLM reasoning.
                            </p>
                        </div>
                        <div className="p-8 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors group cursor-crosshair">
                            <Zap className="mb-4" size={32} />
                            <h3 className="text-xl font-black uppercase mb-2">Iteration</h3>
                            <p className="text-sm font-bold leading-tight opacity-70 group-hover:opacity-100">
                                Focus on depth. No surface-level motivation—just engineering and functional logic.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Technical Focus */}
                <div className="flex flex-col justify-center space-y-12">
                    <div className="space-y-4">
                        <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Engineering Philosophy</span>
                        <p className="text-2xl font-bold tracking-tight leading-tight">
                            "You know your numbers." That's the builder standard. Bringing digital models into physical space through rigorous debugging and precise hardware tuning.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-end border-b-2 border-foreground pb-2">
                                <span className="text-xs font-black uppercase tracking-widest">Sponsorship Support</span>
                                <span className="text-[10px] font-bold opacity-40">POLYMAKER / DFROBOT</span>
                            </div>
                            <div className="flex justify-between items-end border-b-2 border-foreground pb-2">
                                <span className="text-xs font-black uppercase tracking-widest">Active Development</span>
                                <span className="text-[10px] font-bold opacity-40">HUMANOID AI STACK</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CombinedSection;
