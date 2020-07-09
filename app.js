const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.set('view engine', 'ejs');
app.listen(3000,function(req,res){

  console.log("server is up and running on port 3000");
})
app.get("/",function(req,res){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var day=today.toLocaleDateString("hi-IN", options)
    console.log(day)
    res.render("lists",{kindofday:day});
  }
)
app.post("/",function(req,res){
  console.log("request recieved")
})
