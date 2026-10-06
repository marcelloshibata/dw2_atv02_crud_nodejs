import connection from "../config/sequelize-config.js";
import { Sequelize } from "sequelize";

const Part5 = connection.define("part5", {
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
Part5.sync({force: false})

export default Part5;