const url = require("url");
console.log("URL Module Imported");
//basic url property
let adr = "http://localhost:8080/default.htm?year=2017&month=february";
let q = url.parse(adr, true); //splits a URL into different parts.
console.log(q.host);
console.log(q.pathname);
console.log(q.query.month);

//url object property
let p = url.parse(
"http://localhost:8080/test.html?name=Raghul",
true
);
console.log(p.hostname);
console.log(p.pathname);
console.log(p.search);
console.log(p.query.name);

//WHATWG URL API creation
const myURL = new URL(           //WHATWG URL API is new way of creating URL with its property
"https://example.com:8080/test?q=node"
);
console.log(myURL.hostname);
console.log(myURL.pathname);

//searchParams.get() method
const myURL1 = new URL(
"https://example.com/?name=Raghul&age=20"
);
console.log(myURL1.searchParams.get("name"));  //searchParams is help to add, append, del, in url property

//searchParams.append() method
const myURL2 = new URL(
"https://example.com"
);
myURL2.searchParams.append("name","Raghul");  //appending a name to url
console.log(myURL2.href);

//searchParams.delete() method
const myURL3 = new URL(
"https://example.com/?name=Raghul&age=20"
);
myURL3.searchParams.delete("age"); //deleting a age from url
console.log(myURL3.href);

//url creation to run in a chrome
const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
 let q = url.parse(req.url,true);
 let filename = "." + q.pathname;
 fs.readFile(filename,(err,data)=>{
   if(err){
      res.writeHead(404);
      return res.end("404 Not Found");
   }
   res.writeHead(200,{
     "Content-Type":"text/html"
   });
   res.write(data);
   res.end();
 });
}).listen(8080);

