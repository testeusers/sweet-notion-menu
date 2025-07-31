import { Cake, Heart } from "lucide-react";
import bakeryHero from "@/assets/bakery-hero.jpg";

export function Header() {
  return (
    <>
      {/* Hero Banner */}
      <div 
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bakeryHero})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                <Cake className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Doce Momento
              </h1>
            </div>
            <p className="text-lg md:text-xl flex items-center justify-center gap-2 opacity-90">
              Feito com <Heart className="w-4 h-4 fill-current text-primary-glow" /> para você
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation Header */}
      <header className="bg-background/95 border-b border-border sticky top-0 z-40 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-center">
            <div className="text-sm text-muted-foreground">
              🛒 Adicione seus doces favoritos ao carrinho e finalize pelo WhatsApp
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}