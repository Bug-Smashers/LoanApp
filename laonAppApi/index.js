const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/loanapp");

app.post("/register", async (req, res, next) => {
  console.log(req.body);
  try {
    const user = User.create({
      username: req.body.Email,
      password: req.body.password,
    });
    const created = await user.save();
    console.log(created);
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error" });
  }
});

app.post("/login", async (req, res, next) => {
  console.log(req.body);
  const user = await User.findOne({
    username: req.body.Email,
    password: req.body.Password,
  });
  console.log(user);
  if (user) {
    return res.json({ status: "ok" });
  } else {
    return res.json({ status: "error" });
  }
});

app.listen(3001, () => {
  console.log("at port 3001");
});
