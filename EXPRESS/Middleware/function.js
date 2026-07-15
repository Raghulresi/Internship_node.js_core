const express = require("express");
const app = express();
function greet()
{
    console.log("hello");
}
app.use((req,res,next)=>
    {
   console.log("Router Middleware");
   greet();
   next();
});
app.get("/",(req,res)=>
    {
   res.send("Users");
});
app.listen(8080);