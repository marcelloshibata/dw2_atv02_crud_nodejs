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

export default route;

