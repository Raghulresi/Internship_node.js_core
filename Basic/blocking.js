const fs = require("fs");
console.log("Blocking state start");
const data = fs.readFileSync("text.txt","utf8"); //blocks
console.log("Blocking state ended");