import connection from "../config/sequelize-config.js";
import { Sequelize } from "sequelize";

const Part6 = connection.define("part6", {
  img: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  desc: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  stand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
Part6.sync({force: false})

export default Part6;
