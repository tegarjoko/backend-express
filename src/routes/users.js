const express = require("express");
const UserController = require("../controller/users");
const router = express.Router();
const { auth } = require("../middleware/verifytoken");

router.post("/register", UserController.registerUsers);
router.post("/login", UserController.loginUsers);
router.delete("/delete", auth, UserController.deleteUsers);
router.patch("/change-password", auth, UserController.changePassword);
module.exports = router;
