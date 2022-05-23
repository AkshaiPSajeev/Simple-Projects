const http=require("https");
const axios=require("axios");
const data=JSON.stringify({
    name:"akshai",
    job:"programmer"
});

const options={
    hostname:"reqres.in",
    path:"/api/users",
    method:"POST",
    header:{
        "Content-Type":"application/json"
    }
}
/*
const req=http.request(options,(res)=>{
    let body="";
    console.log("Status "+res.statusCode)
    res.on("data",(chunk)=>{
        body+=chunk;
    })
    res.on("end",()=>{
        console.log("Body  :",JSON.parse(body));
    })
})

req.write(data);
req.end();
*/

//using axis library

axios.post("https://reqres.in/api/users",data).then(res=>{
    console.log(`status code:${res.status}`);
    console.log(`Body :${JSON.stringify(res.data)}`);
}).catch(err=>{
    console.log(err);
})
