import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRobotStore } from "@/hooks/useRobotStore";
import IndustrialBackground from "@/components/ui/IndustrialBackground";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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

const App = () => {
  const { setIsRobotLoaded } = useRobotStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRobotLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, [setIsRobotLoaded]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Background Layer: Industrial Grid */}
        <IndustrialBackground />

        {/* Foreground Layer: UI Content */}
        <div id="app-wrapper" className="pointer-events-none relative z-10">
          <Toaster />
          <HashRouter>
            <div className="pointer-events-auto min-h-screen relative">
              <AnimatedRoutes />
            </div>
          </HashRouter>
        </div>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
