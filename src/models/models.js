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
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    defaultValue: "user",
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
  plant_id: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
});

const firstaidmodel = db.define("first_aid", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_markdown: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { usersmodel, survivalmodel, edibleplantmodel, firstaidmodel };
