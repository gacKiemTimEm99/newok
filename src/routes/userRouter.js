const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");

router.get("/", userController.getListUser);
router.post("/userlogin", userController.login);
router.post("/register", userController.register);
router.post("/", userController.postUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
