const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
var items=[]
app.listen(3000,function(req,res){

  console.log("server is up and running on port 3000");
})
app.get("/",function(req,res){
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var today  = new Date();
    var day=today.toLocaleDateString("hi-IN", options)
    console.log(day)
    res.render("lists",{kindofday:day,newitem:items});
  }
)
app.post("/",function(req,res){
  var item=req.body.itemName
  items.push(item)
  res.redirect("/")
})
