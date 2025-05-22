import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="py-6 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between dark:bg-black">
            {" "}
            <p className="text-blue-400 text-sm text-muted-foreground"> <span className="text-primary">&copy;</span>
                {new Date().getFullYear()} Sornya
            </p>
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors ">
             <ArrowUp size={20} />
            </a>
    </footer>)
}