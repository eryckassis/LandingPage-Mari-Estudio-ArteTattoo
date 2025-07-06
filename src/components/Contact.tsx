
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de agendar uma sessão de tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold neon-text mb-4">
            AGENDE AGORA
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Pronto para transformar sua ideia em arte? Entre em contato conosco.
          </p>
        </div>

        <Card className="glass-effect border-primary/20 max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Como Funciona</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-black mt-1">1</div>
                  <p className="text-muted-foreground">Clique no botão abaixo para iniciar uma conversa no WhatsApp</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-black mt-1">2</div>
                  <p className="text-muted-foreground">Conte-nos sobre sua ideia de tatuagem</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-black mt-1">3</div>
                  <p className="text-muted-foreground">Agendamos uma consulta para discutir os detalhes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-black mt-1">4</div>
                  <p className="text-muted-foreground">Transformamos sua ideia em arte permanente</p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="neon-border bg-primary/20 hover:bg-primary text-white transition-all duration-300 text-lg px-8 py-6 w-full"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Conversar no WhatsApp
            </Button>

            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-sm text-muted-foreground">
                📍 Localização: [Endereço do estúdio]<br />
                📞 Telefone: [Número de telefone]<br />
                🕒 Horário: Segunda a Sábado, 9h às 18h
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
