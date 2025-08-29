// Importa os dados diretamente do módulo JavaScript.
// Esta é a forma mais robusta de garantir que a Vercel inclua os dados.
import data from '../db.js';

// Esta é a função que a Vercel irá executar para cada pedido à API.
export default function handler(req, res) {
  // Configuração de CORS para permitir que qualquer site acesse sua API.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // O navegador envia uma requisição 'OPTIONS' antes de 'GET' para verificar as permissões.
  // Respondemos com '200 OK' para permitir a requisição principal.
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Bloco try...catch para capturar qualquer erro que possa acontecer durante a execução.
  try {
    // req.query.slug contém as partes do URL que vêm depois de /api/.
    // Ex: /api/promocoes -> slug = ['promocoes']
    // Ex: /api/jogos/1 -> slug = ['jogos', '1']
    const { slug } = req.query;

    // Se não houver slug (ex: acesso a /api/), retorna um erro 404.
    if (!slug || !Array.isArray(slug) || slug.length === 0) {
      return res.status(404).json({ error: 'Endpoint não foi especificado.' });
    }
    
    // Pega a primeira e a segunda parte do URL.
    const [mainRoute, id] = slug;

    // Lógica para a rota especial /api/jogos/:id
    if (mainRoute === 'jogos' && id) {
      const gameId = parseInt(id, 10);
      const game = data.jogos.find((g) => g.id === gameId);

      if (game) {
        // Se o jogo for encontrado, retorna os dados do jogo.
        return res.status(200).json(game);
      } else {
        // Se não for encontrado, retorna um erro 404.
        return res.status(404).json({ error: `Jogo com o id ${id} não foi encontrado.` });
      }
    }

    // Lógica para todas as outras rotas (ex: /api/destaque, /api/promocoes)
    // Verifica de forma segura se a rota pedida existe como uma chave no nosso objeto de dados.
    if (Object.prototype.hasOwnProperty.call(data, mainRoute)) {
      // Se existir, retorna os dados correspondentes.
      return res.status(200).json(data[mainRoute]);
    } else {
      // Se a rota não existir no ficheiro de dados, retorna um erro 404.
      return res.status(404).json({ error: `O endpoint '/${mainRoute}' não foi encontrado.` });
    }

  } catch (error) {
    // Se ocorrer qualquer erro inesperado no bloco 'try', ele será capturado aqui.
    console.error('--- ERRO INESPERADO NA FUNÇÃO ---');
    console.error(error);
    
    // Retorna uma mensagem de erro genérica para o usuário.
    return res.status(500).json({ 
      error: 'Ocorreu um erro interno no servidor.',
      // Incluímos a mensagem de erro real para ajudar na depuração.
      details: error.message 
    });
  }
}

