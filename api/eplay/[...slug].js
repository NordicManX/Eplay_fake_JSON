// api/eplay/[...slug].js - CÓDIGO CORRETO PARA ESTA ESTRUTURA

import data from './db.js'

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const slug = req.query.slug || [] // Ex: ['promocoes'] ou ['jogos', '6']

  if (req.method === 'POST' && slug.includes('checkout')) {
    const orderId = `fake_order_${new Date().getTime()}`
    return res.status(200).json({ orderId })
  }

  try {
    // --- AJUSTE CRÍTICO AQUI ---
    // A rota principal (promocoes, jogos, etc.) é o PRIMEIRO item do slug (índice 0)
    const mainRoute = slug[0]
    // O ID, se existir, é o SEGUNDO item do slug (índice 1)
    const id = slug[1]

    if (!mainRoute) {
      return res.status(404).json({ error: 'Nenhum endpoint foi solicitado.' })
    }

    // O resto do código funciona perfeitamente com este ajuste
    switch (mainRoute) {
      case 'destaque': {
        const featuredGame = data[0]
        return res.status(200).json(featuredGame)
      }
      case 'promocoes': {
        const onSaleGames = data.filter((game) => game.prices.discount)
        return res.status(200).json(onSaleGames)
      }
      case 'em-breve': {
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
        break
      }
      default:
        return res.status(404).json({
          error: `O endpoint '/${mainRoute}' não foi encontrado.`
        })
    }
  } catch (error) {
    console.error('ERRO NA FUNÇÃO DA API:', error)
    return res
      .status(500)
      .json({ error: 'Ocorreu um erro interno no servidor.' })
  }
}