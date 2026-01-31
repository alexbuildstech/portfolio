import React, { Suspense, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";
import { useRobotStore } from "@/hooks/useRobotStore";
import { Skeleton } from "./Skeleton";
import gsap from "gsap";

interface Robot3DProps {
    scene?: string;
    className?: string;
    onLoad?: () => void;
}

const Robot3D: React.FC<Robot3DProps> = ({
    scene = "https://prod.spline.design/FBmixDtRPIKSLaHc/scene.splinecode",
    className,
    onLoad
}) => {
    const splineRef = useRef<any>(null);
    const headRef = useRef<any>(null);
    const cameraRef = useRef<any>(null);
    const eyesRef = useRef<any>(null);

    // Global State
    const { mouseX, mouseY, cameraState, isRobotLoaded, setIsRobotLoaded, activeInput } = useRobotStore();

    // --- Configuration ---
    const SMOOTHING = 0.08;

    // Aggressive Right-Side Camera Positions
    // In Spline, if we move the camera LEFT (negative X), the subject appears RIGHT
    const CAMERA_POSITIONS = {
        home: { x: 0, y: 0, z: 1200, rx: 0, ry: 0, rz: 0 },
        about: { x: -800, y: -100, z: 600, rx: 0, ry: 0.5, rz: 0 },
        contact: { x: -400, y: 600, z: 700, rx: -0.8, ry: 0.1, rz: 0 }
    };

    const handleLoad = (spline: any) => {
        splineRef.current = spline;
        setIsRobotLoaded(true);

        const cam = spline.findObjectByName('Camera') || spline.findObjectByName('Personal Camera');
        const head = spline.findObjectByName('Head');
        const eyes = spline.findObjectByName('Eyes');

        if (cam) cameraRef.current = cam;
        if (head) headRef.current = head;
        if (eyes) eyesRef.current = eyes;

        if (onLoad) onLoad();
    };

    // --- Camera State Transition (GSAP) ---
    useEffect(() => {
        if (!cameraRef.current) return;
        const target = CAMERA_POSITIONS[cameraState as keyof typeof CAMERA_POSITIONS] || CAMERA_POSITIONS.home;

        gsap.to(cameraRef.current.position, {
            x: target.x,
            y: target.y,
            z: target.z,
            duration: 2.5,
            ease: "power3.inOut"
        });

        gsap.to(cameraRef.current.rotation, {
            x: target.rx,
            y: target.ry,
            z: target.rz,
            duration: 2.5,
            ease: "power3.inOut"
        });
    }, [cameraState, isRobotLoaded]);

    // --- Render Loop (Head Tracking & Breathing) ---
    useEffect(() => {
        let frameId: number;
        let time = 0;

        const animate = () => {
            time += 0.02;
            if (headRef.current) {
                // 1. Idle "Breathing" / Floating Motion
                const breathingOffset = Math.sin(time * 0.5) * 0.02;

                // 2. Tracking Vector Calculation
                // Center of the right-half container is mouseX = 0.5
                let targetX = (mouseX - 0.5) * 0.8;
                let targetY = activeInput ? 0.4 : (-mouseY * 0.4) + 0.1;

                // 3. Tight Clump Values for weighted feel
                targetX = Math.max(-0.4, Math.min(0.4, targetX));
                targetY = Math.max(-0.25, Math.min(0.25, targetY));

                // 4. Apply Smoothing (Lerp)
                const currentX = headRef.current.rotation.x || 0;
                const currentY = headRef.current.rotation.y || 0;

                headRef.current.rotation.x += (targetY + breathingOffset - currentX) * SMOOTHING;
                headRef.current.rotation.y += (targetX - currentY) * SMOOTHING;
            }
            frameId = requestAnimationFrame(animate);
        };

        if (isRobotLoaded) {
            animate();
        }

        return () => cancelAnimationFrame(frameId);
    }, [mouseX, mouseY, activeInput, isRobotLoaded]);

    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // ... (rest of the component logic)

    if (isMobile) return <div className={cn("w-full h-full bg-background", className)} />;

    return (
        <div className={cn("relative w-full h-full flex items-center justify-center pointer-events-none", className)}>
            <Suspense fallback={null}>
                <Spline
                    scene={scene}
                    className={cn("w-full h-full transition-opacity duration-1000", isRobotLoaded ? "opacity-100" : "opacity-0")}
                    onLoad={handleLoad}
                    style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
                />
            </Suspense>
        </div>
    );
};

export default Robot3D;
