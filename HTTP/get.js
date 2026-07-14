const http = require("http");
const port = 3030;
http.createServer("",(req,res)=>
{
    if(req.method == "GET")
    {
        res.end("get method");
    }
}).listen(port,"localhost",()=>
{
    console.log(`port is running on http://localhost:${port}/`);
});