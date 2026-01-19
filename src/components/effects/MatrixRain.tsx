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

        resize()
        window.addEventListener("resize", resize)

        // Matrix settings
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?".split("")
        let columns = Math.floor(canvas.width / fontSize)
        const drops: number[] = []

        // One drop per column, random start position
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100
        }

        const draw = () => {
            if (!isVisibleRef.current) {
                animationFrameRef.current = requestAnimationFrame(draw)
                return
            }

            // Translucent black background to create trail effect
            ctx.fillStyle = `rgba(0, 0, 0, 0.08)`
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.fillStyle = color
            ctx.font = `${fontSize}px monospace`
            ctx.textAlign = "center"

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)]

                // Add some glow/flicker effect
                if (Math.random() > 0.95) {
                    ctx.fillStyle = "#FFFFFF"
                } else {
                    ctx.fillStyle = color
                }

                ctx.fillText(text, i * fontSize + fontSize / 2, drops[i] * fontSize)

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }

                drops[i] += speed / 10
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
