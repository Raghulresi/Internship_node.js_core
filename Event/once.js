const EventEmmiter = require("events");
const emmiter = new EventEmmiter();
emmiter.once("login",()=>{
    console.log("welcome");
})

emmiter.emit("login");//this only will get the output bcz its by once() method
emmiter.emit("login");