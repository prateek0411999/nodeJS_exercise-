const path=require('path');
//Methods

//basr file name

console.log(path.basename(__filename));


//directory name- current directory path

console.log(path.dirname(__filename));

//file extenseion
console.log(path.extname(__filename));

//create path object - parse method
let a =path.parse(__filename);
console.log(a.base);
//console.log(path.root, . name bhot hh)
//format- returns a path string from an object 
console.log(path.format(a));

//concatenate paths - use joins for this
//lets say we want to create this path ../test/hello.html

console.log(path.join(__dirname,'test','hello.html'));
