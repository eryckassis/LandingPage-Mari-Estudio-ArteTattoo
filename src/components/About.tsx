
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold neon-text mb-4">
            SOBRE NÓS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa Arte</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No Mari Tattoo Arte, cada tatuagem é uma obra única. Combinamos técnicas 
                  tradicionais com inovação artística para criar peças que contam sua história 
                  de forma inesquecível.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Experiência</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Com anos de experiência e centenas de clientes satisfeitos, nossa equipe 
                  está preparada para transformar suas ideias em arte permanente com 
                  segurança e qualidade.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-lg neon-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">5+</div>
                <div className="text-xl text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
