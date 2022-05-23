const express=require("express");
const app=express();
const path=require("path");
const fs=require("fs");

let filepath=path.join(__dirname,"public","studentlist.json");
let data=fs.readFileSync(filepath,'utf-8');
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index",{data:data});
}).listen(8080,()=>{
    console.log("server started");
})