const express = require("express");
const router = express.Router();
const shownTimeController = require("../app/controllers/showTimeController");

router.get("/", shownTimeController.getShownsTime);
router.post("/", shownTimeController.postShownTime);
router.put("/:id", shownTimeController.updateShown);
router.delete("/:id", shownTimeController.deleteShownTime);

module.exports = router;
