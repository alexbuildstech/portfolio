import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar: React.FC = () => {
    const location = useLocation();
    const { theme, setTheme } = useTheme();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex items-center gap-4">
            <div className="glass-panel rounded-full px-8 py-4 flex items-center gap-8 transition-all duration-500 hover:shadow-lg h-12">
                {['/', '/about', '/contact'].map((path) => {
                    const label = path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2);
                    const active = isActive(path);

                    return (
                        <Link
                            key={path}
                            to={path}
                            className={cn(
                                "text-sm font-medium tracking-wide transition-colors duration-300 relative h-full flex items-center",
                                active ? "text-foreground" : "text-gray-500 hover:text-foreground"
                            )}
                        >
                            {label}
                            {active && (
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full mb-[-6px]" />
                            )}
                        </Link>
                    );
                })}
            </div>

        </nav>
    );
};

export default Navbar;
