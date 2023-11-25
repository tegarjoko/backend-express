const express = require("express");
const UserController = require("../controller/users");
const router = express.Router();

// CREATE USER - POST
router.post("/", UserController.createNewUsers);
// READ DATA USER - GET
router.get("/", UserController.getAllUsers);
// UPDATE DATA USER - PATCH
router.patch("/:id", UserController.updateDataUsers);
// DELET DATA USER - DELETE
router.delete("/:id", UserController.deleteUsers);

// change-password
router.patch('/changePassword/:id',UserController.changePassword)
module.exports = router;
