//global
global.a = "hello from a";
console.log(a);

//console
console.log("Normal console");
console.error("Error console");

//process
console.log("Process ID:", process.pid);
console.log("Node.js Version:", process.version);

//buffer
const buffer = Buffer.from("Hello");
console.log(buffer);

//file opration
console.log(__dirname);
console.log(__filename);

//url decoding
const myURL = new URL('https://www.example.com/?name=Lily');
console.log(myURL.searchParams.get("name"));
myURL.searchParams.append("age","30");
console.log(myURL);

//textencode && textdecode
const encoder =  new TextEncoder();
const encoded = encoder.encode("hello");
console.log(encoded);
/*
const decoder = new TextDecoder();
const deocoded =  decoder.decode([ 104, 101, 108, 108, 111 ]);
console.log(deocoded);
*/
//timeout opertion
setTimeout(()=>{
    console.log("setTimeout");
},2000);
setInterval(()=>{
    console.log("setInterval");
},3000);
