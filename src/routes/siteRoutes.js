const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/siteControllers");
router.get("/", siteController.index);
router.get("/login", siteController.shownlogin);
router.post("/login", siteController.login);
router.post("/admin", siteController.checkLogin, siteController.admin);
// router.post("/admin", siteController.admin);

module.exports = router;
