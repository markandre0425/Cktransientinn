import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

interface CKFloatingChatProps {
  onBook: () => void;
}

export function CKFloatingChat({ onBook }: CKFloatingChatProps) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      onClick={onBook}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full shadow-lg shadow-indigo-500/30 px-4 py-3 transition-colors border border-indigo-400/30"
    >
      <MessageCircle size={18} />
      <span className="text-sm hidden sm:inline font-medium">Message Host</span>
    </motion.button>
  );
}
