import { useState } from "react";
import { Menu, X, MessageCircle, Image, Phone, Home, Info } from "lucide-react";

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
          flex items-center justify-between
          bg-black/30 backdrop-blur-xl border-b border-purple-400/20
          min-h-[56px] px-4 md:px-8
        "
      >
        {/* LADO ESQUERDO: Botão de tema */}
        <div className="flex items-center">
          <button
            onClick={() => {
              console.log("Trocando tema");
              setDark(!dark);
            }}
            className="px-2 py-1 rounded-full"
            aria-label="Alternar modo claro/escuro"
            type="button"
          >
            <div
              className="relative w-16 h-8 rounded-full flex items-center transition-colors duration-300 border-2 border-purple-400"
              style={{
                background: "#191927",
                boxShadow: "0 2px 10px #000a",
              }}
            >
              <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                {dark ? (
                  <img
                    src="/lovable-uploads/fundo-escuro.png"
                    alt="Paisagem noturna"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="/lovable-uploads/imagem-fundo.jpg"
                    alt="Paisagem clara"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <span
                className="absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 shadow-lg"
                style={{
                  transform: dark ? "translateX(32px)" : "translateX(0px)",
                  backgroundColor: highlighColor,
                  border: `2px solid ${highlighColor}`,
                }}
              />
            </div>
          </button>
        </div>

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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-black/50 backdrop-blur-md border border-purple-400/30 rounded-xl p-3 hover:bg-purple-500/20 transition-all duration-300"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-purple-400" />
          ) : (
            <Menu className="h-6 w-6 text-purple-400" />
          )}
        </button>
      </header>

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
