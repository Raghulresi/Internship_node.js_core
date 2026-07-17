const jwt = require("jsonwebtoken");
const RefreshToken = jwt.sign(
    {
        username : "Raghul P"
    },
    "refreshSecrete",
    {
        expiresIn : "2s"
    }
)
console.log(RefreshToken);
console.log(jwt.decode(RefreshToken));
// This is for only showing the out of session experied
setTimeout(() => {
  try {
    const status = jwt.verify(RefreshToken, "refreshSecrete");
    console.log(status);
  } catch (err) {
    console.log(err.message);
  }
}, 3000);