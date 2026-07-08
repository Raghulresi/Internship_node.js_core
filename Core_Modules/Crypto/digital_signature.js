//A digital signature verifies the authenticity of a message.

const crypto = require("crypto");
const sign = crypto.createSign("sha256").update("Hello");
console.log(sign);