import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface FloatingPartProps {
    src: string;
    className?: string;
    initialX?: number;
    initialY?: number;
    floatAmplitude?: number;
    floatSpeed?: number;
}

const FloatingPart: React.FC<FloatingPartProps> = ({
    src,
    className = "",
    initialX = 0,
    initialY = 0,
    floatAmplitude = 20,
    floatSpeed = 2,
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 40, stiffness: 100 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 50;
            const y = (e.clientY / window.innerHeight - 0.5) * 50;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className={`absolute pointer-events-none ${className}`}
            style={{
                left: initialX,
                top: initialY,
                x: smoothX,
                y: smoothY,
            }}
            animate={{
                y: [initialY, initialY + floatAmplitude, initialY],
                rotate: [0, 5, 0],
            }}
            transition={{
                y: { duration: floatSpeed, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: floatSpeed * 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
        >
            <img src={src} alt="3D Part" className="w-full h-full object-contain" />
        </motion.div>
    );
};

export default FloatingPart;
