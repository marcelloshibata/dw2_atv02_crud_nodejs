import connection from "../config/sequelize-config.js";
import { Sequelize } from "sequelize";

const Part8 = connection.define(
  "part8",
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
Part8.sync({ force: false });

export default Part8;
