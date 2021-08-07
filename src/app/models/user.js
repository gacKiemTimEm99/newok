const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema(
  {
    userName: { type: String },
    password: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    role: { type: String },
    fullName: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", User);
