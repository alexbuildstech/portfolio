import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        card: '#ffffff',
        'card-foreground': '#000000',
        muted: '#f0f0f0',
        'muted-foreground': '#444444',
        border: '#000000',
        accent: '#0055ff', 
        'accent-foreground': '#ffffff',
      },
      fontSize: {
        'hero': ['12vw', { lineHeight: '0.8', fontWeight: '900' }],
      }
    },
  },
} satisfies Config;
