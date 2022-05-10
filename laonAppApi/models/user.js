const mongoose = require("mongoose");

const User =mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  }
  
);

const model = mongoose.model("userData", User);

module.exports = model;
