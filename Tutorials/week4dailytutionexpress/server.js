const express=require("express");
const app=express();
app.set("view engine","pug");
app.get("/",(req,res)=>{
    res.render("index",{title:"Express Application",h1:"Express Application",para:"this is a test paragraph"});
})
app.listen(8080,()=>console.log("Server Started"));