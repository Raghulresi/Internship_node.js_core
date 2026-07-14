const fs = require("fs");
const st = fs.createWriteStream("test.txt");
st.write("hello");
st.end();