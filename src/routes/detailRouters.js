const express = require("express");
const router = express.Router();
const detailController = require("../app/controllers/detailController");

router.get("/createshown", detailController.createshown);
router.get("/total", detailController.countmoney);
router.post("/store", detailController.store);
router.post("/:id", detailController.updateCount);
router.get("/detailcart", detailController.detail);
router.get("/:sluggg", detailController.showsDetail);

module.exports = router;
