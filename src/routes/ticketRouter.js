const express = require("express");
const router = express.Router();
const ticketController = require("../app/controllers/ticketController");

router.get("/", ticketController.getTicket);
router.post("/", ticketController.postTicket);
router.delete("/:id", ticketController.deleteTicket);

module.exports = router;
