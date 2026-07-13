const http = require("http")
const PORT = 3030;
http.createServer((req,res)=>{
    req.statusCode = 200;
    res.end("success");
}).listen(PORT,"localhost",()=>{
    console.log(`server running at http://localhost:${PORT}`);
})