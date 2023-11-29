const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS, {
  host: "localhost",
  dialect: "mysql",
});

const testConneciton = async () => {
  try {
    await db.authenticate().then(() => {
      console.log("*****Connection has been established successfully.*****");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
testConneciton();
db.sync({});

module.exports = db;
