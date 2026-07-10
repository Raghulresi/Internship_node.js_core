const fs = require("fs");
fs.watch("test.txt", (eventType, filename) => {
    console.log("Event:", eventType);
    console.log("File:", filename);
});