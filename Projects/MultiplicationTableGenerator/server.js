const express=require("express");
const app=express();
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index",{startingnumber:20,endingnumber:30});
}).listen(8080,()=>{
    console.log("Server started");
});