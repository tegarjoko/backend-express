const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const currentTime = Math.floor(Date.now() / 1000);
  const checkToken = req.header("X-Auth-Token");
  if (!checkToken) return res.status(401).json("Access Denied");
  const decodedToken = jwt.decode(checkToken, process.env.SECRET_TOKEN);
  if (decodedToken.exp < currentTime) {
    return res.status(401).json("Token expired");
  }
  try {
    const verifyToken = jwt.verify(checkToken, process.env.SECRET_TOKEN);
    req.user = verifyToken;
    next();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid Token" });
  }
}

isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json("You need admin role to access this page");
  }
  next();
};

module.exports = { auth, isAdmin };
