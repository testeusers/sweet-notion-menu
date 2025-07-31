import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Client } from "https://esm.sh/@notionhq/client@2.2.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const notion = new Client({
      auth: Deno.env.get('NOTION_TOKEN'),
    });

    const databaseId = Deno.env.get('NOTION_DATABASE_ID');
    
    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID not configured');
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Disponível',
        checkbox: {
          equals: true,
        },
      },
    });

    const products = response.results.map((page: any) => {
      const properties = page.properties;
      
      // Safely extract image URL
      let imageUrl = '';
      if (properties.Imagem?.files && properties.Imagem.files.length > 0) {
        const file = properties.Imagem.files[0];
        imageUrl = file.file?.url || file.external?.url || '';
      }

      return {
        id: page.id,
        nome: properties.Nome?.title?.[0]?.plain_text || '',
        descricao: properties.Descrição?.rich_text?.[0]?.plain_text || '',
        preco: properties.Preço?.number || 0,
        categoria: properties.Categoria?.select?.name || 'Sem categoria',
        disponivel: properties.Disponível?.checkbox || false,
        imagem: imageUrl,
        slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
      };
    });

    return new Response(
      JSON.stringify({ products }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  }
});