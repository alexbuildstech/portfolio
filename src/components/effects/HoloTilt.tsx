import React, { useRef, useState, useEffect } from "react";

interface HoloTiltProps {
    children: React.ReactNode;
    intensity?: number;
    perspective?: number;
    className?: string;
}

const HoloTilt: React.FC<HoloTiltProps> = ({
    children,
    intensity = 15,
    perspective = 1000,
    className = "",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    // Detect desktop
    useEffect(() => {
        const checkDevice = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current || !isDesktop) return;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // MUCH MORE DRAMATIC rotation on desktop
        const xAxis = (centerX - e.clientX) / intensity;
        const yAxis = (e.clientY - centerY) / intensity;

        setRotation({ x: yAxis, y: xAxis });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovering(false);
    };

    // Desktop gets INSANE scale and glow
    const scale = isDesktop && isHovering ? 1.05 : 1;
    const glow = isDesktop && isHovering
        ? "0 0 40px rgba(0, 255, 255, 0.4), 0 0 80px rgba(0, 255, 255, 0.2)"
        : "none";

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: `${perspective}px` }}
            className={`holotilt-container ${className}`}
        >
            <div
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
                    transition: isHovering ? "transform 0.05s ease-out, filter 0.3s ease" : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease",
                    filter: `drop-shadow(${glow})`,
                }}
                className="holotilt-inner"
            >
                {children}
            </div>
        </div>
    );
};

export default HoloTilt;
