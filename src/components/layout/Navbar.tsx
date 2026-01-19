import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-matrix-glow/30 shadow-[0_0_20px_rgba(0,255,0,0.1)] transition-all duration-300 hover:border-matrix-glow/60 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)]">
            <ul className="flex items-center space-x-8 sm:space-x-12">
                <li>
                    <Link
                        to="/"
                        className="text-matrix-dim hover:text-matrix-glow font-mono text-sm uppercase tracking-widest transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] relative group"
                    >
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-matrix-glow transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="text-matrix-dim hover:text-matrix-glow font-mono text-sm uppercase tracking-widest transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] relative group"
                    >
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-matrix-glow transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="text-matrix-dim hover:text-matrix-glow font-mono text-sm uppercase tracking-widest transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] relative group"
                    >
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-matrix-glow transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
