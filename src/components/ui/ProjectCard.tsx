import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ExternalLink, Trophy } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    techStack?: string[];
    href?: string;
    status?: string;
    awards?: string[];
}

export const ProjectCard = ({
    title,
    description,
    header,
    icon,
    className,
    techStack = [],
    href,
    status = "DEPLOYED",
    awards = []
}: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -1; // Subtle tilt
        const rotateY = ((x - centerX) / centerX) * 1;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            }}
            className={cn(
                "glass-panel rounded-2xl p-6 flex flex-col justify-between transition-shadow duration-300 relative overflow-hidden group/bento hover:shadow-2xl hover:shadow-accent/10",
                className
            )}
        >
            <div className="relative z-10 flex flex-col h-full gap-4">

                <div className="flex items-center justify-between">
                    <div className="p-2 bg-[#F5F5F7] rounded-md text-accent">
                        {icon}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 bg-accent/20 rounded-full"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <div className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/5 px-2 py-1 rounded-full relative z-10 border border-accent/20">
                                {status}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover/bento:text-accent transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-normal">
                        {description}
                    </p>
                </div>

                {awards.length > 0 && (
                    <div className="flex flex-col gap-2 mt-2">
                        {awards.map((award, i) => (
                            <div key={i} className="flex items-center gap-2 group/award">
                                <div className="p-1 rounded bg-yellow-400/10 text-yellow-600 transition-colors group-hover/award:bg-yellow-400/20">
                                    <Trophy size={14} className="animate-pulse" />
                                </div>
                                <span className="text-[11px] font-bold text-yellow-700 tracking-tight uppercase italic drop-shadow-sm">
                                    {award}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {header}

                <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100/50">
                    <div className="flex gap-2 flex-wrap">
                        {techStack.map((tech, i) => (
                            <span key={i} className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2 py-1 rounded-md">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {href && (
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 text-gray-500 hover:text-white hover:bg-black transition-all duration-300 group/link border border-gray-100"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-wider group-hover/link:text-white">Open on GitHub</span>
                            <ExternalLink size={12} className="group-hover/link:text-accent transition-colors" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
