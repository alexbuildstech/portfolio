import React, { useEffect, useRef } from "react"

interface MatrixRainProps {
    fontSize?: number
    speed?: number
    color?: string
    opacity?: number
    className?: string
}

const MatrixRain: React.FC<MatrixRainProps> = ({
    fontSize = 18,
    speed = 2,
    color = "#00FF00",
    opacity = 0.35,
    className = ""
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const animationFrameRef = useRef<number>(0)
    const isVisibleRef = useRef<boolean>(true)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const resize = () => {
            const rect = container.getBoundingClientRect()
            canvas.width = rect.width
            canvas.height = rect.height
        }

        const resizeCanvas = () => {
            canvas.width = container.offsetWidth
            canvas.height = container.offsetHeight
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Gold Particle settings
        // Using the component's fontSize for particle spacing, but particles themselves are small circles
        const particleSpacing = fontSize; // Use fontSize prop for column spacing
        let columns = Math.ceil(canvas.width / particleSpacing);
        const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -100);


        const draw = () => {
            if (!isVisibleRef.current) {
                animationFrameRef.current = requestAnimationFrame(draw)
                return
            }

            // Fade effect for trails - deeper and slower
            ctx.fillStyle = "rgba(10, 10, 10, 0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {
                // Determine particle properties
                const x = i * particleSpacing;
                const y = drops[i] * particleSpacing;

                // Pure particle drawing logic (no characters)
                const size = Math.random() * 2;
                const opacityMod = Math.random() * 0.5 + 0.5;

                // Variation in colors (Ivory, Gold, Muted)
                const rand = Math.random();
                if (rand > 0.9) {
                    ctx.fillStyle = `rgba(197, 160, 89, ${opacity * opacityMod})`; // Gold
                } else if (rand > 0.8) {
                    ctx.fillStyle = `rgba(240, 240, 235, ${opacity * opacityMod * 0.5})`; // Soft Ivory
                } else {
                    ctx.fillStyle = `rgba(68, 68, 68, ${opacity * opacityMod * 0.3})`; // Muted
                }

                // Draw delicate circle instead of character
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();

                // Increment position - extremely slow
                drops[i] += speed / 120;

                // Reset drop to top with randomness
                if (y > canvas.height && Math.random() > 0.985) {
                    drops[i] = 0;
                }
            }

            animationFrameRef.current = requestAnimationFrame(draw)
        }

        // Observer to stop animation when not visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisibleRef.current = entry.isIntersecting
            },
            { threshold: 0 }
        )

        observer.observe(container)
        draw()

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrameRef.current)
            observer.disconnect()
        }
    }, [fontSize, speed, color])

    return (
        <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none bg-black ${className}`}>
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
                style={{ opacity }}
            />
        </div>
    )
}

export default MatrixRain
