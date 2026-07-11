const http = require("http");
const PORT = 3000;
http.createServer((req,res)=>{
    if(req.url === "/")
    {
        res.end("Home Page");
    }
    else if(req.url  === "/about")
    {
        res.end("About Page");
    }
    else{
        res.end("Page not fount");
    }
}).listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});