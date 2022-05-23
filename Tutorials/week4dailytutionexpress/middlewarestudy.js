const express=require("express");
const app=express();
const path=require("path");

const logger=(req,res,next)=>{
    console.log("inside logger");
   
   next();//will call next middleware
};
const test=(req,res,next)=>{
    console.log("inside tester");
   next();
};
app.use(logger);
app.use(test);
app.get("/",(req,res)=>{
    const filepath=path.join(__dirname,"index.html");
    res.sendFile(filepath);

});
app.listen(8080,()=>console.log("server started"));