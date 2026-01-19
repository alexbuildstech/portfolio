import React, { useEffect, useRef } from "react"

class TextScrambleEngine {
    private el: HTMLElement
    private chars: string
    private queue: Array<{
        from: string
        to: string
        start: number
        end: number
        char?: string
    }>
    private frame: number
    private frameRequest: number
    private resolve: (value: void | PromiseLike<void>) => void

    constructor(el: HTMLElement) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#'
        this.queue = []
        this.frame = 0
        this.frameRequest = 0
        this.resolve = () => { }
        this.update = this.update.bind(this)
    }

    setText(newText: string): Promise<void> {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise<void>((resolve) => this.resolve = resolve)
        this.queue = []

        // speed optimization: further reduced random ranges for faster transitions and better readability
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 5) // Was 10
            const end = start + Math.floor(Math.random() * 10) // Keep end slightly longer for overlap
            this.queue.push({ from, to, start, end })
        }

        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }

    private update(): void {
        let output = ''
        let complete = 0

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.chars[Math.floor(Math.random() * this.chars.length)]
                    this.queue[i].char = char
                }
                output += `<span class="scramble-dud">${char}</span>`
            } else {
                output += from
            }
        }

        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }

    destroy(): void {
        cancelAnimationFrame(this.frameRequest)
    }
}

interface ScrambledTitleProps {
    phrases: string[]
    phraseDuration: number
    className?: string
    ariaLabel?: string
}

export const ScrambledTitle: React.FC<ScrambledTitleProps> = React.memo(({ phrases, phraseDuration, className = "", ariaLabel }) => {
    const elementRef = useRef<HTMLHeadingElement>(null)
    const scramblerRef = useRef<TextScrambleEngine | null>(null)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const counterRef = useRef(0)

    useEffect(() => {
        if (!elementRef.current) return

        scramblerRef.current = new TextScrambleEngine(elementRef.current)

        const next = () => {
            if (scramblerRef.current) {
                scramblerRef.current.setText(phrases[counterRef.current]).then(() => {
                    timeoutRef.current = setTimeout(next, phraseDuration)
                })
                counterRef.current = (counterRef.current + 1) % phrases.length
            }
        }

        next()

        return () => {
            scramblerRef.current?.destroy()
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [phrases, phraseDuration])

    return (
        <h1
            ref={elementRef}
            className={className}
            aria-label={ariaLabel || phrases[0]}
        >
            {phrases[0]}
        </h1>
    )
})

ScrambledTitle.displayName = 'ScrambledTitle'
