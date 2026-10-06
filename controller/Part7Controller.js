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

export default route;
