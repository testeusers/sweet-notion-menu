import { Product } from '@/types/product';
import { mockProducts } from '@/data/mockProducts';
import { supabase } from '@/integrations/supabase/client';

export async function fetchProducts(): Promise<Product[]> {
  try {
    console.log('Fetching products from Notion via Supabase edge function...');
    
    const { data, error } = await supabase.functions.invoke('get-products');
    
    if (error) {
      console.error('Error calling edge function:', error);
      // Fallback to mock data
      return mockProducts.filter(product => product.disponivel);
    }
    
    if (data?.products && Array.isArray(data.products)) {
      console.log(`Successfully fetched ${data.products.length} products from Notion`);
      return data.products;
    }
    
    console.log('No products returned from Notion, using mock data as fallback');
    return mockProducts.filter(product => product.disponivel);
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback to mock data
    return mockProducts.filter(product => product.disponivel);
  }
}

export function getUniqueCategories(products: Product[]): string[] {
  const categories = products.map(product => product.categoria);
  return [...new Set(categories)].filter(Boolean);
}