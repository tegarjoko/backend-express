const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { usersmodel } = require("../models/models");
const { registerValidation, loginValidation, deleteValidation, changePasswordValidation } = require("../middleware/validation");

const loginUsers = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validasi Login Input Form (joi)
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });
    // Cek apakah email ada di databas
    const getUser = await usersmodel.findOne({
      where: { email: email },
    });
    if (!getUser) return res.status(400).json({ success: false, message: "Email tidak ditemukan" });
    // Cek apakah password sudah sesuai
    const resultLogin = bcrypt.compareSync(password, getUser.password);
    if (!resultLogin) return res.status(400).json({ success: false, message: "Email atau Password Salah" });
    // Creating Token and Expiration Date
    const expirationDate = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365;
    const payload = {
      id: getUser.id,
      email: getUser.email,
      name: getUser.name,
      exp: expirationDate,
    };
    const token = jwt.sign(payload, process.env.SECRET_TOKEN);
    // Send Token
    res.status(200).json({ success: true, message: "success", data: { id: getUser.id, email: getUser.email, name: getUser.name, token: token } });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Login failed",
      serverMessage: error,
    });
  }
};

const registerUsers = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    // Validasi Register Input Form  (joi)
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });
    // Check apakah email sudah terdaftar
    const getUser = await usersmodel.findOne({
      where: { email: email },
    });
    if (getUser) return res.status(400).json({ success: false, message: "Email sudah terdaftar" });
    // Jika sudah sesuai kriteria, maka hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const users = new usersmodel({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });
    // Save to database
    const savedUser = await users.save();
    return res.status(201).json({ success: true, message: "success", data: { id: savedUser.id, email: savedUser.email, name: savedUser.name } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Register failed", serverMessage: error });
  }
};

const changePassword = async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;
  try {
    // Validasi Change Password Input Form (joi)
    const { error } = changePasswordValidation(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }
    // Cari pengguna berdasarkan email
    const getUser = await usersmodel.findOne({ where: { email } });
    // Jika pengguna tidak ditemukan
    if (!getUser) {
      return res.status(404).json({ success: false, message: "Pengguna tidak ditemukan." });
    }
    // Verifikasi kata sandi saat ini
    const passwordMatch = await bcrypt.compare(currentPassword, getUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: "Kata sandi saat ini tidak cocok." });
    }
    // Hash kata sandi baru
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // Simpan kata sandi baru ke dalam database
    await getUser.update({ password: hashedPassword }, { where: { email } });
    res.status(200).json({ success: true, message: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Terjadi kesalahan pada server.", serverMessage: error });
  }
};

const deleteUsers = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validasi Delete Input Form (joi)
    const { error } = deleteValidation(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }
    // Cari pengguna berdasarkan email
    const getUser = await usersmodel.findOne({ where: { email } });
    // Jika pengguna tidak ditemukan
    if (!getUser) {
      return res.status(404).json({ success: false, message: "Pengguna tidak ditemukan." });
    }
    // Verifikasi kata sandi
    const passwordMatch = await bcrypt.compare(password, getUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: "Kata sandi tidak cocok." });
    }
    // Hapus pengguna dari database
    await getUser.destroy({ where: { email } });
    res.status(200).json({ success: true, message: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Terjadi kesalahan pada server.", serverMessage: error });
  }
};

module.exports = {
  loginUsers,
  registerUsers,
  deleteUsers,
  changePassword,
};
