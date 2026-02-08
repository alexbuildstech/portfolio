import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * SmoothScroll Provider - Wraps the app with Lenis smooth scrolling
 * Inspired by Buttermax's buttery smooth scroll experience
 */
const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
