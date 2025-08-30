# API de Simulação para o Projeto E-Play

Este repositório contém o código para uma API de simulação (mock) criada para servir dados a um frontend de uma loja de jogos. A API foi desenvolvida com JavaScript e implementada como uma Serverless Function na Vercel.

## URL da API

A API está disponível no seguinte endereço:

**Base URL:** `https://eplay-fake-json.vercel.app/api/eplay`

## Endpoints Disponíveis

A API responde aos seguintes endpoints, baseados no ficheiro `api/db.js`.

### GET

| Método | Endpoint              | Descrição                                    |
|--------|-----------------------|----------------------------------------------|
| GET    | `api/eplay/destaque`  | Retorna o jogo em destaque.                  |
| GET    | `api/eplay/promocoes` | Retorna uma lista de jogos em promoção.      |
| GET    | `api/eplay/em-breve`  | Retorna uma lista de jogos a serem lançados. |
| GET    | `api/eplay/acao`      | Retorna uma lista de jogos de ação.          |
| GET    | `api/eplay/esportes`  | Retorna uma lista de jogos de desporto.      |
| GET    | `api/eplay/simulacao` | Retorna uma lista de jogos de simulação.     |
| GET    | `api/eplay/luta`      | Retorna uma lista de jogos de luta.          |
| GET    | `api/eplay/rpg`       | Retorna uma lista de jogos de RPG.           |
| GET    | `api/eplay/jogos/{id}`| Retorna os detalhes de um jogo específico.   |

Exemplo de uso com `fetch`:

```javascript
fetch('https://eplay-fake-json.vercel.app/api/eplay/promocoes')
  .then(res => res.json())
  .then(data => console.log(data));


POST
________________________________________________________________________________________
Método	Endpoint	Descrição
POST	/checkout	Simula o processo de compra. Retorna um ID de pedido falso (orderId).


Exemplo de uso com fetch:

javascript
fetch('https://eplay-fake-json.vercel.app/api/eplay/checkout', {
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

api/[...slug].js: O coração da API. É uma Serverless Function "catch-all" que chama todos os pedidos para /api/, lê o URL, e devolve os dados correspondentes do db.js.

# Como Utilizar no Frontend (RTK Query)
### Para integrar esta API com a sua aplicação, configure o baseUrl no seu serviço do RTK Query:

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://eplay-fake-json.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    // Seus endpoints vêm aqui!
  })
})
```
