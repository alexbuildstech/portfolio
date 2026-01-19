import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import MatrixRain from "../effects/MatrixRain";
import { ScrambledTitle } from "../effects/TextScramble";

const CombinedSection: React.FC = () => {
    return (
        <section
            id="combined-content"
            className="relative min-h-screen flex flex-col md:flex-row items-stretch justify-center bg-matrix-black border-t border-matrix-dim/20 overflow-hidden"
        >
            {/* Matrix Rain Background (Lowest Layer) */}
            <MatrixRain opacity={0.4} className="z-0" />

            {/* Left Side: Text Content (Higher Layer) */}
            <div
                className="relative z-20 w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 py-12 md:py-0 space-y-8 md:space-y-10"
                onMouseMove={(e) => {
                    // Forward mouse move to canvas for Spline interaction
                    const canvas = document.querySelector('canvas');
                    if (canvas) {
                        const event = new MouseEvent('mousemove', {
                            view: window,
                            bubbles: true,
                            cancelable: true,
                            clientX: e.clientX,
                            clientY: e.clientY
                        });
                        canvas.dispatchEvent(event);
                    }
                }}
                onTouchMove={(e) => {
                    // Forward touch move to canvas
                    const canvas = document.querySelector('canvas');
                    if (canvas && e.touches.length > 0) {
                        const touch = e.touches[0];
                        const event = new MouseEvent('mousemove', {
                            view: window,
                            bubbles: true,
                            cancelable: true,
                            clientX: touch.clientX,
                            clientY: touch.clientY
                        });
                        canvas.dispatchEvent(event);
                    }
                }}
                onTouchStart={(e) => {
                    // Forward touch start as mouse move to trigger "look at" immediately
                    const canvas = document.querySelector('canvas');
                    if (canvas && e.touches.length > 0) {
                        const touch = e.touches[0];
                        const event = new MouseEvent('mousemove', {
                            view: window,
                            bubbles: true,
                            cancelable: true,
                            clientX: touch.clientX,
                            clientY: touch.clientY
                        });
                        canvas.dispatchEvent(event);
                    }
                }}
            >
                {/* Skills Part */}
                <div className="space-y-3 group">
                    <ScrambledTitle
                        phrases={["SKILLS"]}
                        phraseDuration={1000}
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-hero-title font-mono uppercase tracking-widest h-7 md:h-9 group-hover:text-matrix-glow transition-colors duration-300 cursor-default"
                    />
                    <div className="text-matrix-dim text-sm sm:text-base leading-relaxed space-y-3 max-w-lg font-sans bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-matrix-dim/10 md:bg-transparent md:p-0 md:border-none">
                        <div className="space-y-1.5">
                            <p className="hover:text-matrix-glow/80 transition-colors duration-200">I build robots and write code.</p>
                            <p className="hover:text-matrix-glow/80 transition-colors duration-200">Mostly Python.</p>
                            <p className="hover:text-matrix-glow/80 transition-colors duration-200">I care about how things look and feel (UI/UX), not just if they run.</p>
                        </div>

                        <div className="space-y-1">
                            <p className="font-mono text-xs uppercase tracking-tight text-matrix-glow/80">I work with:</p>
                            <ul className="list-none space-y-1 pl-1 border-l border-matrix-glow/20 ml-1">
                                <li className="pl-2 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default">3D-printed robots</li>
                                <li className="pl-2 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default">Electronics and controllers</li>
                                <li className="pl-2 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default">Computer vision</li>
                                <li className="pl-2 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default">LLMs and VLMs</li>
                            </ul>
                        </div>

                        <p className="text-matrix-dim/90 hover:text-matrix-glow/80 transition-colors duration-200">I build on open-source hardware, and my projects are open source too.</p>

                        <div className="space-y-1.5 pt-1">
                            <p className="hover:text-matrix-glow/80 transition-colors duration-200">I learn by making stuff, breaking it, then fixing it.</p>
                            <p className="text-matrix-glow font-mono text-xs uppercase tracking-widest animate-pulse">Everything here is real.</p>
                        </div>
                    </div>
                </div>

                {/* Robotics & Code Part */}
                <div className="space-y-3 group">
                    <ScrambledTitle
                        phrases={["ROBOTICS & CODE"]}
                        phraseDuration={1000}
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-hero-title font-mono uppercase tracking-widest h-7 md:h-9 group-hover:text-matrix-glow transition-colors duration-300 cursor-default"
                    />
                    <div className="text-matrix-dim text-sm sm:text-base leading-relaxed space-y-3 max-w-lg font-sans bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-matrix-dim/10 md:bg-transparent md:p-0 md:border-none">
                        <div className="space-y-1.5">
                            <p className="hover:text-matrix-glow/80 transition-colors duration-200">I make robots that actually do things.</p>
                            <p className="hover:text-matrix-glow/80 transition-colors duration-200">I design parts, print them, wire them, and code them.</p>
                        </div>

                        <div className="space-y-1">
                            <p className="font-mono text-xs uppercase tracking-tight text-matrix-glow/80">That includes:</p>
                            <ul className="list-none space-y-1 pl-1 border-l border-matrix-glow/20 ml-1">
                                <li className="pl-2 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default">Robot design and 3D printing</li>
                                <li className="pl-2 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default">Electronics + microcontrollers</li>
                                <li className="pl-2 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default">Python for control and logic</li>
                                <li className="pl-2 hover:bg-matrix-glow/10 hover:translate-x-1 transition-all duration-200 cursor-default">Vision for seeing stuff .</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Interactive Robot (Between Background and Text on Mobile, Side-by-Side on Desktop) */}
            <div className="absolute md:relative inset-0 md:inset-auto w-full md:w-1/2 h-full md:h-screen z-10 pointer-events-none md:pointer-events-auto opacity-60 md:opacity-100 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                    <Suspense fallback={
                        <div className="flex items-center justify-center h-full w-full text-matrix-glow font-mono animate-pulse bg-black/40">
                            INITIALIZING SYSTEM...
                        </div>
                    }>
                        <div className="w-full h-full min-h-[300px] flex items-center justify-center">
                            <Spline
                                scene="https://prod.spline.design/FBmixDtRPIKSLaHc/scene.splinecode"
                                className="w-full h-full scale-[0.6] sm:scale-[0.8] lg:scale-100 origin-center pointer-events-auto"
                            />
                        </div>
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default CombinedSection;
