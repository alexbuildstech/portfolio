import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
    title: string;
    subtitle?: string;
    description?: React.ReactNode;
    date?: string;
    tags?: string[];
    isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    subtitle,
    description,
    date,
    tags,
    isLast = false,
}) => {
    return (
        <div className="relative pl-8 sm:pl-10 group">
            {/* Vertical Line */}
            {!isLast && (
                <div className="absolute left-[3px] top-3 bottom-[-12px] w-[2px] bg-matrix-dim/30 group-hover:bg-matrix-glow/50 transition-colors duration-500"></div>
            )}

            {/* Node Point */}
            <div className="absolute left-[-4px] top-1.5 w-4 h-4 rounded-full border-2 border-matrix-glow bg-black shadow-[0_0_10px_rgba(0,255,0,0.4)] group-hover:bg-matrix-glow group-hover:scale-110 transition-all duration-300"></div>

            {/* Content */}
            <div className="space-y-2 mb-10 group-hover:translate-x-1 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-xl font-mono font-bold text-white group-hover:text-matrix-glow transition-colors duration-300 uppercase tracking-wide">
                        {title}
                    </h3>
                    {date && (
                        <span className="text-xs font-mono text-matrix-dim/80 bg-matrix-dim/10 px-2 py-0.5 rounded border border-matrix-dim/20">
                            {date}
                        </span>
                    )}
                </div>

                {subtitle && (
                    <h4 className="text-base font-mono text-matrix-glow/90 font-semibold">
                        {subtitle}
                    </h4>
                )}

                <div className="text-matrix-dim text-sm leading-relaxed font-sans max-w-2xl">
                    {description}
                </div>

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-[10px] font-mono uppercase tracking-wider text-matrix-glow/70 border border-matrix-glow/20 px-2 py-1 rounded hover:bg-matrix-glow/10 hover:text-matrix-glow hover:border-matrix-glow/40 transition-all duration-300 cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimelineItem;
