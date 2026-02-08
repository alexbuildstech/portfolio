# Alex's Portfolio

A highly interactive, Cyberpunk/Matrix-themed personal portfolio website built with React, Three.js (via Spline), and Tailwind CSS. It features a responsive layout, a custom 3D robot interaction, and a detailed timeline of robotics and AI projects.

## 🎨 Design Evolution

This portfolio went through several design iterations before arriving at its current form:

1. **V1 — Futuristic Acrylic**: Started with a sci-fi aesthetic featuring acrylic-style panels and holographic effects. It looked cool, but felt generic and overused.

2. **V2 — Glassmorphism + Rounded Corners**: Pivoted to a softer approach with frosted-glass cards and rounded UI elements. This improved readability but ended up looking too "template-y" and lacked personality.

3. **V3 — Refined Minimalism (Current)**: Stripped back the visual noise. The new direction uses a minimalist foundation with intentional color pops—keeping the interface clean while still feeling bold and expressive. The result: a design that breathes, stands out, and doesn't scream "AI-generated portfolio."

## 🚀 Live Demo
https://alexbuildstech.github.io/portfolio/

## 🛠️ Tech Stack

-   **Frontend**: React, TypeScript, Vite
-   **Styling**: Tailwind CSS, shadcn/ui
-   **3D/Animation**: Spline (React Spline), Framer Motion
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

## 📦 Navigation

-   **Home**: Introduction and animated 3D/Matrix landing.
-   **About**: Timeline of projects (Nova Humanoid, Assistive Tech) with awards and links.
-   **Contact**: Minimalist contact information.

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
