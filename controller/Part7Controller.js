import express from "express";
import Part7 from "../model/Part7.js";

const route = express.Router();

route.get("/part7", (req, res) => {
  Part7.findAll()
    .then((part7) => {
      res.render("part7", {
        characters: part7,
      });
    })
    .catch((error) => {
      console.log(
        `Ocorreu um erro ao listar os personagens da parte 7. Erro ${error}`,
      );
    });
});

route.post("/part7/signup", (req, res) => {
  const nome = req.body.nome;
  const stand = req.body.stand;
  const desc = req.body.desc;
  const img = req.body.img;

  Part7.create({
    img: img,
    nome: nome,
    desc: desc,
    stand: stand,
  }).then(() => {
    res.redirect("/part7");
  }).catch(error => {
    console.log(`Houve um erro ao cadastrar o personagem da parte 7. Erro: ${error}`);
  })
})

export default route;
