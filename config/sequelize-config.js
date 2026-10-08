import Sequelize from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "site_anime",
  timezone: "-03:00",
  define: {
        freezeTableName: true,
        timestamps: false,
    },
});

export default connection;