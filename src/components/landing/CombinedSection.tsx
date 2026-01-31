import { Cpu, Terminal, Layers } from "lucide-react";
import { useRobotStore } from "@/hooks/useRobotStore";
import { Skeleton } from "../ui/Skeleton";

const CombinedSection: React.FC = () => {
    const { setRobotExpression, isRobotLoaded } = useRobotStore();
    return (
        <section className="relative w-full min-h-screen py-32 px-6 flex flex-col items-start lg:pl-24">

            {!isRobotLoaded ? (
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <Skeleton className="w-12 h-12 rounded-full" />
                            <Skeleton className="w-64 h-24" />
                        </div>
                        <Skeleton variant="text" lines={3} className="max-w-md" />
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {[...Array(6)].map((_, i) => (
                                <Skeleton key={i} className="h-12 rounded-lg" />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-12 md:pt-32">
                        <Skeleton className="w-12 h-12 rounded-full" />
                        <div className="space-y-8">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="space-y-2">
                                    <Skeleton className="w-48 h-8" />
                                    <Skeleton className="w-full h-12" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 pointer-events-auto">

                    {/* Left Column: Philosophy */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <div className="p-3 bg-black text-white w-fit rounded-full">
                                <Terminal size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground tracking-tight">
                                Building Robots<br />& Hardware
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                            <p>
                                Bringing digital designs to life.
                                My work is about the process of building—from figuring out motor torque to debugging wiring and tuning sensors for the real world.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                            {['Python', 'C++', 'React', 'Three.js', 'FreeCAD', 'OpenCV'].map((tech) => (
                                <div
                                    key={tech}
                                    className="bg-white/80 border border-gray-200 px-4 py-3 rounded-lg text-sm font-semibold text-gray-600 flex items-center gap-2 shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer"
                                    onMouseEnter={() => setRobotExpression('active')}
                                    onMouseLeave={() => setRobotExpression('neutral')}
                                >
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Methodology */}
                    <div className="space-y-12 md:pt-32">
                        <div className="flex justify-start mb-8">
                            <div className="p-3 bg-[#F5F5F7] text-foreground w-fit rounded-full">
                                <Cpu size={24} />
                            </div>
                        </div>

                        <div className="space-y-8 text-left">
                            <div className="space-y-2 group transition-all duration-300 hover:translate-x-2">
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">Design & Iteration</h3>
                                <p className="text-gray-500 max-w-sm">Functional CAD modeling (FreeCAD) and rapid prototyping via FDM 3D printing.</p>
                            </div>

                            <div className="space-y-2 group transition-all duration-300 hover:translate-x-2">
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">Circuitry & Power</h3>
                                <p className="text-gray-500 max-w-sm">Modular circuitry and power distribution for high-torque servo arrays.</p>
                            </div>

                            <div className="space-y-2 group transition-all duration-300 hover:translate-x-2">
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">Physical Interaction</h3>
                                <p className="text-gray-500 max-w-sm">Experimental HRI (Human-Robot Interaction) using LLMs to bridge the gap between intent and mechanical action.</p>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </section>
    );
};

export default CombinedSection;
