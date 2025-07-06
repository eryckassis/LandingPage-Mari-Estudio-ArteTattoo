
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Portfolio = () => {
  // Placeholder para as imagens do portfólio
  const portfolioItems = [
    {
      id: 1,
      title: "Tatuagem Realista",
      category: "Realismo",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Arte Geométrica",
      category: "Geométrico",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Tatuagem Tradicional",
      category: "Old School",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Arte Minimalista",
      category: "Minimalista",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Tatuagem Colorida",
      category: "Color Work",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Arte Abstrata",
      category: "Abstrato",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold neon-text mb-4">
            PORTFÓLIO
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore nossa galeria de trabalhos únicos e inspire-se para sua próxima tatuagem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="glass-effect border-primary/20 group hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-0">
                <AspectRatio ratio={1}>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-primary">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            * Imagens do portfólio podem ser adicionadas através do painel de administração
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
