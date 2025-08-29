// Importa os dados do ficheiro db.js que está na mesma pasta.
import data from './db.js';

export default function handler(req, res) {
  // Configuração de CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // A correção está aqui! Em vez de req.query, usamos req.url
  const url = new URL(req.url, `http://${req.headers.host}`);
  // Isto extrai tudo o que vem depois de /api/
  // Ex: /api/destaque -> ['destaque']
  // Ex: /api/jogos/1  -> ['jogos', '1']
  const slug = url.pathname.split('/').filter(Boolean).slice(1);

  if (req.method === 'POST' && slug && slug[0] === 'checkout') {
    return res.status(200).json({ orderId: `fake_order_${Date.now()}` });
  }

  if (req.method === 'GET') {
    try {
      if (!slug || slug.length === 0) {
        return res.status(404).json({ error: 'Endpoint não foi especificado.' });
      }
      
      const [mainRoute, id] = slug;

      if (mainRoute === 'jogos' && id) {
        const gameId = parseInt(id, 10);
        const game = data.jogos.find((g) => g.id === gameId);
        return game
          ? res.status(200).json(game)
          : res.status(404).json({ error: `Jogo com o id ${id} não foi encontrado.` });
      }

      if (Object.prototype.hasOwnProperty.call(data, mainRoute)) {
        return res.status(200).json(data[mainRoute]);
      } else {
        return res.status(404).json({ error: `O endpoint '/${mainRoute}' não foi encontrado.` });
      }

    } catch (error) {
      console.error('ERRO NA FUNÇÃO GET:', error);
      return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  }

  return res.status(405).json({ error: `Método ${req.method} não permitido.` });
}

