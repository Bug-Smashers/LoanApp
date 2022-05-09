const User = require("./models/user");
const userdetail=User.userdetail;
module.exports={
    fetchData:function(req,res){
        userdetail.fetchData(function(data){
            res.send(data);
        })
    }
}