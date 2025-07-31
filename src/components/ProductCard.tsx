import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Plus } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-card border-border">
      <div className="relative overflow-hidden">
        {product.imagem ? (
          <img
            src={product.imagem}
            alt={product.nome}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-subtle flex items-center justify-center">
            <div className="text-muted-foreground text-sm">Sem imagem</div>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-gradient-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium shadow-soft">
          {product.categoria}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
          {product.nome}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.descricao}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent">
            {formatPrice(product.preco)}
          </span>
          
          <Button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group/btn"
            size="sm"
          >
            <Plus className="w-4 h-4 mr-1 transition-transform group-hover/btn:rotate-90" />
            Adicionar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}