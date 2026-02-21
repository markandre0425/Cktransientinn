import { MapPin, Facebook, Phone } from "lucide-react";
import { Button } from "./ui/button";

interface CKFooterProps {
  onBook: () => void;
}

export function CKFooter({ onBook }: CKFooterProps) {
  return (
    <footer className="bg-[#020617] border-t border-white/8 py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-3 gap-8 pb-8 border-b border-white/8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg border-2 border-indigo-500 bg-indigo-500">
                <span className="text-xs text-white" style={{ fontWeight: 700 }}>CK</span>
              </div>
              <div>
                <p className="text-white text-sm leading-none" style={{ fontWeight: 600 }}>CK Transient Inn</p>
                <p className="text-white/30 text-xs">Premium Personal Sanctuary</p>
              </div>
            </div>
            <p className="text-white/30 text-xs leading-relaxed max-w-xs">
              Where hotel-grade cleanliness meets the warmth of a private home. Your home away from home in Baguio City.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-sm mb-3" style={{ fontWeight: 600 }}>Get in Touch</p>
            <div className="space-y-2.5">
              <a
                href="https://www.facebook.com/profile.php?id=100088856989818"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors"
              >
                <Facebook size={13} />
                CK Transient Inn on Facebook
              </a>
              <a
                href="https://m.me/100088856989818"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors"
              >
                <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.26L19.752 8l-6.561 6.963z"/>
                </svg>
                Message on Messenger
              </a>
              <a
                href="tel:+639777753547"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors"
              >
                <Phone size={13} />
                0977 775 3547
              </a>
              <div className="flex items-start gap-2 text-white/40 text-xs">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                <span>The Courtyards Condominium, Leonilla Hill, Baguio City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white text-sm mb-3" style={{ fontWeight: 600 }}>Quick Links</p>
            <div className="space-y-2">
              {[
                { label: "The Space", href: "#amenities" },
                { label: "Location", href: "#location" },
                { label: "Rates", href: "#rates" },
                { label: "House Rules", href: "#rules" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-white/40 hover:text-white text-xs transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="link"
                onClick={onBook}
                className="block text-indigo-400 hover:text-indigo-300 text-xs p-0 h-auto font-semibold mt-1"
              >
                Book Now →
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © 2025 CK Transient Inn · Leonilla Hill, Baguio City
          </p>
          <Button
            onClick={onBook}
            className="bg-indigo-500 hover:bg-indigo-400 text-white text-xs px-4 font-medium"
          >
            Book Your Stay
          </Button>
        </div>
      </div>
    </footer>
  );
}