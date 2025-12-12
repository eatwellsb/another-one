import { Link, useLocation } from "wouter";
import { Coffee, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Menu", path: "/menu" },
    { label: "Book Now", path: "/book" },
    { label: "Analytics", path: "/analytics" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Coffee className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-heading text-2xl font-bold tracking-wider uppercase">
              Brew<span className="text-primary">Forge</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "font-mono text-sm uppercase tracking-widest hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:bg-primary after:transition-all after:duration-300",
                  location === item.path
                    ? "text-primary after:w-full"
                    : "text-muted-foreground after:w-0 hover:after:w-full"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/book">
              <Button className="btn-industrial ml-4">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors active:scale-95 duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>

        {/* Mobile Navigation Component */}
        <MobileNav 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
          navItems={navItems}
        />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl font-bold uppercase">BrewForge</span>
            </div>
            <p className="text-muted-foreground max-w-md font-mono text-sm leading-relaxed">
              Crafting exceptional coffee experiences for events, corporate gatherings, and private functions. We bring the roastery to you.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-bold uppercase mb-4 text-primary">Contact</h4>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li>hello@brewforge.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Roastery Lane, Coffee City</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-bold uppercase mb-4 text-primary">Social</h4>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-primary cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Twitter</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/50 text-center text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} BrewForge Catering. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
