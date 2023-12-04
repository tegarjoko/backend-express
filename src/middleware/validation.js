const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
    role: Joi.string().valid("admin", "user").required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};

const changePasswordValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    currentPassword: Joi.string().min(8).required(),
    newPassword: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};

const deleteValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation, changePasswordValidation, deleteValidation };
