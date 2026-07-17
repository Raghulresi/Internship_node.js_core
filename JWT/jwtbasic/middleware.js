const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send("Unauthorized");
    }
    try {
        jwt.verify(token, "yourSecretKey");
        console.log("Token is valid");
        next();
    } catch (err) {
        console.log(err.message);
        return res.status(401).send("Invalid or Expired Token");
    }
}