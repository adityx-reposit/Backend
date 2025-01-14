const express = require("express");
const app = express();
const morgan = require('morgan')
const userModel=require("D:/backend/models/user.js")
const dbConnection = require("D:/backend/config/db.js")
app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.send("welcome to the about page");
});
app.get("/profile", (req, res) => {
  res.send("welcome to the profile page");
});
app.post("/get-form-data",(req,res)=>{
    console.log(JSON.stringify(req.body))
    res.send("data recieved")
})
app.get("/register",(req,res)=>{
  res.render('register')
})
app.get("/user-info",(req,res)=>{
   userModel.findOne({
    username:"adityx.jpg",
   }).then((users)=>{
    res.send(users)
   })  
})
app.get("/update-user",async(req,res)=>{
    await userModel.findOneAndUpdate({
      username:"adityx.jpg"
    },{
      password:909090
    })
    res.send("user updated thankyou")
})
app.post("/register" , async(req,res)=>{
  const { username,email,password}=req.body
  const newUser=await userModel.create({
    username:username,
    email:email,
    password:password
   })
  res.send(newUser)
  
})
app.listen(3000);
