const crypto = require("crypto");
//createHash() method is used to create a hash value from data.
const hash = crypto.createHash("SHA-256").update("Hello").digest("hex"); 
// SHA-256 is a secure hashing algorithm that produces a 256-bit hash value. 
console.log(hash);