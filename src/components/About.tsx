
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Heart, Shield, Star } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Palette,
      title: "Arte Personalizada",
      description: "Cada tatuagem é única, criada especialmente para você com técnicas avançadas e criatividade sem limites."
    },
    {
      icon: Heart,
      title: "Paixão pela Arte",
      description: "Transformo ideias em arte permanente, criando conexões emocionais através de cada traço e cor."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Ambiente completamente esterilizado, materiais descartáveis e protocolos rigorosos de higiene."
    },
    {
      icon: Star,
      title: "Excelência",
      description: "Mais de 10 anos de experiência criando tatuagens que superam expectativas e contam histórias."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            SOBRE 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400"> MIM</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Arte, técnica e paixão se encontram para criar experiências únicas na sua pele
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="glass-card border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover-lift">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-2xl mb-4">
                    <Icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Stats section */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center glass-card border-purple-400/20 rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 mb-2">10K+</div>
              <div className="text-sm text-gray-400 font-medium">Clientes Felizes</div>
            </div>
            <div className="text-center glass-card border-fuchsia-400/20 rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400 mb-2">10+</div>
              <div className="text-sm text-gray-400 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center glass-card border-violet-400/20 rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-2">2K+</div>
              <div className="text-sm text-gray-400 font-medium">Obras Criadas</div>
            </div>
            <div className="text-center glass-card border-purple-300/20 rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 mb-2">100%</div>
              <div className="text-sm text-gray-400 font-medium">Satisfação</div>
            </div>
          </div>

          {/* Mission statement */}
          <div className="space-y-6 sm:space-y-8">
            <div className="glass-card border-purple-400/20 rounded-2xl p-8 sm:p-10">
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Minha Missão</h4>
              <blockquote className="text-lg text-gray-300 leading-relaxed text-center italic">
                "Transformar pele em tela, ideias em arte permanente. 
                Cada tatuagem que crio é uma história única, uma expressão 
                da personalidade e dos sonhos de quem confia em mim para 
                eternizar momentos especiais."
              </blockquote>
              <div className="text-center mt-6">
                <div className="inline-block w-16 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"></div>
              </div>
            </div>

            <div className="glass-card border-fuchsia-400/20 rounded-2xl p-6 sm:p-8">
              <h5 className="text-xl font-bold text-white mb-4">Por que escolher meu trabalho?</h5>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Atendimento personalizado e consultoria artística
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></div>
                  Técnicas modernas e equipamentos de última geração
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                  Acompanhamento completo do processo de cicatrização
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
