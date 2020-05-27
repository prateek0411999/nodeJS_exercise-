const url = require('url');


const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
//we can also the toString method for the same

console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);
//this will return us with the port number 

// Hostname 
console.log(myUrl.hostname);
//doesn't displays the port no


// Pathname
console.log(myUrl.pathname);
//gives the index file 

// Serialized query
console.log(myUrl.search);
//return us everything after the question mark

// Params object
console.log(myUrl.searchParams);
//return the object of parameter specified in the url


// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));