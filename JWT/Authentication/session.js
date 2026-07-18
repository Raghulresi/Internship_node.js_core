const express = require("express");
const session = require("express-session");
const app = express();
app.use(express.json());
app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true

}));
app.post("/login", (req, res) => {
    req.session.username = "Raghul";
    res.send("Login Successful");
});
app.get("/profile", (req, res) => {
    if (req.session.username) {
        res.send("Welcome " + req.session.username);
    } else {
        res.send("Please Login");
    }
});
app.listen(3000);