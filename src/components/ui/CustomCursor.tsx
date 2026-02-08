
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [cursorVariant, setCursorVariant] = useState("default");

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseEnter = () => setCursorVariant("hover");
        const handleMouseLeave = () => setCursorVariant("default");

        window.addEventListener('mousemove', moveCursor);

        // Add event listeners for hoverable elements
        const hoverables = document.querySelectorAll('a, button, input, textarea, .hover-target');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const variants = {
        default: {
            opacity: 1,
            height: 32,
            width: 32,
            backgroundColor: "rgba(180, 100, 255, 0.3)", // Transparent purple
            border: "1px solid rgba(180, 100, 255, 0.8)",
            x: 0,
            y: 0,
        },
        hover: {
            opacity: 1,
            height: 64,
            width: 64,
            backgroundColor: "rgba(0, 255, 200, 0.2)", // Transparent cyan
            border: "1px solid rgba(0, 255, 200, 0.8)",
            x: -16,
            y: -16,
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-screen"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full opacity-80" />
            </div>
        </motion.div>
    );
};
