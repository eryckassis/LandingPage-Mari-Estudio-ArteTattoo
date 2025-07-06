
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de agendar uma sessão de tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold neon-text mb-4">
            AGENDE AGORA
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Pronto para transformar sua ideia em arte? Entre em contato conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left side - Process */}
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8 text-center">Como Funciona</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-black mt-1 flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">Primeiro Contato</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Clique no botão WhatsApp e nos conte sua ideia inicial</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-black mt-1 flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">Consulta Personalizada</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Agendamos uma consulta para discutir detalhes, estilo e orçamento</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-black mt-1 flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">Criação do Design</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Desenvolvemos um design único e personalizado para você</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-black mt-1 flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">Sessão de Tatuagem</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Transformamos sua ideia em arte permanente com total segurança</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary/20">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full neon-border bg-primary hover:bg-primary/80 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                >
                  <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  CONVERSAR NO WHATSAPP
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right side - Info */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1">Localização</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Rua dos Artistas, 123 - Vila Madalena, São Paulo - SP</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1">Horário de Funcionamento</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Segunda a Sábado: 9h às 18h</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Domingo: Fechado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1">Contato</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">(11) 99999-9999</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">mari@tattooarte.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="glass-effect border-primary/20 bg-primary/5">
              <CardContent className="p-4 sm:p-6 text-center">
                <h4 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Pronto para começar?</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  Sua próxima obra de arte está a um clique de distância
                </p>
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-medium">Resposta em até 30 minutos</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
