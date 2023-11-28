const sequelize = require("sequelize");
const db = require("../config/db");

const usersmodel = db.define("users", {
  name: { type: sequelize.STRING },
  email: { type: sequelize.STRING },
  password: { type: sequelize.STRING },
});

module.exports = usersmodel;
