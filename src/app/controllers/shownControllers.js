const { response } = require("express");
const shown = require("../models/shown");

class shownController {
  config(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-Type, Accept"
    );
    console.log("configuration is active");
    next();
  }

  getListShown = async (req, res, next) => {
    try {
      let data = await shown.find({});
      res.json(data);
    } catch (error) {
      res.status(500).json("LỖI CON ME NO SERVER");
    }
  };

  getShownDetail = async (req, res, next) => {
    try {
      let shownDetail = await shown.findById(req.params.id);
      res.json(shownDetail);
    } catch (error) {
      res.json("can't found shown detail !!");
    }
  };

  postShown = async (req, res, next) => {
    try {
      const postShown = new shown(req.body);
      console.log("req.boyd", postShown);
      await postShown.save();
      res.json("update successfully");
    } catch (error) {
      res.status(500).json("update failure!!");
    }
  };

  updateShown = async (req, res, next) => {
    try {
      let id = req.params.id;
      await shown.findByIdAndUpdate(id, req.body);
      res.json("update successfully ");
    } catch (error) {
      res.json("update failure!!");
    }
  };

  deleteShown = async (req, res, next) => {
    try {
      let id = req.params.id;
      await shown.findByIdAndDelete(id);
      res.json("delete successfully!!");
    } catch (error) {
      res.json("delete failure!!");
    }
  };
}

module.exports = new shownController();

// index(req, res, next) {
//   shownModels
//     .find({})
//     .then((shows) => {
//       res.render("home", { shows: convertMongooseToObject(shows) });
//     })
//     .catch((err) => next(err));
// }
// search(req, res) {
//   res.render("search");
// }
// shownlogin(req, res) {
//   res.sendFile(path.join(__dirname, "login.html"));
// }
// login(req, res) {
//   user
//     .findOne({
//       userName: req.body.userName,
//       password: req.body.password,
//     })
//     .then((data) => {
//       if (data) {
//         let token = jwt.sign({ id: data._id }, "3004");
//         res.json({
//           message: "success",
//           token,
//         });
//       } else res.json("mat khau sai");
//     })
//     .catch((err) => {
//       res.status(500).json("loi server");
//     });
// }
// checkLogin(req, res, next) {
//   try {
//     let token = req.body.token;
//     let ketqua = jwt.verify(token, "3004");
//     console.log("ketqua :", ketqua);
//     if (ketqua) {
//       console.log(ketqua.id);
//       next();
//     }
//   } catch (error) {
//     console.log(error);
//     res.json("ddawng nhaapj  dii thawng lz");
//   }
// }
// admin(req, res, next) {
//   user
//     .find({})
//     .then((data) => {
//       res.json(data);
//     })
//     .catch(next);
// }
