//console.log('Hello from NodeJs');
// const aa =require('./Person');

// const obj =new aa('John',24);
// obj.greeting();

const http=require('http');
const path=require('path');
const fs=require('fs');

const server =http.createServer((req,res)=>{
    console.log(req.url);
    

});

const Port = 5000;
server.listen(Port,()=>{
    console.log(`Server running on ${Port}`)
});
