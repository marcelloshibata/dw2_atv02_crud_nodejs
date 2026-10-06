import express from "express";
import nodemon from "nodemon";
import connection from "./config/sequelize-config.js";

const app = express();

import Part5Controller from "./controller/Part5Controller.js";
import Part6Controller from "./controller/Part6Controller.js";
import Part7Controller from "./controller/Part7Controller.js";
import Part8Controller from "./controller/Part8Controller.js";

import Part5 from "./model/Part5.js";
import Part6 from "./model/Part6.js";
import Part7 from "./model/Part7.js";
import Part8 from "./model/Part8.js";

app.set("view engine", "ejs");
app.use(express.static("public"));

connection.authenticate().then(() => {
  console.log("Conexao com banco de dados realizada com sucesso!");
}).catch((error) => {
  console.log(`Ocorreu um erro ao realizar conexao com banco de dados. Erro: ${error}`);
})

const DB_NAME = "site_anime";
connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`).then(() => {
  console.log(`O banco de dados ${DB_NAME} foi criado com sucesso!`);
}).catch((error) => {
  console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
})

app.use("/", Part5Controller);
app.use("/", Part6Controller);
app.use("/", Part7Controller);
app.use("/", Part8Controller);

app.get("/", (req, res) => {
  res.render("index");
});

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Erro ao iniciar: ${error}`);
  } else {
    console.log(`Servidor iniciado em: http://localhost:${port}`);
  }
});
