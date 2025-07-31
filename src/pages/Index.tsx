import { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { CategoryFilter } from '@/components/CategoryFilter';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/types/product';
import { WHATSAPP_CONFIG } from '@/config/constants';

const Index = () => {
  const { products, categories, loading, error } = useProducts();
  const { cartItems, addToCart, updateQuantity, removeItem, generateWhatsAppMessage } = useCart();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.categoria === selectedCategory)
    : products;

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.nome} foi adicionado ao seu carrinho.`,
    });
  };

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_CONFIG.number}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-destructive">Ops! Algo deu errado</h2>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-warm bg-clip-text text-transparent">
            Nossos Doces Artesanais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deliciosos doces feitos com carinho e ingredientes selecionados. 
            Escolha seus favoritos e faça seu pedido pelo WhatsApp!
          </p>
        </section>

        {/* Category Filter */}
        {categories.length > 0 && (
          <section className="mb-8">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </section>
        )}

        {/* Products Grid */}
        <section>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                {selectedCategory 
                  ? `Nenhum produto encontrado na categoria "${selectedCategory}"`
                  : "Nenhum produto disponível no momento"
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;
