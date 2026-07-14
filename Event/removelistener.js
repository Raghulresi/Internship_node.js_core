const EventEmitter = require("events");
const event = new EventEmitter();
function greet()
{
    console.log("welcome");
}
event.on("hello",greet);
event.removeListener("hello",greet); // or event.off("hello",greet); will be same 
event.emit("hello");
