const mongoose = require("mongoose");

const User =mongoose.Schema(
  {

    username: { type: String, required: true },

    username: { type: String, required: true
    },

    password: { type: String, required: true },
  }
  
);

const model = mongoose.model("userData", User);

module.exports=
{schemadetail:model,
  userdetail:{
    fetchData:function(callback){
      var userData=model.find({});
      userData.exec(function(err,data){
        if(err) throw err;
        return callback(data);
      })
    }
  }
  }

