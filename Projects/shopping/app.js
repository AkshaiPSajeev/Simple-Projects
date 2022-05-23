const express=require("express");
const app=express();
const fs=require("fs");
const path=require("path");

let filepath=path.join(__dirname,"public","data.json");
let data=fs.readFileSync(filepath,'utf-8');

app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index",{data:data});
}).listen(8081,()=>console.log("server started"));