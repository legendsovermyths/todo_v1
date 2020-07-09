const express=require("express")
const bodyParser=require("body-parser")
const app=express()
app.set("view engine","ejs");
app.listen(3000,function(req,res){
  console.log("server is up and running on port 3000")
})
app.get("/",function(req,res){
  res.send("Server is running")
})
