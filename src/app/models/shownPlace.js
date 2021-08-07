const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShownPlace = new Schema(
  {
    placeName: { type: String },
    description: { type: String },
    space: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("showPlace", ShownPlace);
