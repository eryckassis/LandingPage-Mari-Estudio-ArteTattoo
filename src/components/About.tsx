
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold neon-text mb-4">
            SOBRE NÓS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Arte, paixão e técnica se encontram para criar experiências únicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa Arte</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No Mari Tattoo Arte, cada tatuagem é uma obra única. Combinamos técnicas 
                  tradicionais com inovação artística para criar peças que contam sua história 
                  de forma inesquecível. Cada cliente é uma tela em branco esperando para 
                  ser transformada em arte.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Experiência</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Com mais de 5 anos de experiência e centenas de clientes satisfeitos, 
                  nossa equipe está preparada para transformar suas ideias em arte permanente 
                  com total segurança, higiene e qualidade profissional.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Compromisso</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso compromisso vai além da arte. Garantimos um ambiente seguro, 
                  esterilizado e confortável, onde você pode se expressar livremente 
                  e criar memórias que durarão para sempre.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center glass-effect border-primary/20 rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center glass-effect border-primary/20 rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
            </div>

            {/* Mission */}
            <div className="glass-effect border-primary/20 rounded-lg p-8">
              <h4 className="text-xl font-bold text-primary mb-4 text-center">Nossa Missão</h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                "Transformar pele em arte através da tinta e da criatividade, 
                criando conexões duradouras entre o artista e o cliente, 
                onde cada tatuagem conta uma história única."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
