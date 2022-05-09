const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "user-data" }
);

const model = mongoose.model("userData", User);

module.exports = model;