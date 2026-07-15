const express = require("express");
const app = express();
// Authentication Middleware
app.use((req, res, next) => {
    const isLoggedIn = true;
    if (isLoggedIn) {
        next();
    } else {
        res.send("Access Denied");
    }
});
app.get("/profile", (req, res) => {
    res.send("Welcome to Profile");
});
app.listen(3000);