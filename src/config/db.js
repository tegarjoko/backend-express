const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS, {
  host: "localhost",
  dialect: "mysql",
});

db.sync({});

module.exports = db;
