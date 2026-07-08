const crypto = require("crypto");
const salt = "abc123";
//scryptSync() method is used to securely hash passwords.
const hash = crypto.scryptSync("mypassword",salt,16).toString("hex");
console.log(hash);