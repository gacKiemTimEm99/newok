const shownTime = require("../models/shownTime");

class showTimeController {
  getShownsTime = async (req, res, next) => {
    try {
      let data = await shownTime.find({});
      res.json(data);
    } catch (error) {
      res.status(500).json("SERVER ERROR!!");
    }
  };

  postShownTime = async (req, res, next) => {
    try {
      const postShown = new shownTime(req.body);
      await postShown.save();
      res.json("post successfully!");
    } catch (error) {
      res.json("post failure!");
    }
  };

  updateShown = async (req, res, next) => {
    try {
      let id = req.params.id;
      await shownTime.findByIdAndUpdate(id, req.body);
      res.json("update successfully ");
    } catch (error) {
      res.json("update failure!!");
    }
  };

  deleteShownTime = async (req, res, next) => {
    try {
      let id = req.params.id;
      console.log("iddddd", id);
      await shownTime.findByIdAndDelete(id);
      res.json("delete successfully!!");
    } catch (error) {
      res.json("delete failure!!");
    }
  };
}
module.exports = new showTimeController();
