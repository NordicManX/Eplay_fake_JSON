import data from './db.js';

export default function handler(req, res) {
  // Configuração de CORS para permitir que o seu frontend aceda à API
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responde a pedidos 'pre-flight' do CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // A Vercel deve colocar as partes do URL (ex: 'destaque') dentro de req.query.slug
    const { slug } = req.query;

    // Verificação de segurança: O slug deve ser um array com pelo menos um item.
    if (!slug || !Array.isArray(slug) || slug.length === 0) {
      return res.status(404).json({
        error: 'Endpoint não foi especificado ou o formato é inválido.',
        // A linha abaixo ajuda-nos a depurar o que a Vercel está a enviar, caso o erro persista
        receivedQuery: req.query
      });
    }

    const [mainRoute, id] = slug;

    // Lida com pedidos POST para o endpoint /checkout
    if (req.method === 'POST' && mainRoute === 'checkout') {
      const orderId = `fake_order_${Date.now()}`;
      return res.status(200).json({ orderId });
    }

    // Lida com todos os pedidos GET
    if (req.method === 'GET') {
      // Caso especial para a rota /jogos/:id
      if (mainRoute === 'jogos' && id) {
        const gameId = parseInt(id, 10);
        const game = data.jogos.find((g) => g.id === gameId);

        return game
          ? res.status(200).json(game)
          : res.status(404).json({ error: `Jogo com o id ${id} não foi encontrado.` });
      }

      // Para todos os outros endpoints (ex: /destaque, /promocoes)
      if (Object.prototype.hasOwnProperty.call(data, mainRoute)) {
        return res.status(200).json(data[mainRoute]);
      } else {
        return res.status(404).json({ error: `O endpoint '/${mainRoute}' não foi encontrado.` });
      }
    }

    // Se o método do pedido não for GET, POST ou OPTIONS, retorna um erro
    return res.status(405).json({ error: `Método ${req.method} não permitido.` });

  } catch (error) {
    console.error('ERRO NA FUNÇÃO:', error);
    return res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
  }
}

