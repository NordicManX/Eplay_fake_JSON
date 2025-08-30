// Importa o nosso "banco de dados"
import data from './db.js'

// Esta é a função principal que a Vercel irá executar
export default function handler(req, res) {
  // Configuração de CORS para permitir que o seu frontend acesse a API
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Resposta para o pedido "pre-flight" do CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Lógica para o endpoint de checkout (método POST)
  if (req.method === 'POST' && req.url?.includes('/checkout')) {
    const orderId = `fake_order_${new Date().getTime()}`
    return res.status(200).json({ orderId })
  }

  try {
    // --- LÓGICA CORRIGIDA ---
    // Em vez de usar req.query, lemos o URL diretamente para mais fiabilidade.
    // Ex: /api/eplay/promocoes -> ['api', 'eplay', 'promocoes']
    const urlParts = req.url.split('/').filter((part) => part)

    // O endpoint é o terceiro item do URL (índice 2)
    const mainRoute = urlParts[2]
    // O ID, se existir, será o quarto item (índice 3)
    const id = urlParts[3]

    if (!mainRoute) {
      return res.status(404).json({ error: 'Nenhum endpoint foi solicitado.' })
    }

    // Usamos um switch para lidar com cada rota de forma organizada
    switch (mainRoute) {
      case 'destaque': {
        // CORREÇÃO: Usamos o primeiro jogo da lista como destaque
        const featuredGame = data[0]
        return res.status(200).json(featuredGame)
      }

      case 'promocoes': {
        const onSaleGames = data.filter((game) => game.prices.discount)
        return res.status(200).json(onSaleGames)
      }

      case 'em-breve': {
        // CORREÇÃO: Para o "em-breve", vamos pegar jogos com data de lançamento futura
        const today = new Date()
        const soonGames = data.filter((game) => {
          if (game.release_date) {
            const releaseDate = new Date(game.release_date)
            return releaseDate > today
          }
          return false
        })
        return res.status(200).json(soonGames)
      }

      case 'acao':
      case 'esportes':
      case 'luta':
      case 'rpg':
      case 'simulacao': {
        const categoryMap = {
          acao: 'Ação',
          esportes: 'Esporte',
          luta: 'Luta',
          rpg: 'RPG',
          simulacao: 'Simulação'
        }
        const categoryName = categoryMap[mainRoute]
        const categoryGames = data.filter(
          (game) => game.details.category === categoryName
        )
        return res.status(200).json(categoryGames)
      }

      case 'jogos': {
        if (id) {
          const game = data.find((g) => g.id === parseInt(id, 10))
          return game
            ? res.status(200).json(game)
            : res
                .status(404)
                .json({ error: `Jogo com o id ${id} não encontrado.` })
        }
        // Se for apenas /jogos sem id, vai para o default
        break
      }

      // Se nenhuma das rotas acima corresponder, este é o caso padrão
      default:
        return res.status(404).json({
          error: `O endpoint '/${mainRoute}' não foi encontrado. Verifique se o nome está correto.`
        })
    }
  } catch (error) {
    // Se ocorrer um erro inesperado no código, esta mensagem será enviada
    console.error('ERRO NA FUNÇÃO DA API:', error)
    return res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' })
  }
}

