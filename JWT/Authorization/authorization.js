const express = require("express");
const app = express();
const user = {
    username: "Raghul",
    role: "admin"
};
app.get("/admin", (req, res) => {
    // Authorization
    if (user.role === "admin") {
        res.send("Welcome Admin");
    } else {
        res.send("Access Denied");
    }
});
app.listen(3000);