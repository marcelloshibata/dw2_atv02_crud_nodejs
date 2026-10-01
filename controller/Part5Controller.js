import express from "express";
const route = express.Router();

route.get("/part5", (req, res) => {
  const characters = [
    {
      img: "/img/giorno-icon.jpg",
      nome: "Giorno Giovanna",
      desc: "Giorno é o filho ilegítimo de DIO, concebido com o corpo roubado de Jonathan Joestar. Ele é apresentado como Haruno Shiobana (汐華 初流乃). Ele fala de sua intenção de se juntar à poderosa gangue Passione e seu sonho de se tornar um 'Gangstar'.",
      stand: "Golden Experience",
    },
    {
      img: "/img/bruno-icon.jpg",
      nome: "Bruno Bucciarati",
      desc: "Bruno Bucciarati (ブローノ・ブチャラティ Burōno Bucharati) é o deuteragonista de Vento Aureo. Ele é um mafioso e líder de seu próprio esquadrão dentro da poderosa gangue napolitana, Passione.",
      stand: "Sticky Fingers",
    },
    {
      img: "/img/abacchio-icon.jpg",
      nome: "Leone Abacchio",
      desc: "Leone Abbacchio (レオーネ・アバッキオ Reōne Abakkio) é um aliado importante apresentado em Vento Aureo. Abbacchio é um ex-policial e atualmente membro da Passione e, por extensão, da equipe de Bucciarati. Ele acompanha Bucciarati e Giorno Giovanna em sua missão de proteger Trish Una.",
      stand: "Moody Blues",
    },
    {
      img: "/img/narancia-icon.jpg",
      nome: "Narancia Ghirga",
      desc: "Narancia Ghirga (ナランチャ・ギルガ Narancha Giruga) é um dos principais aliados de Vento Aureo. Ele é membro do Team Bucciarati e, por extensão, da Passione. Narancia segue Giorno e Bucciarati em sua missão de proteger Trish Una por compartilhar uma tragédia semelhante à dela.",
      stand: "Aerosmith",
    },
    {
      img: "/img/mista-icon.jpg",
      nome: "Guido Mista",
      desc: "Guido Mista (グイード・ミスタ Guīdo Misuta) é um aliado central apresentado em Vento Aureo e um personagem secundário em Purple Haze Feedback. Mista é um membro da Passione e, por extensão, da equipe de Bucciarati , que segue Giorno e Bucciarati em sua missão de guarda-costas Trish Una . Ele é um pistoleiro e usuário de Stand que derruba seus oponentes com a ajuda de seus Sex Pistols.",
      stand: "Sex Pistols",
    },
    {
      img: "/img/diavolo-icon.jpg",
      nome: "Diavolo",
      desc: "Diavolo (ディアボロ Diaboro) é o principal antagonista apresentado em Vento Aureo. O primeiro chefe da Passione, Diavolo busca segurança e superioridade absolutas ao eliminar todos os vestígios de seu passado, incluindo sua filha, Trish Una, e tenta recuperá-la manipulando o Time Bucciarati por meio de suas ordens. Ele e Vinegar Doppio são duas almas que habitam um único corpo, e enquanto Doppio pode manifestar apenas parcialmente o incrivelmente mortal King Crimson , Diavolo é o principal usuário do Stand e exerce seu poder brutal por completo.",
      stand: "King Crimson",
    },
  ];

  res.render("part5", {
    characters: characters,
  });
});

export default route;