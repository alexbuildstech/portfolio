import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 pointer-events-auto bg-background/95 backdrop-blur-md border-b-4 border-foreground">
            <div className="max-w-7xl mx-auto px-6 lg:px-24 h-24 flex items-center justify-between">
                <Link to="/" className="text-2xl font-[900] tracking-tighter hover:text-accent transition-colors font-mono">
                    ALEX PAUL <span className="text-accent text-xs tracking-normal">V2.0</span>
                </Link>
                
                <div className="flex items-center gap-12">
                    {['/', '/about', '/contact'].map((path) => {
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
            </div>
        </nav>
    );
};

export default Navbar;
