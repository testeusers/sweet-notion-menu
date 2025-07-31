import { Product } from '@/types/product';
import { mockProducts } from '@/data/mockProducts';

// For demo purposes, using mock data
// In production, replace this with actual Notion integration
export async function fetchProducts(): Promise<Product[]> {
  try {
    // Simulate API delay for realistic experience
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // TODO: Replace with actual Notion API call when Supabase is configured
    // const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
    // const response = await fetch(`${SUPABASE_URL}/functions/v1/get-products`);
    // const data = await response.json();
    // return data.products || [];
    
    return mockProducts.filter(product => product.disponivel);
  } catch (error) {
    console.error('Error fetching products:', error);
    return mockProducts.filter(product => product.disponivel);
  }
}

export function getUniqueCategories(products: Product[]): string[] {
  const categories = products.map(product => product.categoria);
  return [...new Set(categories)].filter(Boolean);
}