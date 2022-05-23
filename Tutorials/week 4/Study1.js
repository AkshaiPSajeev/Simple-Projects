const http=require("http");

http.createServer(function(req,res){
res.write("hello world");
res.end();
}).listen(8080);
/*
// const p=require("path");
// console.log(p);
// console.log(__dirname);
// console.log(p.basename(__dirname));
console.log(new Date().getTime());
console.log(new Date());
console.log(new Date().getMilliseconds());
console.log(new Date().getDay());
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getUTCDate());

const arr=[1,2,3,4,5];
function isOdd(x){
    return x;
}
console.log(arr.filter(isOdd));

console.log(arr.reduce((small,value)=>{
    small=value<small?value:small;
    return small;
},99));
function findSum(sum,value){
    sum=sum+value;
    return sum;
    
}
console.log(arr.reduce(findSum,0));*/
