import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  User,
  Image,
  Phone,
  Home,
  Info,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "3587057922"; // Replace with your WhatsApp number in international format
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
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden bg-black/50 backdrop-blur-md border border-purple-400/30 rounded-xl p-3 hover:bg-purple-500/20 transition-all duration-300"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-purple-400" />
        ) : (
          <Menu className="h-6 w-6 text-purple-400" />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-8 right-8 z-40 bg-black/30 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-2">
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
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-black via-purple-950/50 to-black backdrop-blur-xl border-l border-purple-400/30 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
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

            <div className="mt-auto mb-8">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white border-0 rounded-xl py-4 px-6 transition-all duration-300 font-medium"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
