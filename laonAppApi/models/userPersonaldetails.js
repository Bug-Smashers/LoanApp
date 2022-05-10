const mongoose=require("mongoose");

const userPersonaldetails=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
    ,
    aadharnumber:{
        type:Number,
        require:true

    },
    pannumber:{
        type:String,
        require:true

    },


})
const aadhardetails=mongoose.Schema({
    documentaadhar:{
        type:String,
        required:true
    },
})
const pandetails=mongoose.Schema({
    documentpan:{
        type:String,
        required:true
    }
})

const bankdetails=mongoose.Schema({
    bankname:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    accountnumber:{
        type:String,
        required:true
    },
    ifsccode:{
        type:String,
        required:true
    }
})


module.exports={
   firstdetail: mongoose.model("userPersonaldetails",userPersonaldetails),
   seconddetail: mongoose.model("aadhardetails",aadhardetails),
   thirddetail: mongoose.model("pandetails",pandetails),
   forthdetail:mongoose.model("bankdetails",bankdetails)
}