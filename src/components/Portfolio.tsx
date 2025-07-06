
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Tatuagem Realista",
      category: "Realismo",
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2b2a2a?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Arte Geométrica",
      category: "Geométrico",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Tatuagem Tradicional",
      category: "Old School",
      image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Arte Minimalista",
      category: "Minimalista",
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Tatuagem Colorida",
      category: "Color Work",
      image: "https://images.unsplash.com/photo-1597149492419-0d900ac2d2eb?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Arte Abstrata",
      category: "Abstrato",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold neon-text mb-4">
            PORTFÓLIO
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Explore nossa galeria de trabalhos únicos e inspire-se para sua próxima tatuagem.
            Cada peça é uma história, cada traço uma expressão artística.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="glass-effect border-primary/20 group hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <AspectRatio ratio={1}>
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 sm:p-6 text-center w-full">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-sm sm:text-base text-primary font-medium">{item.category}</p>
                      </div>
                    </div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="glass-effect border-primary/20 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Quer ver mais do nosso trabalho ou tem uma ideia específica em mente?
            </p>
            <p className="text-sm sm:text-base text-primary font-medium">
              Entre em contato para discutirmos seu próximo projeto artístico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
