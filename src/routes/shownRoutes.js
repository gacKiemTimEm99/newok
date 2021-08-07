const express = require("express");
const router = express.Router();
const shownController = require("../app/controllers/shownControllers");

router.get("/listshown", shownController.getListShown);
router.get("/listshown/:id", shownController.getShownDetail);
router.post("/listshown", shownController.postShown);
router.put("/listshown/:id", shownController.updateShown);
router.delete("/listshown/:id", shownController.deleteShown);

module.exports = router;
