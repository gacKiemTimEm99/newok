const express = require("express");
const router = express.Router();
const shownPlaceController = require("../app/controllers/shownPlaceController");

router.get("/", shownPlaceController.getShownsPlace);
router.post("/", shownPlaceController.postShownPlace);
router.put("/:id", shownPlaceController.updatePlace);
router.delete("/:id", shownPlaceController.deleteShownPlace);

module.exports = router;
