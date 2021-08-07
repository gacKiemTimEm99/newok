const showPlace = require("../models/shownPlace");

class ShownPlace {
  getShownsPlace = async (req, res, next) => {
    try {
      let data = await showPlace.find({});
      res.json(data);
    } catch (error) {
      res.status(500).json("SERVER ERROR!!");
    }
  };

  postShownPlace = async (req, res, next) => {
    try {
      const postShown = new showPlace(req.body);
      await postShown.save();
      res.json("post successfully!");
    } catch (error) {
      res.json("post failure!");
    }
  };

  updatePlace = async (req, res, next) => {
    try {
      let id = req.params.id;
      await showPlace.findByIdAndUpdate(id, req.body);
      res.json("update successfully ");
    } catch (error) {
      res.json("update failure!!");
    }
  };

  deleteShownPlace = async (req, res, next) => {
    try {
      let id = req.params.id;
      await showPlace.findByIdAndDelete(id);
      res.json("delete successfully!!");
    } catch (error) {
      res.json("delete failure!!");
    }
  };
}

module.exports = new ShownPlace();
