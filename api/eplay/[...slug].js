// api/eplay/[...slug].js - CÓDIGO DE DIAGNÓSTICO TEMPORÁRIO

export default function handler(req, res) {
  // Configuração de CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // A linha mais importante:
  // Simplesmente retorna o conteúdo de req.query como resposta JSON.
  res.status(200).json({
    message: "Conteúdo do req.query recebido pela Vercel:",
    query: req.query
  })
}