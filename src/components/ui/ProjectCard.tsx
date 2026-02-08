import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    techStack?: string[];
    href?: string;
    status?: string;
}

export const ProjectCard = ({
    title,
    description,
    header,
    icon,
    className,
    techStack = [],
    href,
    status = "DEPLOYED"
}: ProjectCardProps) => {
    return (
        <div className={cn(
            "border-2 border-foreground p-8 flex flex-col bg-background transition-all duration-300 hover:bg-foreground hover:text-background group/card",
            className
        )}>
            <div className="flex justify-between items-start mb-8">
                <div className="p-3 border-2 border-foreground group-hover/card:border-background">
                    {icon}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] border-2 border-foreground group-hover/card:border-background px-2 py-1">
                    {status}
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
                    {title}
                </h3>
                <p className="text-sm font-bold leading-tight opacity-70 group-hover/card:opacity-100">
                    {description}
                </p>
            </div>

            {header}

            <div className="mt-auto pt-8 flex flex-col gap-6">
                <div className="flex gap-2 flex-wrap">
                    {techStack.map((tech, i) => (
                        <span key={i} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-foreground/20 group-hover/card:border-background/40">
                            {tech}
                        </span>
                    ))}
                </div>

                {href && (
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest group/link"
                    >
                        <span>View Repository</span>
                        <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-2" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
