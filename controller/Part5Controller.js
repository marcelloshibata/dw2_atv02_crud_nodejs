import express from "express";
import Part5 from "../model/Part5.js";

const route = express.Router();

route.get("/part5", (req, res) => {
  Part5.findAll()
    .then((part5) => {
      res.render("part5", {
        characters: part5,
      });
    })
    .catch((error) => {
      console.log(
        `Ocorreu um erro ao listar os personagens da parte 5. Erro: ${error}`,
      );
    });
});

route.post("/part5/signup", (req, res) => {
  const nome = req.body.nome;
  const stand = req.body.stand;
  const desc = req.body.desc;
  const img = req.body.img;

  Part5.create({
    img: img,
    nome: nome,
    desc: desc,
    stand: stand,
  }).then(() => {
    res.redirect("/part5");
  }).catch(error => {
    console.log(`Houve um erro ao cadastrar o personagem da parte 5. Erro: ${error}`);
  })
})

route.get("/part5/delete/:id", (req, res) => {
  const id = req.params.id;

  Part5.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/part5");
  }).catch((error) => {
    console.log(`Ocorreu um erro ao excluir o personagem de ID ${id}. Erro: ${error}`);
  })
})

export default route;
