const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
var items=["eat meat","buy milk","watch game of thrones"]
var workItems=[]
app.listen(3000,function(req,res){
var day;
  console.log("server is up and running on port 3000");
})
app.get("/",function(req,res){

    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var today  = new Date();
    day=today.toLocaleDateString("hi-IN", options)
    res.render("lists",{listTitle:day,newitem:items});
  }
)
app.post("/",function(req,res){
  console.log(req.body)

  if(req.body.button==="Work")
  {
    var item=req.body.itemName;
    workItems.push(item);
    res.redirect("/work");
  }
  else
  {
    var item=req.body.itemName;
    items.push(item);
    res.redirect("/");
  }

})

app.get("/work",function(req,res){
  res.render("lists",{listTitle:"Work List",newitem:workItems});
})
