
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de agendar uma sessão de tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with cyberpunk effect */}
      <div className="absolute inset-0 cyber-gradient"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo placeholder - será substituída pela imagem fornecida */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold neon-text mb-4">
            MARI
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-primary mb-2">
            TATTOO ARTE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Transformando pele em arte através da tinta e da criatividade.<br />
          <span className="text-primary">Seu próximo tattoo começa aqui.</span>
        </p>

        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="neon-border bg-transparent hover:bg-primary/20 text-primary hover:text-white transition-all duration-300 text-lg px-8 py-6"
        >
          <MessageCircle className="mr-2 h-6 w-6" />
          Agendar pelo WhatsApp
        </Button>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
