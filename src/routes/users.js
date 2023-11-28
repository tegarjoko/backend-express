const express = require("express");
const UserController = require("../controller/users");
const router = express.Router();
const authCheck = require("../middleware/verifytoken");

router.post("/register", UserController.registerUsers);
router.post("/login", UserController.loginUsers);
router.delete("/delete", authCheck, UserController.deleteUsers);
router.patch("/change-password", authCheck, UserController.changePassword);
module.exports = router;
