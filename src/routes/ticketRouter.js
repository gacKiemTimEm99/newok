const express = require("express");
const router = express.Router();
const ticketController = require("../app/controllers/ticketController");

router.get("/get", ticketController.getTicket);
router.post("/post", ticketController.postTicket);
router.delete("/delete/:id", ticketController.deleteTicket);

module.exports = router;
