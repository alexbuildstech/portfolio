import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import DecryptText from '../effects/DecryptText';

interface TechnicalCalloutProps {
    label: string;
    value: string;
    status?: 'active' | 'inactive' | 'warning' | 'error';
    className?: string; // Positioning classes (top, left, etc)
    delay?: number;
}

const TechnicalCallout: React.FC<TechnicalCalloutProps> = ({
    label,
    value,
    status = 'active',
    className,
    delay = 0
}) => {
    const statusColors = {
        active: "text-matrix-glow border-matrix-glow",
        inactive: "text-matrix-dim border-matrix-dim",
        warning: "text-yellow-400 border-yellow-400",
        error: "text-red-500 border-red-500"
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay / 1000 }}
            className={cn(
                "absolute flex flex-col items-start pointer-events-none z-20",
                className
            )}
        >
            {/* Connecting Line (Simulated) */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '40px' }}
                transition={{ duration: 0.5, delay: (delay + 300) / 1000 }}
                className={cn("h-[1px] bg-current mb-1 absolute top-1/2 -right-10 origin-left", statusColors[status].split(" ")[0])}
                style={{ transform: 'translateX(100%)' }} // Line extends outward depending on side, tricky to generalize without more props. simplified for now.
            />

            <div className={cn(
                "bg-black/80 backdrop-blur-sm border px-3 py-1.5 flex flex-col text-[10px] font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(0,0,0,0.5)]",
                statusColors[status]
            )}>
                <span className="opacity-70 text-[9px] mb-0.5">{label}</span>
                <div className="flex items-center gap-2">
                    <span className="font-bold">
                        <DecryptText text={value} speed={50} startDelay={delay + 500} />
                    </span>
                    {status === 'active' && <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />}
                </div>
            </div>
        </motion.div>
    );
};

export default TechnicalCallout;
