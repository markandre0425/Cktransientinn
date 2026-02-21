import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SparkleButton } from "./SparkleButton";
import { cn } from "./ui/utils";

interface CKNavProps {
  onBook: () => void;
}

const navLinks = [
  { label: "The Space", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Rates", href: "#rates" },
  { label: "House Rules", href: "#rules" },
];

export function CKNav({ onBook }: CKNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const target = document.querySelector("#amenities");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0, rootMargin: "0px 0px -80% 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#020617]/95 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/30"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/android-chrome-512x512.png"
              alt="CK Transient Inn"
              className="w-8 h-8 rounded-lg object-cover shrink-0"
            />
            <div>
              <p className="text-sm tracking-wide leading-none text-white" style={{ fontWeight: 600 }}>
                CK Transient Inn
              </p>
              <p className="text-xs text-white/40">Leonilla Hill, Baguio City</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <div
              className={cn(
                "transition-all duration-300 overflow-hidden",
                pastHero ? "opacity-100 max-w-xs translate-x-0" : "opacity-0 max-w-0 pointer-events-none"
              )}
            >
              <SparkleButton
                onClick={onBook}
                className="bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg text-sm px-4 font-medium whitespace-nowrap"
              >
                Book Now
              </SparkleButton>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-[#020617]/98 backdrop-blur-md border-t border-white/8 px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-white/60 hover:text-white py-2.5 text-sm border-b border-white/8 last:border-0 transition-colors"
              >
                {link.label}
              </button>
            ))}
            {pastHero && (
              <SparkleButton
                onClick={() => { setMobileOpen(false); onBook(); }}
                className="w-full bg-indigo-500 hover:bg-indigo-400 text-white mt-2 font-medium"
              >
                Book Now
              </SparkleButton>
            )}
          </div>
        )}
      </header>
    </>
  );
}