const http = require("http");
const PORT = 3030;
http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello header.js");
}).listen(PORT, "localhost", () => {
    console.log(`Port running at http://localhost:${PORT}/`);
});
