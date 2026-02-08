import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface DepthLayerProps {
    children: React.ReactNode;
    depth: number; // 0 (front) to 1 (back)
    className?: string;
}

export const DepthLayer: React.FC<DepthLayerProps> = ({ children, depth, className = "" }) => {
    return (
        <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}
            style={{ zIndex: Math.floor((1 - depth) * 100) }}
        >
            {children}
        </div>
    );
};

interface DepthContainerProps {
    children: React.ReactNode;
    className?: string;
}

const DepthContainer: React.FC<DepthContainerProps> = ({ children, className = "" }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for high-end feel
    const springConfig = { damping: 30, stiffness: 200, mass: 1 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkDevice = () => setIsDesktop(window.innerWidth >= 1024);
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || !isDesktop) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden cursor-default ${className}`}
            style={{ perspective: "1500px" }}
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === DepthLayer) {
                    const depth = child.props.depth || 0;
                    // Farther layers move more (parallax)
                    const translateX = useSpring(mouseX.get() * (depth * 100), springConfig);
                    const translateY = useSpring(mouseY.get() * (depth * 100), springConfig);

                    return (
                        <motion.div
                            style={{
                                x: smoothX.get() * (depth * 150),
                                y: smoothY.get() * (depth * 150),
                                rotateX: smoothY.get() * (depth * -20),
                                rotateY: smoothX.get() * (depth * 20),
                                transformStyle: "preserve-3d",
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {child}
                        </motion.div>
                    );
                }
                return child;
            })}
        </div>
    );
};

export default DepthContainer;
