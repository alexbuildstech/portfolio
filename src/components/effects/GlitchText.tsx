import React, { useState, useEffect } from "react";

interface GlitchTextProps {
    children: React.ReactNode;
    className?: string;
    intensity?: "low" | "medium" | "high" | "extreme";
    animate?: boolean;
    trigger?: "hover" | "interval" | "always";
}

const GlitchText: React.FC<GlitchTextProps> = ({
    children,
    className = "",
    intensity = "extreme",
    animate = true,
    trigger = "interval",
}) => {
    const [isGlitching, setIsGlitching] = useState(trigger === "always");
    const [isDesktop, setIsDesktop] = useState(true);

    // Detect if desktop for intense effects
    useEffect(() => {
        const checkDevice = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    // Intensity mapping - MUCH MORE AGGRESSIVE for desktop
    const intensityMap = {
        low: { offset: isDesktop ? 2 : 1, opacity: isDesktop ? 0.7 : 0.4 },
        medium: { offset: isDesktop ? 4 : 2, opacity: isDesktop ? 0.85 : 0.5 },
        high: { offset: isDesktop ? 6 : 2, opacity: isDesktop ? 0.95 : 0.6 },
        extreme: { offset: isDesktop ? 10 : 3, opacity: isDesktop ? 1 : 0.7 },
    };

    const { offset, opacity } = intensityMap[intensity];

    useEffect(() => {
        if (trigger === "interval") {
            // More frequent on desktop
            const frequency = isDesktop ? 2000 : 4000;
            const duration = isDesktop ? 400 : 200;

            const interval = setInterval(() => {
                setIsGlitching(true);
                setTimeout(() => setIsGlitching(false), duration);
            }, frequency);

            return () => clearInterval(interval);
        }
    }, [trigger, isDesktop]);

    const handleMouseEnter = () => {
        if (trigger === "hover") {
            setIsGlitching(true);
        }
    };

    const handleMouseLeave = () => {
        if (trigger === "hover") {
            setIsGlitching(false);
        }
    };

    return (
        <div
            className={`glitch-text-wrapper ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`glitch-text ${isGlitching && animate ? "glitching" : ""}`}
                style={{
                    textShadow: isDesktop
                        ? `
              ${offset}px 0 rgba(255, 0, 0, ${opacity}),
              -${offset}px 0 rgba(0, 255, 255, ${opacity}),
              ${offset * 0.5}px ${offset * 0.3}px rgba(0, 255, 0, ${opacity * 0.6})
            `
                        : `
              ${offset}px 0 rgba(255, 0, 0, ${opacity}),
              -${offset}px 0 rgba(0, 255, 255, ${opacity})
            `,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default GlitchText;
