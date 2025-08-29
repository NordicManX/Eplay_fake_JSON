// Importa os dados diretamente do ficheiro JSON.
// Isto garante que a Vercel inclua o ficheiro no 'build' da função.
import data from '../db.json' assert { type: 'json' };

/**
 * Lida com todos os pedidos para /api/*
 * @param {import('@vercel/node').VercelRequest} req - O objeto de pedido.
 * @param {import('@vercel/node').VercelResponse} res - O objeto de resposta.
 */
export default async function handler(req, res) {
  // Define o cabeçalho para permitir pedidos de qualquer origem (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responde a pedidos OPTIONS (pre-flight) para CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Os dados já foram importados e analisados na linha 'import data from ...'
    
    // Obtém os segmentos do URL do pedido. Ex: /api/promocoes -> ['promocoes']
    const { slug } = req.query;

    if (!slug || slug.length === 0) {
      return res.status(404).json({ error: 'Endpoint não encontrado' });
    }
    
    const [mainRoute, id] = slug;

    // Caso especial para /api/jogos/:id
    if (mainRoute === 'jogos' && id) {
      const gameId = parseInt(id, 10);
      const game = data.jogos.find((g) => g.id === gameId);

      if (game) {
        return res.status(200).json(game);
      } else {
        return res.status(404).json({ error: `Jogo com o id ${gameId} não encontrado.` });
      }
    }

    // Para todos os outros endpoints (ex: /api/destaque)
    if (data.hasOwnProperty(mainRoute)) {
      return res.status(200).json(data[mainRoute]);
    } else {
      return res.status(404).json({ error: `Endpoint /${mainRoute} não encontrado.` });
    }

  } catch (error) {
    console.error('Erro ao processar o pedido:', error);
    // Adiciona o erro original à resposta para facilitar a depuração
    return res.status(500).json({ 
      error: 'Erro interno do servidor.',
      details: error.message 
    });
  }
}

