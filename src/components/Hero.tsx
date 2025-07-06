
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
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold neon-text mb-4 leading-tight">
                ARTISTIC EXPRESSION THROUGH TATTOOS
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-transparent mb-6"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg text-muted-foreground">Mari Tattoo Arte</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg text-muted-foreground">Rua dos Artistas, 123 - São Paulo</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Transformando ideias em arte permanente. Cada traço conta uma história, 
              cada cor expressa uma emoção. Sua jornada artística começa aqui.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="neon-border bg-primary hover:bg-primary/80 text-black font-bold px-8 py-6 text-lg"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                AGENDAR AGORA
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                VER PORTFÓLIO
              </Button>
            </div>
          </div>

          {/* Right side - Image placeholder with decorative elements */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-lg neon-border p-8 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for artist image */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                <span className="text-primary/60 text-lg font-medium">
                  [Imagem do Artista]
                </span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full animate-pulse delay-1000"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 glass-effect rounded-lg p-4 border border-primary/20">
              <span className="text-sm font-bold text-primary">5+ Anos</span>
              <br />
              <span className="text-xs text-muted-foreground">Experiência</span>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-effect rounded-lg p-4 border border-primary/20">
              <span className="text-sm font-bold text-primary">500+</span>
              <br />
              <span className="text-xs text-muted-foreground">Clientes</span>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-light text-primary italic">
            "Leave your mark, make a statement."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
