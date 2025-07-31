export interface Product {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  disponivel: boolean;
  imagem?: string;
  slug?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface NotionProduct {
  id: string;
  properties: {
    Nome: {
      title: Array<{
        plain_text: string;
      }>;
    };
    Descrição: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Preço: {
      number: number;
    };
    Categoria: {
      select: {
        name: string;
      };
    };
    Disponível: {
      checkbox: boolean;
    };
    Imagem: {
      files: Array<{
        file?: {
          url: string;
        };
        external?: {
          url: string;
        };
      }>;
    };
    Slug: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
  };
}