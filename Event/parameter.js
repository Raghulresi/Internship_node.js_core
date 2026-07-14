const EventEmmiter = require("events");
const emmiter = new EventEmmiter();
emmiter.on("greet",(name,age) =>{
    console.log(name);
    console.log(age);
})
emmiter.emit("greet","raghul",21);