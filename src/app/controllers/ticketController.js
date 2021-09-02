const ticket = require("../models/ticket");

class tiketController {
  getTicket = async (req, res, next) => {
    try {
      let data = await ticket.find({});
      res.json(data);
    } catch (error) {
      res.status(500).json("SERVER ERROR!!");
    }
  };

  postTicket = async (req, res, next) => {
    try {
      const postTicket = new ticket(req.body);
      await postTicket.save();
      res.json("post successfully!");
    } catch (error) {
      res.json("post failure!");
    }
  };

  deleteTicket = async (req, res, next) => {
    try {
      let id = req.params.id;
      await ticket.findByIdAndDelete(id);
      res.json("delete successfully!!");
    } catch (error) {
      res.json("delete failure!!");
    }
  };
}
module.exports = new tiketController();
