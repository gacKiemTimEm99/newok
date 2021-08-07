const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShownTime = new Schema(
  {
    shownId: { type: String },
    shownPlaceId: { type: String },
    timeStart: { type: Date },
    space: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("showntime", ShownTime);
