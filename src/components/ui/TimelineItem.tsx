import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
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
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`relative pl-12 md:pl-24 ${isLast ? '' : 'pb-32'}`}
        >
            {/* Connector Line */}
            {!isLast && (
                <div className="absolute left-[7px] md:left-[11px] top-8 bottom-0 w-[2px] bg-primary/20" />
            )}

            {/* Node Point */}
            <div className="absolute left-0 top-2 w-4 md:w-6 h-4 md:h-6 bg-background border-2 border-primary z-10" />

            {/* Content Container */}
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                    <h3 className="text-3xl md:text-4xl font-mono text-white tracking-tighter uppercase">
                        {title}
                    </h3>
                    {date && (
                        <span className="text-primary font-mono text-[10px] tracking-widest uppercase whitespace-nowrap bg-primary/5 px-3 py-1 border border-primary/20">
                            {date}
                        </span>
                    )}
                </div>

                <div className="space-y-4">
                    {subtitle && (
                        <h4 className="text-primary font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
                            {subtitle}
                        </h4>
                    )}

                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-4">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[9px] font-mono text-foreground/40 border border-foreground/10 px-3 py-1"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="pt-2 text-foreground/70 text-sm leading-relaxed font-mono max-w-2xl">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};

export default TimelineItem;
