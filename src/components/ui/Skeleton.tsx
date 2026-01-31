import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
    className?: string;
    variant?: "rect" | "circle" | "text" | "tech-box";
    lines?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    className,
    variant = "rect",
    lines = 1
}) => {
    const baseClass = "relative overflow-hidden bg-gray-200 dark:bg-gray-800 animate-pulse";

    // Maker-themed shimmer effect
    const shimmer = (
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    );

    const renderSkeleton = () => {
        if (variant === "text" && lines > 1) {
            return (
                <div className="space-y-3 w-full">
                    {[...Array(lines)].map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                baseClass,
                                "h-4 rounded-md",
                                i === lines - 1 ? "w-[70%]" : "w-full",
                                className
                            )}
                        >
                            {shimmer}
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div
                className={cn(
                    baseClass,
                    variant === "circle" ? "rounded-full" : "rounded-xl",
                    variant === "tech-box" ? "border border-accent/10 bg-accent/5 backdrop-blur-sm" : "",
                    "min-h-[1em]",
                    className
                )}
            >
                {shimmer}
            </div>
        );
    };

    return renderSkeleton();
};
