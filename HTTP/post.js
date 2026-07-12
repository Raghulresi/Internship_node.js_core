const http = require("http");

const PORT = 3030;
http.createServer((req, res) => {
    if (req.method === "POST") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("POST method");
    } else {
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method Not Allowed");
    }
}).listen(PORT, "localhost", () => {
    console.log(`Port running at http://localhost:${PORT}/`);
});