import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = ['/', '/about', '/contact'];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 pointer-events-auto bg-background/95 backdrop-blur-md border-b-4 border-foreground">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-24 h-16 md:h-24 flex items-center justify-between">
                <Link to="/" className="text-lg md:text-2xl font-[900] tracking-tighter hover:text-accent transition-colors font-mono">
                    ALEX PAUL <span className="text-accent text-[10px] md:text-xs tracking-normal">V2.0</span>
                </Link>
                
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((path) => {
                        const label = path === '/' ? 'PROJECTS' : path.substring(1).toUpperCase();
                        const active = isActive(path);

                        return (
                            <Link
                                key={path}
                                to={path}
                                className={cn(
                                    "text-xs font-black tracking-[0.25em] transition-all duration-300 relative py-2",
                                    active ? "text-accent" : "text-foreground/40 hover:text-foreground"
                                )}
                            >
                                {label}
                                {active && (
                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-accent" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Hamburger */}
                <button 
                    className="md:hidden p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-background border-t-2 border-foreground">
                    {navLinks.map((path) => {
                        const label = path === '/' ? 'PROJECTS' : path.substring(1).toUpperCase();
                        const active = isActive(path);

                        return (
                            <Link
                                key={path}
                                to={path}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "block px-6 py-4 text-sm font-black tracking-[0.2em] border-b border-foreground/10",
                                    active ? "text-accent bg-accent/5" : "text-foreground/60"
                                )}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
