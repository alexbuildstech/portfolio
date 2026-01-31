"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgb(0, 5, 0)", // Dark Matrix Green base
    gradientBackgroundEnd = "rgb(0, 10, 0)",
    firstColor = "0, 255, 70",  // Matrix Green
    secondColor = "0, 150, 50", // Dim Matrix Green
    thirdColor = "0, 100, 200", // Tech Blue
    fourthColor = "0, 200, 100", // Glow Green
    fifthColor = "0, 80, 40",
    pointerColor = "0, 255, 120",
    size = "60%",
    blendingValue = "screen", // Better for tech vibe
    children,
    className,
    interactive = true,
    containerClassName,
}: {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    pointerColor?: string;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    interactive?: boolean;
    containerClassName?: string;
}) => {
    const interactiveRef = useRef<HTMLDivElement>(null);

    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const [tgX, setTgX] = useState(0);
    const [tgY, setTgY] = useState(0);
    useEffect(() => {
        document.body.style.setProperty(
            "--gradient-background-start",
            gradientBackgroundStart
        );
        document.body.style.setProperty(
            "--gradient-background-end",
            gradientBackgroundEnd
        );
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--pointer-color", pointerColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, []);

    useEffect(() => {
        function move() {
            if (!interactiveRef.current) {
                return;
            }
            setCurX(curX + (tgX - curX) / 20);
            setCurY(curY + (tgY - curY) / 20);
            interactiveRef.current.style.transform = `translate(${Math.round(
                curX
            )}px, ${Math.round(curY)}px)`;
        }

        move();
    }, [tgX, tgY]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect();
            setTgX(event.clientX - rect.left);
            setTgY(event.clientY - rect.top);
        }
    };

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);

    return (
        <div
            className={cn(
                "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
                containerClassName
            )}
        >
            {/* Scanline Overlay for technical aesthetic */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

            <div className={cn("relative z-50", className)}>{children}</div>
            <div
                className={cn(
                    "gradients-container h-full w-full opacity-60",
                    isSafari ? "blur-2xl" : "blur-[80px]" // Softer edges but rectangular pulses
                )}
            >
                {/* Digital Blocks instead of soft blobs */}
                <div
                    className={cn(
                        `absolute bg-[rgba(var(--first-color),0.4)]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:center_center]`,
                        `animate-first`,
                        `opacity-100 border border-matrix-glow/20`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute bg-[rgba(var(--second-color),0.3)]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-200px)]`,
                        `animate-second`,
                        `opacity-100 border border-matrix-glow/10`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute bg-[rgba(var(--third-color),0.2)]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%+200px)]`,
                        `animate-third`,
                        `opacity-100 border border-matrix-glow/5`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute bg-[rgba(var(--fourth-color),0.2)]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-100px)]`,
                        `animate-fourth`,
                        `opacity-70 border border-matrix-glow/10`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute bg-[rgba(var(--fifth-color),0.3)]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-400px)_calc(50%+400px)]`,
                        `animate-fifth`,
                        `opacity-100 border border-matrix-glow/20`
                    )}
                ></div>

                {interactive && (
                    <div
                        ref={interactiveRef}
                        onMouseMove={handleMouseMove}
                        className={cn(
                            `absolute bg-[rgba(var(--pointer-color),0.4)]`,
                            `[mix-blend-mode:var(--blending-value)] w-[300px] h-[300px] -top-[150px] -left-[150px]`,
                            `opacity-70 blur-3xl border border-matrix-glow/30`
                        )}
                    ></div>
                )}
            </div>
        </div>
    );
};
