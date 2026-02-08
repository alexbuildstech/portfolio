import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-8 px-8 py-3 bg-black border border-white/10 tech-box">
                <Link to="/" className="group relative">
                    <span className="text-white font-mono text-[10px] uppercase tracking-[0.4em] group-hover:text-primary transition-colors">
                        Home
                    </span>
                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-200" />
                </Link>

                <button onClick={() => handleScroll('about')} className="group relative">
                    <span className="text-white font-mono text-[10px] uppercase tracking-[0.4em] group-hover:text-primary transition-colors">
                        About
                    </span>
                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-200" />
                </button>

                <Link to="/contact" className="group relative">
                    <span className="text-white font-mono text-[10px] uppercase tracking-[0.4em] group-hover:text-primary transition-colors">
                        Contact
                    </span>
                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-200" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
