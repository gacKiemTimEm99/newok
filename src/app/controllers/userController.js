const user = require("../models/user");
const jwt = require("jsonwebtoken");
const passToken = "phat3004";
class UserController {
  login = async (req, res, next) => {
    try {
      let userLogin = {
        userName: req.body.userName,
        password: req.body.password,
      };
      let data = await user.findOne(userLogin);
      console.log("data", data);
      if (data) {
        let accessToken = jwt.sign({ id: data._id }, passToken);
        let user = {
          accessToken: accessToken,
          userName: data.userName,
          fullName: data.fullName,
          phoneNumber: data.phoneNumber,
          email: data.email,
        };
        res.json(user);
      } else res.status(404).json("tài khoản hoặc mật khẩu không đúng !!");
    } catch (error) {
      res.status(500).json("LỖI SER CON ME NO VER");
    }
  };

  getListUser = async (req, res, next) => {
    try {
      let data = await user.find({});
      res.json(data);
    } catch (error) {
      res.status(500).json("SERVER ERROR!!");
    }
  };

  register = async (req, res, next) => {
    try {
      let flag = await user.findOne({
        userName: req.body.userName,
      });
      let flag1 = await user.findOne({
        email: req.body.email,
      });
      if (flag1 || flag) {
        return res.json.status(400).json("userName hoặc email đã được đăng ký");
      }

      let newUser = { ...req.body, role: "user" };

      const postUser = new user(newUser);
      await postUser.save();
      res.json("đăng ký thành công");
    } catch (error) {
      res.status(500).json("LỖI SER CON ME NÓ VER");
    }
  };

  postUser = async (req, res, next) => {
    try {
      let flag = await user.findOne({
        userName: req.body.userName,
      });
      let flag1 = await user.findOne({
        email: req.body.email,
      });
      if (flag1 || flag) {
        return res.status(404).json("userName hoặc email đã được đăng ký");
      }
      const postUser = new user(req.body);

      await postUser.save();
      res.json("post successfully!");
    } catch (error) {
      res.status(500).json("LỖI SER CON ME NO VER");
    }
  };

  updateUser = async (req, res, next) => {
    try {
      let id = req.params.id;
      await postUser.findByIdAndUpdate(id, req.body);
      res.json("update successfully ");
    } catch (error) {
      res.json("update failure!!", error.message);
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      let id = req.params.id;
      await postUser.findByIdAndDelete(id);
      res.json("delete successfully!!");
    } catch (error) {
      res.json("delete failure!!");
    }
  };
}

module.exports = new UserController();
