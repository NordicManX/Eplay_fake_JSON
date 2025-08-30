// api/eplay/[...slug].js - VERSÃO FINAL

import data from './db.js'

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    // --- LÓGICA FINAL E CORRETA ---
    // A Vercel está enviando a rota como um texto na chave '...slug'
    const pathString = req.query['...slug'] || '' // Ex: 'destaque' ou 'jogos/6'

    // Dividimos o texto pela barra '/' para obter as partes
    const pathParts = pathString.split('/') // Ex: ['destaque'] ou ['jogos', '6']

    // Agora sim, pegamos a rota e o id da forma correta
    const mainRoute = pathParts[0]
    const id = pathParts[1]

    if (req.method === 'POST' && mainRoute === 'checkout') {
      const orderId = `fake_order_${new Date().getTime()}`
      return res.status(200).json({ orderId })
    }

    if (!mainRoute) {
      return res.status(404).json({ error: 'Nenhum endpoint foi solicitado.' })
    }

    // O switch case agora vai funcionar porque mainRoute terá o valor correto.
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