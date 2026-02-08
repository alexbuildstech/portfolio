import React, { useEffect, useState } from "react";

interface ScanlinesProps {
    opacity?: number;
    lineHeight?: number;
    flicker?: boolean;
}

const Scanlines: React.FC<ScanlinesProps> = ({
    opacity = 0.15,
    lineHeight = 4,
    flicker = true,
}) => {
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkDevice = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    const desktopOpacity = opacity * 2.5; // Much more visible on desktop
    const finalOpacity = isDesktop ? desktopOpacity : opacity * 0.5;

    return (
        <>
            {/* Scanlines */}
            <div
                className={`scanlines ${flicker && isDesktop ? "scanlines-flicker" : ""}`}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: "none",
                    zIndex: 9999,
                    background: `
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0),
              rgba(255, 255, 255, 0) 50%,
              rgba(0, 0, 0, ${finalOpacity}) 50%,
              rgba(0, 0, 0, ${finalOpacity})
            )
          `,
                    backgroundSize: `100% ${lineHeight}px`,
                }}
            />

            {/* Noise/grain overlay - desktop only */}
            {isDesktop && (
                <div
                    className="noise-overlay"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        pointerEvents: "none",
                        zIndex: 9998,
                        opacity: 0.03,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
            )}
        </>
    );
};

export default Scanlines;
