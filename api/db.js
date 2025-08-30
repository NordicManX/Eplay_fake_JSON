// db.js - Versão Revisada com links de imagem corrigidos

const data = [
  {
    id: 1,
    name: 'Ghostrunner',
    description: 'Ghostrunner oferece uma experiência única para um jogador: combate acelerado e violento, e um cenário original que mistura ficção científica com temas pós-apocalípticos.',
    release_date: '2020-10-27T00:00:00.000Z',
    prices: { discount: 10, old: 179.9, current: 161.91 },
    details: { category: 'Ação', system: 'Steam', developer: 'One More Level', publisher: '505 Games', languages: ['Português brasileiro', 'Inglês', 'Espanhol'] },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1139900/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1139900/header.jpg',
      gallery: [{ type: 'image', url: 'https://cdn.akamai.steamstatic.com/steam/apps/1139900/ss_bf22b43b69238e858551a44c7944f786d1361b7d.1920x1080.jpg' }, { type: 'image', url: 'https://cdn.akamai.steamstatic.com/steam/apps/1139900/ss_c61b3ec325b30a91f46f334a170a49852294e5a5.1920x1080.jpg' }, { type: 'video', url: 'https://www.youtube.com/embed/bzoiG0aL9gQ' }]
    }
  },
  {
    id: 2,
    name: 'EA SPORTS FC 24',
    description: 'O EA SPORTS FC™ 24 traz para você o Jogo de Todo Mundo, a experiência mais autêntica de futebol de todos os tempos.',
    release_date: '2023-09-29T00:00:00.000Z',
    prices: { discount: 20, old: 359.0, current: 287.2 },
    details: { category: 'Esporte', system: 'Steam', developer: 'EA Canada', publisher: 'Electronic Arts', languages: ['Português brasileiro', 'Inglês', 'Espanhol', 'Italiano'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg', gallery: [] }
  },
  {
    id: 3,
    name: 'The Elder Scrolls V: Skyrim',
    description: 'Vencedor de mais de 200 prêmios de Jogo do Ano, Skyrim Special Edition traz a fantasia épica à vida com detalhes impressionantes.',
    release_date: '2016-10-27T00:00:00.000Z',
    prices: { discount: 75, old: 199.9, current: 49.9 },
    details: { category: 'RPG', system: 'Steam', developer: 'Bethesda Game Studios', publisher: 'Bethesda Softworks', languages: ['Inglês', 'Japonês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/489830/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg', gallery: [] }
  },
  {
    id: 4,
    name: 'Street Fighter 6',
    description: 'Street Fighter 6, a próxima evolução da série, chega com novas funcionalidades de jogabilidade e visuais melhorados.',
    release_date: '2023-06-01T00:00:00.000Z',
    prices: { discount: 15, old: 249.0, current: 211.65 },
    details: { category: 'Luta', system: 'Steam', developer: 'CAPCOM', publisher: 'CAPCOM', languages: ['Inglês', 'Japonês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1364780/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg', gallery: [] }
  },
  {
    id: 5,
    name: 'Farming Simulator 22',
    description: 'Crie sua fazenda e deixe os bons tempos crescerem! Colha, cuide dos animais, gerencie a produção e enfrente os desafios das estações.',
    release_date: '2021-11-21T00:00:00.000Z',
    prices: { discount: 50, old: 159.9, current: 79.95 },
    details: { category: 'Simulação', system: 'Steam', developer: 'Giants Software', publisher: 'Focus Entertainment', languages: ['Inglês', 'Alemão', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1248130/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1248130/header.jpg', gallery: [] }
  },
  {
    id: 6,
    name: 'Ready Or Not',
    description: 'Ready or Not é um jogo de tiro tático em primeira pessoa, intenso e imersivo, que retrata um mundo moderno.',
    release_date: '2023-12-13T00:00:00.000Z',
    prices: { discount: 25, old: 199.9, current: 149.9 },
    details: { category: 'Ação', system: 'Steam', developer: 'VOID Interactive', publisher: 'VOID Interactive', languages: ['Inglês', 'Russo', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1144200/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1144200/header.jpg', gallery: [] }
  },
  {
    id: 7,
    name: 'GRID Legends',
    description: 'GRID Legends oferece automobilismo emocionante em todo o mundo. Crie as corridas dos seus sonhos e participe de corridas multiplayer ao vivo.',
    release_date: '2022-02-24T00:00:00.000Z',
    prices: { discount: 40, old: 249.0, current: 149.4 },
    details: { category: 'Esporte', system: 'Steam', developer: 'Codemasters', publisher: 'Electronic Arts', languages: ['Inglês', 'Espanhol', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1301340/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1301340/header.jpg', gallery: [] }
  },
  {
    id: 8,
    name: 'Starfield',
    description: 'Starfield é o primeiro universo novo em mais de 25 anos da Bethesda Game Studios, os criadores de The Elder Scrolls V: Skyrim e Fallout 4.',
    release_date: '2023-09-05T00:00:00.000Z',
    prices: { discount: 10, old: 299.0, current: 269.1 },
    details: { category: 'RPG', system: 'Steam', developer: 'Bethesda Game Studios', publisher: 'Bethesda Softworks', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg', gallery: [] }
  },
  {
    id: 9,
    name: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
    description: 'Descubra a Zona de Exclusão de Chornobyl cheia de inimigos perigosos, anomalias mortais e artefatos poderosos.',
    release_date: '2025-12-05T00:00:00.000Z',
    prices: { discount: null, old: null, current: 299.9 },
    details: { category: 'RPG', system: 'Steam', developer: 'GSC Game World', publisher: 'GSC Game World', languages: ['Inglês', 'Ucraniano', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1643320/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1643320/header.jpg', gallery: [] }
  },
  {
    id: 10,
    name: 'Black Myth: Wukong',
    description: 'Black Myth: Wukong é um RPG de ação com raízes na mitologia chinesa, baseado em A Jornada para o Oeste.',
    release_date: '2025-11-12T00:00:00.000Z',
    prices: { discount: null, old: null, current: 349.9 },
    details: { category: 'Ação', system: 'Steam', developer: 'Game Science', publisher: 'Game Science', languages: ['Chinês', 'Inglês'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1818120/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1818120/header.jpg', gallery: [] }
  },
  {
    id: 11,
    name: 'THE KING OF FIGHTERS XV',
    description: 'SHATTER ALL EXPECTATIONS! Transcend seus limites com KOF XV!',
    release_date: '2025-09-25T00:00:00.000Z',
    prices: { discount: null, old: null, current: 299.9 },
    details: { category: 'Luta', system: 'Steam', developer: 'SNK CORPORATION', publisher: 'SNK CORPORATION', languages: ['Japonês', 'Inglês', 'Espanhol', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1498570/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1498570/header.jpg', gallery: [] }
  },
  {
    id: 12,
    name: 'Cities: Skylines II',
    description: 'Construa uma cidade do zero e a transforme em uma metrópole próspera que só você pode imaginar.',
    release_date: '2025-10-10T00:00:00.000Z',
    prices: { discount: null, old: null, current: 249.9 },
    details: { category: 'Simulação', system: 'Steam', developer: 'Colossal Order Ltd.', publisher: 'Paradox Interactive', languages: ['Inglês', 'Alemão', 'Francês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/949230/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/949230/header.jpg', gallery: [] }
  },
  {
    id: 13,
    name: 'TopSpin 2K25',
    description: 'Viaje pelo mundo como um profissional em ascensão, enfrente os maiores nomes do Tênis e domine a quadra central.',
    release_date: '2026-01-20T00:00:00.000Z',
    prices: { discount: null, old: null, current: 299.9 },
    details: { category: 'Esporte', system: 'Steam', developer: 'Hangar 13', publisher: '2K', languages: ['Inglês', 'Francês', 'Espanhol', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/2320410/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2320410/header.jpg', gallery: [] }
  },
  {
    id: 14,
    name: 'Dragon\'s Dogma 2',
    description: 'Dragon\'s Dogma 2 é um RPG de ação para um jogador movido por narrativa que desafia os jogadores a escolherem sua própria experiência.',
    release_date: '2025-12-05T00:00:00.000Z',
    prices: { discount: null, old: null, current: 339.0 },
    details: { category: 'RPG', system: 'Steam', developer: 'CAPCOM', publisher: 'CAPCOM', languages: ['Japonês', 'Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/2054970/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2054970/header.jpg', gallery: [] }
  },
  {
    id: 15,
    name: 'Hades II',
    description: 'Abra caminho pelo Submundo da mitologia grega e além nesta sequência encantadora do roguelike aclamado pela crítica.',
    release_date: '2026-02-15T00:00:00.000Z',
    prices: { discount: null, old: null, current: 199.9 },
    details: { category: 'Ação', system: 'Steam', developer: 'Supergiant Games', publisher: 'Supergiant Games', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1145350/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1145350/header.jpg', gallery: [] }
  }
];

export default data;