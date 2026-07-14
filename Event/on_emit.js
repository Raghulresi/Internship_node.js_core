const EventEmmiter = require("events");
const emmiter = new EventEmmiter();
emmiter.on("greet",()=>{
    console.log("welcome");
})

emmiter.emit("greet");

