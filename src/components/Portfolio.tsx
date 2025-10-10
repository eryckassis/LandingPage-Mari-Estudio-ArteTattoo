import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Eye, Heart, Star } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Linhas Finas",
      category: "Arte Única",
      image: "/uploads/artes finas.jpg",
      likes: "",
      views: "",
    },
    {
      id: 2,
      title: "Geek",
      category: "Arte Inspirada em games",
      image: "/uploads/artesFinas2.jpg",
      likes: "1.8K",
      views: "12K",
    },
    {
      id: 3,
      title: "Minimalismo",
      category: "Arte delicada",
      image: "/uploads/dragoes.jpg",
      likes: "3.1K",
      views: "18K",
    },
    {
      id: 4,
      title: "Minimalismo",
      category: "Clean Lines",
      image: "/uploads/mamaco4.webp",
      views: "9K",
    },
    {
      id: 5,
      title: "Memórias",
      category: "Artes Únicas",
      image: "/uploads/futebor.jpg",
      likes: "2.7K",
      views: "16K",
    },
    {
      id: 6,
      title: "Minimalista e Detalhado",
      category: "Minimalista",
      image: "/uploads/mamaco6.webp",
      likes: "2.1K",
      views: "13K",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            PORT
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400">
              FÓLIO
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore minha galeria de obras únicas. Cada peça conta uma história,
            cada traço carrega uma emoção.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="glass-card border-purple-400/20 group hover:border-purple-400/50 transition-all duration-500 overflow-hidden hover-lift"
            >
              <CardContent className="p-0">
                <AspectRatio ratio={1}>
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {/* Top stats */}
                      <div className="flex justify-between items-start">
                        <div className="flex space-x-4 text-white">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {item.likes}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {item.views}
                            </span>
                          </div>
                        </div>
                        <Star className="h-5 w-5 text-purple-400" />
                      </div>

                      {/* Bottom info */}
                      <div className="text-white">
                        <h3 className="text-lg sm:text-xl font-bold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-purple-300 font-medium">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    {/* Corner indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="glass-card border-purple-400/20 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Pronto para criar sua próxima obra de arte?
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Cada tatuagem é uma jornada única. Vamos conversar sobre suas
              ideias e transformá-las em arte permanente.
            </p>
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
