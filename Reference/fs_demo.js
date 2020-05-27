const fs =require('fs');
const path=require('path');

// //create folder
// //current directory m test naam ka folder bna rhe

// //bydefault they are asynchornous i.e. that takes the callback function

//  fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
//      if(err) throw err;
//      console.log('folder created');


//  });

// //create and wirte to file

// //method- open to create file
// //we do have writeCreate that writes into newly created file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Content you want to write!',(err)=>{
//     if(err) throw err;
//     console.log('file written');


// });
// //if we want to append the file with some other conten

// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'i love node.js',(err)=>{
//     if(err) throw err;
//     console.log('file written');


// });

//readfile
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
//     if(err) throw err;

//     console.log(data);


// });

//rename file
fs.rename(
    path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/text','helloworld.txt'),
    (err)=>{
        if(err) throw err;
        console.log('file renamed');

    });