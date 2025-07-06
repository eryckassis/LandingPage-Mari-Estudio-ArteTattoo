
import { useState } from 'react';
import { Menu, X, MessageCircle, User, Image, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de agendar uma sessão de tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg p-2"
      >
        {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-4">
        <button
          onClick={() => scrollToSection('home')}
          className="group flex items-center space-x-3 text-right"
        >
          <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            Home
          </span>
          <div className="w-3 h-3 bg-primary/30 group-hover:bg-primary rounded-full transition-colors"></div>
        </button>
        
        <button
          onClick={() => scrollToSection('about')}
          className="group flex items-center space-x-3 text-right"
        >
          <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            About
          </span>
          <div className="w-3 h-3 bg-primary/30 group-hover:bg-primary rounded-full transition-colors"></div>
        </button>

        <button
          onClick={() => scrollToSection('portfolio')}
          className="group flex items-center space-x-3 text-right"
        >
          <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            Portfolio
          </span>
          <div className="w-3 h-3 bg-primary/30 group-hover:bg-primary rounded-full transition-colors"></div>
        </button>

        <button
          onClick={() => scrollToSection('contact')}
          className="group flex items-center space-x-3 text-right"
        >
          <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            Contact
          </span>
          <div className="w-3 h-3 bg-primary/30 group-hover:bg-primary rounded-full transition-colors"></div>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div className={`absolute right-0 top-0 h-full w-80 bg-black/90 backdrop-blur-xl border-l border-primary/30 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-20 px-8">
            <div className="space-y-8">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-4 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <User className="h-5 w-5" />
                <span>Home</span>
              </button>
              
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-4 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <User className="h-5 w-5" />
                <span>About</span>
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="flex items-center space-x-4 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Image className="h-5 w-5" />
                <span>Portfolio</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-4 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Contact</span>
              </button>
            </div>

            <div className="mt-auto mb-8">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-2 bg-primary/20 hover:bg-primary text-primary hover:text-black border border-primary rounded-lg py-3 px-6 transition-all duration-300"
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
