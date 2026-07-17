const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let data = {};
async function register(email,password)
{
    const hash = bcrypt.hash(password,10);
    data.email = email;
    data.password = password;
    console.log("registered Successfully");
    console.log(data);
}

async function login(email,password)
{
    if(email != data.email)
    {
        console.log("email not fount");
        return;
    }
    
    const decode_pass = bcrypt.compare(data.password,password);
    if(!decode_pass)
    {
        console.log("Password wrong");
        return;
    }

    const token = jwt.sign(
        {   
            email:data.email
        },
        "secreteKey",
        {
            expiresIn:"2h"
        }
    )
    console.log("Login Successful");
    console.log("JWT Token:");
    console.log(token);
}

async function main()
{
    await register("raghulprakash1@gmail.com", "raghul123");
    await login("raghulprakash1@gmail.com", "raghul123");
}
main();