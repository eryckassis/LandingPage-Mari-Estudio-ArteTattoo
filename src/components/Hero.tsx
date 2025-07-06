import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Calendar, Award } from "lucide-react";
const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de agendar uma sessão de tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-950/30 to-violet-900/20">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-violet-400 rounded-full animate-pulse delay-1000 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse delay-500 opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-700 opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left side - Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Studio branding */}
            <div className="mb-6">
              <div className="text-sm font-medium text-purple-300 mb-2 tracking-wider">ESTÚDIO MARI TATTOO ARTE</div>
            </div>

            {/* Main title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
                TATT
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400">OO</span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-fuchsia-400/20 to-violet-400/20 blur-xl rounded-full"></div>
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-md">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Cada tatuagem é uma obra de arte única na sua pele, 
                criada com amor e profissionalismo.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white font-bold px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 border-0">
                <MessageCircle className="mr-3 h-6 w-6" />
                Agendar Sessão
              </Button>
            </div>

            {/* Stats */}
            
          </div>

          {/* Right side - Cyberpunk Art */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-violet-500/20 rounded-full animate-pulse"></div>
                <img src="/lovable-uploads/e3ad36b4-367a-4e0f-a156-dd24ab626503.png" alt="Cyberpunk Tattoo Art" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-full"></div>
              </div>

              {/* Glowing ring effects */}
              <div className="absolute inset-0 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 w-76 h-76 sm:w-92 sm:h-92 lg:w-[492px] lg:h-[492px] border border-fuchsia-400/20 rounded-full animate-reverse-spin"></div>
            </div>
          </div>
        </div>

        {/* Floating testimonial cards */}
        <div className="hidden lg:block absolute top-20 right-20 max-w-xs">
          
        </div>

        <div className="hidden lg:block absolute bottom-32 left-20 max-w-xs">
          
        </div>

        <div className="hidden lg:block absolute top-1/2 right-4 max-w-xs">
          
        </div>
      </div>
    </section>;
};
export default Hero;