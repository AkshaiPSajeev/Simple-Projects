const express=require("express");
const app=express();
const session=require("express-session");
const { append } = require("express/lib/response");

app.use(session({
    secret:"your secret key",
    resave:true,
    saveUninitialized:true
}));

app.get("/",(req,res)=>{
    req.session.name="akshai";
    res.send(req.session);
}).listen(8080,()=>{console.log("server started");});

app.get("/checksession",(req,res)=>{
   
    res.send(req.session);
});

app.get("/destroysession",(req,res)=>{
   
    req.session.destroy((error)=>{console.log("session destroyed");});
});
