
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StickyNoteProps {
    children: React.ReactNode;
    className?: string;
    rotation?: number;
    color?: 'yellow' | 'pink' | 'cyan';
}

export const StickyNote = ({ children, className, rotation = 0, color = 'yellow' }: StickyNoteProps) => {
    const colors = {
        yellow: 'bg-[#fef3c7] text-black border-[#fde68a]',
        pink: 'bg-[#fce7f3] text-black border-[#fbcfe8]',
        cyan: 'bg-[#cfbef8] text-black border-[#a78bfa]', // Using purple/cyan mix for "future" feel
    };

    return (
        <motion.div
            initial={{ rotate: rotation, scale: 0.9, opacity: 0 }}
            whileInView={{ rotate: rotation, scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "p-8 shadow-xl w-80 md:w-96 font-hand text-2xl relative overflow-hidden",
                colors[color],
                className
            )}
            style={{
                boxShadow: '5px 5px 15px rgba(0,0,0,0.2)',
            }}
        >
            {/* Tape effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm rotate-1 shadow-sm" />

            <div className="relative z-10">
                {children}
            </div>

            {/* Corner fold */}
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-black/10 origin-bottom-right skew-y-12 backdrop-blur-sm" />
        </motion.div>
    );
};
