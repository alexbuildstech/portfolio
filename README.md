# Alex's Portfolio

A highly interactive, Cyberpunk/Matrix-themed personal portfolio website built with React, Three.js (via Spline), and Tailwind CSS. It features a responsive layout, a custom 3D robot interaction, and a detailed timeline of robotics and AI projects.

## 🚀 Live Demo
https://alexbuildstech.github.io/portfolio/

## 🛠️ Tech Stack

-   **Frontend**: React, TypeScript, Vite
-   **Styling**: Tailwind CSS, shadcn/ui
-   **3D/Animation**: Spline (React Spline), Framer Motion, Three.js (Custom Shaders)
-   **Routing**: React Router DOM (HashRouter)
-   **Testing**: Vitest, React Testing Library, happy-dom

## 🧩 Challenges & Solutions

During the development of this portfolio, we encountered and solved several technical challenges:

### 1. **Testing Environment (`ERR_REQUIRE_ESM`)**
-   **Problem**: The `jsdom` environment in Vitest struggled with ESM modules, specifically causing `ERR_REQUIRE_ESM` errors when processing certain dependencies like `html-encoding-sniffer` and `@splinetool/react-spline`.
-   **Solution**: Migrated the test environment to `happy-dom`. This lightweight DOM implementation handled the ESM interop much better. We also mocked heavy visual components (`Spline`, `MatrixRain`) in `setup.ts` to avoid WebGL errors in the headless test environment.

### 2. **Mobile Interaction (No Cursor)**
-   **Problem**: The 3D robot was designed to "look at" the mouse cursor. On mobile devices, there is no persistent cursor, making the robot static and unresponsive.
-   **Solution**: Implemented `onTouchMove` and `onTouchStart` event handlers in a wrapper `div`. These handlers capture touch coordinates and dispatch valid `mousemove` events to the underlying Spline canvas, allowing users to "drag" anywhere on the screen to control the robot's gaze.

### 3. **GitHub Pages Deployment**
-   **Problem 1 (Routing)**: Single Page Applications (SPAs) using `BrowserRouter` (History API) return 404 errors when visiting sub-paths (e.g., `/contact`) directly on static hosts like GitHub Pages.
-   **Problem 2 (Assets)**: If the repository is not at the root domain, asset paths (`/assets/...`) break.
-   **Solution**: 
    -   Switched to `HashRouter`, which uses the URL hash (`/#/contact`) to manage routing on the client side, bypassing server-side routing issues.
    -   Updated `vite.config.ts` with `base: "./"`, ensuring all asset requests are relative to the `index.html` location.

### 4. **Isometric Wave Grid Background (Digital Reality)**
-   **Problem**: The previous background implementations lacked the raw "Maker" energy and interaction depth required for a high-end robotics portfolio.
-   **Solution**: Integrated a high-performance Canvas-based Isometric Wave Grid background. This component simulates the "Fabric of Digital Reality" with mouse-repulsion physics and ambient wave motion. It provides a structured, lab-like depth that complements the Spline robot model.
-   **Iteration v1.3**: Boosted grid visibility to 0.4 opacity with `screen` blend mode, ensuring the interaction is legible on all monitors while maintaining a "subconscious" feel.

## 🤖 AI Usage & Implementation Notes

This project extensively utilizes **Antigravity AI (Coder AI v3)** for architectural decisions and code generation:
-   **Physics Simulation**: The `IsoLevelWarp` component's repulsion logic and Z-push effects were mathematically modeled with AI assistance to ensure smooth performance.
-   **Aesthetic Alignment**: AI was used to coordinate typography adjustments with background changes, ensuring a cohesive "Skunkworks" visual language.
-   **Constraints**: All code follows a mobile-first philosophy with desktop refinement, ensuring readiness over pure novelty.

## 📦 Navigation

-   **Home**: Introduction and animated 3D/Matrix landing.
-   **About**: Timeline of projects (Nova Humanoid, Assistive Tech) with awards and links.

## 🏃‍♂️ Running Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Run tests:
    ```bash
    npm test
    ```
