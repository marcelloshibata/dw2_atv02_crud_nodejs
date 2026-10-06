import express from "express";
import Part6 from "../model/Part6.js";

const route = express.Router();

route.get("/part6", (req, res) => {
  Part6.findAll().then((part6) => {
    res.render("part6", {
      characters: part6,
    })
  }).catch(error => {
    console.log(`Ocorreu um erro ao listar os personagens da parte 6. Erro ${error}`);
  })
});

route.post("/part6/signup", (req, res) => {
  const nome = req.body.nome;
  const stand = req.body.stand;
  const desc = req.body.desc;
  const img = req.body.img;

  Part6.create({
    img: img,
    nome: nome,
    desc: desc,
    stand: stand,
  }).then(() => {
    res.redirect("/part6");
  }).catch(error => {
    console.log(`Houve um erro ao cadastrar o personagem da parte 6. Erro: ${error}`);
  })
})

export default route;