const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");
const user1=User.schemadetail;
const userdetail=require('./userdetail');
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://loanapi:loanapi@cluster0.sdy8u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{
  console.log("db is connected")
})

app.get("/getusers",userdetail.fetchData)

app.post("/register", async (req, res, next) => {
  console.log(user1)
  const {username}=req.body;
  const {password}=req.body;
  // username: req.body.Email,
  // console.log(username)
  //     password: req.body.password,

 
  try {

    const user =new  user1({username,password});
    await user.save();
   return  res.json(await user1.find());
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
