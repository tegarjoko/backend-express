const express = require("express");
const UserController = require("../controller/users");
const router = express.Router();

// TODO : LOGIN USER RETURN JWT TOKEN

// CREATE USER - POST
router.post("/register", UserController.createNewUsers);
// READ DATA USER - GET
router.get("/login/:id", UserController.getUsers);
// UPDATE DATA USER - PATCH
router.patch("/update/:id", UserController.updateDataUsers);
// DELETE DATA USER - DELETE
router.delete("/delete/:id", UserController.deleteUsers);
// CHANGE PASSWORD USER - PATCH
router.patch("/change-password/:id", UserController.changePassword);
module.exports = router;
