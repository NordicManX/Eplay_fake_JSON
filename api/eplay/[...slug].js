// Importa os dados do ficheiro db.js que está na mesma pasta.
import data from './db.js';

export default function handler(req, res) {
  // Configuração de CORS para permitir que qualquer site aceda à sua API
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // A Vercel lida com os pedidos OPTIONS automaticamente, mas isto é uma boa prática
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // O 'slug' é um array com as partes do URL depois de /api/eplay/
    // Ex: /api/eplay/promocoes -> slug = ['promocoes']
    // Ex: /api/eplay/jogos/1   -> slug = ['jogos', '1']
    const { slug } = req.query;

    if (!slug || !Array.isArray(slug) || slug.length === 0) {
      return res.status(404).json({ error: 'Endpoint não foi especificado.' });
    }
    
    const [mainRoute, id] = slug;

    // Lógica para /checkout (POST)
    if (mainRoute === 'checkout' && req.method === 'POST') {
      const orderId = `fake_order_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      return res.status(200).json({ orderId });
    }

    // Lógica para /jogos/:id (GET)
    if (mainRoute === 'jogos' && id) {
      const gameId = parseInt(id, 10);
      const game = data.jogos.find((g) => g.id === gameId);
      return game
        ? res.status(200).json(game)
        : res.status(404).json({ error: `Jogo com o id ${id} não foi encontrado.` });
    }

    // Lógica para todos os outros endpoints (GET)
    if (Object.prototype.hasOwnProperty.call(data, mainRoute)) {
      return res.status(200).json(data[mainRoute]);
    } else {
      return res.status(404).json({ error: `O endpoint '/${mainRoute}' não foi encontrado.` });
    }

  } catch (error) {
    console.error('ERRO NA FUNÇÃO:', error);
    return res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
  }
}
