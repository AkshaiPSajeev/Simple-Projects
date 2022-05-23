const http=require("http");
const routes={
    "/":function index(req,res){
        res.write("this is index page");
        res.end();
    },
    "/about":function aboutpage(req,res){
        res.write("this is about page");
        res.end();
    }
}

http.createServer((req,res)=>{
    if(req.url in routes){
        routes[req.url](req,res);
    }
}).listen(8080,()=>console.log("server started"));