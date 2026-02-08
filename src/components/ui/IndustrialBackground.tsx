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

        const gridSize = 100;
        let offset = 0;

        const animate = () => {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);

            // Subtle base grid
            ctx.strokeStyle = '#f0f0f0';
            ctx.lineWidth = 1;

            for (let x = offset % gridSize; x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = (offset * 0.5) % gridSize; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Technical details (Coordinates)
            ctx.fillStyle = '#cccccc';
            ctx.font = '10px JetBrains Mono';
            for (let x = offset % (gridSize * 4); x < width; x += gridSize * 4) {
                for (let y = 0; y < height; y += gridSize * 4) {
                    ctx.fillText(`${Math.floor(x)},${Math.floor(y)}`, x + 5, y + 12);
                }
            }

            // Moving accent line
            const scanY = (offset * 3) % height;
            ctx.strokeStyle = '#0055ff15';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, scanY);
            ctx.lineTo(width, scanY);
            ctx.stroke();

            offset += 0.2;
            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas 
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};

export default IndustrialBackground;
