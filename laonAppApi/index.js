const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");
const user1=User.schemadetail;
const userdetail=require('./userdetail');
const userPersonaldetails=require("./models/userPersonaldetails")
const firstdetail=userPersonaldetails.firstdetail;

const aadhardetail=userPersonaldetails.seconddetail;
const pandetail=userPersonaldetails.thirddetail;
const thirddetail=userPersonaldetails.forthdetail;
const upload =require("./middleware/upload");


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://loanapi:loanapi@cluster0.sdy8u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{

  console.log("db is connected");
})

app.post("/register", async (req, res, next) => {
  
  try {
    const user = new User({
      username: req.body.Email,
      password: req.body.password,
    });
    const created = await user.save();
    console.log(created);
    res.json({ status: "ok" });

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
    console.log("djkfsaf",req.body);
    res.json({ status: "error" });
  }
});


app.post('/personal', async(req,res)=>{
  const {name}=req.body;
  const {email}=req.body;
  const {aadharnumber}=req.body;
  const {pannumber}=req.body;

  try {

    const user =new  firstdetail({name,email,aadharnumber,pannumber});
    await user.save();
   return  res.json(await user1.find());
  } catch (err) {
    res.json({ status: "error" });
  }
  
  
})

//for aadhar
app.post('/aadhar',upload.single("documentaadhar"),(req,res)=>{

  let aadhar=new aadhardetail();

  if(req.file){
    aadhar.documentaadhar =req.file.path;
  }
  aadhar.save()
  .then(response=>{
      res.json({
          message:"file is uploaded successfully"
      })
  }).catch(error=>{
      res.json({
          message:"an errror occured"
      })
  })
  
  
})

//for pan
app.post('/pan',upload.single("documentpan"),(req,res)=>{
  let pan=new pandetail();

  if(req.file){
      pan.documentpan =req.file.path;
  }
  pan.save()
  .then(response=>{
      res.json({
          message:"file is uploaded successfully"
      })
  }).catch(error=>{
      res.json({
          message:"an errror occured"
      })
  })
  
  
})



app.listen(3001, () => {
  console.log("at port 3001");
});
