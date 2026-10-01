import express from "express";
import nodemon from "nodemon";

const app = express();

import Part5 from "./controller/Part5Controller.js";
import Part6 from "./controller/Part6Controller.js";
import Part7 from "./controller/Part7Controller.js";
import Part8 from "./controller/Part8Controller.js";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", Part5);
app.use("/", Part6);
app.use("/", Part7);
app.use("/", Part8);

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
