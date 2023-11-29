const { DataTypes } = require("sequelize");
const db = require("../config/db");

const usersmodel = db.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const survivalmodel = db.define("survival_guide", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_markdown: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const edibleplantmodel = db.define("edible_plant", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { usersmodel, survivalmodel, edibleplantmodel };
