//Asymmetric encryption uses two keys: a public key and a private key.

const crypto = require("crypto");
const keys = crypto.generateKeyPairSync("rsa",{modulusLength:2048});
console.log(keys);