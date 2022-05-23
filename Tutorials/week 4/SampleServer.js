const http=require("http");
const fs=require("fs");
const url=require("url");

http.createServer((req,res)=>{
    
    let parsedurl=url.parse(req.url,true);//true to get data in object form when using parsedurl.query
    let path=parsedurl.pathname;

    if (req.url==="/"){//here we can also give req.url/ path
        fs.readFile("sample.html",(err,data)=>{
            res.writeHead(200,{"content-type":"text/html"});
            res.write(data);
            res.end();
        })
    }else if(req.url=="/login"){
        res.write("hii welcome");
        res.end();
    }else if(path=="/signup"){
        fs.readFile("signup.html",(err,data)=>{
            res.writeHead(200,{"content-type":"text/html"});
            res.write(data);
            res.end();
        })
    }else if(path=="/signupaction"){
            console.log(parsedurl.query);
            res.writeHead(200,{"content-type":"text/html"});
            res.write("<h1>hii"+parsedurl.query.name+"</h2>");
            
            res.end();
        
    }
    
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write("error");
        res.end();
    }

 
  
}).listen(8082,()=>{
    console.log("server started");
});