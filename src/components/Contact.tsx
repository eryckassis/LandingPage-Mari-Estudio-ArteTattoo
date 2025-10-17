import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Instagram,
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "3587057922";
    const message = "Olá! Gostaria de agendar uma sessão de tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/mari_tattooart888/", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      info: "Rua Pref Chagas, 318/0 Casarão - Centro.",
      subtitle: "Poços de Caldas - SP",
      action: () => window.open("https://maps.google.com", "_blank"),
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg - Sex: 9h às 18h",
      subtitle: "Sáb: 9h às 15h",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(35) 8705-7922",
      subtitle: "WhatsApp disponível",
      action: handleWhatsAppClick,
    },
    {
      icon: Mail,
      title: "Email",
      info: "contato@maritattoo.com",
      subtitle: "Resposta em 24h",
      action: () => window.open("mailto:contato@maritattoo.com", "_blank"),
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-8 sm:py-12 lg:py-16 px-2 sm:px-4 bg-gradient-to-t from-black via-purple-950/20 to-black"
    >
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            CON
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400">
              TATO
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vamos transformar suas ideias em arte permanente. Entre em contato e
            comece sua jornada artística.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className={`glass-card border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover-lift ${
                  item.action ? "cursor-pointer" : ""
                }`}
                onClick={item.action}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-2xl mb-4">
                    <Icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-medium mb-1">{item.info}</p>
                  <p className="text-gray-500 text-sm">{item.subtitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact methods */}
          <div className="space-y-6">
            <div className="glass-card border-purple-400/20 rounded-2xl p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Vamos conversar!
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Agende sua consulta gratuita e vamos planejar juntos a sua
                próxima tatuagem. Atendimento personalizado para garantir que
                sua arte seja única.
              </p>

              <div className="space-y-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full bg-[#222222] hover:bg-[#333333] text-[#f6f3f7] font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/20"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Chamar no WhatsApp
                </Button>

                <Button
                  onClick={handleInstagramClick}
                  variant="outline"
                  size="lg"
                  className="w-full border-2 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  <Instagram className="mr-3 h-6 w-6" />
                  Seguir no Instagram
                </Button>
              </div>
            </div>
          </div>

          {/* Process info */}
          <div className="space-y-6">
            <div className="glass-card border-fuchsia-400/20 rounded-2xl p-8 sm:p-10">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Como funciona?
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Consulta</h5>
                    <p className="text-gray-400 text-sm">
                      Conversamos sobre sua ideia e definimos o design
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Agendamento</h5>
                    <p className="text-gray-400 text-sm">
                      Marcamos data e horário que melhor funciona para você
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Criação</h5>
                    <p className="text-gray-400 text-sm">
                      Sua arte ganha vida com total segurança e qualidade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-purple-400/20">
          <p className="text-gray-500 text-sm">
            © 2024 Mari Tattoo Arte. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
