const shownModels = require("../models/showModels");
const user = require("../models/user");
const { convertMongooseToObject } = require("../../until/mongoose");
const jwt = require("jsonwebtoken");
const { patch } = require("../../routes/siteRoutes");
const path = require("path");
class siteController {
  index(req, res, next) {
    shownModels
      .find({})
      .then((shows) => {
        res.render("home", { shows: convertMongooseToObject(shows) });
      })
      .catch((err) => next(err));
  }
  search(req, res) {
    res.render("search");
  }
  shownlogin(req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
  }
  login(req, res) {
    user
      .findOne({
        userName: req.body.userName,
        password: req.body.password,
      })
      .then((data) => {
        if (data) {
          let token = jwt.sign({ id: data._id }, "3004");
          res.json({
            message: "success",
            token,
          });
        } else res.json("mat khau sai");
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }
  checkLogin(req, res, next) {
    try {
      let token = req.body.token;
      let ketqua = jwt.verify(token, "3004");
      console.log("ketqua :", ketqua);
      if (ketqua) {
        console.log(ketqua.id);
        next();
      }
    } catch (error) {
      console.log(error);
      res.json("ddawng nhaapj  dii thawng lz");
    }
  }
  admin(req, res, next) {
    user
      .find({})
      .then((data) => {
        console.log("datane", data);
      })
      .catch(next);
  }
}
module.exports = new siteController();
