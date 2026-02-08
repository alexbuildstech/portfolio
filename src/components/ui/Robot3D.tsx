import React, { Suspense, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

interface Robot3DProps {
    scene?: string;
    className?: string;
    onLoad?: () => void;
    scrollRotation?: [number, number]; // [startAngle, endAngle]
    scrollPosition?: [number, number]; // [startY, endY]
    scrollScale?: [number, number];    // [startScale, endScale]
}

const Robot3D: React.FC<Robot3DProps> = ({
    scene = "https://prod.spline.design/FBmixDtRPIKSLaHc/scene.splinecode",
    className,
    onLoad,
    scrollRotation = [0, 45],
    scrollPosition = [0, 0],
    scrollScale = [1, 1]
}) => {
    const splineRef = useRef<any>(null);
    const { scrollYProgress } = useScroll();

    // Smooth transitions for a premium feel
    const rotation = useTransform(scrollYProgress, [0, 1], scrollRotation);
    const positionY = useTransform(scrollYProgress, [0, 1], scrollPosition);
    const scale = useTransform(scrollYProgress, [0, 1], scrollScale);

    const smoothRotation = useSpring(rotation, { damping: 20, stiffness: 100 });
    const smoothPositionY = useSpring(positionY, { damping: 20, stiffness: 100 });
    const smoothScale = useSpring(scale, { damping: 20, stiffness: 100 });

    useEffect(() => {
        const updateSpline = () => {
            if (splineRef.current) {
                // Assuming the scene has a main object or camera we want to rotate
                // This is a generic approach; specific Spline objects can be found by name
                const obj = splineRef.current.findObjectByName('Robot') || splineRef.current.findObjectByName('Main');
                if (obj) {
                    obj.rotation.y = (smoothRotation.get() * Math.PI) / 180;
                    obj.position.y = smoothPositionY.get();
                    obj.scale.set(smoothScale.get(), smoothScale.get(), smoothScale.get());
                }
            }
        };

        const unsubscribe = smoothRotation.on("change", updateSpline);
        return () => unsubscribe();
    }, [smoothRotation, smoothPositionY, smoothScale]);

    return (
        <div className={cn("relative w-full h-full flex items-center justify-center overflow-hidden", className)}>
            <Suspense fallback={
                <div className="flex flex-col items-center justify-center h-full w-full bg-black gap-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <div className="font-mono text-[10px] tracking-widest text-primary uppercase">Loading 3D Workspace...</div>
                </div>
            }>
                <div className="w-full h-full flex items-center justify-center">
                    <Spline
                        scene={scene}
                        className="w-full h-full pointer-events-auto"
                        onLoad={(spline) => {
                            splineRef.current = spline;
                            if (onLoad) onLoad();
                        }}
                    />
                </div>
            </Suspense>
        </div>
    );
};

export default Robot3D;
