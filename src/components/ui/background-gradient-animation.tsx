"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgb(10, 10, 10)", // Deep Charcoal
    gradientBackgroundEnd = "rgb(15, 15, 15)",
    firstColor = "197, 160, 89",  // Gold
    secondColor = "240, 240, 235", // Ivory
    thirdColor = "40, 40, 40",    // Muted Gray
    fourthColor = "150, 130, 90", // Muted Gold
    fifthColor = "10, 10, 10",
    pointerColor = "197, 160, 89",
    size = "80%",
    blendingValue = "soft-light",
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
        let animationFrameId: number;
        const move = () => {
            setCurX(prevX => prevX + (tgX - prevX) / 15);
            setCurY(prevY => prevY + (tgY - prevY) / 15);

            if (interactiveRef.current) {
                interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }
            animationFrameId = requestAnimationFrame(move);
        };

        move();
        return () => cancelAnimationFrame(animationFrameId);
    }, [tgX, tgY]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (interactiveRef.current) {
            const rect = canvasRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
            setTgX(event.clientX - rect.left);
            setTgY(event.clientY - rect.top);
        }
    };

    const canvasRef = useRef<HTMLDivElement>(null);
    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);

    return (
        <div
            ref={canvasRef}
            className={cn(
                "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
                containerClassName
            )}
        >
            <div className={cn("relative z-50", className)}>{children}</div>
            <div
                className={cn(
                    "gradients-container h-full w-full opacity-30",
                    isSafari ? "blur-2xl" : "blur-[120px]"
                )}
            >
                <div
                    className={cn(
                        `absolute bg-[rgba(var(--first-color),0.25)]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:center_center]`,
                        `animate-first`,
                        `opacity-100 rounded-full`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute bg-[rgba(var(--second-color),0.15)]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-200px)]`,
                        `animate-second`,
                        `opacity-100 rounded-full`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute bg-[rgba(var(--third-color),0.2)]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%+200px)]`,
                        `animate-third`,
                        `opacity-100 rounded-full`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute bg-[rgba(var(--fourth-color),0.15)]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-100px)]`,
                        `animate-fourth`,
                        `opacity-70 rounded-full`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute bg-[rgba(var(--fifth-color),0.25)]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-400px)_calc(50%+400px)]`,
                        `animate-fifth`,
                        `opacity-100 rounded-full`
                    )}
                ></div>

                {interactive && (
                    <div
                        ref={interactiveRef}
                        onMouseMove={handleMouseMove}
                        className={cn(
                            `absolute bg-[rgba(var(--pointer-color),0.2)]`,
                            `[mix-blend-mode:var(--blending-value)] w-[600px] h-[600px] -top-[300px] -left-[300px]`,
                            `opacity-60 blur-3xl rounded-full`
                        )}
                    ></div>
                )}
            </div>
        </div>
    );
};
