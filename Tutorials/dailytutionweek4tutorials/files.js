const fs=require("fs");

/*fs.readFile("test.txt","utf-8",(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
});*/

//synchronous way. will stop execution of code of there is an error
const data=fs.readFileSync("test.txt",{encoding :"utf-8",flag:"r" });
console.log(data);

//checking status of file
/*
fs.stat("test.txt",(err,stats)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(stats.isFile());
})
*/
//writing to file 
const content=[{
    type:"This is Akshai"
}]
const filecontent="this is a test";
fs.writeFileSync("test.json",JSON.stringify(content));
fs.writeFile("test.txt",filecontent,{flag:"a+"},err=>{
    if(err){
        console.log(err);
        return;
    }
});