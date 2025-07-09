import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Star } from "lucide-react";

export function ToggleDayNight({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  // Parâmetros para animação
  const TRACK_WIDTH = 56;
  const BALL_SIZE = 32;
  const PADDING = 4;

  const maxX = TRACK_WIDTH - BALL_SIZE - PADDING * 2;

  const duration = 0.7;
  const spring = { type: "spring", stiffness: 400, damping: 32 };
  // Posições do botão circular
  const ballX = isDark ? 28 : 0;

  return (
    <button
      type="button"
      aria-label="Alternar modo claro/escuro"
      className="relative rounded-full flex items-center"
      style={{
        width: TRACK_WIDTH,
        height: 40,
        padding: `0 ${PADDING}px`,
        background: isDark
          ? "linear-gradient(90deg, #232946 0%, rgb(2, 0, 8) 100%)"
          : "linear-gradient(90deg, #fffbe4 0%, #ffe8a3 100%)",
        boxShadow: "inset 0 1px 6px #0002",
        border: "2px solid",
        borderColor: isDark ? "90deg,rgb(251, 254, 255)" : "#c4b5fd",
        overflow: "visible",
        transition: "background 0.4s",
      }}
      onClick={onToggle}
    >
      {/* Fundo animado do botão */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full rounded-full z-0 pointer-events-none"
        initial={false}
        animate={{
          background: isDark
            ? "linear-gradient(90deg,hsl(0, 0.00%, 5.90%) 0%,rgb(17, 16, 17) 100%)"
            : "linear-gradient(90deg,rgb(19, 16, 24) 0%,rgb(8, 8, 8) 100%)",
        }}
        transition={{ duration: 0.7 }}
      />
      {/* Estrelas animadas (modo noite) */}
      <AnimatePresence>
        {isDark && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -6, x: 16 }}
              animate={{ opacity: 0, scale: 1, y: -6, x: 16 }}
              exit={{ opacity: 0, scale: 0.2, y: -6, x: 16 }}
              transition={{ duration, delay: 0.15 }}
              className="absolute left-4 top-1 z-10"
            >
              <Star size={7} className="text-yellow-100 drop-shadow" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 4, x: 34 }}
              animate={{ opacity: 0, scale: 1, y: 4, x: 34 }}
              exit={{ opacity: 0, scale: 0.1, y: 4, x: 34 }}
              transition={{ duration, delay: 0.3 }}
              className="absolute left-4 top-1 z-10"
            >
              <Star size={5} className="text-yellow-50 drop-shadow" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.3, y: -2, x: 24 }}
              animate={{ opacity: 1, scale: 1, y: -2, x: 24 }}
              exit={{ opacity: 0, scale: 0.05, y: -2, x: 24 }}
              transition={{ duration, delay: 0.45 }}
              className="absolute left-4 top-1 z-10"
            >
              <Star size={4} className="text-yellow-100 drop-shadow" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Botão circular animado */}
      <motion.div
        className="relative z-20"
        style={{
          width: BALL_SIZE,
          height: BALL_SIZE,
          borderRadius: 9999,
          boxShadow: "0 2px 8px #0002",
          background: isDark
            ? "radial-gradient(circle at 60% 40%,rgb(19, 17, 18) 80%,rgb(214, 192, 192) 100%)"
            : "radial-gradient(circle at 60% 40%,rgb(15, 15, 15) 70%,rgb(240, 238, 231) 100%)",
        }}
        animate={{ x: isDark ? maxX : 0 }}
        transition={spring}
      >
        {/* Troca suave entre Sun e Moon */}
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -120, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 120, scale: 0.4, opacity: 0 }}
              transition={{ ...spring, duration: 0.7 }}
              className="w-full h-full flex items-center justify-center"
            >
              <Moon className="text-indigo-400 dark:text-zinc-100 w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 120, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -120, scale: 0.4, opacity: 0 }}
              transition={{ ...spring, duration: 0.7 }}
              className="w-full h-full flex items-center justify-center"
            >
              <Sun className="text-yellow-500 w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
