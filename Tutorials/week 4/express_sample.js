const express=require("express");
const res = require("express/lib/response");
const path=require("path");
const app=express();
const data={id:1,name:"akshai"};
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"signup.html"));
});
app.post("/",(req,res)=>{
    res.send("account created");
});
app.get("/about",(req,res)=>{
    res.json(data);
});
app.listen(8080,()=>{
    console.log("server started");
});