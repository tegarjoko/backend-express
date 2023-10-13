const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUser();
    res.status(200).json({
      message: "GET all users success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "GET all users failed",
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;
  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "Create New User success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Create new user failed",
      serverMessage: error,
    });
  }
};

const updateDataUsers = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, id);
    res.status(200).json({
      message: "UPDATE user data succes",
      data: { idUser: id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: "Update user data failed",
      serverMessage: error,
    });
  }
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteUser(id);
    res.status(200).json({
      message: "DELETE user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "DELETE user failed",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateDataUsers,
  deleteUsers,
};
