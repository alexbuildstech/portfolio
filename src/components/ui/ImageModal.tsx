import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, Move } from 'lucide-react';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, children, title }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col z-[101]"
                    >
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                            <div className="flex flex-col">
                                <h3 className="font-bold text-lg text-foreground tracking-tight leading-none mb-1">
                                    {title || "Technical Diagram"}
                                </h3>
                                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                                    <Move className="w-3 h-3" />
                                    <span>Click to toggle zoom // Drag to pan</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsZoomed(!isZoomed)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 flex items-center gap-2"
                                    title={isZoomed ? "Zoom Out" : "Zoom In"}
                                >
                                    {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                                </button>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors text-gray-500"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-hidden bg-gray-50/50 cursor-crosshair">
                            <motion.div
                                className="w-full h-full flex items-center justify-center p-4 md:p-12"
                                animate={{ scale: isZoomed ? 2 : 1 }}
                                drag={isZoomed}
                                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                                dragElastic={0.1}
                                onClick={() => setIsZoomed(!isZoomed)}
                            >
                                <div className="w-full h-full flex items-center justify-center pointer-events-none select-none">
                                    {children}
                                </div>
                            </motion.div>
                        </div>

                        <div className="p-3 bg-white border-t border-gray-100 text-center">
                            <p className="text-[10px] text-gray-300 font-mono uppercase tracking-[0.2em]">
                                High Fidelity Architecture Logic // Alex Build's Tech Skunkworks
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
