# API de Simulação para o Projeto E-Play

Este repositório contém o código para uma API de simulação (mock) criada para servir dados a um frontend de uma loja de jogos. A API foi desenvolvida com JavaScript e implementada como uma Serverless Function na Vercel.

## URL da API

A API está disponível no seguinte endereço:

**Base URL:** `https://eplay-fake-json.vercel.app/api`

## Endpoints Disponíveis

A API responde aos seguintes endpoints, baseados no ficheiro `api/db.js`.

### GET

| Método | Endpoint        | Descrição                              |
|--------|-----------------|----------------------------------------|
| GET    | `/destaque`     | Retorna o jogo em destaque.            |
| GET    | `/promocoes`    | Retorna uma lista de jogos em promoção.|
| GET    | `/em-breve`     | Retorna uma lista de jogos a serem lançados. |
| GET    | `/acao`         | Retorna uma lista de jogos de ação.    |
| GET    | `/esportes`     | Retorna uma lista de jogos de desporto.|
| GET    | `/simulacao`    | Retorna uma lista de jogos de simulação.|
| GET    | `/luta`         | Retorna uma lista de jogos de luta.    |
| GET    | `/rpg`          | Retorna uma lista de jogos de RPG.     |
| GET    | `/jogos/{id}`   | Retorna os detalhes de um jogo específico. |

Exemplo de uso com `fetch`:

```javascript
fetch('https://eplay-fake-json.vercel.app/api/promocoes')
  .then(res => res.json())
  .then(data => console.log(data));


POST
________________________________________________________________________________________
Método	Endpoint	Descrição
POST	/checkout	Simula o processo de compra. Retorna um ID de pedido falso (orderId).


Exemplo de uso com fetch:

javascript
fetch('https://eplay-fake-json.vercel.app/api/checkout', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ /* dados da compra */ })
})
  .then(res => res.json())
  .then(data => console.log(data)); // Retorna: { orderId: "fake_order_12345..." }
```
_______________________________________________________________________________________

## Estrutura do Projeto
package.json: Define as configurações do projeto e scripts. A linha "type": "module" é crucial para que os import/export funcionem.

api/db.js: Atua como o nosso banco de dados. Exporta um objeto JavaScript com todos os dados dos jogos.

api/[...slug].js: O coração da API. É uma Serverless Function "catch-all" que interceta todos os pedidos para /api/, lê o URL, e devolve os dados correspondentes do db.js.

# Como Utilizar no Frontend (RTK Query)
### Para integrar esta API com a sua aplicação, configure o baseUrl no seu serviço do RTK Query:

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://eplay-fake-json.vercel.app/api'
  }),
  endpoints: (builder) => ({
    // Seus endpoints vêm aqui!
  })
})
```
