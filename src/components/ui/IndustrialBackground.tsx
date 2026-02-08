import React, { useEffect, useRef } from "react";

const IndustrialBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        const gridSize = 80;
        let offset = 0;

        const animate = () => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);

            ctx.strokeStyle = '#222';
            ctx.lineWidth = 1;

            // Vertical lines
            for (let x = offset % gridSize; x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = 0; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Moving scanline
            const scanY = (offset * 0.5) % height;
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, scanY);
            ctx.lineTo(width, scanY);
            ctx.stroke();

            offset += 0.3;

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas 
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-20"
        />
    );
};

export default IndustrialBackground;
