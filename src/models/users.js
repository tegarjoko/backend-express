const dbPool = require("../config/database");

const getUser = (id) => {
  const SQLQuery = `SELECT * FROM users WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name,email,password) VALUES ('${body.name}','${body.email}','${body.password}')`;
  return dbPool.execute(SQLQuery);
};

const updateUser = (body, id) => {
  const SQLQuery = `UPDATE users SET name='${body.name}',email='${body.email}',password='${body.password}' WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

const deleteUser = (id) => {
  const SQLQuery = `DELETE FROM users WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

const changePassword = (body, id) => {
  const SQLQuery = `UPDATE users SET password='${body.password}' WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
  changePassword,
};
