import React, { useMemo } from "react"
import MatrixRain from "../effects/MatrixRain"
import { ScrambledTitle } from "../effects/TextScramble"

interface HeroSectionProps {
  phrases?: string[]
  characterCount?: number
  minSpeed?: number
  maxSpeed?: number
  flickerInterval?: number
  phraseDuration?: number
  className?: string
}

const DEFAULT_PHRASES = [
  'HELLO',
  "I'M ALEX",
  'WELCOME IN'
]

const HeroSection: React.FC<HeroSectionProps> = ({
  phrases = DEFAULT_PHRASES,
  phraseDuration = 1000,
  className = ""
}) => {
  const memoizedPhrases = useMemo(() => phrases, [phrases])

  return (
    <section className={`relative w-full h-screen bg-matrix-black overflow-hidden ${className}`}>
      {/* Raining Characters Layer */}
      <MatrixRain opacity={0.3} speed={2} />

      {/* Title Layer */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-4 w-full max-w-4xl">
        <ScrambledTitle
          phrases={memoizedPhrases}
          phraseDuration={phraseDuration}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-hero-title font-mono uppercase tracking-[0.2em] text-center"
        />
      </div>
    </section>
  )
}

export default HeroSection
