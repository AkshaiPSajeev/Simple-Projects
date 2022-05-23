const http =require("http");
const { json } = require("stream/consumers");
http.get("http://api.open-notify.org/astros.json",res=>{
let data="";
res.on("data",chunk=>{
    data+=chunk;
});

res.on("end",()=>{
    console.log(JSON.parse(data));
})

})