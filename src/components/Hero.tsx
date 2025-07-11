import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Calendar, Award } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "3587057922";
    const message = "Olá! Gostaria de agendar uma sessão de tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Fundo que muda com o dark mode */}
      <div
        className="
          fixed inset-0 z-0 pointer-events-none
          bg-[url('/uploads/claro.jpeg')] bg-cover bg-center bg-no-repeat
          dark:bg-[url('/uploads/nuvens.png')]
          transition-colors duration-1000
         filter blur-[2px] brightness-70 dark:brightness-40
        "
        aria-hidden="true"
      />

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
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 flex flex-col items-center text-center max-w-md mx-auto">
            {/* Studio branding */}
            <div className="mb-6">
              <div className="font-anton text-4xl sm:text-5xl md:text-6xl font-black text-white transition-colors duration-100000 uppercase mb-2 tracking-wider flex items-center justify-center gap-2 ">
                ESTÚDIO MARI TATTOO ART
              </div>
            </div>

            {/* Main title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
                TATT
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400">
                    OO
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-fuchsia-400/20 to-violet-400/20 blur-xl rounded-full"></div>
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-md">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Cada tatuagem é uma obra de arte única na sua pele, criada com
                amor e profissionalismo.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 rounded-full flex items-center justify-center bg-neutral-900 shadow-inner"
              >
                <span className="text-xl font-bold tracking-wider flex items-center gap-1">
                  <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-400 bg-clip-text text-transparent">
                    AGENDAR
                  </span>
                  <span className="text-white">SESSÃO</span>
                </span>
              </button>
            </div>

            {/* Stats */}
          </div>

          {/* Right side - Cyberpunk Art */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-79 h-79 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-violet-500/20 rounded-full animate-pulse"></div>
                <img
                  src="/uploads/ChatGPT Image Jul 7, 2025, 11_32_02 PM-Photoroom.png"
                  alt="Cyberpunk Tattoo Art"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-full"></div>
              </div>

              {/* Glowing ring effects */}
              <div className="absolute inset-0 w-0 h-0 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 w-0 h-0 sm:w-92 sm:h-92 lg:w-[492px] lg:h-[492px] border border-fuchsia-400/20 rounded-full animate-reverse-spin"></div>
            </div>
          </div>
        </div>

        {/* Floating testimonial cards */}
        <div className="hidden lg:block absolute top-20 right-20 max-w-xs"></div>

        <div className="hidden lg:block absolute bottom-32 left-20 max-w-xs"></div>

        <div className="hidden lg:block absolute top-1/2 right-4 max-w-xs"></div>
      </div>
    </section>
  );
};
export default Hero;
