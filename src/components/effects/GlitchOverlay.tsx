import React, { useState, useEffect } from "react";

interface GlitchOverlayProps {
    frequency?: number;
    duration?: number;
    enabled?: boolean;
}

const GlitchOverlay: React.FC<GlitchOverlayProps> = ({
    frequency = 8000,
    duration = 300,
    enabled = true,
}) => {
    const [isGlitching, setIsGlitching] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkDevice = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    useEffect(() => {
        if (!enabled) return;

        // MUCH more frequent on desktop
        const finalFrequency = isDesktop ? frequency / 2.5 : frequency * 2;
        const finalDuration = isDesktop ? duration * 1.5 : duration * 0.8;

        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), finalDuration);
        }, finalFrequency);

        return () => clearInterval(interval);
    }, [enabled, frequency, duration, isDesktop]);

    if (!isGlitching) return null;

    return (
        <div
            className="glitch-overlay"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none",
                zIndex: 9998,
                opacity: isDesktop ? 1 : 0.5,
            }}
        >
            {/* Multiple glitch layers for distortion effect */}
            <div className="glitch-slice glitch-slice-1" style={{
                background: isDesktop ? "linear-gradient(90deg, rgba(255,0,0,0.1) 0%, transparent 100%)" : "none"
            }} />
            <div className="glitch-slice glitch-slice-2" style={{
                background: isDesktop ? "linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.1) 100%)" : "none"
            }} />
            <div className="glitch-slice glitch-slice-3" style={{
                background: isDesktop ? "linear-gradient(90deg, rgba(0,255,0,0.05) 0%, rgba(255,0,255,0.05) 100%)" : "none"
            }} />
        </div>
    );
};

export default GlitchOverlay;
