import React, { useEffect, useState } from "react";
import Loading from "../common/loading";
import HeroContainer, { ImageContainer } from "./hero.styles";

interface ITrailer {
  type: string;
  url: string;
  embeddedUrl: string;
}

interface IThumb {
  url: string;
  type: string;
}

interface IMovie {
  id: string;
  title: string;
  city: string;
  siteURL: string;
  images: IThumb[];
  genres: string[];
  trailers: ITrailer[];
}

interface IEvent {
  event: IMovie;
}

function Hero() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IEvent[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<number>(0);
  const [featuredMovieUrl, setFeaturedMovieUrl] = useState<string>("");
  console.log("loading", loading);
  console.log("movies", movies);
  console.log("featuredMovie", featuredMovie);
  console.log("featuredMovieUrl", featuredMovieUrl);

  async function fetchHeroMovie() {
    try {
      // const result = await axios.get(
      //   "https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home"
      // );
      const mockedMovies = [
        {
          event: {
            id: "24405",
            title: "Spencer ",
            originalTitle: "Spencer ",
            movieIdUrl: "",
            ancineId: "E2100412100000",
            countryOrigin: "Reino Unido, Alemanha, Chile",
            priority: 1,
            contentRating: "12 anos",
            duration: "116",
            rating: 0.0,
            synopsis:
              "O filme retrata  Diana, Princesa de Gales, e segue a decisão dela de terminar seu casamento com Charles, Príncipe de Gales, para deixar de ser membro da Família Real Britânica.",
            cast: "Kristen Stewart, Sean Harris, Sally Hawkins",
            director: "Pablo Larraín",
            distributor: "Diamond Films",
            inPreSale: false,
            isReexhibition: false,
            urlKey: "spencer",
            isPlaying: true,
            countIsPlaying: 253,
            premiereDate: {
              localDate: "2022-01-27T00:00:00+00:00",
              isToday: false,
              dayOfWeek: "quinta-feira",
              dayAndMonth: "27/01",
              hour: "00:00",
              year: "2022",
            },
            creationDate: "0001-01-01T00:00:00Z",
            city: "São Paulo",
            siteURL: "https://www.ingresso.com/sao-paulo/home/filmes/spencer",
            nationalSiteURL:
              "https://www.ingresso.com/filme/spencer?city=sao-paulo&partnership=home",
            images: [
              {
                url: "https://ingresso-a.akamaihd.net/prd/img/movie/spencer/1e872b72-a77c-4b29-9013-ed7ba8d9e432.jpg",
                type: "PosterPortrait",
              },
              {
                url: "https://ingresso-a.akamaihd.net/prd/img/movie/spencer/df55cf69-0439-4d74-ae14-a906e625ea24.jpg",
                type: "PosterHorizontal",
              },
            ],
            genres: ["Drama"],
            ratingDescriptors: [
              "Drogas Ilíctas",
              "Linguagem Imprópria",
              "Temas Sensíveis",
            ],
            completeTags: [],
            tags: [],
            trailers: [
              {
                type: "Youtube",
                url: "https://www.youtube.com/watch?v=O4nVmmdQBvg",
                embeddedUrl: "//www.youtube.com/embed/O4nVmmdQBvg",
              },
              {
                type: "Youtube",
                url: "https://www.youtube.com/watch?v=yS1oP3VaXQA",
                embeddedUrl: "//www.youtube.com/embed/yS1oP3VaXQA",
              },
            ],
            boxOfficeId: "28072",
            partnershipType: "",
            rottenTomatoe: {
              id: "c77201ee-ebe3-3894-9965-6cab38f5100f",
              criticsRating: "Certified",
              criticsScore: "83",
              audienceRating: "Spilled",
              audienceScore: "52",
              originalUrl: "https://www.rottentomatoes.com/m/spencer_2021",
            },
          },
          showtimes: [
            {
              id: "954",
              name: "Cinemark Móoca",
              address: "Rua  Cap Pacheco e Chaves",
              addressComplement: "Mooca Plaza",
              number: "313",
              urlKey: "cinemark-mooca",
              neighborhood: "Vila Prudente",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinemark-mooca",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinemark-mooca?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "",
              rooms: [
                {
                  name: "Sala 4",
                  type: null,
                  sessions: [
                    {
                      id: "67485651",
                      price: 39.9,
                      room: "Sala 4",
                      type: ["Legendado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "3763",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67485651/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.57975,
                lng: -46.59441,
              },
              operationPolicies: [],
            },
            {
              id: "120",
              name: "Cinemark Market Place",
              address: "Av. Dr.Chucri Zaidan",
              addressComplement: "1º andar torrell",
              number: "920",
              urlKey: "cinemark-market-place",
              neighborhood: "Morumbi",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinemark-market-place",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinemark-market-place?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 1",
                  type: null,
                  sessions: [
                    {
                      id: "67489210",
                      price: 46.74,
                      room: "Sala 1",
                      type: ["Legendado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "4581961",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67489210/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.62167,
                lng: -46.69952,
              },
              operationPolicies: [],
            },
            {
              id: "1523",
              name: "Kinoplex Parque da Cidade",
              address: "Avenida das Nações Unidas",
              addressComplement: "LOJA 301",
              number: "14401",
              urlKey: "kinoplex-parque-da-cidade",
              neighborhood: "Chácara Santo Antônio (Zona Sul)",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/kinoplex-parque-da-cidade",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/kinoplex-parque-da-cidade?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 1",
                  type: null,
                  sessions: [
                    {
                      id: "67512304",
                      price: 50.16,
                      room: "Sala 1",
                      type: ["Legendado", "Vip"],
                      types: [
                        {
                          id: 2,
                          name: "Vip",
                          alias: "VIP",
                          display: true,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "4583241",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67512304/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: 0.0,
                lng: 0.0,
              },
              operationPolicies: [],
            },
            {
              id: "678",
              name: "UCI Santana",
              address: "Rua Conselheiro Moreira de Barros",
              addressComplement: "LUC 4000",
              number: "2780",
              urlKey: "uci-santana",
              neighborhood: "Lauzane Paulista",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/uci-santana",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/uci-santana?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage:
                "\nInfelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 3",
                  type: null,
                  sessions: [
                    {
                      id: "67512367",
                      price: 38.76,
                      room: "Sala 3",
                      type: ["Dublado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Dublado",
                          alias: "DUB",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "4583284",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67512367/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.4831,
                lng: -46.64523,
              },
              operationPolicies: [],
            },
            {
              id: "1454",
              name: "PlayArte Splendor Paulista",
              address: "Rua Treze de Maio",
              addressComplement: "",
              number: "1947",
              urlKey: "playarte-splendor-paulista",
              neighborhood: "Bela Vista",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/playarte-splendor-paulista",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/playarte-splendor-paulista?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "",
              rooms: [
                {
                  name: "Sala 2",
                  type: null,
                  sessions: [
                    {
                      id: "67518635",
                      price: 50.16,
                      room: "Sala 2",
                      type: ["Legendado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "4582824",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67518635/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.57056,
                lng: -46.64353,
              },
              operationPolicies: [],
            },
          ],
        },
        {
          event: {
            id: "21550",
            title: "Eduardo e Mônica",
            originalTitle: "Eduardo e  Mônica",
            movieIdUrl: "",
            ancineId: "B2000096200000",
            countryOrigin: "Brasil",
            priority: 2,
            contentRating: "14 anos",
            duration: "118",
            rating: 0.0,
            synopsis:
              'Adaptação para o cinema da famosa canção "Eduardo e Mônica", composta por Renato Russo, sobre um casal que não tinha nada a ver um com o outro mas acabou se apaixonando perdidamente.',
            cast: "Gabriel Leone, Alice Braga",
            director: "Rene Sampaio",
            distributor: "Downtown Filmes",
            inPreSale: false,
            isReexhibition: false,
            urlKey: "eduardo-e-monica",
            isPlaying: true,
            countIsPlaying: 360,
            premiereDate: {
              localDate: "2022-01-20T00:00:00+00:00",
              isToday: false,
              dayOfWeek: "quinta-feira",
              dayAndMonth: "20/01",
              hour: "00:00",
              year: "2022",
            },
            creationDate: "0001-01-01T00:00:00Z",
            city: "São Paulo",
            siteURL:
              "https://www.ingresso.com/sao-paulo/home/filmes/eduardo-e-monica",
            nationalSiteURL:
              "https://www.ingresso.com/filme/eduardo-e-monica?city=sao-paulo&partnership=home",
            images: [
              {
                url: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/21550-cartaz.jpg",
                type: "PosterPortrait",
              },
              {
                url: "https://ingresso-a.akamaihd.net/prd/img/movie/eduardo-e-monica/ffcb7534-c1b7-4941-82dc-f2f431dcb330.jpg",
                type: "PosterHorizontal",
              },
            ],
            genres: ["Comédia Romântica"],
            ratingDescriptors: ["Conteúdo Sexual", "Drogas", "Nudez"],
            completeTags: [],
            tags: [],
            trailers: [
              {
                type: "Youtube",
                url: "https://www.youtube.com/watch?v=IoSR5tl1AAU",
                embeddedUrl: "//www.youtube.com/embed/IoSR5tl1AAU",
              },
            ],
            boxOfficeId: "28474",
            partnershipType: "",
            rottenTomatoe: null,
          },
          showtimes: [
            {
              id: "312",
              name: "Cinemark Center Norte",
              address: "Travessa Casalbuono",
              addressComplement: "Lj 503",
              number: "127",
              urlKey: "cinemark-center-norte",
              neighborhood: "Vila Guilherme",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinemark-center-norte",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinemark-center-norte?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "",
              rooms: [
                {
                  name: "Sala 2",
                  type: null,
                  sessions: [
                    {
                      id: "67486062",
                      price: 39.9,
                      room: "Sala 2",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "4575997",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67486062/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.51526,
                lng: -46.61755,
              },
              operationPolicies: [],
            },
            {
              id: "138",
              name: "Cinemark Shopping Metrô Santa Cruz",
              address: "R. Domingos de Moraes",
              addressComplement: "3º piso",
              number: "2564",
              urlKey: "cinemark-shopping-metro-santa-cruz",
              neighborhood: "Vila Mariana",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinemark-shopping-metro-santa-cruz",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinemark-shopping-metro-santa-cruz?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "",
              rooms: [
                {
                  name: "Sala 8",
                  type: null,
                  sessions: [
                    {
                      id: "67509677",
                      price: 41.04,
                      room: "Sala 8",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "501",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67509677/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.59875,
                lng: -46.63686,
              },
              operationPolicies: [],
            },
            {
              id: "330",
              name: "Cinema Reserva Cultural São Paulo",
              address: "Av. Paulista",
              addressComplement: "",
              number: "900",
              urlKey: "cinema-reserva-cultural-sao-paulo",
              neighborhood: "Bela Vista",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinema-reserva-cultural-sao-paulo",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinema-reserva-cultural-sao-paulo?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "",
              rooms: [
                {
                  name: "Sala 4",
                  type: null,
                  sessions: [
                    {
                      id: "67516350",
                      price: 47.88,
                      room: "Sala 4",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "4590734",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67516350/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.56498,
                lng: -46.65106,
              },
              operationPolicies: [],
            },
            {
              id: "675",
              name: "Espaço Itaú de Cinema - Pompéia",
              address: "Rua Palestra Itália",
              addressComplement: "",
              number: "500",
              urlKey: "espaco-itau-de-cinema-pompeia",
              neighborhood: "Água Branca",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/espaco-itau-de-cinema-pompeia",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/espaco-itau-de-cinema-pompeia?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage:
                "\nInfelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 5",
                  type: null,
                  sessions: [
                    {
                      id: "67522299",
                      price: 43.28,
                      room: "Sala 5",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "2359",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67522299/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.52787,
                lng: -46.68033,
              },
              operationPolicies: [],
            },
            {
              id: "1313",
              name: "Cinemark Shopping Cidade São Paulo",
              address: "Avenida Paulista",
              addressComplement: "Shopping Cidade São Paulo - 4 ANDAR",
              number: "1230",
              urlKey: "cinemark-shopping-cidade-sao-paulo",
              neighborhood: "Bela Vista",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinemark-shopping-cidade-sao-paulo",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinemark-shopping-cidade-sao-paulo?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "",
              rooms: [
                {
                  name: "Sala 5",
                  type: null,
                  sessions: [
                    {
                      id: "67491177",
                      price: 46.74,
                      room: "Sala 5",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:15:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:15",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:15:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:15",
                        year: "2022",
                      },
                      time: "21:15",
                      defaultSector: "6152",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67491177/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.56348,
                lng: -46.65266,
              },
              operationPolicies: [],
            },
          ],
        },
        {
          event: {
            id: "24190",
            title: "Homem-Aranha: Sem Volta para Casa",
            originalTitle: "Spider-Man: No Way Home",
            movieIdUrl: "",
            ancineId: "E2100453300000",
            countryOrigin: "Estados Unidos",
            priority: 3,
            contentRating: "12 anos",
            duration: "148",
            rating: 0.0,
            synopsis:
              "Peter Parker precisará lidar com as consequências da sua identidade como aracnídeo ter sido revelada pela reportagem do Clarim Diário. Incapaz de separar sua vida normal das aventuras de ser um super-herói, Parker pede ao Doutor Estranho para que todos esqueçam sua verdadeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa, forçando-o a descobrir o que realmente significa ser o Homem-Aranha.",
            cast: "Tom Holland, Zendaya, Marisa Tomei, Benedict Wong , Alfred Molina, Jamie Foxx, Willem Dafoe",
            director: "Jon Watts",
            distributor: "Sony Pictures",
            inPreSale: false,
            isReexhibition: false,
            urlKey: "homem-aranha-sem-volta-para-casa",
            isPlaying: true,
            countIsPlaying: 361,
            premiereDate: {
              localDate: "2021-12-16T00:00:00+00:00",
              isToday: false,
              dayOfWeek: "quinta-feira",
              dayAndMonth: "16/12",
              hour: "00:00",
              year: "2021",
            },
            creationDate: "0001-01-01T00:00:00Z",
            city: "São Paulo",
            siteURL:
              "https://www.ingresso.com/sao-paulo/home/filmes/homem-aranha-sem-volta-para-casa",
            nationalSiteURL:
              "https://www.ingresso.com/filme/homem-aranha-sem-volta-para-casa?city=sao-paulo&partnership=home",
            images: [
              {
                url: "https://ingresso-a.akamaihd.net/prd/img/movie/homem-aranha-sem-volta-para-casa/e08051a1-1dde-4158-a71e-c6050e790cd6.jpg",
                type: "PosterPortrait",
              },
              {
                url: "https://ingresso-a.akamaihd.net/prd/img/movie/homem-aranha-sem-volta-para-casa/1aa86484-1862-4f7d-8cc0-ce4eb5f9a328.jpg",
                type: "PosterHorizontal",
              },
            ],
            genres: ["Ação", "Aventura", "Fantasia"],
            ratingDescriptors: [],
            completeTags: [],
            tags: [],
            trailers: [
              {
                type: "Youtube",
                url: "https://www.youtube.com/watch?v=FDNNHh7TRN0",
                embeddedUrl: "//www.youtube.com/embed/FDNNHh7TRN0",
              },
            ],
            boxOfficeId: "28323",
            partnershipType: "",
            rottenTomatoe: {
              id: "37409a82-f3ab-3187-b0da-efeefa489456",
              criticsRating: "Certified",
              criticsScore: "93",
              audienceRating: "Upright",
              audienceScore: "98",
              originalUrl:
                "https://www.rottentomatoes.com/m/spider_man_no_way_home",
            },
          },
          showtimes: [
            {
              id: "349",
              name: "Cinemark Shopping Interlagos",
              address: "Av. Interlagos",
              addressComplement: "Loja 157A",
              number: "2255",
              urlKey: "cinemark-shopping-interlagos",
              neighborhood: "Vila Inglesa",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinemark-shopping-interlagos",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinemark-shopping-interlagos?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "",
              rooms: [
                {
                  name: "Sala 2",
                  type: null,
                  sessions: [
                    {
                      id: "67488830",
                      price: 33.06,
                      room: "Sala 2",
                      type: ["Dublado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Dublado",
                          alias: "DUB",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:40:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:40",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:40:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:40",
                        year: "2022",
                      },
                      time: "21:40",
                      defaultSector: "4580584",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67488830/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
                {
                  name: "Sala 7",
                  type: null,
                  sessions: [
                    {
                      id: "67488806",
                      price: 38.76,
                      room: "Sala 7",
                      type: ["Dublado", "3D"],
                      types: [
                        {
                          id: 4,
                          name: "3D",
                          alias: "3D",
                          display: true,
                        },
                        {
                          id: 0,
                          name: "Dublado",
                          alias: "DUB",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "4580723",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67488806/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.67579,
                lng: -46.67607,
              },
              operationPolicies: [],
            },
            {
              id: "1520",
              name: "PlayArte Multiplex - Ibirapuera ",
              address: "Av. Ibirapuera",
              addressComplement: "",
              number: "3103",
              urlKey: "playarte-multiplex-ibirapuera",
              neighborhood: "Indianópolis",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/playarte-multiplex-ibirapuera",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/playarte-multiplex-ibirapuera?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "SALA 6",
                  type: null,
                  sessions: [
                    {
                      id: "67516934",
                      price: 50.16,
                      room: "SALA 6",
                      type: ["Legendado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "4583246",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67516934/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.57056,
                lng: -46.64571,
              },
              operationPolicies: [],
            },
            {
              id: "130",
              name: "Espaço Itaú de Cinema - Frei Caneca",
              address: "R. Frei Caneca",
              addressComplement: "",
              number: "569",
              urlKey: "espaco-itau-de-cinema-frei-caneca",
              neighborhood: "Bela Vista",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/espaco-itau-de-cinema-frei-caneca",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/espaco-itau-de-cinema-frei-caneca?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 6",
                  type: null,
                  sessions: [
                    {
                      id: "67523040",
                      price: 43.28,
                      room: "Sala 6",
                      type: ["Legendado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:10:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:10",
                        year: "2022",
                      },
                      time: "21:10",
                      defaultSector: "436",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67523040/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.55416,
                lng: -46.65254,
              },
              operationPolicies: [],
            },
            {
              id: "120",
              name: "Cinemark Market Place",
              address: "Av. Dr.Chucri Zaidan",
              addressComplement: "1º andar torrell",
              number: "920",
              urlKey: "cinemark-market-place",
              neighborhood: "Morumbi",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinemark-market-place",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinemark-market-place?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 4",
                  type: null,
                  sessions: [
                    {
                      id: "67489106",
                      price: 46.74,
                      room: "Sala 4",
                      type: ["Legendado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:15:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:15",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:15:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:15",
                        year: "2022",
                      },
                      time: "21:15",
                      defaultSector: "4581959",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67489106/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
                {
                  name: "Sala 6",
                  type: null,
                  sessions: [
                    {
                      id: "67489111",
                      price: 46.74,
                      room: "Sala 6",
                      type: ["Legendado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:50:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:50",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:50:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:50",
                        year: "2022",
                      },
                      time: "21:50",
                      defaultSector: "4581964",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67489111/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.62167,
                lng: -46.69952,
              },
              operationPolicies: [],
            },
            {
              id: "137",
              name: "Cinemark Villa Lobos",
              address: "Av. das Nações Unidas",
              addressComplement: "Piso Lazer",
              number: "4777",
              urlKey: "cinemark-villa-lobos",
              neighborhood: "Lapa",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinemark-villa-lobos",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinemark-villa-lobos?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "",
              rooms: [
                {
                  name: "Sala 5",
                  type: null,
                  sessions: [
                    {
                      id: "67485986",
                      price: 75.23,
                      room: "Sala 5",
                      type: ["Legendado", "D-Box"],
                      types: [
                        {
                          id: 4096,
                          name: "D-Box",
                          alias: "D-BOX",
                          display: true,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:20:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:20",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:20:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:20",
                        year: "2022",
                      },
                      time: "21:20",
                      defaultSector: "4579290",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67485986/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.55092,
                lng: -46.72188,
              },
              operationPolicies: [],
            },
          ],
        },
        {
          event: {
            id: "23883",
            title: "Turma Da Mônica - Lições",
            originalTitle: "Turma Da Mônica - Lições",
            movieIdUrl: "",
            ancineId: "B2100496300000",
            countryOrigin: "Brasil",
            priority: 4,
            contentRating: "Livre",
            duration: "97",
            rating: 0.0,
            synopsis:
              "Mônica, Cebolinha, Magali e Cascão cometem um erro na escola. Agora, terão que encarar as suas consequências, e elas não serão poucas. Nesta nova jornada, a turma descobrirá o real valor e sentido da palavra amizade.",
            cast: "Giulia Benite , Kevin Vechiatto, Laura Rauseo, Gabriel Moreira , Monica Iozzi, Paulo Vilhena,, Fafá Rennó, Isabelle Drummond, Gustavo Merighi, Camila Brandão, Fernando Mais, Emilly Nayara, Lucas Infante, Laís Villela.",
            director: "Daniel Rezende",
            distributor: "Downtown Filmes",
            inPreSale: false,
            isReexhibition: false,
            urlKey: "turma-da-monica-licoes",
            isPlaying: true,
            countIsPlaying: 315,
            premiereDate: {
              localDate: "2021-12-30T00:00:00+00:00",
              isToday: false,
              dayOfWeek: "quinta-feira",
              dayAndMonth: "30/12",
              hour: "00:00",
              year: "2021",
            },
            creationDate: "0001-01-01T00:00:00Z",
            city: "São Paulo",
            siteURL:
              "https://www.ingresso.com/sao-paulo/home/filmes/turma-da-monica-licoes",
            nationalSiteURL:
              "https://www.ingresso.com/filme/turma-da-monica-licoes?city=sao-paulo&partnership=home",
            images: [
              {
                url: "https://ingresso-a.akamaihd.net/prd/img/movie/turma-da-monica-licoes/9e2ba4ff-04eb-4c7f-a855-180d25014ab4.jpg",
                type: "PosterPortrait",
              },
              {
                url: "https://ingresso-a.akamaihd.net/prd/img/movie/turma-da-monica-licoes/09fbe9fb-07c1-4115-a3b6-1915b0a860e9.jpg",
                type: "PosterHorizontal",
              },
            ],
            genres: ["Ação", "Aventura", "Infantil"],
            ratingDescriptors: [],
            completeTags: [],
            tags: [],
            trailers: [
              {
                type: "Youtube",
                url: "https://www.youtube.com/watch?v=c1tAF7uFMgo",
                embeddedUrl: "//www.youtube.com/embed/c1tAF7uFMgo",
              },
            ],
            boxOfficeId: "7739",
            partnershipType: "",
            rottenTomatoe: null,
          },
          showtimes: [
            {
              id: "131",
              name: "UCI Anália Franco",
              address: "Av. Regente Feijó",
              addressComplement: "Quadra A",
              number: "1759",
              urlKey: "uci-analia-franco",
              neighborhood: "Tatuapé",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/uci-analia-franco",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/uci-analia-franco?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 2",
                  type: null,
                  sessions: [
                    {
                      id: "67510572",
                      price: 45.6,
                      room: "Sala 2",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-29T13:05:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "13:05",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-29T13:05:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "13:05",
                        year: "2022",
                      },
                      time: "13:05",
                      defaultSector: "4583274",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67510572/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                    {
                      id: "67510575",
                      price: 45.6,
                      room: "Sala 2",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-29T17:30:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "17:30",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-29T17:30:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "17:30",
                        year: "2022",
                      },
                      time: "17:30",
                      defaultSector: "4583274",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67510575/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.56152,
                lng: -46.56271,
              },
              operationPolicies: [],
            },
            {
              id: "1313",
              name: "Cinemark Shopping Cidade São Paulo",
              address: "Avenida Paulista",
              addressComplement: "Shopping Cidade São Paulo - 4 ANDAR",
              number: "1230",
              urlKey: "cinemark-shopping-cidade-sao-paulo",
              neighborhood: "Bela Vista",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinemark-shopping-cidade-sao-paulo",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinemark-shopping-cidade-sao-paulo?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "",
              rooms: [
                {
                  name: "Sala 1",
                  type: null,
                  sessions: [
                    {
                      id: "67491162",
                      price: 46.74,
                      room: "Sala 1",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-29T13:20:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "13:20",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-29T13:20:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "13:20",
                        year: "2022",
                      },
                      time: "13:20",
                      defaultSector: "6148",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67491162/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.56348,
                lng: -46.65266,
              },
              operationPolicies: [],
            },
            {
              id: "675",
              name: "Espaço Itaú de Cinema - Pompéia",
              address: "Rua Palestra Itália",
              addressComplement: "",
              number: "500",
              urlKey: "espaco-itau-de-cinema-pompeia",
              neighborhood: "Água Branca",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/espaco-itau-de-cinema-pompeia",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/espaco-itau-de-cinema-pompeia?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage:
                "\nInfelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 8",
                  type: null,
                  sessions: [
                    {
                      id: "67522279",
                      price: 43.28,
                      room: "Sala 8",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-29T13:20:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "13:20",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-29T13:20:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "13:20",
                        year: "2022",
                      },
                      time: "13:20",
                      defaultSector: "2362",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67522279/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                    {
                      id: "67522310",
                      price: 43.28,
                      room: "Sala 8",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-29T15:10:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "15:10",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-29T15:10:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "15:10",
                        year: "2022",
                      },
                      time: "15:10",
                      defaultSector: "2362",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67522310/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                    {
                      id: "67522301",
                      price: 43.28,
                      room: "Sala 8",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-29T17:00:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "17:00",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-29T17:00:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "17:00",
                        year: "2022",
                      },
                      time: "17:00",
                      defaultSector: "2362",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67522301/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.52787,
                lng: -46.68033,
              },
              operationPolicies: [],
            },
            {
              id: "132",
              name: "UCI Jardim Sul",
              address: "Av. Giovanni Gronchi",
              addressComplement: "501 a 511 M",
              number: "5819",
              urlKey: "uci-jardim-sul",
              neighborhood: "Vila Andrade",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/uci-jardim-sul",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/uci-jardim-sul?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 10",
                  type: null,
                  sessions: [
                    {
                      id: "67531250",
                      price: 44.46,
                      room: "Sala 10",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-29T13:20:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "13:20",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-29T13:20:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "13:20",
                        year: "2022",
                      },
                      time: "13:20",
                      defaultSector: "4583293",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67531250/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                    {
                      id: "67531245",
                      price: 44.46,
                      room: "Sala 10",
                      type: ["Nacional", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-29T17:50:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "17:50",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-29T17:50:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "17:50",
                        year: "2022",
                      },
                      time: "17:50",
                      defaultSector: "4583293",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67531245/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.63113,
                lng: -46.73585,
              },
              operationPolicies: [],
            },
            {
              id: "996",
              name: "Cinépolis JK Iguatemi",
              address: "Av. Presidente Juscelino Kubitschek",
              addressComplement: "lj 424",
              number: "2041",
              urlKey: "cinepolis-jk-iguatemi",
              neighborhood: "Vila Nova Conceição",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/cinepolis-jk-iguatemi",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/cinepolis-jk-iguatemi?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 3 - VIP",
                  type: null,
                  sessions: [
                    {
                      id: "67499062",
                      price: 90.05,
                      room: "Sala 3 - VIP",
                      type: ["Nacional", "Normal", "Vip"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 2,
                          name: "Vip",
                          alias: "VIP",
                          display: true,
                        },
                        {
                          id: 0,
                          name: "Nacional",
                          alias: "NAC",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-29T13:30:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "13:30",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-29T13:30:00-03:00",
                        isToday: false,
                        dayOfWeek: "sábado",
                        dayAndMonth: "29/01",
                        hour: "13:30",
                        year: "2022",
                      },
                      time: "13:30",
                      defaultSector: "596697",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67499062/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.59074,
                lng: -46.68956,
              },
              operationPolicies: [],
            },
          ],
        },
        {
          event: {
            id: "24137",
            title: "As Agentes 355",
            originalTitle: "The 355",
            movieIdUrl: "",
            ancineId: "E2100409400000",
            countryOrigin: "Estados Unidos",
            priority: 5,
            contentRating: "16 anos",
            duration: "111",
            rating: 0.0,
            synopsis:
              "Em As Agentes 355, ao ficarem sabendo que uma organização global quer adquirir uma arma com o poder de desestabilizar a já instável política mundial, as melhores espiãs do mundo se juntam para impedir a transação. E para fazer isso, elas vão ter que lidar com as diferenças políticas e culturais que as separam.\n",
            cast: "Jessica Chastain, Penélope Cruz, Lupita Nyong'o, Diane Kruger e BingBing Fan",
            director: "Simon Kinberg",
            distributor: "Diamond Films",
            inPreSale: false,
            isReexhibition: false,
            urlKey: "as-agentes-355",
            isPlaying: true,
            countIsPlaying: 273,
            premiereDate: {
              localDate: "2022-01-20T00:00:00+00:00",
              isToday: false,
              dayOfWeek: "quinta-feira",
              dayAndMonth: "20/01",
              hour: "00:00",
              year: "2022",
            },
            creationDate: "0001-01-01T00:00:00Z",
            city: "São Paulo",
            siteURL:
              "https://www.ingresso.com/sao-paulo/home/filmes/as-agentes-355",
            nationalSiteURL:
              "https://www.ingresso.com/filme/as-agentes-355?city=sao-paulo&partnership=home",
            images: [
              {
                url: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/24137-cartaz.jpg",
                type: "PosterPortrait",
              },
              {
                url: "https://ingresso-a.akamaihd.net/prd/img/movie/as-agentes-355/0f2a0c3b-bc84-42c0-a834-716b23cfc4fc.jpg",
                type: "PosterHorizontal",
              },
            ],
            genres: ["Ação", "Aventura"],
            ratingDescriptors: [
              "Atos Criminosos",
              "Linguagem Imprópria",
              "Violência",
            ],
            completeTags: [],
            tags: [],
            trailers: [
              {
                type: "Youtube",
                url: "https://www.youtube.com/watch?v=XwBkm3OnJtU",
                embeddedUrl: "//www.youtube.com/embed/XwBkm3OnJtU",
              },
            ],
            boxOfficeId: "9980",
            partnershipType: "",
            rottenTomatoe: {
              id: "a66083c5-3cbd-3594-bad0-7032ab10cade",
              criticsRating: "Rotten",
              criticsScore: "25",
              audienceRating: "Upright",
              audienceScore: "85",
              originalUrl: "https://www.rottentomatoes.com/m/the_355",
            },
          },
          showtimes: [
            {
              id: "131",
              name: "UCI Anália Franco",
              address: "Av. Regente Feijó",
              addressComplement: "Quadra A",
              number: "1759",
              urlKey: "uci-analia-franco",
              neighborhood: "Tatuapé",
              properties: {
                hasBomboniere: true,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/uci-analia-franco",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/uci-analia-franco?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 4",
                  type: null,
                  sessions: [
                    {
                      id: "67510565",
                      price: 45.6,
                      room: "Sala 4",
                      type: ["Dublado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Dublado",
                          alias: "DUB",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:05:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:05",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:05:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:05",
                        year: "2022",
                      },
                      time: "21:05",
                      defaultSector: "4583276",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67510565/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.56152,
                lng: -46.56271,
              },
              operationPolicies: [],
            },
            {
              id: "577",
              name: "Moviecom BoaVista",
              address: "R. Borba Gato",
              addressComplement: "401",
              number: "59",
              urlKey: "moviecom-boavista",
              neighborhood: "Santo Amaro",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: true,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/moviecom-boavista",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/moviecom-boavista?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 5",
                  type: null,
                  sessions: [
                    {
                      id: "67515642",
                      price: 29.61,
                      room: "Sala 5",
                      type: ["Dublado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Dublado",
                          alias: "DUB",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:20:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:20",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:20:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:20",
                        year: "2022",
                      },
                      time: "21:20",
                      defaultSector: "2103",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67515642/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: 0.0,
                lng: 0.0,
              },
              operationPolicies: [],
            },
            {
              id: "675",
              name: "Espaço Itaú de Cinema - Pompéia",
              address: "Rua Palestra Itália",
              addressComplement: "",
              number: "500",
              urlKey: "espaco-itau-de-cinema-pompeia",
              neighborhood: "Água Branca",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/espaco-itau-de-cinema-pompeia",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/espaco-itau-de-cinema-pompeia?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage:
                "\nInfelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 7",
                  type: null,
                  sessions: [
                    {
                      id: "67522332",
                      price: 43.28,
                      room: "Sala 7",
                      type: ["Legendado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:20:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:20",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:20:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:20",
                        year: "2022",
                      },
                      time: "21:20",
                      defaultSector: "2361",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67522332/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.52787,
                lng: -46.68033,
              },
              operationPolicies: [],
            },
            {
              id: "586",
              name: "Moviecom Penha",
              address: "R. Dr. João Ribeiro ",
              addressComplement: " Âncora G - Shopping Penha",
              number: "304",
              urlKey: "moviecom-penha",
              neighborhood: "Penha",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: [
                "Impressão",
                "Bilheteria/ATM",
                "Aplicativo/Scannerless",
              ],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/moviecom-penha",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/moviecom-penha?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage:
                "\tInfelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "Sala 1",
                  type: null,
                  sessions: [
                    {
                      id: "67515721",
                      price: 30.75,
                      room: "Sala 1",
                      type: ["Dublado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Dublado",
                          alias: "DUB",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:20:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:20",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:20:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:20",
                        year: "2022",
                      },
                      time: "21:20",
                      defaultSector: "2060",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67515721/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.52446,
                lng: -46.54729,
              },
              operationPolicies: [],
            },
            {
              id: "1520",
              name: "PlayArte Multiplex - Ibirapuera ",
              address: "Av. Ibirapuera",
              addressComplement: "",
              number: "3103",
              urlKey: "playarte-multiplex-ibirapuera",
              neighborhood: "Indianópolis",
              properties: {
                hasBomboniere: false,
                hasContactlessWithdrawal: true,
                hasSession: true,
                hasSeatDistancePolicy: false,
                hasSeatDistancePolicyArena: false,
              },
              functionalities: {
                operationPolicyEnabled: true,
              },
              deliveryType: ["Bilheteria/ATM", "Aplicativo/Scannerless"],
              siteURL:
                "https://www.ingresso.com/sao-paulo/home/cinemas/playarte-multiplex-ibirapuera",
              nationalSiteURL:
                "https://www.ingresso.com/cinema/playarte-multiplex-ibirapuera?city=sao-paulo&partnership=home",
              enabled: true,
              blockMessage: "Infelizmente estamos sem comunicação com o local.",
              rooms: [
                {
                  name: "SALA 4",
                  type: null,
                  sessions: [
                    {
                      id: "67516958",
                      price: 50.16,
                      room: "SALA 4",
                      type: ["Legendado", "Normal"],
                      types: [
                        {
                          id: 1,
                          name: "Normal",
                          alias: "2D",
                          display: false,
                        },
                        {
                          id: 0,
                          name: "Legendado",
                          alias: "LEG",
                          display: true,
                        },
                      ],
                      date: {
                        localDate: "2022-01-28T21:30:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:30",
                        year: "2022",
                      },
                      realDate: {
                        localDate: "2022-01-28T21:30:00-03:00",
                        isToday: true,
                        dayOfWeek: "sexta-feira",
                        dayAndMonth: "28/01",
                        hour: "21:30",
                        year: "2022",
                      },
                      time: "21:30",
                      defaultSector: "4583247",
                      midnightMessage: null,
                      siteURL:
                        "https://carrinho.ingresso.com/checkout/#/adicionar/67516958/home",
                      nationalSiteURL: null,
                      hasSeatSelection: true,
                      driveIn: false,
                      streaming: false,
                      maxTicketsPerCar: 0,
                      enabled: true,
                      blockMessage: "",
                    },
                  ],
                },
              ],
              sessionTypes: null,
              geolocation: {
                lat: -23.57056,
                lng: -46.64571,
              },
              operationPolicies: [],
            },
          ],
        },
      ];
      return mockedMovies;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      setMovies((await fetchHeroMovie()) || []);
    })();
  }, []);

  useEffect(() => {
    movies.length &&
      setFeaturedMovie(Math.floor(Math.random() * movies.length));
  }, [movies]);

  useEffect(() => {
    if (movies.length) {
      const currentFeaturedData = movies[featuredMovie];
      const currentURL = currentFeaturedData
        ? currentFeaturedData.event.images[1].url
        : "/images/malevola.jpg";
      setFeaturedMovieUrl(currentURL);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [featuredMovie]);

  return (
    <HeroContainer style={{ height: 500 }}>
      {loading ? (
        <Loading />
      ) : (
        <ImageContainer url={featuredMovieUrl}></ImageContainer>
      )}
    </HeroContainer>
  );
}

export default Hero;
