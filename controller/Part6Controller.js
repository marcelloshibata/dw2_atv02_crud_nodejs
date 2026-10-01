import express from "express";
const route = express.Router();

route.get("/part6", (req, res) => {
  const characters = [
    {
      img: "/img/jolyne-icon.jpg",
      nome: "Jolyne Kujo",
      desc: "Jolyne Kujo (空条 徐倫 Kūjō Jorīn) é a protagonista de Stone Ocean e a sexta JoJo da série. Filha de Jotaro Kujo, ela é incriminada por um crime que não cometeu e enviada para a prisão de segurança máxima Green Dolphin Street. Lá, ela desperta seu Stand através de um amuleto e luta com bravura para salvar a vida de seu pai e frustrar a conspiração do Padre Pucci.",
      stand: "Stone Free",
    },
    {
      img: "/img/hermes-icon.jpg",
      nome: "Ermes Costello",
      desc: "Ermes Costello (エルメェス・コステロ Eremēsu Kosutero) é a principal aliada de Jolyne na prisão Green Dolphin Street. Ela se deixou prender voluntariamente para se vingar do gângster Sports Maxx, responsável pela morte de sua irmã Gloria. Ao ser ferida pelo pingente de Jolyne, ela desperta o Stand Kiss, capaz de duplicar objetos com seus adesivos.",
      stand: "Kiss",
    },
    {
      img: "/img/ff-icon.jpg",
      nome: "Foo Fighters (F.F.)",
      desc: "Foo Fighters (フー・ファイターズ Fū Faitāzu), conhecida carinhosamente como F.F., é uma colônia de plâncton que ganhou senciência e inteligência humana após receber um Stand Disc de Enrico Pucci. Inicialmente guardiã dos discos, ela se afeiçoa a Jolyne e Ermes, aliando-se a elas e assumindo o corpo da prisioneira Atroe.",
      stand: "Foo Fighters",
    },
    {
      img: "/img/anasui-icon.jpeg",
      nome: "Narciso Anasui",
      desc: "Narciso Anasui (ナルシソ・アナスイ Narushiso Anasui) é um detento na prisão Green Dolphin Street e usuário do Stand Diver Down, com habilidade de mergulhar e reestruturar matérias. Profundamente apaixonado por Jolyne, ele decide protegê-la a qualquer custo durante sua missão e confrontos contra Pucci.",
      stand: "Diver Down",
    },
    {
      img: "/img/wr-icon.jpg",
      nome: "Weather Report",
      desc: "Weather Report (ウェザー・リポート Wezā Ripōto), nascido Domenico Pucci e irmão gêmeo do Padre Pucci, é um misterioso aliado amnésico confinado na sala secreta de Emporio na prisão. Seu poderoso Stand permite total controle sobre a atmosfera, o clima e fenômenos meteorológicos.",
      stand: "Weather Report",
    },
    {
      img: "/img/jotaro-icon.jpg",
      nome: "Jotaro Kujo",
      desc: "Jotaro Kujo (空条 承太郎 Kūjō Jōtarō) retorna em Stone Ocean agora como um experiente biólogo marinho e pai de Jolyne. Ele vai até a prisão Green Dolphin Street para alertar e libertar sua filha, mas cai em uma emboscada de Whitesnake, tendo seus discos de memória e de Stand roubados.",
      stand: "Star Platinum",
    },
    {
      img: "/img/pucci-icon.jpg",
      nome: "Enrico Pucci",
      desc: "Padre Enrico Pucci (エンリコ・プッチ Enriko Putchi) é o capelão da prisão Green Dolphin Street e o principal antagonista de Stone Ocean. Fanático seguidor das ideias de DIO, Pucci busca realizar o plano do 'Paraíso' através da evolução de seu Stand, manipulando memórias e almas na prisão.",
      stand: "Whitesnake",
    },
  ];

  res.render("part6", {
    characters: characters,
  });
});

export default route;