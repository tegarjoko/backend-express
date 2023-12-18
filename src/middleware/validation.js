const Joi = require("joi");

const createCustomErrorMessage = (baseMessage, limit) => {
  return {
    "string.base": `${baseMessage} harus berupa teks`,
    "string.min": `${baseMessage} harus memiliki panjang minimal ${limit} karakter`,
    "any.required": `${baseMessage} wajib diisi`,
    "string.email": `Format ${baseMessage} tidak valid`,
    "any.only": `${baseMessage} harus salah satu dari: {{valids}}`,
  };
};

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required().messages(createCustomErrorMessage("Nama", 4)),
    email: Joi.string().required().email().messages(createCustomErrorMessage("Email")),
    password: Joi.string().min(8).required().messages(createCustomErrorMessage("Password", 8)),
    role: Joi.string().valid("admin", "user").messages(createCustomErrorMessage("Role")),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email().messages(createCustomErrorMessage("Email")),
    password: Joi.string().min(8).required().messages(createCustomErrorMessage("Password", 8)),
  });
  return schema.validate(data);
};

const changePasswordValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email().messages(createCustomErrorMessage("Email")),
    currentPassword: Joi.string().min(8).required().messages(createCustomErrorMessage("Password Saat Ini", 8)),
    newPassword: Joi.string().min(8).required().messages(createCustomErrorMessage("Password Baru", 8)),
  });
  return schema.validate(data);
};

const deleteValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email().messages(createCustomErrorMessage("Email")),
    password: Joi.string().min(8).required().messages(createCustomErrorMessage("Password", 8)),
  });
  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation, changePasswordValidation, deleteValidation };
