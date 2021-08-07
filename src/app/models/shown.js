const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Shown = new Schema(
  {
    shownName: { type: String },
    description: { type: String },
    director: { type: String },
    category: { type: String },
    image: { type: String },
    trailer: { type: String },
    dateStart: { type: Date },
    price: { type: Number },
    shownPlaceId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("shown", Shown);
