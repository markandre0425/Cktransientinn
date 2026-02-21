import { X, Facebook, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CKBookingModalProps {
  open: boolean;
  onClose: () => void;
}

const channels = [
  {
    icon: Facebook,
    label: "Facebook Page",
    sublabel: "CK Transient Inn",
    desc: "View our page, see photos & send a message.",
    href: "https://www.facebook.com/profile.php?id=100088856989818",
    bg: "bg-blue-600",
    hover: "hover:bg-blue-500",
  },
  {
    icon: MessageCircle,
    label: "Facebook Messenger",
    sublabel: "Message us directly",
    desc: "Chat with your host CK — fastest response.",
    href: "https://m.me/100088856989818",
    bg: "bg-gradient-to-br from-purple-600 to-blue-500",
    hover: "hover:opacity-90",
  },
  {
    icon: Phone,
    label: "Call / Viber / WhatsApp",
    sublabel: "0977 775 3547",
    desc: "For urgent inquiries or same-day bookings.",
    href: "tel:+639777753547",
    bg: "bg-green-700",
    hover: "hover:bg-green-600",
  },
];

export function CKBookingModal({ open, onClose }: CKBookingModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-[#020617] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 w-full max-w-md pointer-events-auto overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/10 border-b border-white/8 px-6 py-5 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center">
                    <span className="text-indigo-400 text-xs" style={{ fontWeight: 700 }}>CK</span>
                  </div>
                  <h2 className="text-white text-lg tracking-tight" style={{ fontWeight: 700 }}>
                    Book Your Stay
                  </h2>
                </div>
                <p className="text-white/40 text-xs">
                  CK Transient Inn · The Courtyards, Leonilla Hill, Baguio City
                </p>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  Reach out through any channel below. Please include your preferred dates, number of guests, and any questions.
                </p>

                <div className="space-y-2.5">
                  {channels.map(({ icon: Icon, label, sublabel, desc, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl p-4 text-white transition-all bg-[#0f1a2e] border border-white/8 hover:border-indigo-500/40 hover:bg-[#131f38] group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-indigo-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white" style={{ fontWeight: 600 }}>{label}</p>
                        <p className="text-white/60 text-xs">{sublabel}</p>
                        <p className="text-white/40 text-xs mt-0.5 hidden sm:block">{desc}</p>
                      </div>
                      <svg
                        className="w-4 h-4 text-indigo-400/40 group-hover:text-indigo-400 transition-colors shrink-0"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-center gap-2 text-white/30 text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Typical response time: within 1 hour
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}