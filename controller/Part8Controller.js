import express from "express";
import Part8 from "../model/Part8.js";

const route = express.Router();

route.get("/part8", (req, res) => {
  Part8.findAll()
    .then((part8) => {
      res.render("part8", {
        characters: part8,
      });
    })
    .catch((error) => {
      console.log(
        `Ocorreu um erro ao listar os personagens da parte 8. Erro ${error}`,
      );
    });
});

route.post("/part8/signup", (req, res) => {
  const nome = req.body.nome;
  const stand = req.body.stand;
  const desc = req.body.desc;
  const img = req.body.img;

  Part8.create({
    img: img,
    nome: nome,
    desc: desc,
    stand: stand,
  }).then(() => {
    res.redirect("/part8");
  }).catch(error => {
    console.log(`Houve um erro ao cadastrar o personagem da parte 8. Erro: ${error}`);
  })
})

route.get("/part8/delete/:id", (req, res) => {
  const id = req.params.id;

  Part8.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/part8");
  }).catch((error) => {
    console.log(`Ocorreu um erro ao excluir o personagem de ID ${id}. Erro: ${error}`);
  })
})

export default route;

