import express from "express";
const route = express.Router();

route.get("/part8", (req, res) => {
  const characters = [
    {
      img: "/img/josuke-icon.jpg",
      nome: "Josuke Higashikata",
      desc: "Josuke Higashikata (東方 定助 Higashikata Jōsuke), apelidado de 'Gappy', é o protagonista de JoJolion e o oitavo JoJo da série. Encontrado amnésico nos 'Olhos da Parede' por Yasuho, ele é acolhido pela influente família Higashikata. Mais tarde, descobre ser o resultado da fusão entre Josefumi Kujo e Yoshikage Kira através da milagrosa fruta Locacaca. Seu Stand Soft & Wet cria bolhas capazes de 'roubar' propriedades e aspectos do ambiente.",
      stand: "Soft & Wet",
    },
    {
      img: "/img/yasuho-icon.jpg",
      nome: "Yasuho Hirose",
      desc: "Yasuho Hirose (広瀬 康穂 Hirose Yasuho) é a deuteragonista de JoJolion e a pessoa que encontra Josuke no início da trama. Extremamente inteligente e perceptiva, ela se torna a companheira e aliada mais dedicada de Josuke na busca por sua verdadeira identidade e na investigação da organização de contrabando da Locacaca. Seu Stand Paisley Park atua em sistemas eletrônicos e redes, guiando seu usuário pela direção mais vantajosa.",
      stand: "Paisley Park",
    },
    {
      img: "/img/rai-icon.jpg",
      nome: "Rai Mamezuku",
      desc: "Rai Mamezuku (豆銑 礼 Mamezuku Rai) é um renomado botânico e avaliador de frutas exclusivo da família Higashikata. Vivendo isolado no topo de um teleférico de esqui, ele se torna um aliado indispensável de Josuke e Yasuho na busca pelo ramo da Nova Locacaca. Seu Stand Doggy Style permite transformar partes de seu corpo em fitas adesivas flexíveis e altamente resistentes para combate e locomoção.",
      stand: "Doggy Style",
    },
    {
      img: "/img/jobin-icon.jpg",
      nome: "Jobin Higashikata",
      desc: "Jobin Higashikata (東方 常敏 Higashikata Jōbin) é o primogênito de Norisuke Higashikata IV e antagonista secundário em JoJolion. Obcecado por besouros e movido pela determinação absoluta de libertar a linhagem Higashikata da maldição de pedra familiar, ele se alia ao cartel dos Homens de Pedra no comércio clandestino da fruta. Seu Stand Speed King consegue acumular e transferir temperaturas escaldantes a qualquer superfície ou alvo.",
      stand: "Speed King",
    },
    {
      img: "/img/tooru-icon.jpg",
      nome: "Tooru",
      desc: "Tooru (透龍 Tōru) é o principal antagonista de JoJolion. Apresentado inicialmente como um despretensioso funcionário de hospital e ex-namorado de Yasuho, revela-se como o líder dos Homens de Pedra e a mente por trás da distribuição da Locacaca. Seu Stand Wonder of U manipula a própria lógica do destino e o fluxo da calamidade, fazendo com que qualquer um que tente persegui-lo sofra acidentes letais.",
      stand: "Wonder of U",
    },
  ];

  res.render("part8", {
    characters: characters,
  });
});

export default route;

