import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function AnimatedCTAButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="relative w-full flex items-center justify-center rounded-xl overflow-hidden group py-4 px-6"
      style={{
        background: "linear-gradient(90deg, #b16cea 0%, #ff5e69 100%)",
        boxShadow: "0 2px 24px #b16cea60",
        border: "none",
      }}
      initial={false}
      whileHover="hover"
      whileTap="tap"
    >
      {/* Glow/Ripple Effect */}
      <motion.span
        className="absolute inset-0 rounded-xl pointer-events-none"
        variants={{
          hover: {
            background: "linear-gradient(90deg, #ffb6b9 0%, #fae3d9 100%)",
            opacity: 0.15,
            scale: 1.04,
          },
          tap: { opacity: 0.12, scale: 0.96 },
          initial: { opacity: 0, scale: 1 },
        }}
        initial="initial"
        animate="initial"
        transition={{ duration: 0.3 }}
      />
      {/* Animated Icon */}
      <motion.span
        className="relative z-10 flex items-center"
        variants={{
          hover: { x: -8, scale: 1.12 },
          tap: { scale: 0.98 },
          initial: { x: 0, scale: 1 },
        }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
      >
        <MessageCircle className="w-5 h-5 text-white drop-shadow" />
      </motion.span>
      {/* Animated Text */}
      <motion.span
        className="relative z-10 ml-3 font-semibold text-white text-base"
        variants={{
          hover: { letterSpacing: "0.09em" },
          tap: { scale: 0.97 },
          initial: { letterSpacing: "0em", scale: 1 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 16 }}
      >
        WhatsApp
      </motion.span>
      {/* Highlight underline */}
      <motion.span
        className="absolute left-1/2 bottom-2 w-1/2 h-1 rounded-full bg-white opacity-30 pointer-events-none"
        style={{ transform: "translateX(-50%)" }}
        variants={{
          hover: { opacity: 0.7, scaleX: 1.1 },
          tap: { opacity: 0.4, scaleX: 0.96 },
          initial: { opacity: 0.3, scaleX: 1 },
        }}
        initial="initial"
        animate="initial"
        transition={{ duration: 0.26 }}
      />
    </motion.button>
  );
}
