import { Link, useLocation } from "wouter";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ label: string; path: string }>;
}

export default function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  const [location] = useLocation();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-20 left-0 right-0 bg-background border-b border-white/10 z-40 md:hidden transition-all duration-300 ease-out overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 space-y-1">
          {navItems.map((item, index) => (
            <Link key={item.path} href={item.path}>
              <a
                className={cn(
                  "font-heading text-lg uppercase tracking-wide py-3 px-4 border-l-4 transition-all duration-300 block",
                  location === item.path
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground hover:bg-muted/5"
                )}
                onClick={onClose}
                style={{
                  animation: isOpen ? `slideInLeft 0.3s ease-out ${index * 0.05}s both` : "none",
                }}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-20px);
          }
        }
      `}</style>
    </>
  );
}
