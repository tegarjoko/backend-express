const jwt = require("jsonwebtoken");
const { usersmodel } = require("../models/models");

function auth(req, res, next) {
  const currentTime = Math.floor(Date.now() / 1000);
  const checkToken = req.header("X-Auth-Token");
  if (!checkToken) return res.status(401).json({ success: false, message: "Access Denied" });
  const decodedToken = jwt.decode(checkToken, process.env.SECRET_TOKEN);
  if (decodedToken.exp < currentTime) {
    return res.status(401).json({ success: false, message: "Token expired" });
  }
  try {
    const verifyToken = jwt.verify(checkToken, process.env.SECRET_TOKEN);
    req.user = verifyToken;
    next();
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: "Invalid Token" });
  }
}

const isAdmin = async (req, res, next) => {
  const email = req.body.email;
  if (!email) return res.status(400).json({ success: false, message: "Email is required" });
  const getUser = await usersmodel.findOne({
    where: { email: email },
  });
  if (!getUser) return res.status(400).json({ success: false, message: "Email not found" });
  if (getUser.role !== "admin") {
    return res.status(403).json({ success: false, message: "You need admin role to access this page" });
  }
  next();
};

module.exports = { auth, isAdmin };
