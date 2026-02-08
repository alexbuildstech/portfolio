import React, { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";
import { useRobotStore } from "@/hooks/useRobotStore";
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

    const { mouseX, mouseY, cameraState, isRobotLoaded, setIsRobotLoaded, activeInput } = useRobotStore();

    const SMOOTHING = 0.08;

    const CAMERA_POSITIONS = {
        home: { x: 400, y: 0, z: 1100, rx: 0, ry: 0.1, rz: 0 },
        about: { x: -300, y: 200, z: 700, rx: -0.2, ry: 0.6, rz: 0 },
        contact: { x: 900, y: -400, z: 900, rx: 0.3, ry: -0.4, rz: 0 }
    };

    const handleLoad = (spline: any) => {
        splineRef.current = spline;
        setIsRobotLoaded(true);

        const cam = spline.findObjectByName('Camera') || spline.findObjectByName('Personal Camera');
        const head = spline.findObjectByName('Head');

        if (cam) cameraRef.current = cam;
        if (head) headRef.current = head;

        if (onLoad) onLoad();
    };

    useEffect(() => {
        if (!cameraRef.current) return;
        const target = CAMERA_POSITIONS[cameraState as keyof typeof CAMERA_POSITIONS] || CAMERA_POSITIONS.home;

        gsap.to(cameraRef.current.position, {
            x: target.x,
            y: target.y,
            z: target.z,
            duration: 3,
            ease: "expo.inOut"
        });

        gsap.to(cameraRef.current.rotation, {
            x: target.rx,
            y: target.ry,
            z: target.rz,
            duration: 3,
            ease: "expo.inOut"
        });
    }, [cameraState, isRobotLoaded]);

    useEffect(() => {
        let frameId: number;
        let time = 0;

        const animate = () => {
            time += 0.02;
            if (headRef.current) {
                const breathingOffset = Math.sin(time * 0.5) * 0.015;
                let targetX = (mouseX - 0.5) * 0.7;
                let targetY = activeInput ? 0.3 : (-mouseY * 0.3) + 0.1;

                targetX = Math.max(-0.4, Math.min(0.4, targetX));
                targetY = Math.max(-0.25, Math.min(0.25, targetY));

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

    if (isMobile) return null;

    return (
        <div className={cn("relative w-full h-full flex items-center justify-center pointer-events-none grayscale contrast-125 saturate-0", className)}>
            <div className="absolute inset-0 bg-background/10 z-10 pointer-events-none" />
            <Spline
                scene={scene}
                className={cn("w-full h-full transition-opacity duration-2000", isRobotLoaded ? "opacity-30 lg:opacity-60" : "opacity-0")}
                onLoad={handleLoad}
            />
        </div>
    );
};

export default Robot3D;
