// Este arquivo funciona como um banco de dados falso (mock) para a aplicação EPLAY.
// Ele exporta um array de objetos, onde cada objeto representa um jogo.
// As imagens são puxadas diretamente da CDN do Steam para garantir que funcionem.

const data = [
  // JOGO DESTAQUE (SEMPRE SERÁ O PRIMEIRO DA LISTA)
  {
    id: 1,
    name: 'Ghostrunner',
    description:
      'Ghostrunner oferece uma experiência única para um jogador: combate acelerado e violento, e um cenário original que mistura ficção científica com temas pós-apocalípticos. O jogo conta a história de um mundo que já acabou e de seus habitantes, que lutam para sobreviver.',
    release_date: '2020-10-27T00:00:00.000Z',
    prices: {
      discount: 10,
      old: 179.9,
      current: 161.91
    },
    details: {
      category: 'Ação',
      system: 'Steam',
      developer: 'One More Level',
      publisher: '505 Games',
      languages: ['Português brasileiro', 'Inglês', 'Espanhol']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1139900/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1139900/header.jpg',
      gallery: [
        {
          type: 'image',
          url: 'https://cdn.akamai.steamstatic.com/steam/apps/1139900/ss_bf22b43b69238e858551a44c7944f786d1361b7d.1920x1080.jpg'
        },
        {
          type: 'image',
          url: 'https://cdn.akamai.steamstatic.com/steam/apps/1139900/ss_c61b3ec325b30a91f46f334a170a49852294e5a5.1920x1080.jpg'
        },
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/bzoiG0aL9gQ'
        }
      ]
    }
  },

  // --- SEÇÃO PROMOÇÕES (8 JOGOS) ---
  {
    id: 2,
    name: 'EA SPORTS FC 24',
    description:
      'O EA SPORTS FC™ 24 traz para você o Jogo de Todo Mundo, a experiência mais autêntica de futebol de todos os tempos com HyperMotionV, PlayStyles otimizada pela Opta e uma Frostbite™ Engine aprimorada.',
    release_date: '2023-09-29T00:00:00.000Z',
    prices: {
      discount: 20,
      old: 359.0,
      current: 287.2
    },
    details: {
      category: 'Esporte',
      system: 'Steam',
      developer: 'EA Canada',
      publisher: 'Electronic Arts',
      languages: ['Português brasileiro', 'Inglês', 'Espanhol', 'Italiano']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg',
      gallery: []
    }
  },
  {
    id: 3,
    name: 'The Elder Scrolls V: Skyrim',
    description:
      'Vencedor de mais de 200 prêmios de Jogo do Ano, Skyrim Special Edition traz a fantasia épica à vida com detalhes impressionantes. A Special Edition inclui o jogo aclamado pela crítica e complementos com todos os novos recursos.',
    release_date: '2016-10-27T00:00:00.000Z',
    prices: {
      discount: 75,
      old: 199.9,
      current: 49.9
    },
    details: {
      category: 'RPG',
      system: 'Steam',
      developer: 'Bethesda Game Studios',
      publisher: 'Bethesda Softworks',
      languages: ['Inglês', 'Japonês', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/489830/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg',
      gallery: []
    }
  },
  {
    id: 4,
    name: 'Street Fighter 6',
    description:
      'Street Fighter 6, a próxima evolução da série, chega com novas funcionalidades de jogabilidade, bem como visuais melhorados em todos os aspetos do jogo.',
    release_date: '2023-06-01T00:00:00.000Z',
    prices: {
      discount: 15,
      old: 249.0,
      current: 211.65
    },
    details: {
      category: 'Luta',
      system: 'Steam',
      developer: 'CAPCOM',
      publisher: 'CAPCOM',
      languages: ['Inglês', 'Japonês', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1364780/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg',
      gallery: []
    }
  },
  {
    id: 5,
    name: 'Farming Simulator 22',
    description:
      'Crie sua fazenda e deixe os bons tempos crescerem! Colha, cuide dos animais, gerencie a produção e enfrente os desafios das estações.',
    release_date: '2021-11-21T00:00:00.000Z',
    prices: {
      discount: 50,
      old: 159.9,
      current: 79.95
    },
    details: {
      category: 'Simulação',
      system: 'Steam',
      developer: 'Giants Software',
      publisher: 'Focus Entertainment',
      languages: ['Inglês', 'Alemão', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1248130/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1248130/header.jpg',
      gallery: []
    }
  },
  {
    id: 6,
    name: 'Ready Or Not',
    description:
      'Ready or Not é um jogo de tiro tático em primeira pessoa, intenso e imersivo, que retrata um mundo moderno em que as forças policiais da SWAT são chamadas para controlar situações de confronto e hostilidade.',
    release_date: '2023-12-13T00:00:00.000Z',
    prices: {
      discount: 25,
      old: 199.9,
      current: 149.9
    },
    details: {
      category: 'Ação',
      system: 'Steam',
      developer: 'VOID Interactive',
      publisher: 'VOID Interactive',
      languages: ['Inglês', 'Russo', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1144200/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1144200/header.jpg',
      gallery: []
    }
  },
  {
    id: 7,
    name: 'GRID Legends',
    description:
      'GRID Legends oferece automobilismo emocionante em todo o mundo. Crie as corridas dos seus sonhos, participe de corridas multiplayer ao vivo, faça parte do drama em uma história de produção virtual imersiva e abrace a sensação de corridas espetaculares.',
    release_date: '2022-02-24T00:00:00.000Z',
    prices: {
      discount: 40,
      old: 249.0,
      current: 149.4
    },
    details: {
      category: 'Esporte',
      system: 'Steam',
      developer: 'Codemasters',
      publisher: 'Electronic Arts',
      languages: ['Inglês', 'Espanhol', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1301340/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1301340/header.jpg',
      gallery: []
    }
  },
  {
    id: 8,
    name: 'Starfield',
    description:
      'Starfield é o primeiro universo novo em mais de 25 anos da Bethesda Game Studios, os criadores premiados de The Elder Scrolls V: Skyrim e Fallout 4. Neste RPG de última geração ambientado entre as estrelas, crie qualquer personagem que você quiser e explore com liberdade incomparável.',
    release_date: '2023-09-05T00:00:00.000Z',
    prices: {
      discount: 10,
      old: 299.0,
      current: 269.1
    },
    details: {
      category: 'RPG',
      system: 'Steam',
      developer: 'Bethesda Game Studios',
      publisher: 'Bethesda Softworks',
      languages: ['Inglês', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg',
      gallery: []
    }
  },

  // --- SEÇÃO EM BREVE (8 JOGOS) ---
  {
    id: 9,
    name: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
    description:
      'Descubra a Zona de Exclusão de Chornobyl cheia de inimigos perigosos, anomalias mortais e artefatos poderosos. Desvende sua própria história épica enquanto viaja para o Coração de Chornobyl.',
    release_date: '2025-12-05T00:00:00.000Z', // Data fictícia, jogo real
    prices: {
      discount: null,
      old: null,
      current: 299.9
    },
    details: {
      category: 'RPG',
      system: 'Steam',
      developer: 'GSC Game World',
      publisher: 'GSC Game World',
      languages: ['Inglês', 'Ucraniano', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1643320/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1643320/header.jpg',
      gallery: []
    }
  },
  {
    id: 10,
    name: 'Black Myth: Wukong',
    description:
      'Black Myth: Wukong é um RPG de ação com raízes na mitologia chinesa. A história é baseada em A Jornada para o Oeste, um dos Quatro Grandes Romances Clássicos da literatura chinesa.',
    release_date: '2025-11-12T00:00:00.000Z', // Data fictícia, jogo real
    prices: {
      discount: null,
      old: null,
      current: 349.9
    },
    details: {
      category: 'Ação',
      system: 'Steam',
      developer: 'Game Science',
      publisher: 'Game Science',
      languages: ['Chinês', 'Inglês']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1818120/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1818120/header.jpg',
      gallery: []
    }
  },
  {
    id: 11,
    name: 'THE KING OF FIGHTERS XV',
    description:
      'SHATTER ALL EXPECTATIONS! Transcend seus limites com KOF XV!',
    release_date: '2025-09-25T00:00:00.000Z', // Data fictícia, jogo real
    prices: {
      discount: null,
      old: null,
      current: 299.9
    },
    details: {
      category: 'Luta',
      system: 'Steam',
      developer: 'SNK CORPORATION',
      publisher: 'SNK CORPORATION',
      languages: ['Japonês', 'Inglês', 'Espanhol', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1498570/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1498570/header.jpg',
      gallery: []
    }
  },
  {
    id: 12,
    name: 'Cities: Skylines II',
    description:
      'Construa uma cidade do zero e a transforme em uma metrópole próspera que só você pode imaginar. Esta é uma construção de mundo em uma escala nunca antes experimentada.',
    release_date: '2025-10-10T00:00:00.000Z', // Data fictícia, jogo real
    prices: {
      discount: null,
      old: null,
      current: 249.9
    },
    details: {
      category: 'Simulação',
      system: 'Steam',
      developer: 'Colossal Order Ltd.',
      publisher: 'Paradox Interactive',
      languages: ['Inglês', 'Alemão', 'Francês', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/949230/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/949230/header.jpg',
      gallery: []
    }
  },
  {
    id: 13,
    name: 'TopSpin 2K25',
    description:
      'Viaje pelo mundo como um profissional em ascensão, enfrente os maiores nomes do Tênis e domine a quadra central no Aberto da Austrália, Roland-Garros, Wimbledon e no Aberto dos EUA.',
    release_date: '2026-01-20T00:00:00.000Z', // Data fictícia, jogo real
    prices: {
      discount: null,
      old: null,
      current: 299.9
    },
    details: {
      category: 'Esporte',
      system: 'Steam',
      developer: 'Hangar 13',
      publisher: '2K',
      languages: ['Inglês', 'Francês', 'Espanhol', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/2320410/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2320410/header.jpg',
      gallery: []
    }
  },
  {
    id: 14,
    name: 'Dragon\'s Dogma 2',
    description:
      'Dragon\'s Dogma é um RPG de ação para um jogador movido por narrativa, que desafia os jogadores a escolherem sua própria experiência – desde a aparência de seus Nascen, suas vocações, seus aliados, até a forma de abordar diferentes situações e mais.',
    release_date: '2025-12-05T00:00:00.000Z', // Data fictícia, jogo real
    prices: {
      discount: null,
      old: null,
      current: 339.0
    },
    details: {
      category: 'RPG',
      system: 'Steam',
      developer: 'CAPCOM',
      publisher: 'CAPCOM',
      languages: ['Japonês', 'Inglês', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/2054970/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2054970/header.jpg',
      gallery: []
    }
  },
  {
    id: 15,
    name: 'Neon White',
    description:
      'Neon White é um jogo de ação em primeira pessoa ultrarrápido sobre exterminar demônios no Céu. Você é White, um assassino do Inferno que compete com outros matadores de demônios por uma chance de viver permanentemente no Céu.',
    release_date: '2025-11-22T00:00:00.000Z', // Data fictícia, jogo real
    prices: {
      discount: null,
      old: null,
      current: 189.9
    },
    details: {
      category: 'Ação',
      system: 'Steam',
      developer: 'Angel Matrix',
      publisher: 'Annapurna Interactive',
      languages: ['Inglês', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1533420/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1533420/header.jpg',
      gallery: []
    }
  },
  {
    id: 16,
    name: 'Kerbal Space Program 2',
    description:
      'Kerbal Space Program 2 é a sequência do aclamado simulador de voo espacial Kerbal Space Program. Entre na próxima geração de aventura espacial com novas peças, visuais deslumbrantes, interface e mapa totalmente redesenhados, e novos ambientes ricos para explorar.',
    release_date: '2026-02-15T00:00:00.000Z', // Data fictícia, jogo real
    prices: {
      discount: null,
      old: null,
      current: 199.9
    },
    details: {
      category: 'Simulação',
      system: 'Steam',
      developer: 'Intercept Games',
      publisher: 'Private Division',
      languages: ['Inglês', 'Português brasileiro']
    },
    media: {
      thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/954850/capsule_616x353.jpg',
      cover: 'https://cdn.akamai.steamstatic.com/steam/apps/954850/header.jpg',
      gallery: []
    }
  },

  // --- DADOS ADICIONAIS PARA COMPLETAR AS CATEGORIAS (8 JOGOS POR CATEGORIA) ---

  // +Jogos de AÇÃO
  {
    id: 17,
    name: 'HELLDIVERS 2',
    description: 'A última linha de ataque da Galáxia. Aliste-se nos Helldivers e junte-se à luta pela liberdade em uma galáxia hostil em um jogo de tiro em terceira pessoa rápido, frenético e feroz.',
    release_date: '2024-02-08T00:00:00.000Z', prices: { discount: null, old: null, current: 199.5 },
    details: { category: 'Ação', system: 'Steam', developer: 'Arrowhead Game Studios', publisher: 'PlayStation PC', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/553850/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/553850/header.jpg', gallery: [] }
  },
  {
    id: 18,
    name: 'Horizon Forbidden West',
    description: 'Junte-se a Aloy para desbravar o Oeste Proibido, uma fronteira perigosa que esconde novas e misteriosas ameaças. Esta Edição Completa permite que você desfrute do aclamado Horizon Forbidden West na íntegra com conteúdo bônus.',
    release_date: '2024-03-21T00:00:00.000Z', prices: { discount: null, old: null, current: 249.9 },
    details: { category: 'Ação', system: 'Steam', developer: 'Guerrilla Games', publisher: 'PlayStation PC', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1749890/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1749890/header.jpg', gallery: [] }
  },
  {
    id: 19,
    name: 'Warframe',
    description: 'Desperte como um guerreiro imparável e lute ao lado de seus amigos neste jogo de ação online gratuito com base em histórias.',
    release_date: null, prices: { discount: null, old: null, current: 0.0 },
    details: { category: 'Ação', system: 'Steam', developer: 'Digital Extremes', publisher: 'Digital Extremes', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/230410/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/230410/header.jpg', gallery: [] }
  },
  {
    id: 20,
    name: 'Destiny 2',
    description: 'Mergulhe no mundo de Destiny 2 para explorar os mistérios do sistema solar e vivenciar um combate de tiro em primeira pessoa responsivo.',
    release_date: null, prices: { discount: null, old: null, current: 0.0 },
    details: { category: 'Ação', system: 'Steam', developer: 'Bungie', publisher: 'Bungie', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1085660/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1085660/header.jpg', gallery: [] }
  },

  // +Jogos de ESPORTE
  {
    id: 22,
    name: 'NBA 2K24',
    description: 'Reúna sua equipe e experimente o passado, presente e futuro da cultura do basquete em NBA 2K24.',
    release_date: '2023-09-07T00:00:00.000Z', prices: { discount: null, old: null, current: 299.9 },
    details: { category: 'Esporte', system: 'Steam', developer: 'Visual Concepts', publisher: '2K', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/2338770/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2338770/header.jpg', gallery: [] }
  },
  {
    id: 23,
    name: 'Steep',
    description: 'Desafie e domine as montanhas mais épicas do mundo em esquis, wingsuits, snowboards e parapentes. Vá sozinho ou jogue lado a lado com outros jogadores.',
    release_date: '2016-12-02T00:00:00.000Z', prices: { discount: null, old: null, current: 89.99 },
    details: { category: 'Esporte', system: 'Steam', developer: 'Ubisoft Annecy', publisher: 'Ubisoft', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/460920/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/460920/header.jpg', gallery: [] }
  },
  {
    id: 24,
    name: 'Forza Horizon 5',
    description: 'Sua maior aventura Horizon te espera! Explore as paisagens vibrantes e em constante evolução do México com uma ação de direção ilimitada e divertida.',
    release_date: '2021-11-08T00:00:00.000Z', prices: { discount: null, old: null, current: 249.0 },
    details: { category: 'Esporte', system: 'Steam', developer: 'Playground Games', publisher: 'Xbox Game Studios', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg', gallery: [] }
  },
  {
    id: 41,
    name: 'Shredders',
    description: 'Entre no evento de snowboard do ano na esperança de conseguir uma entrada selvagem para uma competição exclusiva. Para provar que você está à altura do desafio, domine a arte do park riding, buttering, rails e kickers massivos e ganhe seu lugar no mundo do snowboard.',
    release_date: null, prices: { discount: null, old: null, current: 99.9 },
    details: { category: 'Esporte', system: 'Steam', developer: 'FoamPunch', publisher: 'FoamPunch', languages: ['Inglês'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1874170/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1874170/header.jpg', gallery: [] }
  },

  // +Jogos de LUTA
  {
    id: 25,
    name: 'Mortal Kombat 1',
    description: 'Descubra um Universo renascido de Mortal Kombat criado pelo Deus do Fogo Liu Kang. Mortal Kombat 1 inaugura uma nova era da franquia icônica.',
    release_date: '2023-09-19T00:00:00.000Z', prices: { discount: null, old: null, current: 299.9 },
    details: { category: 'Luta', system: 'Steam', developer: 'NetherRealm Studios', publisher: 'Warner Bros. Games', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1971870/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1971870/header.jpg', gallery: [] }
  },
  {
    id: 27,
    name: 'TEKKEN 8',
    description: 'Prepare-se para o próximo capítulo da lendária franquia de jogos de luta, TEKKEN 8.',
    release_date: '2024-01-25T00:00:00.000Z', prices: { discount: null, old: null, current: 299.9 },
    details: { category: 'Luta', system: 'Steam', developer: 'Bandai Namco', publisher: 'Bandai Namco', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1778920/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1778920/header.jpg', gallery: [] }
  },
  {
    id: 28,
    name: 'GUILTY GEAR -STRIVE-',
    description: 'Prepare-se para o cheiro do jogo com Guilty Gear -Strive-! Mergulhe numa nova experiência de luta com gráficos de alta octanagem e jogabilidade gratificante.',
    release_date: '2021-06-11T00:00:00.000Z', prices: { discount: null, old: null, current: 189.9 },
    details: { category: 'Luta', system: 'Steam', developer: 'Arc System Works', publisher: 'Arc System Works', languages: ['Inglês', 'Japonês'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1384160/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1384160/header.jpg', gallery: [] }
  },
  {
    id: 29,
    name: 'SOULCALIBUR VI',
    description: 'Traga mais do que apenas seus punhos para o ringue! Apresentando novas mecânicas de batalha e os personagens mais robustos que a franquia já viu, SOULCALIBUR VI marca uma nova era da série histórica.',
    release_date: '2018-10-18T00:00:00.000Z', prices: { discount: null, old: null, current: 249.9 },
    details: { category: 'Luta', system: 'Steam', developer: 'BANDAI NAMCO', publisher: 'BANDAI NAMCO', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/544750/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/544750/header.jpg', gallery: [] }
  },

  // +Jogos de RPG
  {
    id: 31,
    name: 'ELDEN RING',
    description: 'Levante-se, Maculado, e seja guiado pela graça para brandir o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.',
    release_date: '2022-02-24T00:00:00.000Z', prices: { discount: null, old: null, current: 299.9 },
    details: { category: 'RPG', system: 'Steam', developer: 'FromSoftware Inc.', publisher: 'Bandai Namco', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg', gallery: [] }
  },
  {
    id: 32,
    name: 'The Witcher 3: Wild Hunt',
    description: 'Você é Geralt de Rívia, um mercenário caçador de monstros. À sua disposição, você tem todas as ferramentas: espadas afiadas, misturas letais, bestas e magias.',
    release_date: '2015-05-18T00:00:00.000Z', prices: { discount: 75, old: 199.9, current: 49.9 },
    details: { category: 'RPG', system: 'Steam', developer: 'CD PROJEKT RED', publisher: 'CD PROJEKT RED', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg', gallery: [] }
  },
  {
    id: 33,
    name: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto ambientado em Night City, uma megalópole obcecada por poder, glamour e modificações corporais.',
    release_date: '2020-12-09T00:00:00.000Z', prices: { discount: 50, old: 249.9, current: 124.95 },
    details: { category: 'RPG', system: 'Steam', developer: 'CD PROJEKT RED', publisher: 'CD PROJEKT RED', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg', gallery: [] }
  },
  {
    id: 34,
    name: 'FINAL FANTASY VII REMAKE INTERGRADE',
    description: 'Cloud Strife, um ex-membro da unidade de elite SOLDIER, chega à cidade de Midgar. O mundo está sob o controle da Shinra Electric Power Company, uma corporação sombria que explora a força vital do planeta como energia mako.',
    release_date: '2022-06-17T00:00:00.000Z', prices: { discount: null, old: null, current: 349.9 },
    details: { category: 'RPG', system: 'Steam', developer: 'Square Enix', publisher: 'Square Enix', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1462040/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1462040/header.jpg', gallery: [] }
  },

  // +Jogos de SIMULAÇÃO
  {
    id: 36,
    name: 'Microsoft Flight Simulator',
    description: 'De aviões leves a jatos de fuselagem larga, pilote aeronaves altamente detalhadas e precisas na próxima geração do Microsoft Flight Simulator.',
    release_date: '2020-08-17T00:00:00.000Z', prices: { discount: null, old: null, current: 249.9 },
    details: { category: 'Simulação', system: 'Steam', developer: 'Asobo Studio', publisher: 'Xbox Game Studios', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1250410/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1250410/header.jpg', gallery: [] }
  },
  {
    id: 37,
    name: 'The Sims 4',
    description: 'Solte a imaginação e crie um mundo de Sims que é uma expressão de você! Explore e personalize cada detalhe, dos Sims às suas casas e muito mais.',
    release_date: null, prices: { discount: 60, old: 159.9, current: 63.96 },
    details: { category: 'Simulação', system: 'Steam', developer: 'Maxis', publisher: 'Electronic Arts', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1222670/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1222670/header.jpg', gallery: [] }
  },
  {
    id: 38,
    name: 'Planet Zoo',
    description: 'Construa um mundo para a vida selvagem em Planet Zoo. Dos desenvolvedores de Planet Coaster e Zoo Tycoon, vem aí o simulador de zoológico definitivo.',
    release_date: '2019-11-05T00:00:00.000Z', prices: { discount: null, old: null, current: 199.9 },
    details: { category: 'Simulação', system: 'Steam', developer: 'Frontier Developments', publisher: 'Frontier Developments', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/703080/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/703080/header.jpg', gallery: [] }
  },
  {
    id: 39,
    name: 'Factorio',
    description: 'Factorio é um jogo sobre construir e criar fábricas automatizadas para produzir itens de complexidade crescente, dentro de um mundo 2D infinito.',
    release_date: '2020-08-14T00:00:00.000Z', prices: { discount: null, old: null, current: 99.9 },
    details: { category: 'Simulação', system: 'Steam', developer: 'Wube Software LTD.', publisher: 'Wube Software LTD.', languages: ['Inglês'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/427520/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/427520/header.jpg', gallery: [] }
  },
  {
    id: 40,
    name: 'Two Point Hospital',
    description: 'Projete hospitais incríveis, decore-os como quiser, cure doenças muito peculiares e gerencie uma equipe problemática enquanto expande sua organização de saúde por todo o Condado de Two Point.',
    release_date: '2018-08-29T00:00:00.000Z', prices: { discount: null, old: null, current: 129.9 },
    details: { category: 'Simulação', system: 'Steam', developer: 'Two Point Studios', publisher: 'SEGA', languages: ['Inglês', 'Português brasileiro'] },
    media: { thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/535930/capsule_616x353.jpg', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/535930/header.jpg', gallery: [] }
  }
];

export default data;