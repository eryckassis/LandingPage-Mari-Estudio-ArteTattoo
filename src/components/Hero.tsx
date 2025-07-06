
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de agendar uma sessão de tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with cyberpunk effect */}
      <div className="absolute inset-0 cyber-gradient"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-primary rounded-full animate-pulse delay-500 opacity-60"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold neon-text mb-6 leading-tight">
                ARTISTIC EXPRESSION
                <br />
                <span className="text-primary">THROUGH TATTOOS</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent mb-8 rounded-full"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
                <span className="text-lg text-muted-foreground font-medium">Mari Tattoo Arte</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
                <span className="text-lg text-muted-foreground">Rua dos Artistas, 123 - São Paulo</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Transformando ideias em arte permanente. Cada traço conta uma história, 
              cada cor expressa uma emoção. Sua jornada artística começa aqui.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="neon-border bg-primary hover:bg-primary/90 text-black font-bold px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                AGENDAR AGORA
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/60 text-primary hover:bg-primary/10 hover:border-primary px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                VER PORTFÓLIO
              </Button>
            </div>
          </div>

          {/* Right side - Logo and decorative elements */}
          <div className="relative order-1 lg:order-2">
            <div className="relative flex items-center justify-center">
              {/* Main logo container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden neon-border shadow-2xl shadow-primary/30">
                <img 
                  src="/lovable-uploads/d640e18a-ca98-4828-8196-32cd4a05dc55.png" 
                  alt="Mari Tattoo Arte Logo" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay gradient for better integration */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/20 rounded-full"></div>
              </div>
              
              {/* Rotating ring effect */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-2 w-76 h-76 md:w-92 md:h-92 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-6 border border-primary/30 backdrop-blur-md">
              <span className="text-2xl font-bold text-primary block">5+</span>
              <span className="text-sm text-muted-foreground">Anos</span>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-6 border border-primary/30 backdrop-blur-md">
              <span className="text-2xl font-bold text-primary block">500+</span>
              <span className="text-sm text-muted-foreground">Clientes</span>
            </div>

            {/* Additional floating elements */}
            <div className="absolute top-20 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-20 -right-4 w-4 h-4 bg-accent rounded-full animate-pulse delay-1000 opacity-50"></div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-20 text-center">
          <p className="text-3xl font-light text-primary italic opacity-80">
            "Leave your mark, make a statement."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
