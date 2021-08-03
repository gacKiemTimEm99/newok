const data2 = require("../models/data2");
const show = require("../models/showModels");
const { mongooseToObject } = require("../../until/mongoose");
const { convertMongooseToObject } = require("../../until/mongoose");
class detailController {
  showsDetail(req, res, next) {
    show
      .findOne({ slug: req.params.sluggg })
      .then((show) => {
        show = mongooseToObject(show);
        show.count = 1;
        const data = new data2(show);
        data.save();
        res.redirect("/detail/detailcart");
      })
      .catch(next);
  }
  detail(req, res) {
    data2.find({}).then((data) => {
      res.render("viewsDetail/datadetail", {
        data: convertMongooseToObject(data),
      });
    });
  }
  store(req, res) {
    const formData = req.body;
    const s = new show(formData);
    // res.json(s);

    s.save()
      .then(() => res.redirect("/"))
      .catch(() => {
        res.send("error");
      });
  }
  updateCount(req, res) {
    let amount = req.body.count - 2 + 1;
    if (req.body.flag === "plus") {
      amount = req.body.count - 1 + 2;
    }
    amount = amount > 0 ? amount : 0;
    data2
      .updateOne({ _id: req.params.id }, { count: amount })
      .then(() => {
        res.redirect("back");
      })
      .catch(() => {});
  }

  createshown(req, res, next) {
    res.render("viewsDetail/createShown");
  }
  countmoney(req, res) {
    data2.find({}).then((data) => {
      res.render("viewsDetail/total", {
        data: convertMongooseToObject(data),
      });
    });
  }
}
module.exports = new detailController();
