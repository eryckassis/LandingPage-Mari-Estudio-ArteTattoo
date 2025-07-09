import { motion } from "framer-motion";

export function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      aria-label="Abrir menu"
      onClick={onClick}
      className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 transition-colors"
      style={{
        background: "transparent",
        border: "none",
        boxShadow: "none",
        outline: "none",
      }}
    >
      {/* Hamburger lines */}

      <div className="relative w-11 h-11 flex flex-col items-center justify-center">
        <motion.span
          className="absolute left-0 top-2 w-8 h-1 rounded-full bg-purple-200"
          animate={open ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.span
          className="absolute left-0 top-5 w-8 h-1 rounded-full bg-purple-200"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute left-0 top-8 w-8 h-1 rounded-full bg-purple-200"
          animate={open ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </div>
    </button>
  );
}
