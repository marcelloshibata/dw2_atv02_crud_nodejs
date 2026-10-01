import express from "express";
const route = express.Router();

route.get("/part7", (req, res) => {
  const characters = [
    {
      img: "/img/johnny-icon.jpg",
      nome: "Johnny Joestar",
      desc: "Johnny Joestar (ジョニィ・ジョースター Jonī Jōsutā) é o protagonista de Steel Ball Run e a contraparte de Jonathan Joestar em um universo alternativo. Ex-jóquei prodígio que ficou paraplégico após um incidente, ele decide entrar na corrida Steel Ball Run após presenciar as Esferas de Aço de Gyro Zeppeli e descobrir que a técnica do Spin pode fazê-lo voltar a andar. Ao longo da jornada, desperta os atos do Stand Tusk através do Cadáver Sagrado.",
      stand: "Tusk",
    },
    {
      img: "/img/gyro-icon.jpg",
      nome: "Gyro Zeppeli",
      desc: "Gyro Zeppeli (ジャイロ・ツェペリ Jairo Tseperi), nascido Julius Caesar Zeppeli, é o coprotagonista de Steel Ball Run. Um carrasco e médico napolitano, ele compete na corrida com o objetivo de obter anistia para um menino inocente condenado à morte em seu país. É um grande mestre da técnica ancestral do 'Spin' (Rotação), utilizando esferas de aço mágicas em combate.",
      stand: "Ball Breaker",
    },
    {
      img: "/img/diego-icon.jpg",
      nome: "Diego Brando",
      desc: "Diego Brando (ディエゴ・ブランドー Diego Burandō), conhecido popularmente como 'Dio', é um habilidoso e implacável jóquei britânico que participa da corrida. Nascido na extrema pobreza e movido por ambição fervorosa, ele se torna um dos maiores rivais de Johnny e Gyro, manipulando os poderes de transformação de dinossauro do Stand Scary Monsters.",
      stand: "Scary Monsters",
    },
    {
      img: "/img/fv-icon.jpg",
      nome: "Funny Valentine",
      desc: "Funny Valentine (ファニー・ヴァレンタイン Fanī Varentain) é o 23º Presidente dos Estados Unidos e o principal antagonista de Steel Ball Run. Um patriota fanático e determinado, ele usa a corrida como fachada para reunir as partes do Sagrado Cadáver e garantir poder absoluto e glória eterna aos EUA através de seu Stand interdimensional D4C.",
      stand: "Dirty Deeds Done Dirt Cheap (D4C)",
    },
    {
      img: "/img/mt-icon.jpg",
      nome: "Mountain Tim",
      desc: "Mountain Tim (マウンテン・ティム Maunten Timu) é um lendário vaqueiro, caçador de recompensas e aliado de Johnny e Gyro. Homem honrado e destemido, ele atua também como xerife na investigação de assassinatos na corrida. Seu Stand Oh! Lonesome Me permite que ele desmonte seu corpo e viaje através de cordas.",
      stand: "Oh! Lonesome Me",
    },
    {
      img: "/img/hp-icon.jpg",
      nome: "Hot Pants",
      desc: "Hot Pants (ホット・パンツ Hotto Pantsu) é uma competidora experiente da Steel Ball Run disfarçada de homem. Ela é, na verdade, uma agente do Vaticano com o objetivo de obter as partes do Sagrado Cadáver para redimir um trauma de seu passado. Seu Stand Cream Starter projeta carne em formato de spray com efeitos curativos ou destrutivos.",
      stand: "Cream Starter",
    },
  ];

  res.render("part7", {
    characters: characters,
  });
});

export default route;