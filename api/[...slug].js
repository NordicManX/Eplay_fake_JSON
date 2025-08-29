    // Importa os dados do ficheiro db.js que está na mesma pasta.
    import data from './db.js';

    export default function handler(req, res) {
      // Configuração de CORS
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

      if (req.method === 'OPTIONS') {
        return res.status(200).end();
      }

      try {
        const { slug } = req.query;

        if (!slug || !Array.isArray(slug) || slug.length === 0) {
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
        console.error('ERRO NA FUNÇÃO:', error);
        return res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
      }
    }
    

