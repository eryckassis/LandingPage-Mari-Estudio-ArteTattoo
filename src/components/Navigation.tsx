import { useState } from "react";
import { HamburgerButton } from "./HamburgerButton";
import { ToggleDayNight } from "./ToggleDayNight";
import { AnimatedCTAButton } from "./AnimatedCTAButtons";
import {
  Menu,
  X,
  MessageCircle,
  Image,
  Phone,
  Home,
  Info,
  Sun,
  Moon,
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const highlighColor = "#b464ffaa";

const Navigation = ({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (d: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "3587057922";
    const message = "Olá! Gostaria de agendar uma sessão de tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Início", icon: Home },
    { id: "about", label: "Sobre Mim", icon: Info },
    { id: "portfolio", label: "Portfólio", icon: Image },
    { id: "contact", label: "Contatos", icon: Phone },
  ];

  return (
    <>
      {/* TopBar principal */}
      <header
        className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between w-full min-h-[54px] px-4 md:px-8 pr-2
        bg-black/30 dark:bg-black/60 transition-colors duration-1000 backdrop-blur-xl border-b border-purple-400/10"
      >
        {/* LADO DIREITO: navegação desktop */}
        <nav className="hidden md:flex items-center z-40">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-xl transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="ml-3 flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white rounded-xl py-2 px-4 transition-all duration-300 font-medium"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </nav>

        {/* Menu mobile hamburger */}
        <span className="flex-1" />
        <HamburgerButton open={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* BACKDROP BLUR atrás do menu */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
            />
            {/* Sidebar/menu lateral */}
            <motion.div
              className="relative w-80 h-[90vh] bg-black/40 border-l border-purple-400/30 flex flex-col overflow-hidden rounded-3xl shadow-2xl"
              initial={{ x: 100, opacity: 0, scale: 0.97 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 100, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fundo de nuvens no menu lateral, sem blur */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: "url('/lovable-uploads/nuvens.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 1,
                }}
              />
              {/* Botão circular de fechar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -right-6 top-10 bg-white dark:bg-zinc-800 shadow-lg w-10 h-10 flex items-center justify-center rounded-full border z-20"
              >
                <ChevronLeft className="text-purple-500" />
              </button>
              {/* Conteúdo do menu lateral */}
              <div className="relative z-10 flex flex-col h-full pt-20 px-6">
                <img
                  src="/lovable-uploads/ChatGPT Image Jul 7, 2025, 11_45_22 PM.png"
                  alt="Logo do Estúdio"
                  className="mx-auto mb-8 w-20 h-20 rounded-full object-cover shadow-lg"
                />
                <div className="space-y-6">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="flex items-center space-x-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 p-3 rounded-xl transition-all duration-300 w-full text-left"
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
                {/* Dark/Light mode dentro do menu, destacado */}
                <div className="mt-8 flex justify-center">
                  <ToggleDayNight
                    isDark={dark}
                    onToggle={() => setDark(!dark)}
                  />
                </div>
                <div className="mt-auto mb-8">
                  <AnimatedCTAButton onClick={handleWhatsAppClick} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
