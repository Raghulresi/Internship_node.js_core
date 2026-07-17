const jwt = require("jsonwebtoken");
const accesstoken = jwt.sign(
    {
        username : "Raghul"
    },
    "accessSecrete",
    {
        expiresIn : "2s"
    }
)
console.log(accesstoken);
console.log(jwt.decode(accesstoken));
setTimeout(()=>{
    try{
        const status = jwt.verify(accesstoken,"accessSecrete");
        console.log(status);
    }
    catch(err)
    {
        console.log(err.message);
    }
},2000)