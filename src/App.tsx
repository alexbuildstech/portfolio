import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRobotStore } from "@/hooks/useRobotStore";
import Robot3D from "@/components/ui/Robot3D";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const GlobalMouseTracker = () => {
  const { setMousePosition } = useRobotStore();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [setMousePosition]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const { setCameraState } = useRobotStore();

  useEffect(() => {
    switch (location.pathname) {
      case '/about':
        setCameraState('about');
        break;
      case '/contact':
        setCameraState('contact');
        break;
      default:
        setCameraState('home');
        break;
    }
  }, [location, setCameraState]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GlobalMouseTracker />

      {/* BACKGROUND LAYER: Robot Only */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-background flex justify-end overflow-hidden">
        <div className="h-full w-full lg:w-3/4 absolute right-0 opacity-40 lg:opacity-100">
          <Robot3D className="h-full w-full" />
        </div>
      </div>

      {/* FOREGROUND LAYER: UI Content */}
      <div id="app-wrapper" className="pointer-events-none">
        <Toaster />
        <HashRouter>
          <div className="pointer-events-auto min-h-screen">
            <AnimatedRoutes />
          </div>
        </HashRouter>
      </div>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
