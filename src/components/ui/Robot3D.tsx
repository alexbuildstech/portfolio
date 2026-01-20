import React, { Suspense, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";

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

    return (
        <div className={cn("relative w-full h-full flex items-center justify-center overflow-hidden", className)}>
            <Suspense fallback={
                <div className="flex flex-col items-center justify-center h-full w-full text-matrix-glow font-mono animate-pulse bg-black/40 gap-4">
                    <div className="text-xl tracking-[0.2em] font-bold">INITIALIZING CORE...</div>
                    <div className="w-48 h-1 bg-matrix-glow/10 overflow-hidden rounded-full">
                        <div className="w-full h-full bg-matrix-glow animate-progress-glow"></div>
                    </div>
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
