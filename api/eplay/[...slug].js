import data from './db.js'

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method === 'POST' && req.url?.includes('/checkout')) {
    const orderId = `fake_order_${new Date().getTime()}`
    return res.status(200).json({ orderId })
  }

  try {
    
    const urlParts = req.url.split('/').filter((part) => part)

    const mainRoute = urlParts[2]
    const id = urlParts[3]

    if (!mainRoute) {
      return res.status(404).json({ error: 'Nenhum endpoint foi solicitado.' })
    }

    switch (mainRoute) {
      case 'destaque': {
        const featuredGame = data.find((game) => game.id === 1) // O primeiro jogo da lista é o destaque
        return res.status(200).json(featuredGame)
      }

      case 'promocoes': {
        const onSaleGames = data.filter((game) => game.prices.discount)
        return res.status(200).json(onSaleGames)
      }

      case 'em-breve': {
        const soonGames = data.filter((game) => game.release_date)
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
        break
      }

      default:
        return res.status(404).json({
          error: `O endpoint '/${mainRoute}' não foi encontrado. Verifique se o nome está correto.`
        })
    }
  } catch (error) {
    console.error('ERRO NA FUNÇÃO DA API:', error)
    return res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' })
  }
}

