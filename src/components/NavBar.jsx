import { cn } from "@/lib/util";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]
export const NavBar = () => {
    const [isScrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        //create handleScroll function if any scroll happens then the function is going to be called.
        const handleScroll = () => {
            setScrolled(window.screenY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        //then return in order to clean tis up sp we dont have memory leaks
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300 dark:bg-black",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
            <div className="container flex items-center justify-between ">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero" >
                    <span className="relative z-10">
                        {""}
                        <span className="text-glow text-blue-400">Sornya Wells</span> Portfolio
                    </span>
                </a>
                {/* Desktop version horizontal*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key)=>(
                        <a key={key} href={item.href} className="text-blue-400 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
                {/**Menu Button */}
                <button onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-blue-400 z-50"
                    aria-label = {isMenuOpen ? "Close Menu" : " Open Menu"}
                >
                    {" "}
                    { isMenuOpen ? < X size={24}/> : < Menu size={24} />}
                </button>
                
                
                {/**Mobile version vertical*/}
                <div className={cn("fixed inset-0 bg-background/95 background-blur-md z-40 flex flex-col items-center justify-center", "transition-all duration-300 md:hidden",
                 isMenuOpen ? "opacity-100 pointer-events-auto" :"opacity-0 pointer-events-none"   
                 )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key)=>(
                        <a key={key} href={item.href} className="text-blue-400 hover:text-primary transition-colors duration-300" onClick={() => 
                            setIsMenuOpen(false)
                        }>
                            {item.name}
                        </a>
                    ))}
                    </div>
                    </div>
        </div>
        </nav>
    )
}