import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    nome: 'Brigadeiro Gourmet',
    descricao: 'Delicioso brigadeiro feito com chocolate belga e cobertura de granulado premium',
    preco: 4.50,
    categoria: 'Docinhos',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    slug: 'brigadeiro-gourmet'
  },
  {
    id: '2',
    nome: 'Bolo de Chocolate',
    descricao: 'Bolo de chocolate molhadinho com cobertura de ganache e morangos frescos',
    preco: 45.90,
    categoria: 'Bolos',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
    slug: 'bolo-chocolate'
  },
  {
    id: '3',
    nome: 'Torta de Limão',
    descricao: 'Torta cremosa de limão com base crocante e merengue suíço',
    preco: 38.50,
    categoria: 'Tortas',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
    slug: 'torta-limao'
  },
  {
    id: '4',
    nome: 'Cupcake Red Velvet',
    descricao: 'Cupcake de veludo vermelho com cream cheese e decoração especial',
    preco: 8.90,
    categoria: 'Cupcakes',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop',
    slug: 'cupcake-red-velvet'
  },
  {
    id: '5',
    nome: 'Beijinho de Coco',
    descricao: 'Tradicional beijinho brasileiro com coco fresco e cravo da índia',
    preco: 4.00,
    categoria: 'Docinhos',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
    slug: 'beijinho-coco'
  },
  {
    id: '6',
    nome: 'Torta de Morango',
    descricao: 'Torta fresca com morangos selecionados e chantilly caseiro',
    preco: 42.00,
    categoria: 'Tortas',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
    slug: 'torta-morango'
  },
  {
    id: '7',
    nome: 'Bolo de Cenoura',
    descricao: 'Bolo caseiro de cenoura com cobertura de brigadeiro cremoso',
    preco: 35.90,
    categoria: 'Bolos',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    slug: 'bolo-cenoura'
  },
  {
    id: '8',
    nome: 'Cupcake de Baunilha',
    descricao: 'Cupcake clássico de baunilha com buttercream colorido',
    preco: 7.50,
    categoria: 'Cupcakes',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop',
    slug: 'cupcake-baunilha'
  }
];