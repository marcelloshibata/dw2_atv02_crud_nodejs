import connection from "../config/sequelize-config.js";
import { Sequelize } from "sequelize";

const Part7 = connection.define(
  "part7",
  {
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
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);
Part7.sync({ force: false });

export default Part7;
