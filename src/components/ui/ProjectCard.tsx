import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Cpu } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    techStack?: string[];
    href?: string;
    status?: string;
    imageSrc?: string;
}

const TechnicalSchematic = () => (
    <div className="w-full h-full relative overflow-hidden bg-muted flex items-center justify-center">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        <div className="relative w-3/4 h-3/4 border border-foreground/20 flex items-center justify-center">
            <div className="absolute top-0 left-0 p-1 text-[8px] font-mono opacity-40">REF_ID: 2.0.26</div>
            <div className="w-full h-[1px] bg-foreground/10 absolute top-1/2" />
            <div className="h-full w-[1px] bg-foreground/10 absolute left-1/2" />
            <Cpu size={48} className="opacity-10" />
            <div className="absolute bottom-2 right-2 flex gap-1">
                {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 bg-accent" />)}
            </div>
        </div>
    </div>
);

export const ProjectCard = ({
    title,
    description,
    header,
    icon,
    className,
    techStack = [],
    href,
    status = "ACTIVE",
    imageSrc
}: ProjectCardProps) => {
    return (
        <div className={cn(
            "border-4 border-foreground flex flex-col bg-card transition-all duration-500 hover:shadow-[24px_24px_0_0_#0055ff] group/card relative",
            className
        )}>
            {/* Status Badge */}
            <div className="absolute top-0 right-0 p-4 z-20">
                <div className="text-[10px] font-mono font-black uppercase tracking-[0.2em] bg-foreground text-background px-4 py-1">
                    {status}
                </div>
            </div>

            {/* Visual Container */}
            <div className="w-full h-80 overflow-hidden border-b-4 border-foreground relative bg-muted">
                {imageSrc ? (
                    <img 
                        src={imageSrc} 
                        alt={`${title} technical diagram`}
                        className="w-full h-full object-cover grayscale contrast-125 saturate-0 group-hover/card:grayscale-0 group-hover/card:saturate-100 group-hover/card:contrast-100 transition-all duration-700"
                    />
                ) : (
                    <TechnicalSchematic />
                )}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
            </div>

            <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                    <div className="p-3 border-4 border-foreground bg-background text-accent shadow-[4px_4px_0_0_#000]">
                        {icon}
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">
                        {title}
                    </h3>
                </div>

                <p className="text-sm font-bold leading-tight opacity-70 mb-10 uppercase tracking-tight">
                    {description}
                </p>

                {header}

                <div className="mt-auto pt-8 flex flex-col gap-8">
                    <div className="flex gap-3 flex-wrap">
                        {techStack.map((tech, i) => (
                            <span key={i} className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 bg-muted border border-foreground/10">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {href && (
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-between w-full p-6 border-4 border-foreground text-xs font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all group/link"
                        >
                            <span>Initialize Viewport</span>
                            <ArrowUpRight size={24} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
