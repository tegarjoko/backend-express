const UsersModel = require("../models/users");

const getUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const [data] = await UsersModel.getUser(id);
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Get user data failed",
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;
  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "success",
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
      message: "success",
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
      message: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete user failed",
      serverMessage: error,
    });
  }
};

const changePassword = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UsersModel.changePassword(body, id);
    res.status(200).json({
      message: "success",
      data: { idUser: id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: "Update user data failed",
      serverMessage: error,
    });
  }
};

module.exports = {
  getUsers,
  createNewUsers,
  updateDataUsers,
  deleteUsers,
  changePassword,
};
