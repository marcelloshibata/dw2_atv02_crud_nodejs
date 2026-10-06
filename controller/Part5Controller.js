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

export default route;
