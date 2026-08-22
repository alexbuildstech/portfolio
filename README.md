# Alex's Portfolio

Personal portfolio site for a robotics/AI engineer. Brutalist industrial theme: heavy borders, monochrome type, Matrix-rain and scanline effects, scroll-driven animation.

Live: https://alexbuildstech.github.io/portfolio/

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animation**: Framer Motion (scroll-linked hero, route transitions), GSAP (in the robot component)
- **Routing**: React Router DOM with `HashRouter`
- **Testing**: Vitest, React Testing Library, happy-dom

Note: the Spline 3D robot component (`src/components/ui/Robot3D.tsx`) is in the codebase but is currently not mounted anywhere in the page tree — the current landing page is Framer Motion only.

## Engineering Notes

### Test environment (`ERR_REQUIRE_ESM`)

The `jsdom` environment in Vitest hit `ERR_REQUIRE_ESM` errors on ESM-only dependencies (`html-encoding-sniffer`, `@splinetool/react-spline`). Migrated to `happy-dom`, which handles the ESM interop. Heavy visual components (`Spline`, `MatrixRain`) are mocked in `src/test/setup.ts` to avoid WebGL requirements in headless runs.

### GitHub Pages deployment

Two problems with SPAs on static hosts, two fixes:

1. **Routing**: `BrowserRouter` 404s on direct visits to sub-paths like `/contact`. Switched to `HashRouter` (`/#/contact`), which needs no server-side routing support.
2. **Assets**: the site lives in a project subpath, so absolute `/assets/...` URLs break. `vite.config.ts` uses `base: "./"` so all asset requests resolve relative to `index.html`.

Deploy runs via `npm run deploy` (`predeploy` builds, then `gh-pages -d dist`).

## Pages

- **Home**: animated landing (scroll-linked typography, Matrix rain background)
- **About**: project timeline (Nova humanoid, assistive tech) with technical diagrams
- **Contact**: email + GitHub links

## Running Locally

```bash
git clone git@github.com:alexbuildstech/portfolio.git
cd portfolio
npm install
npm run dev      # dev server
npm test         # vitest suite
npm run build    # production build
npm run lint     # eslint
```
