const express=require("express");
const app=express();
const path=require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");
app.use(express.urlencoded({
    extended:true
}));


app.get("/",(req,res)=>{
    res.render("index");
}).listen(8080,()=>console.log("server started"));

app.post("/formsubmit",(req,res)=>{
    res.send(`username:${req.body.username},email:${req.body.email}`);
})