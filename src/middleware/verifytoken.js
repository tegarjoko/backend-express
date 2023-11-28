const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const checkToken = req.header("auth-token");
  if (!checkToken) return res.status(401).json("Access Denied");

  try {
    const verifyToken = jwt.verify(checkToken, process.env.SECRET_TOKEN);
    req.user = verifyToken;
    next();
  } catch (error) {
    res.status(400).json("Invalid Token");
  }
}

module.exports = auth;
