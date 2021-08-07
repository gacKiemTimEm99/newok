const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ticket = new Schema(
  {
    shownName: { type: String },
    shownPlace: { type: String },
    timeStart: { type: Date },
    levelUser: { type: Number },
    user: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ticket", Ticket);
