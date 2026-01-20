import React from "react";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white px-4 pointer-events-none text-center">
                <div className="space-y-6 max-w-4xl">
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter uppercase">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                            Digital Artifact
                        </span>
                    </h1>
                    <p className="text-matrix-glow font-mono text-sm md:text-lg tracking-[0.3em] uppercase opacity-70 animate-pulse">
                        System Identity: About Me
                    </p>
                </div>
            </div>
        </BackgroundGradientAnimation>
    );
}
