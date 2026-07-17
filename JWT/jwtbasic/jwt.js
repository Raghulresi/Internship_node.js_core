const jwt = require("jsonwebtoken");
const token = jwt.sign(
    {id:1,name:"Raghul"},
    "secretekey",
    {expiresIn:"1h"}
)
console.log(token);